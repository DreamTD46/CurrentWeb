'use client'

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, query, orderByKey, limitToLast } from 'firebase/database';
import { useState, useEffect } from 'react';
import { LOCATION_CONFIGS } from '../config/firebase-configs';

// ===================================================================
// Firebase Configuration และ Constants
// ===================================================================

// ใช้ Firebase configuration จาก config file
const firebaseConfig = LOCATION_CONFIGS['cafe-amazon-st'].firebaseConfig || LOCATION_CONFIGS['building-c4']?.firebaseConfig;

// Initialize Firebase - เพิ่มการตรวจสอบ config
if (!firebaseConfig) {
  console.error('Firebase configuration not found in LOCATION_CONFIGS');
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Constants สำหรับ Firebase paths
const FIREBASE_USER_ID = 'gdRueJtWeNaMleXbEf4rWfuD6Kr1';
const PIERA_PATH = 'Piera/';
const RAW_PATH = 'RAWdata/';
const TESTING_PATH = 'Testing/';

// ===================================================================
// Helper Functions สำหรับการจัดการเวลาและการแสดงผล
// ===================================================================

const getCurrentDatePath = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const formatDisplayDate = (date) => {
  const targetDate = date || new Date();
  const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
  const day = targetDate.getDate().toString().padStart(2, '0');
  const year = targetDate.getFullYear();
  return `${month}/${day}/${year}`;
};

// ===================================================================
// Utility Functions สำหรับการจัดการข้อมูลอย่างปลอดภัย
// ===================================================================

// ฟังก์ชันสำหรับแปลงค่าให้เป็นตัวเลขอย่างปลอดภัย
const safeParse = (value, defaultValue = 0) => {
  if (value === null || value === undefined || value === '') {
    return defaultValue;
  }

  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
};

// ฟังก์ชันสำหรับตรวจสอบว่าข้อมูลมีค่าที่มีประโยชน์หรือไม่
const hasValidData = (data) => {
  if (!data || typeof data !== 'object') {
    return false;
  }

  // ตรวจสอบว่ามีค่า PM อย่างน้อยหนึ่งค่าที่มีค่ามากกว่า 0
  const pc01 = safeParse(data.PC01 || data.pc01);
  const pm01 = safeParse(data.PM01 || data.pm01);
  const pm25 = safeParse(data.PM25 || data.pm25 || data.PM);
  const pm10 = safeParse(data.PM10 || data.pm10 || data.PM100);

  return pc01 > 0 || pm01 > 0 || pm25 > 0 || pm10 > 0;
};

// ===================================================================
// Export Functions ที่ต้องใช้ใน component หลัก
// ===================================================================

export const getAirQualityColor = (status) => {
  const colors = {
    'Good': '#2DC653',
    'Warning': '#FECF3E',
    'Affects health': '#FF9500',
    'Danger': '#D02224',
    'Hazardous': '#973AA8',
  };
  return colors[status] || colors['Good'];
};

export const formatPMValue = (value) => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) return value;
  return `${numericValue.toFixed(2)} μg/m³`;
};

export const formatPCValue = (value) => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) return value;
  return `${numericValue.toFixed(0)} PNC`;
};

// PM thresholds สำหรับการประเมินคุณภาพอากาศ
export const PM_THRESHOLDS = {
  PC01: {
    Good: 258,
    Warning: 543,
    'Affects health': 3616,
    Danger: 6271,
    Hazardous: Number.MAX_VALUE
  },
  PM01: {
    Good: 0.6,
    Warning: 0.9,
    'Affects health': 1.1,
    Danger: 1.6,
    Hazardous: Number.MAX_VALUE
  },
  PM: {
    Good: 15.0,
    Warning: 37.5,
    'Affects health': 75.0,
    Danger: 150.0,
    Hazardous: Number.MAX_VALUE
  }
};

