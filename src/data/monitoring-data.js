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

// ===================================================================
// Individual PM Status Functions - ฟังก์ชันคำนวณสถานะแต่ละค่า PM
// ===================================================================

// ฟังก์ชันสำหรับคำนวณสถานะของ PC01 เท่านั้น
export const determinePC01Status = (pc01Value) => {
  const pc01Val = safeParse(pc01Value);

  if (pc01Val > PM_THRESHOLDS.PC01.Danger) {
    return "Hazardous";
  } else if (pc01Val > PM_THRESHOLDS.PC01['Affects health']) {
    return "Danger";
  } else if (pc01Val > PM_THRESHOLDS.PC01.Warning) {
    return "Affects health";
  } else if (pc01Val > PM_THRESHOLDS.PC01.Good) {
    return "Warning";
  } else {
    return "Good";
  }
};

// ฟังก์ชันสำหรับคำนวณสถานะของ PM01 เท่านั้น
export const determinePM01Status = (pm01Value) => {
  const pm01Val = safeParse(pm01Value);

  if (pm01Val > PM_THRESHOLDS.PM01.Danger) {
    return "Hazardous";
  } else if (pm01Val > PM_THRESHOLDS.PM01['Affects health']) {
    return "Danger";
  } else if (pm01Val > PM_THRESHOLDS.PM01.Warning) {
    return "Affects health";
  } else if (pm01Val > PM_THRESHOLDS.PM01.Good) {
    return "Warning";
  } else {
    return "Good";
  }
};

// ฟังก์ชันสำหรับคำนวณสถานะของ PM2.5 เท่านั้น
export const determinePM25Status = (pm25Value) => {
  const pm25Val = safeParse(pm25Value);

  console.log('=== PM2.5 STATUS CALCULATION ===');
  console.log('PM2.5 Value:', pm25Val);
  console.log('Thresholds:', PM_THRESHOLDS.PM);

  if (pm25Val > PM_THRESHOLDS.PM.Danger) {
    console.log('PM2.5 Status: Hazardous');
    return "Hazardous";
  } else if (pm25Val > PM_THRESHOLDS.PM['Affects health']) {
    console.log('PM2.5 Status: Danger');
    return "Danger";
  } else if (pm25Val > PM_THRESHOLDS.PM.Warning) {
    console.log('PM2.5 Status: Affects health');
    return "Affects health";
  } else if (pm25Val > PM_THRESHOLDS.PM.Good) {
    console.log('PM2.5 Status: Warning');
    return "Warning";
  } else {
    console.log('PM2.5 Status: Good');
    return "Good";
  }
};

// ฟังก์ชันสำหรับคำนวณสถานะของ PM10 เท่านั้น
export const determinePM10Status = (pm10Value) => {
  const pm10Val = safeParse(pm10Value);

  console.log('=== PM10 STATUS CALCULATION ===');
  console.log('PM10 Value:', pm10Val);
  console.log('Thresholds:', PM_THRESHOLDS.PM);

  if (pm10Val > PM_THRESHOLDS.PM.Danger) {
    console.log('PM10 Status: Hazardous');
    return "Hazardous";
  } else if (pm10Val > PM_THRESHOLDS.PM['Affects health']) {
    console.log('PM10 Status: Danger');
    return "Danger";
  } else if (pm10Val > PM_THRESHOLDS.PM.Warning) {
    console.log('PM10 Status: Affects health');
    return "Affects health";
  } else if (pm10Val > PM_THRESHOLDS.PM.Good) {
    console.log('PM10 Status: Warning');
    return "Warning";
  } else {
    console.log('PM10 Status: Good');
    return "Good";
  }
};

