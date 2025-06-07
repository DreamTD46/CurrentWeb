(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_de37eb._.js", {

"[project]/src/config/firebase-configs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/config/firebase-configs.js
// Firebase configuration สำหรับ Cafe Amazon (Default)
__turbopack_esm__({
    "C4_FIREBASE_CONFIG": (()=>C4_FIREBASE_CONFIG),
    "CAFE_FIREBASE_CONFIG": (()=>CAFE_FIREBASE_CONFIG),
    "LOCATION_CONFIGS": (()=>LOCATION_CONFIGS)
});
const CAFE_FIREBASE_CONFIG = {
    apiKey: "AIzaSyBqd5rgKGkO7h_Dn76ctkITkgkrvnV5tbE",
    authDomain: "ultrafine-particles.firebaseapp.com",
    databaseURL: "https://ultrafine-particles-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ultrafine-particles",
    storageBucket: "ultrafine-particles.firebasestorage.app",
    messagingSenderId: "231538011955",
    appId: "1:231538011955:web:274e36a3c702324dc31846",
    measurementId: "G-KBQLGTKY0V"
};
const C4_FIREBASE_CONFIG = {
    apiKey: "AIzaSyBqd5rgKGkO7h_Dn76ctkITkgkrvnV5tbE",
    authDomain: "ultrafine-particles.firebaseapp.com",
    databaseURL: "https://ultrafine-particles-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ultrafine-particles",
    storageBucket: "ultrafine-particles.firebasestorage.app",
    messagingSenderId: "231538011955",
    appId: "1:231538011955:web:274e36a3c702324dc31846",
    measurementId: "G-KBQLGTKY0V"
};
const LOCATION_CONFIGS = {
    'cafe-amazon-st': {
        id: 'cafe-amazon-st',
        name: 'Cafe Amazon สาขา ST',
        coords: [
            8.64437496101933,
            99.89929488155569
        ],
        firebaseConfig: CAFE_FIREBASE_CONFIG,
        dataSource: 'testing',
        pieraUserId: 'gdRueJtWeNaMleXbEf4rWfuD6Kr1',
        pieraPath: '',
        testingPath: 'Cafe',
        rawDataPath: 'Cafe'
    },
    'building-c4': {
        id: 'building-c4',
        name: 'อาคารวิชาการ 4',
        coords: [
            8.638222,
            99.897976
        ],
        firebaseConfig: C4_FIREBASE_CONFIG,
        // C4 ใช้ RAWdata สำหรับทั้ง PM และ อุณหภูมิ/ความชื้น
        dataSource: 'raw',
        pieraUserId: null,
        pieraPath: null,
        rawDataPath: 'Lab' // ใช้ RAWdata/Lab สำหรับทุกอย่าง
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/monitoring-data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PM_THRESHOLDS": (()=>PM_THRESHOLDS),
    "determineAirQuality": (()=>determineAirQuality),
    "formatPCValue": (()=>formatPCValue),
    "formatPMValue": (()=>formatPMValue),
    "getAirQualityColor": (()=>getAirQualityColor),
    "getGeneralRecommendations": (()=>getGeneralRecommendations),
    "getRecommendationIcon": (()=>getRecommendationIcon),
    "getSensitiveRecommendations": (()=>getSensitiveRecommendations),
    "useLocationMonitoringData": (()=>useLocationMonitoringData),
    "useMonitoringData": (()=>useMonitoringData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/firebase-configs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
// ===================================================================
// Firebase Configuration และ Constants
// ===================================================================
// ใช้ Firebase configuration จาก config file
const firebaseConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_CONFIGS"]['cafe-amazon-st'].firebaseConfig || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_CONFIGS"]['building-c4']?.firebaseConfig;
// Initialize Firebase - เพิ่มการตรวจสอบ config
if (!firebaseConfig) {
    console.error('Firebase configuration not found in LOCATION_CONFIGS');
}
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDatabase"])(app);
// Constants สำหรับ Firebase paths
const FIREBASE_USER_ID = 'gdRueJtWeNaMleXbEf4rWfuD6Kr1';
const PIERA_PATH = 'Piera/';
const RAW_PATH = 'RAWdata/';
const TESTING_PATH = 'Testing/';
// ===================================================================
// Helper Functions สำหรับการจัดการเวลาและการแสดงผล
// ===================================================================
const getCurrentDatePath = ()=>{
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};
const getCurrentTime = ()=>{
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};
const formatDisplayDate = (date)=>{
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
const safeParse = (value, defaultValue = 0)=>{
    if (value === null || value === undefined || value === '') {
        return defaultValue;
    }
    const parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
};
// ฟังก์ชันสำหรับตรวจสอบว่าข้อมูลมีค่าที่มีประโยชน์หรือไม่
const hasValidData = (data)=>{
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
const getAirQualityColor = (status)=>{
    const colors = {
        'Good': '#2DC653',
        'Warning': '#FECF3E',
        'Affects health': '#FF9500',
        'Danger': '#D02224',
        'Hazardous': '#973AA8'
    };
    return colors[status] || colors['Good'];
};
const formatPMValue = (value)=>{
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return value;
    return `${numericValue.toFixed(2)} μg/m³`;
};
const formatPCValue = (value)=>{
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return value;
    return `${numericValue.toFixed(0)} PNC`;
};
const PM_THRESHOLDS = {
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
const determineAirQuality = (pc01, pm01, pm25, pm10)=>{
    try {
        // แปลงค่าทั้งหมดให้เป็นตัวเลขอย่างปลอดภัย
        const pc01Val = safeParse(pc01);
        const pm01Val = safeParse(pm01);
        const pm25Val = safeParse(pm25);
        const pm10Val = safeParse(pm10);
        // ใช้ threshold เดียวกันสำหรับ pm25 และ pm10 โดยใช้ OR logic
        if (pc01Val <= PM_THRESHOLDS.PC01.Good || pm01Val <= PM_THRESHOLDS.PM01.Good || pm25Val <= PM_THRESHOLDS.PM.Good || pm10Val <= PM_THRESHOLDS.PM.Good) {
            return "Good";
        } else if (pc01Val <= PM_THRESHOLDS.PC01.Warning || pm01Val <= PM_THRESHOLDS.PM01.Warning || pm25Val <= PM_THRESHOLDS.PM.Warning || pm10Val <= PM_THRESHOLDS.PM.Warning) {
            return "Warning";
        } else if (pc01Val <= PM_THRESHOLDS.PC01['Affects health'] || pm01Val <= PM_THRESHOLDS.PM01['Affects health'] || pm25Val <= PM_THRESHOLDS.PM['Affects health'] || pm10Val <= PM_THRESHOLDS.PM['Affects health']) {
            return "Affects health";
        } else if (pc01Val <= PM_THRESHOLDS.PC01.Danger || pm01Val <= PM_THRESHOLDS.PM01.Danger || pm25Val <= PM_THRESHOLDS.PM.Danger || pm10Val <= PM_THRESHOLDS.PM.Danger) {
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
const transformToComponentFormat = (data, locationName, dataSource = 'testing')=>{
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
const createFallbackData = (locationName, dataSource = 'testing')=>{
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
            {
                type: 'PC01',
                value: 0,
                unit: 'PNC'
            },
            {
                type: 'PM0.1',
                value: 0,
                unit: 'μg/m³'
            },
            {
                type: 'PM2.5',
                value: 0,
                unit: 'μg/m³'
            },
            {
                type: 'PM10',
                value: 0,
                unit: 'μg/m³'
            }
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
const useMonitoringData = ()=>{
    _s();
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
_s(useMonitoringData, "LNpFy6hpQvvL/JSrmhjWrjoF/Vw=", false, function() {
    return [
        useLocationMonitoringData
    ];
});
const useLocationMonitoringData = (locationData)=>{
    _s1();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocationMonitoringData.useEffect": ()=>{
            // ตรวจสอบข้อมูลเบื้องต้น
            if (!locationData || !locationData.rawDataPath && !locationData.testingPath) {
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
                const updateCombinedData = {
                    "useLocationMonitoringData.useEffect.updateCombinedData": ()=>{
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
                                const transformedData = transformToComponentFormat(combinedData, locationData.name, dataSource);
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
                    }
                }["useLocationMonitoringData.useEffect.updateCombinedData"];
                // Query สำหรับ Testing data
                const testingQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, testingFirebasePath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
                const testingUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(testingQuery, {
                    "useLocationMonitoringData.useEffect.testingUnsubscribe": (snapshot)=>{
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
                    }
                }["useLocationMonitoringData.useEffect.testingUnsubscribe"], {
                    "useLocationMonitoringData.useEffect.testingUnsubscribe": (err)=>{
                        console.error('Testing data error:', err);
                        dataCollector.testingReceived = true;
                        dataCollector.testing = {};
                        updateCombinedData();
                    }
                }["useLocationMonitoringData.useEffect.testingUnsubscribe"]);
                // Query สำหรับ RAW data
                const rawQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, rawFirebasePath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
                const rawUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(rawQuery, {
                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (snapshot)=>{
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
                    }
                }["useLocationMonitoringData.useEffect.rawUnsubscribe"], {
                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (err)=>{
                        console.error('RAW data error:', err);
                        dataCollector.rawReceived = true;
                        dataCollector.raw = {};
                        updateCombinedData();
                    }
                }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
                return ({
                    "useLocationMonitoringData.useEffect": ()=>{
                        testingUnsubscribe();
                        rawUnsubscribe();
                    }
                })["useLocationMonitoringData.useEffect"];
            } else if (dataSource === 'piera') {
                // การจัดการ Piera data source
                const pieraUserId = locationData.pieraUserId;
                const pieraSubPath = locationData.pieraPath || '';
                const pieraDataPath = pieraSubPath ? `${PIERA_PATH}${pieraUserId}/${pieraSubPath}/${datePath}` : `${PIERA_PATH}${pieraUserId}/${datePath}`;
                console.log('Piera path:', pieraDataPath);
                const pieraQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, pieraDataPath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
                const pieraUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(pieraQuery, {
                    "useLocationMonitoringData.useEffect.pieraUnsubscribe": (snapshot)=>{
                        try {
                            const timeData = snapshot.val();
                            console.log('Piera data received:', timeData);
                            if (timeData) {
                                const latestTime = Object.keys(timeData)[0];
                                const pieraData = {
                                    ...timeData[latestTime],
                                    timestamp: latestTime
                                };
                                const transformedData = transformToComponentFormat(pieraData, locationData.name, dataSource);
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
                    }
                }["useLocationMonitoringData.useEffect.pieraUnsubscribe"], {
                    "useLocationMonitoringData.useEffect.pieraUnsubscribe": (err)=>{
                        console.error('Piera data error:', err);
                        setError('เกิดข้อผิดพลาดในการดึงข้อมูล Piera');
                        setData(createFallbackData(locationData.name, dataSource));
                        setLoading(false);
                    }
                }["useLocationMonitoringData.useEffect.pieraUnsubscribe"]);
                return ({
                    "useLocationMonitoringData.useEffect": ()=>{
                        pieraUnsubscribe();
                    }
                })["useLocationMonitoringData.useEffect"];
            } else if (dataSource === 'raw') {
                // การจัดการ RAW data source
                const rawFirebasePath = `${RAW_PATH}${locationData.rawDataPath}/${datePath}`;
                console.log('RAW path for all data:', rawFirebasePath);
                const rawQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, rawFirebasePath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
                const rawUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(rawQuery, {
                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (snapshot)=>{
                        try {
                            const timeData = snapshot.val();
                            console.log('RAW data received:', timeData);
                            if (timeData) {
                                const latestTime = Object.keys(timeData)[0];
                                const rawData = {
                                    ...timeData[latestTime],
                                    timestamp: latestTime
                                };
                                const transformedData = transformToComponentFormat(rawData, locationData.name, dataSource);
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
                    }
                }["useLocationMonitoringData.useEffect.rawUnsubscribe"], {
                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (err)=>{
                        console.error('RAW data error:', err);
                        setError('เกิดข้อผิดพลาดในการดึงข้อมูล RAW');
                        setData(createFallbackData(locationData.name, dataSource));
                        setLoading(false);
                    }
                }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
                return ({
                    "useLocationMonitoringData.useEffect": ()=>{
                        rawUnsubscribe();
                    }
                })["useLocationMonitoringData.useEffect"];
            }
            console.log('========================');
        }
    }["useLocationMonitoringData.useEffect"], [
        locationData?.id,
        locationData?.dataSource
    ]);
    return {
        data,
        loading,
        error
    };
};
_s1(useLocationMonitoringData, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
const getGeneralRecommendations = (airQualityStatus)=>{
    switch(airQualityStatus){
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
const getSensitiveRecommendations = (airQualityStatus)=>{
    switch(airQualityStatus){
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
const getRecommendationIcon = (recommendation)=>{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Animation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CascadeDigit": (()=>CascadeDigit),
    "CascadeNumber": (()=>CascadeNumber),
    "LiveActivityNumber": (()=>LiveActivityNumber),
    "RippleNumber": (()=>RippleNumber),
    "WaveNumber": (()=>WaveNumber),
    "useReducedMotion": (()=>useReducedMotion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature(), _s4 = __turbopack_refresh__.signature(), _s5 = __turbopack_refresh__.signature();
;
// Hook สำหรับตรวจสอบ prefers-reduced-motion
const useReducedMotion = ()=>{
    _s();
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReducedMotion.useEffect": ()=>{
            const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            setPrefersReducedMotion(mediaQuery.matches);
            const handleChange = {
                "useReducedMotion.useEffect.handleChange": (event)=>setPrefersReducedMotion(event.matches)
            }["useReducedMotion.useEffect.handleChange"];
            mediaQuery.addEventListener('change', handleChange);
            return ({
                "useReducedMotion.useEffect": ()=>mediaQuery.removeEventListener('change', handleChange)
            })["useReducedMotion.useEffect"];
        }
    }["useReducedMotion.useEffect"], []);
    return prefersReducedMotion;
};
_s(useReducedMotion, "c2o+PeDo1dLruq/wbnW+Z6a6rIY=");
// Component สำหรับ Digit เดี่ยวที่มี delay - ปรับปรุงแล้ว
const CascadeDigit = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s1(({ digit, className = "", delay = 0, animationType = "slide", duration = 500, onAnimationComplete })=>{
    _s1();
    const [currentDigit, setCurrentDigit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(digit);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldAnimate, setShouldAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prefersReducedMotion = useReducedMotion();
    const timeoutRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // ทำความสะอาด timeouts เมื่อ component unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CascadeDigit.useEffect": ()=>{
            return ({
                "CascadeDigit.useEffect": ()=>{
                    timeoutRefs.current.forEach({
                        "CascadeDigit.useEffect": (timeout)=>clearTimeout(timeout)
                    }["CascadeDigit.useEffect"]);
                    timeoutRefs.current = [];
                }
            })["CascadeDigit.useEffect"];
        }
    }["CascadeDigit.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CascadeDigit.useEffect": ()=>{
            if (digit !== currentDigit) {
                // ถ้า prefers reduced motion, ไม่ทำ animation
                if (prefersReducedMotion) {
                    setCurrentDigit(digit);
                    onAnimationComplete?.();
                    return;
                }
                // Clear existing timeouts
                timeoutRefs.current.forEach({
                    "CascadeDigit.useEffect": (timeout)=>clearTimeout(timeout)
                }["CascadeDigit.useEffect"]);
                timeoutRefs.current = [];
                // เริ่ม animation หลังจาก delay
                const delayTimer = setTimeout({
                    "CascadeDigit.useEffect.delayTimer": ()=>{
                        setShouldAnimate(true);
                        setIsAnimating(true);
                        // หยุด animation หลังจาก duration
                        const animationTimer = setTimeout({
                            "CascadeDigit.useEffect.delayTimer.animationTimer": ()=>{
                                setCurrentDigit(digit);
                                setIsAnimating(false);
                                setShouldAnimate(false);
                                onAnimationComplete?.();
                            }
                        }["CascadeDigit.useEffect.delayTimer.animationTimer"], duration);
                        timeoutRefs.current.push(animationTimer);
                    }
                }["CascadeDigit.useEffect.delayTimer"], delay);
                timeoutRefs.current.push(delayTimer);
            }
        }
    }["CascadeDigit.useEffect"], [
        digit,
        currentDigit,
        delay,
        duration,
        prefersReducedMotion,
        onAnimationComplete
    ]);
    const getAnimationClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CascadeDigit.useCallback[getAnimationClass]": ()=>{
            if (!shouldAnimate || prefersReducedMotion) return '';
            switch(animationType){
                case "slide":
                    return 'animate-cascade-slide-in';
                case "flip":
                    return 'animate-cascade-flip-in';
                case "fade":
                    return 'animate-cascade-fade-in';
                default:
                    return '';
            }
        }
    }["CascadeDigit.useCallback[getAnimationClass]"], [
        shouldAnimate,
        animationType,
        prefersReducedMotion
    ]);
    const getTransformStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CascadeDigit.useCallback[getTransformStyle]": ()=>{
            if (prefersReducedMotion) return {};
            const easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            switch(animationType){
                case "slide":
                    return {
                        transform: isAnimating ? 'translateY(-100%) scale(0.95)' : 'translateY(0) scale(1)',
                        opacity: isAnimating ? 0 : 1,
                        filter: isAnimating ? 'blur(1px)' : 'blur(0px)',
                        transition: `all ${duration}ms ${easing}`
                    };
                case "flip":
                    return {
                        transform: isAnimating ? 'rotateX(-90deg) scale(0.9)' : 'rotateX(0deg) scale(1)',
                        opacity: isAnimating ? 0 : 1,
                        transition: `all ${duration}ms ${easing}`,
                        transformOrigin: 'center bottom'
                    };
                case "fade":
                    return {
                        opacity: isAnimating ? 0 : 1,
                        transform: isAnimating ? 'scale(0.8)' : 'scale(1)',
                        filter: isAnimating ? 'blur(2px)' : 'blur(0px)',
                        transition: `all ${duration}ms ${easing}`
                    };
                default:
                    return {};
            }
        }
    }["CascadeDigit.useCallback[getTransformStyle]"], [
        isAnimating,
        animationType,
        duration,
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-block overflow-hidden transform-cascade ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `font-numbers block transform-gpu ${getAnimationClass()}`,
            style: {
                ...getTransformStyle(),
                perspective: '1000px',
                transformStyle: 'preserve-3d'
            },
            children: shouldAnimate ? digit : currentDigit
        }, void 0, false, {
            fileName: "[project]/src/components/Animation.js",
            lineNumber: 121,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Animation.js",
        lineNumber: 120,
        columnNumber: 9
    }, this);
}, "JVb0u+FnYB8BNaRkwbyo/tZkMQI=", false, function() {
    return [
        useReducedMotion
    ];
}));
_c = CascadeDigit;
CascadeDigit.displayName = 'CascadeDigit';
// Cascade Number Component - ปรับปรุงแล้ว
const CascadeNumber = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s2(({ value, decimals = 3, className = "", animationType = "slide", direction = "left-to-right", staggerDelay = 80, duration = 500, showChangeIndicator = false, minDigits = 1, theme = "default" // เพิ่ม theme support
 })=>{
    _s2();
    const [trend, setTrend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("stable");
    const previousValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    const prefersReducedMotion = useReducedMotion();
    // ใช้ useMemo สำหรับการคำนวณที่ซับซ้อน
    const formattedParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CascadeNumber.useMemo[formattedParts]": ()=>{
            try {
                const formattedValue = Number(value).toFixed(decimals);
                const [integerPart, decimalPart] = formattedValue.split('.');
                const paddedInteger = integerPart.padStart(minDigits, '0');
                return [
                    ...paddedInteger.split('').map({
                        "CascadeNumber.useMemo[formattedParts]": (d, i)=>({
                                type: 'integer',
                                digit: d,
                                index: i,
                                key: `int-${i}`
                            })
                    }["CascadeNumber.useMemo[formattedParts]"]),
                    ...decimals > 0 ? [
                        {
                            type: 'decimal-point',
                            digit: '.',
                            index: 'dot',
                            key: 'dot'
                        }
                    ] : [],
                    ...decimals > 0 ? decimalPart.split('').map({
                        "CascadeNumber.useMemo[formattedParts]": (d, i)=>({
                                type: 'decimal',
                                digit: d,
                                index: i,
                                key: `dec-${i}`
                            })
                    }["CascadeNumber.useMemo[formattedParts]"]) : []
                ];
            } catch (error) {
                console.warn('CascadeNumber: Invalid value provided', value);
                return [];
            }
        }
    }["CascadeNumber.useMemo[formattedParts]"], [
        value,
        decimals,
        minDigits
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CascadeNumber.useEffect": ()=>{
            if (previousValue.current < value) {
                setTrend("up");
            } else if (previousValue.current > value) {
                setTrend("down");
            } else {
                setTrend("stable");
            }
            const timer = setTimeout({
                "CascadeNumber.useEffect.timer": ()=>setTrend("stable")
            }["CascadeNumber.useEffect.timer"], prefersReducedMotion ? 500 : 2500);
            previousValue.current = value;
            return ({
                "CascadeNumber.useEffect": ()=>clearTimeout(timer)
            })["CascadeNumber.useEffect"];
        }
    }["CascadeNumber.useEffect"], [
        value,
        prefersReducedMotion
    ]);
    const getDigitDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CascadeNumber.useCallback[getDigitDelay]": (index)=>{
            if (prefersReducedMotion) return 0;
            if (direction === "right-to-left") {
                return (formattedParts.length - 1 - index) * staggerDelay;
            }
            return index * staggerDelay;
        }
    }["CascadeNumber.useCallback[getDigitDelay]"], [
        direction,
        formattedParts.length,
        staggerDelay,
        prefersReducedMotion
    ]);
    const getTrendStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CascadeNumber.useCallback[getTrendStyles]": ()=>{
            const baseClasses = "text-xs transition-all duration-700 ease-out ml-2 transform";
            switch(trend){
                case "up":
                    return {
                        className: `${baseClasses} text-green-400`,
                        style: {
                            transform: 'translateY(-3px)',
                            opacity: 1
                        },
                        icon: ""
                    };
                case "down":
                    return {
                        className: `${baseClasses} text-red-400`,
                        style: {
                            transform: 'translateY(3px)',
                            opacity: 1
                        },
                        icon: ""
                    };
                default:
                    return {
                        className: `${baseClasses} text-gray-400`,
                        style: {
                            transform: 'translateY(0)',
                            opacity: 0
                        },
                        icon: ""
                    };
            }
        }
    }["CascadeNumber.useCallback[getTrendStyles]"], [
        trend
    ]);
    const trendStyles = getTrendStyles();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-flex items-center gap-0 cascade-container ${theme}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `inline-flex ${className}`,
                children: formattedParts.map((part, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cascade-digit-wrapper",
                        style: {
                            minWidth: '0.6em'
                        },
                        children: part.digit === '.' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-numbers",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Animation.js",
                            lineNumber: 257,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CascadeDigit, {
                            digit: part.digit,
                            className: "text-center",
                            delay: getDigitDelay(index),
                            animationType: animationType,
                            duration: duration
                        }, void 0, false, {
                            fileName: "[project]/src/components/Animation.js",
                            lineNumber: 259,
                            columnNumber: 29
                        }, this)
                    }, part.key, false, {
                        fileName: "[project]/src/components/Animation.js",
                        lineNumber: 251,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Animation.js",
                lineNumber: 249,
                columnNumber: 13
            }, this),
            showChangeIndicator && trend !== "stable" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: trendStyles.className,
                style: {
                    ...trendStyles.style,
                    animation: !prefersReducedMotion ? 'cascadeFadeInOut 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                },
                "aria-live": "polite",
                "aria-label": `Value ${trend}`,
                children: trendStyles.icon
            }, void 0, false, {
                fileName: "[project]/src/components/Animation.js",
                lineNumber: 273,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Animation.js",
        lineNumber: 248,
        columnNumber: 9
    }, this);
}, "KTOJZ0zIVM4GZbqhfGYZT+6c2Do=", false, function() {
    return [
        useReducedMotion
    ];
}));
_c1 = CascadeNumber;
CascadeNumber.displayName = 'CascadeNumber';
// Wave Effect Number Component - ปรับปรุงแล้ว
const WaveNumber = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s3(({ value, decimals = 3, className = "", waveDelay = 60, duration = 600 })=>{
    _s3();
    const [displayDigits, setDisplayDigits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isWaving, setIsWaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const previousValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    const prefersReducedMotion = useReducedMotion();
    const timeoutRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveNumber.useEffect": ()=>{
            return ({
                "WaveNumber.useEffect": ()=>{
                    timeoutRefs.current.forEach({
                        "WaveNumber.useEffect": (timeout)=>clearTimeout(timeout)
                    }["WaveNumber.useEffect"]);
                    timeoutRefs.current = [];
                }
            })["WaveNumber.useEffect"];
        }
    }["WaveNumber.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveNumber.useEffect": ()=>{
            try {
                const formattedValue = Number(value).toFixed(decimals);
                const [integerPart, decimalPart] = formattedValue.split('.');
                const newDigits = [
                    ...integerPart.split(''),
                    '.',
                    ...decimalPart.split('')
                ];
                if (previousValue.current !== value) {
                    setIsWaving(true);
                    // Clear existing timeouts
                    timeoutRefs.current.forEach({
                        "WaveNumber.useEffect": (timeout)=>clearTimeout(timeout)
                    }["WaveNumber.useEffect"]);
                    timeoutRefs.current = [];
                    if (prefersReducedMotion) {
                        setDisplayDigits(newDigits.map({
                            "WaveNumber.useEffect": (digit)=>({
                                    digit,
                                    isNew: false
                                })
                        }["WaveNumber.useEffect"]));
                        setIsWaving(false);
                    } else {
                        // Wave animation
                        newDigits.forEach({
                            "WaveNumber.useEffect": (digit, index)=>{
                                const timeout = setTimeout({
                                    "WaveNumber.useEffect.timeout": ()=>{
                                        setDisplayDigits({
                                            "WaveNumber.useEffect.timeout": (prev)=>{
                                                const updated = [
                                                    ...prev
                                                ];
                                                updated[index] = {
                                                    digit,
                                                    isNew: true,
                                                    timestamp: Date.now()
                                                };
                                                return updated;
                                            }
                                        }["WaveNumber.useEffect.timeout"]);
                                    }
                                }["WaveNumber.useEffect.timeout"], index * waveDelay);
                                timeoutRefs.current.push(timeout);
                            }
                        }["WaveNumber.useEffect"]);
                        // Reset wave state
                        const resetTimeout = setTimeout({
                            "WaveNumber.useEffect.resetTimeout": ()=>{
                                setIsWaving(false);
                                setDisplayDigits(newDigits.map({
                                    "WaveNumber.useEffect.resetTimeout": (digit)=>({
                                            digit,
                                            isNew: false
                                        })
                                }["WaveNumber.useEffect.resetTimeout"]));
                            }
                        }["WaveNumber.useEffect.resetTimeout"], newDigits.length * waveDelay + duration);
                        timeoutRefs.current.push(resetTimeout);
                    }
                    previousValue.current = value;
                } else if (displayDigits.length === 0) {
                    setDisplayDigits(newDigits.map({
                        "WaveNumber.useEffect": (digit)=>({
                                digit,
                                isNew: false
                            })
                    }["WaveNumber.useEffect"]));
                }
            } catch (error) {
                console.warn('WaveNumber: Invalid value provided', value);
            }
        }
    }["WaveNumber.useEffect"], [
        value,
        decimals,
        waveDelay,
        duration,
        prefersReducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex wave-effect ${className}`,
        children: displayDigits.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                style: {
                    minWidth: item.digit === '.' ? '4px' : '0.6em'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `
              font-numbers block text-center transform-gpu transition-all ease-out
              ${item.isNew && !prefersReducedMotion ? 'animate-wave-bounce' : ''}
            `,
                    style: {
                        transform: item.isNew && !prefersReducedMotion ? 'translateY(-10px) scale(1.1)' : 'translateY(0) scale(1)',
                        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                        transitionDelay: prefersReducedMotion ? '0ms' : `${index * waveDelay}ms`,
                        filter: item.isNew && !prefersReducedMotion ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none'
                    },
                    children: item.digit
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 372,
                    columnNumber: 21
                }, this)
            }, index, false, {
                fileName: "[project]/src/components/Animation.js",
                lineNumber: 367,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Animation.js",
        lineNumber: 365,
        columnNumber: 9
    }, this);
}, "bgzKgSarZBzEohaH3ytnVxHitc4=", false, function() {
    return [
        useReducedMotion
    ];
}));
_c2 = WaveNumber;
WaveNumber.displayName = 'WaveNumber';
// Smooth Ripple Effect - ปรับปรุงแล้ว
const RippleNumber = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_s4(({ value, decimals = 3, className = "", rippleDelay = 50, duration = 800 })=>{
    _s4();
    const [animatingDigits, setAnimatingDigits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const previousValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    const prefersReducedMotion = useReducedMotion();
    const timeoutRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RippleNumber.useEffect": ()=>{
            return ({
                "RippleNumber.useEffect": ()=>{
                    timeoutRefs.current.forEach({
                        "RippleNumber.useEffect": (timeout)=>clearTimeout(timeout)
                    }["RippleNumber.useEffect"]);
                    timeoutRefs.current = [];
                }
            })["RippleNumber.useEffect"];
        }
    }["RippleNumber.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RippleNumber.useEffect": ()=>{
            if (previousValue.current !== value) {
                try {
                    const formattedValue = Number(value).toFixed(decimals);
                    const [integerPart, decimalPart] = formattedValue.split('.');
                    const allDigits = [
                        ...integerPart.split(''),
                        '.',
                        ...decimalPart.split('')
                    ];
                    // Clear existing timeouts
                    timeoutRefs.current.forEach({
                        "RippleNumber.useEffect": (timeout)=>clearTimeout(timeout)
                    }["RippleNumber.useEffect"]);
                    timeoutRefs.current = [];
                    if (prefersReducedMotion) {
                        previousValue.current = value;
                        return;
                    }
                    // Ripple effect จากกลางออกไปข้าง
                    const center = Math.floor(allDigits.length / 2);
                    allDigits.forEach({
                        "RippleNumber.useEffect": (_, index)=>{
                            const distance = Math.abs(index - center);
                            const delay = distance * rippleDelay;
                            const startTimeout = setTimeout({
                                "RippleNumber.useEffect.startTimeout": ()=>{
                                    setAnimatingDigits({
                                        "RippleNumber.useEffect.startTimeout": (prev)=>new Set([
                                                ...prev,
                                                index
                                            ])
                                    }["RippleNumber.useEffect.startTimeout"]);
                                    // Remove from animating set after animation
                                    const endTimeout = setTimeout({
                                        "RippleNumber.useEffect.startTimeout.endTimeout": ()=>{
                                            setAnimatingDigits({
                                                "RippleNumber.useEffect.startTimeout.endTimeout": (prev)=>{
                                                    const newSet = new Set(prev);
                                                    newSet.delete(index);
                                                    return newSet;
                                                }
                                            }["RippleNumber.useEffect.startTimeout.endTimeout"]);
                                        }
                                    }["RippleNumber.useEffect.startTimeout.endTimeout"], duration);
                                    timeoutRefs.current.push(endTimeout);
                                }
                            }["RippleNumber.useEffect.startTimeout"], delay);
                            timeoutRefs.current.push(startTimeout);
                        }
                    }["RippleNumber.useEffect"]);
                    previousValue.current = value;
                } catch (error) {
                    console.warn('RippleNumber: Invalid value provided', value);
                }
            }
        }
    }["RippleNumber.useEffect"], [
        value,
        decimals,
        rippleDelay,
        duration,
        prefersReducedMotion
    ]);
    const formattedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RippleNumber.useMemo[formattedValue]": ()=>{
            try {
                return Number(value).toFixed(decimals);
            } catch  {
                return '0'.repeat(decimals + 2);
            }
        }
    }["RippleNumber.useMemo[formattedValue]"], [
        value,
        decimals
    ]);
    const [integerPart, decimalPart] = formattedValue.split('.');
    const allDigits = [
        ...integerPart.split(''),
        '.',
        ...decimalPart.split('')
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex ripple-effect ${className}`,
        children: allDigits.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative overflow-hidden ripple-digit ${animatingDigits.has(index) ? 'rippling' : ''}`,
                style: {
                    minWidth: digit === '.' ? '4px' : '0.6em'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `
              font-numbers block text-center transform-gpu transition-all ease-out
              ${animatingDigits.has(index) && !prefersReducedMotion ? 'animate-ripple-glow' : ''}
            `,
                    style: {
                        transform: animatingDigits.has(index) && !prefersReducedMotion ? 'translateY(-8px) scale(1.15)' : 'translateY(0) scale(1)',
                        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                        filter: animatingDigits.has(index) && !prefersReducedMotion ? 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4))' : 'none',
                        textShadow: animatingDigits.has(index) && !prefersReducedMotion ? '0 0 10px rgba(59, 130, 246, 0.6)' : 'none'
                    },
                    children: digit
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 485,
                    columnNumber: 21
                }, this)
            }, index, false, {
                fileName: "[project]/src/components/Animation.js",
                lineNumber: 480,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Animation.js",
        lineNumber: 478,
        columnNumber: 9
    }, this);
}, "sdDBYlVK8vkFKXDrNIxU4bSyIVM=", false, function() {
    return [
        useReducedMotion
    ];
}));
_c3 = RippleNumber;
RippleNumber.displayName = 'RippleNumber';
// Updated LiveActivityNumber with enhanced features
const LiveActivityNumber = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c4 = _s5(({ value, type = "cascade-slide", decimals = 3, className = "", showChangeIndicator = true, minDigits = 1, direction = "right-to-left", theme = "default", onValueChange, errorFallback = "---" })=>{
    _s5();
    // Error boundary สำหรับ invalid values
    const safeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LiveActivityNumber.useMemo[safeValue]": ()=>{
            if (typeof value !== 'number' || !isFinite(value)) {
                console.warn('LiveActivityNumber: Invalid value provided, using fallback');
                return 0;
            }
            return value;
        }
    }["LiveActivityNumber.useMemo[safeValue]"], [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveActivityNumber.useEffect": ()=>{
            onValueChange?.(safeValue);
        }
    }["LiveActivityNumber.useEffect"], [
        safeValue,
        onValueChange
    ]);
    const commonProps = {
        value: safeValue,
        decimals,
        className,
        minDigits
    };
    try {
        switch(type){
            case "cascade-slide":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CascadeNumber, {
                    ...commonProps,
                    animationType: "slide",
                    direction: direction,
                    staggerDelay: 80,
                    duration: 500,
                    showChangeIndicator: showChangeIndicator,
                    theme: theme
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 550,
                    columnNumber: 21
                }, this);
            case "cascade-flip":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CascadeNumber, {
                    ...commonProps,
                    animationType: "flip",
                    direction: direction,
                    staggerDelay: 100,
                    duration: 600,
                    showChangeIndicator: showChangeIndicator,
                    theme: theme
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 562,
                    columnNumber: 21
                }, this);
            case "cascade-fade":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CascadeNumber, {
                    ...commonProps,
                    animationType: "fade",
                    direction: direction,
                    staggerDelay: 70,
                    duration: 450,
                    showChangeIndicator: showChangeIndicator,
                    theme: theme
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 574,
                    columnNumber: 21
                }, this);
            case "wave":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveNumber, {
                    ...commonProps,
                    waveDelay: 60,
                    duration: 600
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 586,
                    columnNumber: 21
                }, this);
            case "ripple":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RippleNumber, {
                    ...commonProps,
                    rippleDelay: 50,
                    duration: 800
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 594,
                    columnNumber: 21
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-numbers ${className}`,
                    children: safeValue.toFixed(decimals)
                }, void 0, false, {
                    fileName: "[project]/src/components/Animation.js",
                    lineNumber: 601,
                    columnNumber: 24
                }, this);
        }
    } catch (error) {
        console.error('LiveActivityNumber: Render error', error);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `font-numbers ${className}`,
            children: errorFallback
        }, void 0, false, {
            fileName: "[project]/src/components/Animation.js",
            lineNumber: 605,
            columnNumber: 16
        }, this);
    }
}, "7w20BO7TMq6WC3cE0ea/PWTW8/0=")), "7w20BO7TMq6WC3cE0ea/PWTW8/0=");
_c5 = LiveActivityNumber;
LiveActivityNumber.displayName = 'LiveActivityNumber';
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "CascadeDigit");
__turbopack_refresh__.register(_c1, "CascadeNumber");
__turbopack_refresh__.register(_c2, "WaveNumber");
__turbopack_refresh__.register(_c3, "RippleNumber");
__turbopack_refresh__.register(_c4, "LiveActivityNumber$React.memo");
__turbopack_refresh__.register(_c5, "LiveActivityNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MonitoringInterface.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Footer": (()=>Footer),
    "Header": (()=>Header),
    "HistorySection": (()=>HistorySection),
    "MapSection": (()=>MapSection),
    "MonitoringPanel": (()=>MonitoringPanel),
    "SimpleChevronBar": (()=>SimpleChevronBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"); // เพิ่ม import สำหรับ Portal เพื่อแก้ปัญหา z-index
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/monitoring-data.js [app-client] (ecmascript)");
// Import Live Activity Animation Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
__turbopack_require__("[project]/src/components/MapComponents.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
// Helper function สำหรับกำหนดระดับความเสี่ยงสำหรับกลุ่มต่างๆ
// ฟังก์ชันนี้จะช่วยในการคำนวณสถานะคุณภาพอากาศสำหรับกลุ่มผู้ใช้แต่ละประเภท
const getAirQualityForGroup = (pc01, pm01, pm25, pm100, groupType = 'general')=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineAirQuality"])(pc01, pm01, pm25, pm100);
};
// Header Component - ส่วนหัวของหน้าเว็บที่มี navigation และ logo
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 h-18 sm:h-20 bg-green-100 border-b border-green-100 flex-shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-between px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 sm:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/assets/images/logo.png",
                                alt: "Mupcop logo",
                                className: "w-20 h-20 sm:w-24 sm:h-24 object-contain",
                                width: 96,
                                height: 96
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat",
                                    children: "Mupcop"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base sm:text-lg lg:text-xl font-light text-black max-w-xl font-montserrat",
                                    children: "Multi-factor ultrafine particle optimization prediction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden sm:flex items-center gap-4 sm:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "px-4 py-2 text-lg sm:text-xl lg:text-2xl font-semibold text-black rounded-lg hover:bg-green-200 transition-colors font-montserrat",
                            children: "Air quality"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/history-data",
                            className: "px-4 py-2 text-lg sm:text-xl lg:text-2xl font-semibold text-black rounded-lg hover:bg-green-200 transition-colors font-montserrat",
                            children: "History data"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "sm:hidden",
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 66,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 66,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
// MonitoringPanel Component - component หลักสำหรับแสดงข้อมูลการตรวจวัด
// component นี้จะรับ props เกี่ยวกับตำแหน่งที่เลือกและฟังก์ชันสำหรับล้างการเลือก
const MonitoringPanel = ({ selectedLocation, onLocationClear })=>{
    _s1();
    // State สำหรับจัดการ modal popup ของคำแนะนำ
    const [showRecommendationPopup, setShowRecommendationPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRecommendations, setSelectedRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedGroupType, setSelectedGroupType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    // ใช้ custom hooks สำหรับดึงข้อมูลจาก Firebase
    // hooks เหล่านี้จะส่งคืน object ที่มี data, loading, และ error state
    const { data: defaultData, loading: defaultLoading, error: defaultError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitoringData"])();
    const { data: locationData, loading: locationLoading, error: locationError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationMonitoringData"])(selectedLocation);
    // เลือกข้อมูลที่จะใช้แสดงผลขึ้นอยู่กับว่าผู้ใช้เลือกตำแหน่งหรือไม่
    // หากเลือกตำแหน่งจะใช้ข้อมูลของตำแหน่งนั้น หากไม่เลือกจะใช้ข้อมูล default
    const data = selectedLocation ? locationData : defaultData;
    const loading = selectedLocation ? locationLoading : defaultLoading;
    const error = selectedLocation ? locationError : defaultError;
    // ตรวจสอบความถูกต้องของข้อมูลก่อนนำไปใช้แสดงผล
    // การตรวจสอบนี้จำเป็นเพื่อป้องกัน runtime errors เมื่อข้อมูลไม่ครบถ้วน
    const isDataValid = data && data.pmReadings && Array.isArray(data.pmReadings);
    const statusColor = isDataValid ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAirQualityColor"])(data.mainReading?.status || 'Good') : '#2DC653';
    // ฟังก์ชันปลอดภัยสำหรับดึงค่า PM จาก array ของ readings
    // ฟังก์ชันนี้จะคืนค่า 0 หากไม่พบข้อมูลหรือข้อมูลไม่ถูกต้อง
    const getSafeValue = (readings, type)=>{
        if (!readings || !Array.isArray(readings)) return 0;
        const reading = readings.find((r)=>r && r.type === type);
        return parseFloat(reading?.value || 0) || 0;
    };
    // คำนวณสถานะคุณภาพอากาศสำหรับกลุ่มต่างๆ
    // ฟังก์ชันนี้จะใช้ข้อมูล PM ทั้งหมดมาคำนวณสถานะโดยรวม
    const calculateGroupStatus = (groupType = 'general')=>{
        if (!isDataValid) return 'Good';
        const pc01Value = getSafeValue(data.pmReadings, 'PC01');
        const pm01Value = getSafeValue(data.pmReadings, 'PM0.1');
        const pm25Value = getSafeValue(data.pmReadings, 'PM2.5');
        const pm10Value = getSafeValue(data.pmReadings, 'PM10');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineAirQuality"])(pc01Value, pm01Value, pm25Value, pm10Value);
    };
    // คำนวณสถานะสำหรับทั้งสองกลุ่ม
    const sensitiveStatus = calculateGroupStatus('sensitive');
    const generalStatus = calculateGroupStatus('general');
    // จัดการการคลิกปุ่มคำแนะนำ
    // ฟังก์ชันนี้จะดึงคำแนะนำที่เหมาะสมตามกลุ่มและสถานะคุณภาพอากาศ
    const handleRecommendationClick = (groupType)=>{
        const status = groupType === 'sensitive' ? sensitiveStatus : generalStatus;
        const recommendations = groupType === 'sensitive' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSensitiveRecommendations"])(status) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGeneralRecommendations"])(status);
        setSelectedRecommendations(recommendations);
        setSelectedGroupType(groupType);
        setShowRecommendationPopup(true);
    };
    // ฟังก์ชันสำหรับปิด modal popup
    const closePopup = ()=>{
        setShowRecommendationPopup(false);
        setSelectedRecommendations([]);
    };
    // จัดการการกด Escape key เพื่อปิด modal
    // useEffect นี้จะเพิ่ม event listener เมื่อ modal เปิดและลบออกเมื่อปิด
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MonitoringPanel.useEffect": ()=>{
            const handleEscapeKey = {
                "MonitoringPanel.useEffect.handleEscapeKey": (event)=>{
                    if (event.key === 'Escape' && showRecommendationPopup) {
                        closePopup();
                    }
                }
            }["MonitoringPanel.useEffect.handleEscapeKey"];
            if (showRecommendationPopup) {
                document.addEventListener('keydown', handleEscapeKey);
                // ป้องกันการ scroll ของ body เมื่อ modal เปิด
                document.body.style.overflow = 'hidden';
            } else {
                // คืนค่า scroll ของ body เมื่อ modal ปิด
                document.body.style.overflow = 'unset';
            }
            // cleanup function จะทำงานเมื่อ component unmount หรือ dependencies เปลี่ยน
            return ({
                "MonitoringPanel.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscapeKey);
                    document.body.style.overflow = 'unset';
                }
            })["MonitoringPanel.useEffect"];
        }
    }["MonitoringPanel.useEffect"], [
        showRecommendationPopup
    ]);
    // แสดง loading state ขณะที่ข้อมูลกำลังถูกดึงจาก Firebase
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mb-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-gray-600 font-sarabun",
                        children: "กำลังโหลดข้อมูล..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 169,
            columnNumber: 7
        }, this);
    }
    // แสดง error state หากเกิดปัญหาในการดึงข้อมูล
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-500 mb-3",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-red-600 font-sarabun",
                        children: [
                            "เกิดข้อผิดพลาด: ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        className: "mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",
                        children: "รีเฟรช"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 181,
            columnNumber: 7
        }, this);
    }
    // แสดง no data state หากไม่มีข้อมูล
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400 mb-3",
                        children: "📭"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-gray-600 font-sarabun",
                        children: "ไม่มีข้อมูล"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 199,
            columnNumber: 7
        }, this);
    }
    // แสดงเนื้อหาหลักของ component
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-black font-montserrat",
                                children: "UFPs Monitoring"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            selectedLocation && onLocationClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLocationClear,
                                className: "text-base sm:text-lg text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors font-sarabun",
                                children: "× ล้าง"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black font-montserrat",
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base sm:text-lg lg:text-xl text-black font-numbers",
                                        children: data.date || 'N/A'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-base sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-4 h-4 sm:w-5 sm:h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate text-base sm:text-lg lg:text-xl font-sarabun",
                                                    children: selectedLocation ? selectedLocation.name : data.location || "Cafe Amazon สาขา ST"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base sm:text-lg lg:text-xl text-gray-500 sm:ml-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-sarabun",
                                                    children: "อัพเดท: "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-numbers",
                                                    children: data.time || 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex rounded-lg mb-3 sm:mb-4 shadow-sm overflow-hidden min-h-[140px] sm:min-h-[160px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[50%] sm:w-[45%] p-2 sm:p-3 flex flex-col justify-center relative",
                                        style: {
                                            backgroundColor: statusColor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black bg-opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-2 text-white opacity-90 font-montserrat",
                                                        children: data.mainReading?.type || 'PC0.1'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 261,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 leading-tight",
                                                        style: {
                                                            textShadow: '3px 3px 6px rgba(75, 64, 64, 0.8)'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                            value: data.mainReading?.value || getSafeValue(data.pmReadings, 'PC01'),
                                                            type: "cascade-slide",
                                                            decimals: 0,
                                                            className: "text-white",
                                                            showChangeIndicator: true,
                                                            minDigits: 1,
                                                            direction: "right-to-left"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 264,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white opacity-90 font-montserrat",
                                                        children: data.mainReading?.unit || 'PNC'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 275,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[50%] sm:w-[55%] flex flex-col",
                                        style: {
                                            backgroundColor: statusColor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleRecommendationClick('sensitive'),
                                                className: "flex-1 flex items-center gap-2 sm:gap-3 p-2 sm:p-3 transition-all hover:bg-black hover:bg-opacity-10 border-b border-white/20 focus:outline-none focus:bg-black focus:bg-opacity-20",
                                                "aria-label": "ดูคำแนะนำสำหรับกลุ่มเปราะบาง",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 ml-2 sm:ml-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-white drop-shadow-lg",
                                                            style: {
                                                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                                                            },
                                                            children: "shield_person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 293,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 text-center min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs sm:text-sm lg:text-xl font-semibold text-white opacity-90 mb-1 font-sarabun",
                                                                children: "กลุ่มเปราะบาง"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 304,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm sm:text-base lg:text-xl xl:text-3xl font-bold text-white truncate font-montserrat",
                                                                style: {
                                                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                                                                },
                                                                children: sensitiveStatus
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 307,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 303,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 text-white text-sm sm:text-base opacity-60",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 311,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleRecommendationClick('general'),
                                                className: "flex-1 flex items-center gap-2 sm:gap-3 p-2 sm:p-3 transition-all hover:bg-black hover:bg-opacity-10 focus:outline-none focus:bg-black focus:bg-opacity-20",
                                                "aria-label": "ดูคำแนะนำสำหรับคนทั่วไป",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 ml-2 sm:ml-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-white drop-shadow-lg",
                                                            style: {
                                                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                                                            },
                                                            children: "person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 323,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 322,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 text-center min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs sm:text-sm lg:text-xl font-semibold text-white opacity-90 mb-1 font-sarabun",
                                                                children: "กลุ่มคนทั่วไป"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 334,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm sm:text-base lg:text-xl xl:text-3xl font-bold text-white truncate font-montserrat",
                                                                style: {
                                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                                                },
                                                                children: generalStatus
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 337,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 333,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 text-white text-sm sm:text-base opacity-60",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 341,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center gap-8 sm:gap-12 text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 py-3 sm:py-4 bg-gray-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/temperature.png",
                                                alt: "Temperature",
                                                className: "w-8 h-8 sm:w-10 sm:h-10",
                                                onError: (e)=>{
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'inline';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-500",
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                value: parseFloat(data.conditions?.temperature?.replace(/[^\d.-]/g, '')) || 25.5,
                                                type: "cascade-slide",
                                                decimals: 1,
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl",
                                                showChangeIndicator: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat",
                                                children: "°C"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/humidity.png",
                                                alt: "Humidity",
                                                className: "w-8 h-8 sm:w-10 sm:h-10",
                                                onError: (e)=>{
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'inline';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-500",
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                value: parseFloat(data.conditions?.humidity?.replace(/[^\d.-]/g, '')) || 65,
                                                type: "cascade-slide",
                                                decimals: 0,
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl",
                                                showChangeIndicator: false,
                                                direction: "left-to-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat",
                                                children: "%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 pt-2 sm:pt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center items-center gap-3 sm:gap-4 p-1 flex-wrap",
                                            children: (data.recommendations || []).slice(0, 5).map((recommendation, index)=>{
                                                const iconPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommendationIcon"])(recommendation);
                                                const isImageIcon = typeof iconPath === 'string' && iconPath.startsWith('/assets/images/');
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        isImageIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: iconPath,
                                                            alt: "",
                                                            className: "w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7",
                                                            onError: (e)=>{
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'inline';
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 407,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm sm:text-base lg:text-lg",
                                                            children: iconPath
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 417,
                                                            columnNumber: 25
                                                        }, this),
                                                        isImageIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                display: 'none'
                                                            },
                                                            className: "text-sm sm:text-base lg:text-lg",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 420,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm lg:text-base text-gray-500 mt-1 font-sarabun",
                                            children: "คลิกที่ bubble สีด้านบนเพื่อดูคำแนะนำสำหรับแต่ละกลุ่ม"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-gray-100 mb-2 sm:mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 mb-2 sm:mb-3 font-sarabun",
                                children: "ข้อมูลมลพิษทางอากาศ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1 sm:gap-2",
                                children: isDataValid ? (()=>{
                                    // กรองเฉพาะ PM2.5 และ PM10 สำหรับแสดงผลในส่วนนี้
                                    // วิธีการนี้จะค้นหาข้อมูล PM2.5 และ PM10 โดยตรงจาก array ของ readings
                                    const pm25Reading = data.pmReadings.find((r)=>r && r.type === 'PM2.5');
                                    const pm10Reading = data.pmReadings.find((r)=>r && r.type === 'PM10');
                                    // Debug logging เพื่อช่วยในการตรวจสอบข้อมูล
                                    console.log('=== PM SUMMARY CARD DEBUG ===');
                                    console.log('All PM Readings:', data.pmReadings);
                                    console.log('PM2.5 Reading:', pm25Reading);
                                    console.log('PM10 Reading:', pm10Reading);
                                    console.log('============================');
                                    // สร้าง array ของข้อมูลที่จะแสดง โดยกรองเอาเฉพาะข้อมูลที่มีจริง
                                    const pmDataToShow = [
                                        pm25Reading,
                                        pm10Reading
                                    ].filter(Boolean);
                                    return pmDataToShow.length > 0 ? pmDataToShow.map((reading, index)=>{
                                        // แปลงค่าให้เป็นตัวเลขโดยจัดการกับ data types ต่างๆ
                                        let numericValue = 0;
                                        if (typeof reading.value === 'number') {
                                            numericValue = reading.value;
                                        } else if (reading.value !== undefined) {
                                            // ลบอักขระที่ไม่ใช่ตัวเลข จุดทศนิยม และเครื่องหมายลบออก
                                            numericValue = parseFloat(String(reading.value).replace(/[^\d.-]/g, '')) || 0;
                                        }
                                        // คำนวณสถานะคุณภาพอากาศสำหรับการ์ดแต่ละใบ
                                        // การคำนวณนี้จะใช้ข้อมูล PM ทั้งหมดเพื่อให้ได้สถานะที่แม่นยำ
                                        const pc01Value = getSafeValue(data.pmReadings, 'PC01');
                                        const pm01Value = getSafeValue(data.pmReadings, 'PM0.1');
                                        const pm25Value = reading.type === 'PM2.5' ? numericValue : getSafeValue(data.pmReadings, 'PM2.5');
                                        const pm10Value = reading.type === 'PM10' ? numericValue : getSafeValue(data.pmReadings, 'PM10');
                                        const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineAirQuality"])(pc01Value, pm01Value, pm25Value, pm10Value);
                                        const bgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAirQualityColor"])(status);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg p-1 sm:p-2 text-white text-center",
                                            style: {
                                                backgroundColor: bgColor
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm sm:text-base lg:text-lg font-medium mb-1 opacity-90 font-montserrat",
                                                    children: reading.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 480,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg sm:text-2xl lg:text-3xl font-bold",
                                                    style: {
                                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                        value: numericValue,
                                                        type: "cascade-slide",
                                                        decimals: 2,
                                                        className: "text-white",
                                                        showChangeIndicator: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 485,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 484,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs sm:text-sm lg:text-base opacity-90 font-montserrat",
                                                    children: "μg/m³"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 494,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `${reading.type}-${selectedLocation?.id || 'default'}-${index}`, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 475,
                                            columnNumber: 21
                                        }, this);
                                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 text-center text-xs sm:text-sm text-gray-500 py-4 font-sarabun",
                                        children: "ไม่พบข้อมูล PM2.5 และ PM10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 500,
                                        columnNumber: 19
                                    }, this);
                                })() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 text-center text-xs sm:text-sm text-gray-500 py-4 font-sarabun",
                                    children: "ไม่มีข้อมูลมลพิษในขณะนี้"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleChevronBar, {}, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 514,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            showRecommendationPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center",
                style: {
                    zIndex: 9999,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' // backdrop overlay
                },
                onClick: closePopup,
                role: "dialog" // accessibility attribute
                ,
                "aria-modal": "true",
                "aria-labelledby": "modal-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg max-w-xl w-full mx-4 max-h-[75vh] overflow-y-auto shadow-2xl",
                    style: {
                        zIndex: 10000,
                        transform: 'translateZ(0)' // สร้าง stacking context ใหม่
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 sm:p-6 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "modal-title",
                                    className: "text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 font-sarabun",
                                    children: [
                                        "คำแนะนำสำหรับ",
                                        selectedGroupType === 'sensitive' ? 'กลุ่มเปราะบาง' : 'คนทั่วไป'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closePopup,
                                    className: "text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold transition-colors duration-200 p-1 rounded-md hover:bg-gray-100",
                                    "aria-label": "ปิดหน้าต่าง",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 548,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 text-base sm:text-lg lg:text-xl text-gray-600 font-sarabun",
                                    children: [
                                        "📍 ",
                                        selectedLocation ? selectedLocation.name : data.location || "Cafe Amazon สาขา ST"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: selectedRecommendations.map((recommendation, index)=>{
                                        const iconPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommendationIcon"])(recommendation);
                                        const isImageIcon = typeof iconPath === 'string' && iconPath.startsWith('/assets/images/');
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg transition-colors duration-200 hover:bg-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0",
                                                    children: [
                                                        isImageIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: iconPath,
                                                            alt: "",
                                                            className: "w-6 h-6 sm:w-8 sm:h-8",
                                                            onError: (e)=>{
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'inline';
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 585,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg sm:text-xl",
                                                            children: iconPath
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 595,
                                                            columnNumber: 27
                                                        }, this),
                                                        isImageIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                display: 'none'
                                                            },
                                                            className: "text-lg sm:text-xl",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 598,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 583,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-sarabun",
                                                    children: recommendation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 603,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `popup-rec-${index}`, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 578,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 565,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closePopup,
                                className: "w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-lg sm:text-xl lg:text-2xl font-medium font-sarabun focus:outline-none focus:ring-4 focus:ring-green-300",
                                children: "ปิด"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 614,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 613,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 539,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 528,
                columnNumber: 9
            }, this), document.body // render ไปยัง document.body แทนที่จะอยู่ใน component tree
            )
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 210,
        columnNumber: 5
    }, this);
};
_s1(MonitoringPanel, "0oksxyTocKOwrPVKRcfvgklCSpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitoringData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationMonitoringData"]
    ];
});
_c1 = MonitoringPanel;
// ส่วนแสดงแผนที่ (ด้านขวาบน)
const MapSection = ({ selectedLocation, onLocationSelect })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 p-4 h-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 mb-2 sm:mb-3 font-sarabun",
                        children: "แผนที่ตำแหน่งตรวจวัด"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500 font-sarabun",
                        children: "คลิกที่หมุดเพื่อดูข้อมูล"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 635,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[calc(100%-60px)] bg-gray-100 rounded-lg border border-gray-200 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponentWrapper, {
                    onLocationSelect: onLocationSelect
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 643,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 641,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 632,
        columnNumber: 5
    }, this);
};
_c2 = MapSection;
// Wrapper component สำหรับ MapComponent ที่ใช้ dynamic import
const MapComponentWrapper = ({ onLocationSelect })=>{
    _s2();
    const [MapComponents, setMapComponents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapComponentWrapper.useEffect": ()=>{
            // Dynamic import เพื่อหลีกเลี่ยง SSR issues กับ Leaflet
            __turbopack_require__("[project]/src/components/MapComponents.js [app-client] (ecmascript, async loader)")(__turbopack_import__).then({
                "MapComponentWrapper.useEffect": (module)=>{
                    setMapComponents({
                        "MapComponentWrapper.useEffect": ()=>module.default
                    }["MapComponentWrapper.useEffect"]);
                }
            }["MapComponentWrapper.useEffect"]);
        }
    }["MapComponentWrapper.useEffect"], []);
    if (!MapComponents) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-sarabun",
                        children: "กำลังโหลดแผนที่..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 665,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 663,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 662,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponents, {
        onLocationSelect: onLocationSelect
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 671,
        columnNumber: 10
    }, this);
};
_s2(MapComponentWrapper, "bnQQgAcxlWygp+4l4DTLFFTwaW4=");
_c3 = MapComponentWrapper;
// ส่วนแสดงข้อมูล History (ด้านขวาล่าง)
const HistorySection = ({ selectedLocation })=>{
    _s3();
    const [selectedParameter, setSelectedParameter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PM2.5');
    // Mock data สำหรับ History - ในการใช้งานจริงควรดึงจาก Firebase
    const historyData = [
        {
            time: '15:00',
            pm01: 19.8,
            pm25: 31.2,
            pm10: 58.7,
            status: 'Moderate'
        },
        {
            time: '14:00',
            pm01: 15.2,
            pm25: 25.1,
            pm10: 45.3,
            status: 'Good'
        },
        {
            time: '13:00',
            pm01: 18.5,
            pm25: 28.7,
            pm10: 52.1,
            status: 'Moderate'
        },
        {
            time: '12:00',
            pm01: 12.8,
            pm25: 22.3,
            pm10: 38.9,
            status: 'Good'
        },
        {
            time: '11:00',
            pm01: 21.3,
            pm25: 35.2,
            pm10: 68.4,
            status: 'Unhealthy for Sensitive Groups'
        },
        {
            time: '10:00',
            pm01: 16.7,
            pm25: 30.1,
            pm10: 55.8,
            status: 'Moderate'
        },
        {
            time: '09:00',
            pm01: 14.2,
            pm25: 24.6,
            pm10: 42.1,
            status: 'Good'
        },
        {
            time: '08:00',
            pm01: 13.5,
            pm25: 23.8,
            pm10: 41.2,
            status: 'Good'
        },
        {
            time: '07:00',
            pm01: 17.1,
            pm25: 29.4,
            pm10: 54.3,
            status: 'Moderate'
        },
        {
            time: '06:00',
            pm01: 22.4,
            pm25: 37.8,
            pm10: 72.1,
            status: 'Unhealthy for Sensitive Groups'
        },
        {
            time: '05:00',
            pm01: 20.3,
            pm25: 34.6,
            pm10: 65.9,
            status: 'Unhealthy for Sensitive Groups'
        },
        {
            time: '04:00',
            pm01: 18.9,
            pm25: 32.1,
            pm10: 61.4,
            status: 'Moderate'
        },
        {
            time: '03:00',
            pm01: 16.1,
            pm25: 28.9,
            pm10: 53.7,
            status: 'Moderate'
        },
        {
            time: '02:00',
            pm01: 19.5,
            pm25: 33.2,
            pm10: 62.8,
            status: 'Moderate'
        },
        {
            time: '01:00',
            pm01: 23.7,
            pm25: 39.1,
            pm10: 74.3,
            status: 'Unhealthy for Sensitive Groups'
        },
        {
            time: '00:00',
            pm01: 21.2,
            pm25: 36.4,
            pm10: 69.1,
            status: 'Unhealthy for Sensitive Groups'
        }
    ];
    // เตรียมข้อมูลสำหรับกราฟ
    const chartData = historyData.map((item)=>({
            time: item.time,
            value: item[selectedParameter.toLowerCase().replace('.', '')]
        })).reverse(); // ย้อนกลับเพื่อให้เรียงจากเก่าไปใหม่
    const getMaxValue = ()=>{
        return Math.max(...chartData.map((d)=>d.value)) * 1.1;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 font-sarabun",
                                children: "ข้อมูลย้อนหลัง"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 716,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-sarabun",
                                                children: [
                                                    historyData.length,
                                                    " ชั่วโมงล่าสุด"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 715,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/history-data",
                                        className: "flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-sarabun",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 723,
                                                columnNumber: 15
                                            }, this),
                                            "ดูทั้งหมด"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 719,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 714,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 712,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-blue-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 732,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sarabun",
                                    children: [
                                        "ตำแหน่ง: ",
                                        selectedLocation ? selectedLocation.name : "Cafe Amazon สาขา ST"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 733,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 731,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 730,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700 font-sarabun",
                                        children: "แสดงข้อมูล:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 742,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedParameter,
                                        onChange: (e)=>setSelectedParameter(e.target.value),
                                        className: "px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm font-montserrat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PC0.1",
                                                children: "PC0.1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 748,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PM0.1",
                                                children: "PM0.1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 749,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PM2.5",
                                                children: "PM2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 750,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PM10",
                                                children: "PM10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 751,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 743,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 741,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 font-sarabun",
                                children: "หน่วย: μg/m³"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 754,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 740,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 711,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 bg-gray-50 rounded-lg p-4 h-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-full h-full",
                                children: [
                                    [
                                        0,
                                        25,
                                        50,
                                        75,
                                        100
                                    ].map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "0",
                                                    y1: `${100 - value}%`,
                                                    x2: "100%",
                                                    y2: `${100 - value}%`,
                                                    stroke: "#e5e7eb",
                                                    strokeWidth: "1",
                                                    strokeDasharray: "2,2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 769,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "5",
                                                    y: `${100 - value}%`,
                                                    dy: "-3",
                                                    fontSize: "10",
                                                    fill: "#6b7280",
                                                    className: "font-numbers",
                                                    children: Math.round(getMaxValue() * value / 100)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 778,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 768,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        fill: "none",
                                        stroke: "#3b82f6",
                                        strokeWidth: "2",
                                        points: chartData.map((d, i)=>`${i / (chartData.length - 1) * 100}%,${100 - d.value / getMaxValue() * 100}%`).join(' ')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 792,
                                        columnNumber: 15
                                    }, this),
                                    chartData.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: `${i / (chartData.length - 1) * 100}%`,
                                                    cy: `${100 - d.value / getMaxValue() * 100}%`,
                                                    r: "3",
                                                    fill: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 804,
                                                    columnNumber: 19
                                                }, this),
                                                i % Math.ceil(chartData.length / 8) === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: `${i / (chartData.length - 1) * 100}%`,
                                                    y: "100%",
                                                    dy: "-5",
                                                    textAnchor: "middle",
                                                    fontSize: "10",
                                                    fill: "#6b7280",
                                                    className: "font-numbers",
                                                    children: d.time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 812,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 803,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 765,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 764,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 763,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg border border-gray-200 overflow-hidden mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-96 overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50 sticky top-0 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-3 py-2 text-left text-xs font-medium text-gray-700 font-sarabun",
                                                    children: "เวลา"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 836,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat",
                                                    children: "PM0.1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 837,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat",
                                                    children: "PM2.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat",
                                                    children: "PM10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 839,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-sarabun",
                                                    children: "สถานะ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 840,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-sarabun",
                                                    children: "แนวโน้ม"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 841,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 835,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 834,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-gray-200",
                                        children: historyData.map((data, index)=>{
                                            const statusColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAirQualityColor"])(data.status);
                                            const isLatest = index === 0;
                                            const prevData = index < historyData.length - 1 ? historyData[index + 1] : null;
                                            const trend = prevData ? data.pm25 > prevData.pm25 ? 'up' : data.pm25 < prevData.pm25 ? 'down' : 'stable' : 'stable';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `hover:bg-gray-50 transition-colors ${isLatest ? 'bg-green-50' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-2 text-xs text-gray-900 font-numbers",
                                                        children: [
                                                            data.time,
                                                            isLatest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-1 inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 font-sarabun",
                                                                children: "ล่าสุด"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 856,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 853,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-2 text-xs text-center font-numbers",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                            value: data.pm01,
                                                            type: "cascade-slide",
                                                            decimals: 1,
                                                            className: "text-gray-900",
                                                            showChangeIndicator: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 862,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 861,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-2 text-xs text-center font-numbers",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                            value: data.pm25,
                                                            type: "cascade-slide",
                                                            decimals: 1,
                                                            className: "text-gray-900",
                                                            showChangeIndicator: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 871,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 870,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-2 text-xs text-center font-numbers",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                            value: data.pm10,
                                                            type: "cascade-slide",
                                                            decimals: 1,
                                                            className: "text-gray-900",
                                                            showChangeIndicator: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 880,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 879,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-2 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center px-1 py-0.5 rounded text-xs font-medium text-white font-montserrat",
                                                            style: {
                                                                backgroundColor: statusColor
                                                            },
                                                            children: data.status === 'Unhealthy for Sensitive Groups' ? 'Unhealthy*' : data.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 889,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 888,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-2 text-center",
                                                        children: [
                                                            trend === 'up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                className: "w-3 h-3 text-red-500 mx-auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 898,
                                                                columnNumber: 27
                                                            }, this),
                                                            trend === 'down' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                className: "w-3 h-3 text-green-500 mx-auto transform rotate-180"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 901,
                                                                columnNumber: 27
                                                            }, this),
                                                            trend === 'stable' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-3 h-0.5 bg-gray-400 mx-auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 904,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 896,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, `${data.time}-${index}`, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 852,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 844,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 833,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 832,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-blue-600 font-sarabun",
                                        children: "ค่าเฉลี่ย"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 918,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-blue-800 font-numbers",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                value: historyData.reduce((sum, d)=>sum + d[selectedParameter.toLowerCase().replace('.', '')], 0) / historyData.length,
                                                type: "cascade-slide",
                                                decimals: 1,
                                                className: "text-blue-800",
                                                showChangeIndicator: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 920,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-xs font-montserrat",
                                                children: "μg/m³"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 927,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 919,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 917,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border border-green-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-green-600 font-sarabun",
                                        children: "ต่ำสุด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 932,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-green-800 font-numbers",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                value: Math.min(...historyData.map((d)=>d[selectedParameter.toLowerCase().replace('.', '')])),
                                                type: "cascade-slide",
                                                decimals: 1,
                                                className: "text-green-800",
                                                showChangeIndicator: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 934,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-xs font-montserrat",
                                                children: "μg/m³"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 941,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 933,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 931,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-orange-600 font-sarabun",
                                        children: "สูงสุด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 946,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-orange-800 font-numbers",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                value: Math.max(...historyData.map((d)=>d[selectedParameter.toLowerCase().replace('.', '')])),
                                                type: "cascade-slide",
                                                decimals: 1,
                                                className: "text-orange-800",
                                                showChangeIndicator: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 948,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-xs font-montserrat",
                                                children: "μg/m³"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 955,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 947,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 945,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 916,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-blue-50 border border-blue-200 rounded-lg mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-blue-800 font-sarabun",
                            children: [
                                "💡 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "การใช้งาน:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 963,
                                    columnNumber: 16
                                }, this),
                                " เลื่อนตารางเพื่อดูข้อมูลย้อนหลัง หรือเลือก Parameter ที่ต้องการดูในกราฟและสถิติ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 962,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 961,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 761,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 709,
        columnNumber: 5
    }, this);
};
_s3(HistorySection, "JnxPOrs+MHmcLozG3PU+FC9D6ok=");
_c4 = HistorySection;
// Export all components ให้สามารถนำไปใช้ในไฟล์อื่นได้
const SimpleChevronBar = ()=>{
    const levels = [
        {
            label: 'Good',
            color: '#2DC653',
            thai: 'ดี'
        },
        {
            label: 'Warning',
            color: '#FECF3E',
            thai: 'ปานกลาง'
        },
        {
            label: 'Affect health',
            color: '#FF9500',
            thai: 'มีผลต่อสุขภาพ'
        },
        {
            label: 'Danger',
            color: '#D02224',
            thai: 'อันตราย'
        },
        {
            label: 'Hazardous',
            color: '#973AA8',
            thai: 'เป็นอันตรายร้ายแรง'
        }
    ];
    const chevronWidth = 130; // ขยายความกว้างแต่ละบาร์
    const chevronHeight = 50;
    const svgWidth = chevronWidth * levels.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 mb-3 sm:mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-base sm:text-lg lg:text-2xl font-medium text-gray-800 mb-3 font-sarabun",
                children: "ระดับคุณภาพอากาศ"
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 987,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${svgWidth} ${chevronHeight}`,
                    className: "w-full h-12 sm:h-14",
                    children: levels.map((level, index)=>{
                        const x = index * chevronWidth;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M ${x} 5 
          L ${x + chevronWidth - 10} 5 
          L ${x + chevronWidth} 25 
          L ${x + chevronWidth - 10} 45 
          L ${x} 45 
          ${index > 0 ? `L ${x + 10} 25` : `L ${x} 25`} 
          Z`,
                                    fill: level.color,
                                    stroke: "rgba(255,255,255,0.5)",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 996,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: x + chevronWidth / 2,
                                    y: "28",
                                    textAnchor: "middle",
                                    fill: "white",
                                    fontSize: "15",
                                    fontWeight: "600",
                                    className: "font-montserrat",
                                    style: {
                                        textShadow: '1px 1px 1px rgba(0,0,0,0.8)'
                                    },
                                    children: level.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 1008,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, level.label, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 995,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 991,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 990,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 gap-1 text-center",
                children: levels.map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-base sm:text-lg font-sarabun text-gray-700 break-words",
                        style: {
                            minWidth: 0,
                            wordBreak: 'break-word'
                        },
                        children: level.thai
                    }, `simple-${level.label}`, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 1028,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 1026,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 986,
        columnNumber: 5
    }, this);
};
_c5 = SimpleChevronBar;
// Footer Component - ส่วนท้ายของหน้าเว็บ
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "h-18 sm:h-20 bg-green-100 border-t border-green-100 flex-shrink-0 flex items-center justify-between p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-montserrat",
                children: "Created by Jaejae Dream Yok ❤️"
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 1044,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 sm:gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/images/logo.png",
                            alt: "Mupcop logo",
                            className: "w-20 h-20 sm:w-24 sm:h-24 object-contain",
                            width: 96,
                            height: 96
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 1047,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 1046,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat",
                            children: "Mupcop"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 1056,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 1055,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 1045,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 1043,
        columnNumber: 3
    }, this);
_c6 = Footer;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_refresh__.register(_c, "Header");
__turbopack_refresh__.register(_c1, "MonitoringPanel");
__turbopack_refresh__.register(_c2, "MapSection");
__turbopack_refresh__.register(_c3, "MapComponentWrapper");
__turbopack_refresh__.register(_c4, "HistorySection");
__turbopack_refresh__.register(_c5, "SimpleChevronBar");
__turbopack_refresh__.register(_c6, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ClientWrapper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/components/ClientWrapper.js - Fixed version
__turbopack_esm__({
    "ClientWrapper": (()=>ClientWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
// Dynamically import MapComponent to avoid SSR issues
// แก้ไข path ให้ถูกต้อง - ใช้ MapComponent แทน MapComponents
const MapComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/src/components/MapComponents.js [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/components/ClientWrapper.js -> " + "./MapComponents"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-sarabun text-gray-600",
                        children: "กำลังโหลดแผนที่..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-sarabun text-gray-500 mt-2",
                        children: "กรุณารอสักครู่"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClientWrapper.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ClientWrapper.js",
            lineNumber: 12,
            columnNumber: 5
        }, this)
});
_c = MapComponent;
function ClientWrapper({ onLocationSelect }) {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientWrapper.useEffect": ()=>{
            setIsClient(true);
        }
    }["ClientWrapper.useEffect"], []);
    const handleLocationSelect = (locationData)=>{
        console.log('=== CLIENT WRAPPER DEBUG ===');
        console.log('Location selected in ClientWrapper:', locationData);
        console.log('Location ID:', locationData?.id);
        console.log('Location Name:', locationData?.name);
        console.log('onLocationSelect function exists:', !!onLocationSelect);
        console.log('============================');
        if (onLocationSelect && typeof onLocationSelect === 'function') {
            onLocationSelect(locationData);
        }
    };
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-sarabun text-gray-600",
                        children: "กำลังเตรียมแผนที่..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.js",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-sarabun text-gray-500 mt-2",
                        children: "กำลังตรวจสอบสภาพแวดล้อม"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.js",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClientWrapper.js",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ClientWrapper.js",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponent, {
            onLocationSelect: handleLocationSelect
        }, void 0, false, {
            fileName: "[project]/src/components/ClientWrapper.js",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ClientWrapper.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ClientWrapper, "k460N28PNzD7zo1YW47Q9UigQis=");
_c1 = ClientWrapper;
var _c, _c1;
__turbopack_refresh__.register(_c, "MapComponent");
__turbopack_refresh__.register(_c1, "ClientWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/app/page.js - แก้ไขให้ UFPs Panel sticky ด้านซ้าย
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MonitoringInterface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ClientWrapper.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function Home() {
    _s();
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLocationSelect = (locationData)=>{
        console.log('=== PAGE.JS DEBUG ===');
        console.log('Location selected in page.js:', locationData);
        console.log('Location ID:', locationData?.id);
        console.log('Location Name:', locationData?.name);
        console.log('Has rawDataPath:', !!locationData?.rawDataPath);
        console.log('Full locationData:', locationData);
        console.log('==================');
        setSelectedLocation(locationData);
    };
    const handleLocationClear = ()=>{
        console.log('Location cleared in page.js');
        setSelectedLocation(null);
    };
    console.log('Page.js current selectedLocation:', selectedLocation);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-r border-gray-100 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonitoringPanel"], {
                            selectedLocation: selectedLocation,
                            onLocationClear: handleLocationClear
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-[400px] lg:min-h-[500px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapSection"], {
                                    selectedLocation: selectedLocation,
                                    onLocationSelect: handleLocationSelect
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-[600px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistorySection"], {
                                    selectedLocation: selectedLocation
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Home, "pGedlDpRVZiPTL4140bC/BFKe+Y=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_de37eb._.js.map