// ฟังก์ชันสำหรับคำนวณสถานะคุณภาพอากาศ - ปรับปรุงให้แข็งแกร่งขึ้น
export const determineAirQuality = (pc01, pm01, pm25, pm10) => {
  try {
    // แปลงค่าทั้งหมดให้เป็นตัวเลขอย่างปลอดภัย
    const pc01Val = safeParse(pc01);
    const pm01Val = safeParse(pm01);
    const pm25Val = safeParse(pm25);
    const pm10Val = safeParse(pm10);

    // ใช้ threshold เดียวกันสำหรับ pm25 และ pm10 โดยใช้ OR logic
    if (
      pc01Val <= PM_THRESHOLDS.PC01.Good ||
      pm01Val <= PM_THRESHOLDS.PM01.Good ||
      pm25Val <= PM_THRESHOLDS.PM.Good ||
      pm10Val <= PM_THRESHOLDS.PM.Good
    ) {
      return "Good";
    } else if (
      pc01Val <= PM_THRESHOLDS.PC01.Warning ||
      pm01Val <= PM_THRESHOLDS.PM01.Warning ||
      pm25Val <= PM_THRESHOLDS.PM.Warning ||
      pm10Val <= PM_THRESHOLDS.PM.Warning
    ) {
      return "Warning";
    } else if (
      pc01Val <= PM_THRESHOLDS.PC01['Affects health'] ||
      pm01Val <= PM_THRESHOLDS.PM01['Affects health'] ||
      pm25Val <= PM_THRESHOLDS.PM['Affects health'] ||
      pm10Val <= PM_THRESHOLDS.PM['Affects health']
    ) {
      return "Affects health";
    } else if (
      pc01Val <= PM_THRESHOLDS.PC01.Danger ||
      pm01Val <= PM_THRESHOLDS.PM01.Danger ||
      pm25Val <= PM_THRESHOLDS.PM.Danger ||
      pm10Val <= PM_THRESHOLDS.PM.Danger
    ) {
      return "Danger";
    } else {
      return "Hazardous";
    }
  } catch (error) {
    console.error('Error in determineAirQuality:', error);
    return "Good"; // ค่า default หากเกิด error
  }
};

// ===================================================================
// ฟังก์ชันสำหรับการสร้างข้อมูลที่ปลอดภัยและครบถ้วน - ปรับปรุงใหม่
// ===================================================================

const transformToComponentFormat = (data, locationName, dataSource = 'testing') => {
  // ตรวจสอบข้อมูลเบื้องต้น
  if (!data || typeof data !== 'object') {
    console.warn('Invalid data received in transformToComponentFormat:', data);
    return createFallbackData(locationName, dataSource);
  }

  try {
    // ดึงค่าต่างๆ จากข้อมูลที่ได้รับ โดยใช้ safeParse
    const pc01 = safeParse(data.pc01 || data.PC01 || data['PC01']);
    const pm01 = safeParse(data.pm01 || data.PM01);
    const pm25 = safeParse(data.pm25 || data.PM25 || data.PM);
    const pm10 = safeParse(data.pm10 || data.PM10 || data.PM100);

    // ดึงข้อมูลสภาพแวดล้อม
    const temperature = safeParse(data.temperature || data.IndoorTemperature, 25.5);
    const humidity = safeParse(data.humidity || data.IndoorHumidity, 65);

    // คำนวณสถานะคุณภาพอากาศ
    const status = determineAirQuality(pc01, pm01, pm25, pm10);
    const recommendations = getGeneralRecommendations(status);

    // สร้างข้อมูลในรูปแบบที่ component หลักต้องการ
    const transformedData = {
      date: formatDisplayDate(new Date()),
      time: data.timestamp || getCurrentTime(),
      location: locationName || 'Unknown Location',

      // ส่วนสำคัญ - mainReading ต้องมีครบทุก property
      mainReading: {
        type: dataSource === 'testing' ? 'PC0.1' : 'PM0.1',
        value: dataSource === 'testing' ? pc01 : pm01,
        unit: dataSource === 'testing' ? 'PNC' : 'μg/m³',
        status: status // นี่คือส่วนที่สำคัญที่ต้องมีเสมอ
      },

      conditions: {
        temperature: `${temperature}°C`,
        humidity: `${humidity}%`
      },

      // สร้าง pmReadings ในรูปแบบที่ component คาดหวัง
      pmReadings: [
        {
          type: 'PC01',
          value: pc01,
          unit: 'PNC'
        },
        {
          type: 'PM0.1',
          value: pm01,
          unit: 'μg/m³'
        },
        {
          type: 'PM2.5',
          value: pm25,
          unit: 'μg/m³'
        },
        {
          type: 'PM10',
          value: pm10,
          unit: 'μg/m³'
        }
      ],

      recommendations: recommendations,

      // ข้อมูลเมตาเพื่อการ debug
      _rawData: data,
      _dataSource: dataSource,
      _isValid: hasValidData(data)
    };

    // Debug logging
    console.log('=== TRANSFORMED DATA ===');
    console.log('Location:', locationName);
    console.log('Data Source:', dataSource);
    console.log('Main Reading:', transformedData.mainReading);
    console.log('PM Readings:', transformedData.pmReadings);
    console.log('Status:', status);
    console.log('Is Valid Data:', hasValidData(data));
    console.log('========================');

    return transformedData;

  } catch (error) {
    console.error('Error in transformToComponentFormat:', error);
    return createFallbackData(locationName, dataSource);
  }
};