// ฟังก์ชันสำหรับ get สถานะและสีของ PM แต่ละตัว
export const getPMReadingStatusAndColor = (pmReading) => {
  if (!pmReading || !pmReading.type || pmReading.value === undefined) {
    return { status: 'Good', color: getAirQualityColor('Good') };
  }

  let status = 'Good';

  switch (pmReading.type) {
    case 'PC01':
      status = determinePC01Status(pmReading.value);
      break;
    case 'PM0.1':
      status = determinePM01Status(pmReading.value);
      break;
    case 'PM2.5':
      status = determinePM25Status(pmReading.value);
      break;
    case 'PM10':
      status = determinePM10Status(pmReading.value);
      break;
    default:
      status = 'Good';
  }

  const color = getAirQualityColor(status);

  console.log(`=== ${pmReading.type} STATUS ===`);
  console.log('Value:', pmReading.value);
  console.log('Status:', status);
  console.log('Color:', color);
  console.log('==========================');

  return { status, color };
};

// ===================================================================
// Overall Air Quality Function - ฟังก์ชันคำนวณสถานะรวม
// ===================================================================

// ฟังก์ชันสำหรับคำนวณสถานะคุณภาพอากาศรวม - แก้ไขใหม่
export const determineAirQuality = (pc01, pm01, pm25, pm10) => {
  try {
    // แปลงค่าทั้งหมดให้เป็นตัวเลขอย่างปลอดภัย
    const pc01Val = safeParse(pc01);
    const pm01Val = safeParse(pm01);
    const pm25Val = safeParse(pm25);
    const pm10Val = safeParse(pm10);

    console.log('=== DETERMINE AIR QUALITY DEBUG ===');
    console.log('Input values:', { pc01, pm01, pm25, pm10 });
    console.log('Parsed values:', { pc01Val, pm01Val, pm25Val, pm10Val });

    // เช็คจากระดับแย่ที่สุดไปดีที่สุด (Hazardous -> Good)
    // ใช้ OR logic: หากค่าใดค่าหนึ่งเกินเกณฑ์ระดับไหน จะได้สถานะระดับนั้น

    if (
      pc01Val > PM_THRESHOLDS.PC01.Danger ||
      pm01Val > PM_THRESHOLDS.PM01.Danger ||
      pm25Val > PM_THRESHOLDS.PM.Danger ||
      pm10Val > PM_THRESHOLDS.PM.Danger
    ) {
      console.log('Status: Hazardous');
      console.log('===================================');
      return "Hazardous";
    } else if (
      pc01Val > PM_THRESHOLDS.PC01['Affects health'] ||
      pm01Val > PM_THRESHOLDS.PM01['Affects health'] ||
      pm25Val > PM_THRESHOLDS.PM['Affects health'] ||
      pm10Val > PM_THRESHOLDS.PM['Affects health']
    ) {
      console.log('Status: Danger');
      console.log('===================================');
      return "Danger";
    } else if (
      pc01Val > PM_THRESHOLDS.PC01.Warning ||
      pm01Val > PM_THRESHOLDS.PM01.Warning ||
      pm25Val > PM_THRESHOLDS.PM.Warning ||
      pm10Val > PM_THRESHOLDS.PM.Warning
    ) {
      console.log('Status: Affects health');
      console.log('===================================');
      return "Affects health";
    } else if (
      pc01Val > PM_THRESHOLDS.PC01.Good ||
      pm01Val > PM_THRESHOLDS.PM01.Good ||
      pm25Val > PM_THRESHOLDS.PM.Good ||
      pm10Val > PM_THRESHOLDS.PM.Good
    ) {
      console.log('Status: Warning');
      console.log('===================================');
      return "Warning";
    } else {
      console.log('Status: Good');
      console.log('===================================');
      return "Good";
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

    console.log('=== TRANSFORM DEBUG ===');
    console.log('Raw Firebase Data:', data);
    console.log('Parsed Values:');
    console.log('  PC01:', pc01);
    console.log('  PM01:', pm01);
    console.log('  PM25:', pm25);
    console.log('  PM10:', pm10);

    // คำนวณสถานะรวม (สำหรับ mainReading)
    const overallStatus = determineAirQuality(pc01, pm01, pm25, pm10);
    console.log('Overall Status:', overallStatus);

    // *** สำคัญ: คำนวณสถานะของแต่ละค่า PM แยกกัน ***
    const pc01Status = determinePC01Status(pc01);
    const pm01Status = determinePM01Status(pm01);
    const pm25Status = determinePM25Status(pm25);
    const pm10Status = determinePM10Status(pm10);

    console.log('Individual Statuses:');
    console.log('  PC01 Status:', pc01Status);
    console.log('  PM01 Status:', pm01Status);
    console.log('  PM25 Status:', pm25Status);
    console.log('  PM10 Status:', pm10Status);

    // *** สำคัญ: ดึงคำแนะนำใหม่ทุกครั้งตาม status ที่คำนวณได้ ***
    const recommendations = getGeneralRecommendations(overallStatus);
    console.log('Recommendations:', recommendations);
    console.log('=======================');

    // สร้างข้อมูลในรูปแบบที่ component หลักต้องการ
    const transformedData = {
      date: formatDisplayDate(new Date()),
      time: data.timestamp || getCurrentTime(),
      location: locationName || 'Unknown Location',

      // *** สำคัญ - mainReading ใช้สถานะรวม ***
      mainReading: {
        type: dataSource === 'testing' ? 'PC0.1' : 'PM0.1',
        value: dataSource === 'testing' ? pc01 : pm01,
        unit: dataSource === 'testing' ? 'PNC' : 'μg/m³',
        status: overallStatus // ใช้สถานะรวมสำหรับ main reading
      },

      conditions: {
        temperature: `${temperature}°C`,
        humidity: `${humidity}%`
      },

      // *** สำคัญ: pmReadings ใช้สถานะแยกของแต่ละค่า ***
      pmReadings: [
        {
          type: 'PC01',
          value: pc01,
          unit: 'PNC',
          status: pc01Status // เพิ่ม status แยกสำหรับ PC01
        },
        {
          type: 'PM0.1',
          value: pm01,
          unit: 'μg/m³',
          status: pm01Status // เพิ่ม status แยกสำหรับ PM01
        },
        {
          type: 'PM2.5',
          value: pm25,
          unit: 'μg/m³',
          status: pm25Status // เพิ่ม status แยกสำหรับ PM2.5
        },
        {
          type: 'PM10',
          value: pm10,
          unit: 'μg/m³',
          status: pm10Status // เพิ่ม status แยกสำหรับ PM10
        }
      ],

      recommendations: recommendations, // ใช้ recommendations ที่คำนวณใหม่

      // ข้อมูลเมตาเพื่อการ debug
      _rawData: data,
      _dataSource: dataSource,
      _isValid: hasValidData(data),
      _calculatedStatus: overallStatus, // เพิ่มเพื่อ debug
      _individualStatuses: { // เพิ่มสำหรับ debug
        pc01: pc01Status,
        pm01: pm01Status,
        pm25: pm25Status,
        pm10: pm10Status
      },
      _timestamp: new Date().toISOString() // เพิ่ม timestamp เพื่อตรวจสอบการอัพเดท
    };

    // Debug logging
    console.log('=== TRANSFORMED DATA ===');
    console.log('Location:', locationName);
    console.log('Data Source:', dataSource);
    console.log('Main Reading:', transformedData.mainReading);
    console.log('PM Readings with Individual Status:', transformedData.pmReadings);
    console.log('Individual Statuses:', transformedData._individualStatuses);
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
      { type: 'PC01', value: 0, unit: 'PNC', status: 'Good' },
      { type: 'PM0.1', value: 0, unit: 'μg/m³', status: 'Good' },
      { type: 'PM2.5', value: 0, unit: 'μg/m³', status: 'Good' },
      { type: 'PM10', value: 0, unit: 'μg/m³', status: 'Good' }
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

          console.log('=== COMBINED DATA ===');
          console.log('Testing data:', dataCollector.testing);
          console.log('RAW data:', dataCollector.raw);
          console.log('Combined data:', combinedData);
          console.log('=====================');

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