// ฟังก์ชันสำหรับสร้างข้อมูล fallback เมื่อไม่มีข้อมูลจริง
const createFallbackData = (locationName, dataSource = 'testing') => {
  const fallbackData = {
    date: formatDisplayDate(new Date()),
    time: getCurrentTime(),
    location: locationName || 'กำลังโหลด...',

    mainReading: {
      type: dataSource === 'testing' ? 'PC0.1' : 'PM0.1',
      value: 0,
      unit: dataSource === 'testing' ? 'PNC' : 'μg/m³',
      status: 'Good'
    },

    conditions: {
      temperature: '25.5°C',
      humidity: '65%'
    },

    pmReadings: [
      { type: 'PC01', value: 0, unit: 'PNC' },
      { type: 'PM0.1', value: 0, unit: 'μg/m³' },
      { type: 'PM2.5', value: 0, unit: 'μg/m³' },
      { type: 'PM10', value: 0, unit: 'μg/m³' }
    ],

    recommendations: [
      'กำลังโหลดข้อมูล...',
      'กำลังเชื่อมต่อกับ Firebase...',
      'โปรดรอสักครู่...'
    ],

    _rawData: null,
    _dataSource: dataSource,
    _isValid: false,
    _isFallback: true
  };

  console.log('Created fallback data for:', locationName);
  return fallbackData;
};

// ===================================================================
// Hook Functions - ปรับปรุงให้มีความเสถียรมากขึ้น
// ===================================================================

export const useMonitoringData = () => {
  return useLocationMonitoringData({
    id: 'cafe-amazon-st',
    name: 'Cafe Amazon สาขา ST',
    dataSource: 'testing',
    pieraUserId: 'gdRueJtWeNaMleXbEf4rWfuD6Kr1',
    pieraPath: '',
    rawDataPath: 'Cafe',
    testingPath: 'Cafe'
  });
};

export const useLocationMonitoringData = (locationData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ตรวจสอบข้อมูลเบื้องต้น
    if (!locationData || (!locationData.rawDataPath && !locationData.testingPath)) {
      console.error('Missing locationData or paths:', locationData);
      setError('ข้อมูลตำแหน่งไม่ครบถ้วน');
      setData(createFallbackData(locationData?.name));
      setLoading(false);
      return;
    }

    // เริ่มต้นการโหลดข้อมูล
    setLoading(true);
    setError(null);

    const datePath = getCurrentDatePath();
    const dataSource = locationData.dataSource || 'testing';

    console.log('=== FIREBASE QUERY SETUP ===');
    console.log('Location:', locationData.name);
    console.log('Data Source:', dataSource);
    console.log('Date Path:', datePath);

    if (dataSource === 'testing') {
      // ดึง PC0.1
      const testingFirebasePath = `/Testing/${locationData.testingPath}/${datePath}`;
      // ดึง PM2.5, PM10
      const rawFirebasePath = `/RAWdata/${locationData.rawDataPath}/${datePath}`;

      console.log('Testing path:', testingFirebasePath);
      console.log('RAW path:', rawFirebasePath);

      // ใช้ state object เพื่อเก็บข้อมูลจากทั้งสอง source
      let dataCollector = {
        testing: null,
        raw: null,
        testingReceived: false,
        rawReceived: false
      };

      // ฟังก์ชันสำหรับรวมข้อมูลและอัพเดท state - ปรับปรุงให้ปลอดภัยขึ้น
      const updateCombinedData = () => {
        // รอให้ได้รับข้อมูลจากอย่างน้อยหนึ่ง source
        if (!dataCollector.testingReceived && !dataCollector.rawReceived) {
          return;
        }

        try {
          const combinedData = {
            ...dataCollector.testing,
            ...dataCollector.raw
          };

          // ตรวจสอบว่ามีข้อมูลที่ใช้งานได้หรือไม่
          if (hasValidData(combinedData) || dataCollector.testingReceived) {
            const transformedData = transformToComponentFormat(
              combinedData,
              locationData.name,
              dataSource
            );
            setData(transformedData);
            setError(null);
          } else {
            // หากไม่มีข้อมูลที่ใช้งานได้ ให้สร้าง fallback data
            const fallbackData = createFallbackData(locationData.name, dataSource);
            setData(fallbackData);
            setError('ไม่พบข้อมูลที่ใช้งานได้');
          }

          setLoading(false);
        } catch (error) {
          console.error('Error in updateCombinedData:', error);
          setData(createFallbackData(locationData.name, dataSource));
          setError('เกิดข้อผิดพลาดในการประมวลผลข้อมูล');
          setLoading(false);
        }
      };

      // Query สำหรับ Testing data
      const testingQuery = query(
        ref(database, testingFirebasePath),
        orderByKey(),
        limitToLast(1)
      );

      const testingUnsubscribe = onValue(testingQuery, (snapshot) => {
        try {
          const timeData = snapshot.val();
          console.log('Testing data received:', timeData);

          dataCollector.testingReceived = true;

          if (timeData) {
            const latestTime = Object.keys(timeData)[0];
            dataCollector.testing = {
              ...timeData[latestTime],
              timestamp: latestTime
            };
          } else {
            console.log('No Testing data found');
            dataCollector.testing = {};
          }

          updateCombinedData();
        } catch (error) {
          console.error('Error processing testing data:', error);
          dataCollector.testingReceived = true;
          dataCollector.testing = {};
          updateCombinedData();
        }
      }, (err) => {
        console.error('Testing data error:', err);
        dataCollector.testingReceived = true;
        dataCollector.testing = {};
        updateCombinedData();
      });

      // Query สำหรับ RAW data
      const rawQuery = query(
        ref(database, rawFirebasePath),
        orderByKey(),
        limitToLast(1)
      );

      const rawUnsubscribe = onValue(rawQuery, (snapshot) => {
        try {
          const timeData = snapshot.val();
          console.log('RAW data received:', timeData);

          dataCollector.rawReceived = true;

          if (timeData) {
            const allKeys = Object.keys(timeData);
            const sortedKeys = allKeys.sort();
            const latestTime = sortedKeys[sortedKeys.length - 1];
            dataCollector.raw = {
              ...timeData[latestTime],
              timestamp: latestTime
            };
          } else {
            console.log('No RAW data found');
            dataCollector.raw = {};
          }

          updateCombinedData();
        } catch (error) {
          console.error('Error processing raw data:', error);
          dataCollector.rawReceived = true;
          dataCollector.raw = {};
          updateCombinedData();
        }
      }, (err) => {
        console.error('RAW data error:', err);
        dataCollector.rawReceived = true;
        dataCollector.raw = {};
        updateCombinedData();
      });

      return () => {
        testingUnsubscribe();
        rawUnsubscribe();
      };

    } else if (dataSource === 'piera') {
      // การจัดการ Piera data source
      const pieraUserId = locationData.pieraUserId;
      const pieraSubPath = locationData.pieraPath || '';
      const pieraDataPath = pieraSubPath ?
        `${PIERA_PATH}${pieraUserId}/${pieraSubPath}/${datePath}` :
        `${PIERA_PATH}${pieraUserId}/${datePath}`;

      console.log('Piera path:', pieraDataPath);

      const pieraQuery = query(
        ref(database, pieraDataPath),
        orderByKey(),
        limitToLast(1)
      );

      const pieraUnsubscribe = onValue(pieraQuery, (snapshot) => {
        try {
          const timeData = snapshot.val();
          console.log('Piera data received:', timeData);

          if (timeData) {
            const latestTime = Object.keys(timeData)[0];
            const pieraData = {
              ...timeData[latestTime],
              timestamp: latestTime
            };

            const transformedData = transformToComponentFormat(
              pieraData,
              locationData.name,
              dataSource
            );

            setData(transformedData);
            setError(null);
          } else {
            console.log('No Piera data found');
            setData(createFallbackData(locationData.name, dataSource));
            setError('ไม่พบข้อมูล Piera');
          }
          setLoading(false);
        } catch (error) {
          console.error('Error processing piera data:', error);
          setData(createFallbackData(locationData.name, dataSource));
          setError('เกิดข้อผิดพลาดในการประมวลผลข้อมูล Piera');
          setLoading(false);
        }
      }, (err) => {
        console.error('Piera data error:', err);
        setError('เกิดข้อผิดพลาดในการดึงข้อมูล Piera');
        setData(createFallbackData(locationData.name, dataSource));
        setLoading(false);
      });

      return () => {
        pieraUnsubscribe();
      };

    } else if (dataSource === 'raw') {
      // การจัดการ RAW data source
      const rawFirebasePath = `${RAW_PATH}${locationData.rawDataPath}/${datePath}`;

      console.log('RAW path for all data:', rawFirebasePath);

      const rawQuery = query(
        ref(database, rawFirebasePath),
        orderByKey(),
        limitToLast(1)
      );

      const rawUnsubscribe = onValue(rawQuery, (snapshot) => {
        try {
          const timeData = snapshot.val();
          console.log('RAW data received:', timeData);

          if (timeData) {
            const latestTime = Object.keys(timeData)[0];
            const rawData = {
              ...timeData[latestTime],
              timestamp: latestTime
            };

            const transformedData = transformToComponentFormat(
              rawData,
              locationData.name,
              dataSource
            );

            setData(transformedData);
            setError(null);
          } else {
            console.log('No RAW data found');
            setData(createFallbackData(locationData.name, dataSource));
            setError('ไม่พบข้อมูล RAW');
          }
          setLoading(false);
        } catch (error) {
          console.error('Error processing raw data:', error);
          setData(createFallbackData(locationData.name, dataSource));
          setError('เกิดข้อผิดพลาดในการประมวลผลข้อมูล RAW');
          setLoading(false);
        }
      }, (err) => {
        console.error('RAW data error:', err);
        setError('เกิดข้อผิดพลาดในการดึงข้อมูล RAW');
        setData(createFallbackData(locationData.name, dataSource));
        setLoading(false);
      });

      return () => {
        rawUnsubscribe();
      };
    }

    console.log('========================');
  }, [locationData?.id, locationData?.dataSource]);

  return { data, loading, error };
};

// ===================================================================
// Recommendation Functions - คงเดิม
// ===================================================================

export const getGeneralRecommendations = (airQualityStatus) => {
  switch (airQualityStatus) {
    case 'Good':
      return [
        "ไม่มีผลต่อสุขภาพสามารถใช้ชีวิตได้ตามปกติ",
        "สามารถเปิดหน้าต่างระบายอากาศได้"
      ];
    case 'Warning':
      return [
        "ไม่มีผลต่อสุขภาพสามารถใช้ชีวิตได้ตามปกติ",
        "สามารถเปิดหน้าต่างระบายอากาศได้"
      ];
    case 'Affects health':
      return [
        "มีความเสี่ยงต่อการระคายเคืองต่อดวงตา ผิวหนัง และลำคอ รวมถึงปัญหาระบบทางเดินหายใจ",
        "หลีกเลี่ยงการทำกิจกรรมที่ก่อให้เกิดฝุ่นและสังเกตอาการผิดปกติของตนเอง"
      ];
    case 'Danger':
      return [
        "มีความเสี่ยงต่อการระคายเคืองต่อดวงตา ผิวหนัง และลำคอ รวมถึงปัญหาระบบทางเดินหายใจ",
        "หลีกเลี่ยงพื้นที่ หรือกิจกรรมที่ทำให้เกิดฝุ่น",
        "สังเกตอาการของตนเอง หากมีอาการควรไปพบแพทย์",
        "ติดตั้งเครื่องฟอกอากาศ"
      ];
    case 'Hazardous':
      return [
        "มีความเสี่ยงสูงที่จะเกิดการระคายเคืองอย่างรุนแรงและผลกระทบด้านลบต่อสุขภาพที่อาจกระตุ้นให้เกิดโรคหลอดเลือดหัวใจและระบบทางเดินหายใจ",
        "งดไปยังพื้นที่ หรือทำกิจกรรมที่ก่อให้เกิดฝุ่น",
        "สังเกตอาการของตนเอง หากมีอาการควรไปพบแพทย์",
        "ติดตั้งเครื่องฟอกอากาศ"
      ];
    default:
      return [
        "กำลังโหลดข้อมูล...",
        "กำลังวิเคราะห์คุณภาพอากาศ...",
        "กำลังประมวลผลคำแนะนำ..."
      ];
  }
};

export const getSensitiveRecommendations = (airQualityStatus) => {
  switch (airQualityStatus) {
    case 'Good':
      return [
        "ไม่มีผลต่อสุขภาพสามารถใช้ชีวิตได้ตามปกติ",
        "สามารถเปิดหน้าต่างระบายอากาศได้"
      ];
    case 'Warning':
      return [
        "สามารถเปิดหน้าต่างระบายอากาศได้",
        "มีความเสี่ยงต่อการระคายเคืองต่อดวงตา ผิวหนัง และลำคอ รวมถึงปัญหาระบบทางเดินหายใจ",
        "สังเกตอาการของตนเอง หากมีอาการควรไปพบแพทย์"
      ];
    case 'Affects health':
      return [
        "มีความเสี่ยงต่อการระคายเคืองต่อดวงตา ผิวหนัง และลำคอ รวมถึงปัญหาระบบทางเดินหายใจ",
        "ปิดหน้าต่าง และหลีกเลี่ยงการถ่ายเทอากาศจากภายนอก",
        "สังเกตอาการของตนเอง หากมีอาการควรไปพบแพทย์"
      ];
    case 'Danger':
      return [
        "มีความเสี่ยงต่อการระคายเคืองอย่างรุนแรงต่อดวงตา ผิวหนัง และลำคอ รวมถึงปัญหาระบบทางเดินหายใจ",
        "หลีกเลี่ยงพื้นที่ หรือการทำกิจกรรมที่ก่อให้เกิดฝุ่น",
        "สังเกตอาการของตนเอง หากมีอาการควรไปพบแพทย์",
        "เตรียมยาหรืออุปกรณ์ตามคำสั่งแพทย์",
        "ติดตั้งเครื่องฟอกอากาศ"
      ];
    case 'Hazardous':
      return [
        "มีความเสี่ยงสูงที่จะเกิดการระคายเคืองอย่างรุนแรงและผลกระทบด้านลบต่อสุขภาพที่อาจกระตุ้นให้เกิดโรคหลอดเลือดหัวใจและระบบทางเดินหายใจ",
        "งดไปยังพื้นที่ หรือทำกิจกรรมที่ก่อให้เกิดฝุ่น",
        "สังเกตอาการของตนเอง หากมีอาการควรไปพบแพทย์",
        "เตรียมยาหรืออุปกรณ์ตามคำสั่งแพทย์",
        "ติดตั้งเครื่องฟอกอากาศ"
      ];
    default:
      return [
        "กำลังโหลดข้อมูล...",
        "กำลังวิเคราะห์คุณภาพอากาศ...",
        "กำลังประมวลผลคำแนะนำ..."
      ];
  }
};

export const getRecommendationIcon = (recommendation) => {
  const text = recommendation.toLowerCase();

  if (text.includes('ไม่มีผลต่อสุขภาพ') && text.includes('ใช้ชีวิตได้ตามปกติ')) {
    return '/assets/images/work.png';
  }
  if (text.includes('เปิดหน้าต่างระบายอากาศ')) {
    return '/assets/images/window.png';
  }
  if (text.includes('ปิดหน้าต่าง')) {
    return '/assets/images/window.png';
  }
  if (text.includes('สังเกตอาการของตนเอง') || text.includes('กลุ่มเปราะบาง') || text.includes('กลุ่มคนทั่วไป') || text.includes('ความเสี่ยง')) {
    return '/assets/images/irritation.png';
  }
  if (text.includes('งดการทำกิจกรรมหรือเข้าใกล้พื้นที่ที่มีฝุ่น') || text.includes('หลีกเลี่ยงการทำกิจกรรมที่ก่อให้เกิดฝุ่น')) {
    return '/assets/images/no-dust.png';
  }
  if (text.includes('เตรียมยาหรืออุปกรณ์ตามคำสั่งแพทย์')) {
    return '/assets/images/medicine.png';
  }
  if (text.includes('ติดตั้งเครื่องฟอกอากาศ')) {
    return '/assets/images/air-purifier.png';
  }
  if (text.includes('หากมีอาการให้ไปพบแพทย์') || text.includes('ไปพบแพทย์')) {
    return '/assets/images/Doctor.png';
  }
  if (text.includes('กำลังโหลด') || text.includes('กำลังวิเคราะห์') || text.includes('กำลังประมวลผล')) {
    return '⏳';
  }

  return '•';
};