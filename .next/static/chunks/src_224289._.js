(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_224289._.js", {

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
        // Cafe ใช้ Piera data
        dataSource: 'piera',
        pieraUserId: 'gdRueJtWeNaMleXbEf4rWfuD6Kr1',
        pieraPath: '',
        rawDataPath: 'Cafe' // สำหรับอุณหภูมิ/ความชื้น
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
    "formatPMValue": (()=>formatPMValue),
    "getAirQualityColor": (()=>getAirQualityColor),
    "getGeneralRecommendations": (()=>getGeneralRecommendations),
    "getRecommendationIcon": (()=>getRecommendationIcon),
    "getSensitiveRecommendations": (()=>getSensitiveRecommendations),
    "useC4MonitoringData": (()=>useC4MonitoringData),
    "useLocationMonitoringData": (()=>useLocationMonitoringData),
    "useMonitoringData": (()=>useMonitoringData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/firebase-configs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
//  Use Firebase configuration from config file and change based on location
const firebaseConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_CONFIGS"]['cafe-amazon-st'].firebaseConfig || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_CONFIGS"]['building-c4'].firebaseConfig;
// Initialize Firebase (ใช้ project เดียว)
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDatabase"])(app);
// Constants
const FIREBASE_USER_ID = 'gdRueJtWeNaMleXbEf4rWfuD6Kr1';
const PIERA_PATH = 'Piera/';
const RAW_PATH = 'RAWdata/';
// Helper functions - ปรับให้ใช้ local time
const getCurrentDatePath = ()=>{
    // ใช้ local time แทน UTC
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};
const getCurrentTime = ()=>{
    // ใช้ local time แทน UTC
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};
const formatDisplayDate = (date)=>{
    // รับ Date object หรือสร้างใหม่ถ้าไม่มี
    const targetDate = date || new Date();
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    const day = targetDate.getDate().toString().padStart(2, '0');
    const year = targetDate.getFullYear();
    return `${month}/${day}/${year}`;
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
const getRecommendationIcon = (recommendation)=>{
    // ตรวจสอบคำหลักในคำแนะนำและส่งคืน path ของรูปภาพที่เหมาะสม
    const text = recommendation.toLowerCase();
    if (text.includes('ไม่มีผลต่อสุขภาพ') && text.includes('ใช้ชีวิตได้ตามปกติ')) {
        return '/assets/images/work.png';
    }
    // ไอคอนสำหรับการเปิดหน้าต่างระบายอากาศ
    if (text.includes('เปิดหน้าต่างระบายอากาศ')) {
        return '/assets/images/window.png';
    }
    // ไอคอนสำหรับการปิดหน้าต่าง
    if (text.includes('ปิดหน้าต่าง')) {
        return '/assets/images/window.png';
    }
    // ไอคอนสำหรับกลุ่มเปราะบาง/การสังเกตอาการ (รวมหลายเงื่อนไข)
    if (text.includes('สังเกตอาการของตนเอง') || text.includes('กลุ่มเปราะบาง') || text.includes('กลุ่มคนทั่วไป') || text.includes('ความเสี่ยง')) {
        return '/assets/images/irritation.png';
    }
    // ไอคอนสำหรับการหลีกเลี่ยง/งดกิจกรรม (รวมหลายเงื่อนไข)
    if (text.includes('งดการทำกิจกรรมหรือเข้าใกล้พื้นที่ที่มีฝุ่น') || text.includes('หลีกเลี่ยงการทำกิจกรรมที่ก่อให้เกิดฝุ่น')) {
        return '/assets/images/no-dust.png';
    }
    // ไอคอนสำหรับยาและอุปกรณ์การแพทย์
    if (text.includes('เตรียมยาหรืออุปกรณ์ตามคำสั่งแพทย์')) {
        return '/assets/images/medicine.png';
    }
    // ไอคอนสำหรับเครื่องฟอกอากาศ
    if (text.includes('ติดตั้งเครื่องฟอกอากาศ')) {
        return '/assets/images/air-purifier.png';
    }
    // ไอคอนสำหรับการไปพบแพทย์/โรงพยาบาล
    if (text.includes('หากมีอาการให้ไปพบแพทย์') || text.includes('ไปพบแพทย์')) {
        return '/assets/images/Doctor.png';
    }
    // ไอคอนสำหรับการโหลดข้อมูล
    if (text.includes('กำลังโหลด') || text.includes('กำลังวิเคราะห์') || text.includes('กำลังประมวลผล')) {
        return '⏳';
    }
    // ไอคอนเริ่มต้น
    return '•';
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
    // ใช้ threshold เดียวกันสำหรับ pm25 และ pm10
    if (pc01 <= PM_THRESHOLDS.PC01.Good || pm01 <= PM_THRESHOLDS.PM01.Good || pm25 <= PM_THRESHOLDS.PM.Good || pm10 <= PM_THRESHOLDS.PM.Good) {
        return "Good";
    } else if (pc01 <= PM_THRESHOLDS.PC01.Warning || pm01 <= PM_THRESHOLDS.PM01.Warning || pm25 <= PM_THRESHOLDS.PM.Warning || pm10 <= PM_THRESHOLDS.PM.Warning) {
        return "Warning";
    } else if (pc01 <= PM_THRESHOLDS.PC01['Affects health'] || pm01 <= PM_THRESHOLDS.PM01['Affects health'] || pm25 <= PM_THRESHOLDS.PM['Affects health'] || pm10 <= PM_THRESHOLDS.PM['Affects health']) {
        return "Affects health";
    } else if (pc01 <= PM_THRESHOLDS.PC01.Danger || pm01 <= PM_THRESHOLDS.PM01.Danger || pm25 <= PM_THRESHOLDS.PM.Danger || pm10 <= PM_THRESHOLDS.PM.Danger) {
        return "Danger";
    } else {
        return "Hazardous";
    }
};
const useMonitoringData = ()=>{
    _s();
    return useLocationMonitoringData({
        id: 'cafe-amazon-st',
        name: 'Cafe Amazon สาขา ST',
        dataSource: 'piera',
        pieraUserId: 'gdRueJtWeNaMleXbEf4rWfuD6Kr1',
        pieraPath: '',
        rawDataPath: 'Cafe'
    });
};
_s(useMonitoringData, "LNpFy6hpQvvL/JSrmhjWrjoF/Vw=", false, function() {
    return [
        useLocationMonitoringData
    ];
});
const useC4MonitoringData = ()=>{
    _s1();
    return useLocationMonitoringData({
        id: 'building-c4',
        name: 'อาคารวิชาการ 4',
        dataSource: 'raw',
        pieraUserId: null,
        pieraPath: null,
        rawDataPath: 'Lab' // ใช้ RAWdata/Lab สำหรับทุกอย่าง
    });
};
_s1(useC4MonitoringData, "LNpFy6hpQvvL/JSrmhjWrjoF/Vw=", false, function() {
    return [
        useLocationMonitoringData
    ];
});
const useLocationMonitoringData = (locationData)=>{
    _s2();
    const [monitoringData, setMonitoringData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        date: formatDisplayDate(new Date()),
        time: getCurrentTime(),
        locationName: locationData?.name || "กำลังโหลด...",
        mainReading: {
            type: "PM0.1",
            value: 0,
            unit: "μg/m³",
            status: "Good",
            note: "Initializing..."
        },
        conditions: {
            temperature: "Loading...",
            humidity: "Loading..."
        },
        pmReadings: [
            {
                type: "PM0.1",
                value: "Loading..."
            },
            {
                type: "PM2.5",
                value: "Loading..."
            },
            {
                type: "PM10",
                value: "Loading..."
            }
        ],
        recommendations: [
            "กำลังโหลดข้อมูล...",
            "กำลังเชื่อมต่อกับ Firebase...",
            "โปรดรอสักครู่..."
        ]
    });
    // Debugging log
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocationMonitoringData.useEffect": ()=>{
            if (!locationData || !locationData.rawDataPath) {
                console.error('Missing locationData or rawDataPath:', locationData);
                return;
            }
            const datePath = getCurrentDatePath();
            const dataSource = locationData.dataSource || 'piera'; // default เป็น piera
            console.log('=== LOCATION DATA DEBUG ===');
            console.log('Location:', locationData.name);
            console.log('Data Source:', dataSource);
            console.log('Raw Data Path:', locationData.rawDataPath);
            if (dataSource === 'piera') {
                // ===== CAFE AMAZON: ใช้ Piera data สำหรับ PM + RAWdata สำหรับอุณหภูมิ/ความชื้น =====
                const pieraUserId = locationData.pieraUserId;
                const pieraSubPath = locationData.pieraPath || '';
                const pieraDataPath = pieraSubPath ? `/${PIERA_PATH}/${pieraUserId}/${pieraSubPath}/${datePath}` : `/${PIERA_PATH}/${pieraUserId}/${datePath}`;
                const rawFirebasePath = `/${RAW_PATH}${locationData.rawDataPath}/${datePath}`;
                console.log('Cafe - Piera path:', pieraDataPath);
                console.log('Cafe - RAW path for temp/humidity:', rawFirebasePath);
                // Query สำหรับ Piera data (PM values)
                const pieraQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, pieraDataPath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
                const pieraUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(pieraQuery, {
                    "useLocationMonitoringData.useEffect.pieraUnsubscribe": (snapshot)=>{
                        const timeData = snapshot.val();
                        console.log('Cafe - Piera data received:', timeData);
                        if (timeData) {
                            const latestTime = Object.keys(timeData)[0];
                            const data = timeData[latestTime];
                            if (data) {
                                const pm01 = parseFloat(data.PM01 || 0);
                                const pm25 = parseFloat(data.PM25 || 0);
                                const pm10 = parseFloat(data.PM100 || 0);
                                const airQualityStatus = determineAirQuality(pm01, pm25, pm10);
                                const recommendations = getRecommendations(airQualityStatus);
                                console.log('Cafe - PM values:', {
                                    PM01: pm01,
                                    PM25: pm25,
                                    PM100: pm10
                                });
                                setMonitoringData({
                                    "useLocationMonitoringData.useEffect.pieraUnsubscribe": (prev)=>({
                                            ...prev,
                                            date: formatDisplayDate(new Date()),
                                            time: latestTime,
                                            locationName: locationData.name,
                                            mainReading: {
                                                type: "PM0.1",
                                                value: pm01,
                                                unit: "μg/m³",
                                                status: airQualityStatus,
                                                note: "Piera Data"
                                            },
                                            pmReadings: [
                                                {
                                                    type: "PM0.1",
                                                    value: pm01
                                                },
                                                {
                                                    type: "PM2.5",
                                                    value: pm25
                                                },
                                                {
                                                    type: "PM10",
                                                    value: pm10
                                                }
                                            ],
                                            recommendations
                                        })
                                }["useLocationMonitoringData.useEffect.pieraUnsubscribe"]);
                            }
                        } else {
                            console.log('No Piera data found for Cafe');
                        }
                    }
                }["useLocationMonitoringData.useEffect.pieraUnsubscribe"]);
                // Query สำหรับ RAW data (Temperature/Humidity)
                const rawQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, rawFirebasePath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
                const rawUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(rawQuery, {
                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (snapshot)=>{
                        const timeData = snapshot.val();
                        console.log('Cafe - RAW data received:', timeData);
                        if (timeData) {
                            const allKeys = Object.keys(timeData);
                            const sortedKeys = allKeys.sort();
                            const latestTime = sortedKeys[sortedKeys.length - 1];
                            const data = timeData[latestTime];
                            if (data) {
                                setMonitoringData({
                                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (prevData)=>({
                                            ...prevData,
                                            conditions: {
                                                temperature: data.IndoorTemperature !== undefined ? `${data.IndoorTemperature}°C` : "N/A",
                                                humidity: data.IndoorHumidity !== undefined ? `${data.IndoorHumidity}%` : "N/A"
                                            }
                                        })
                                }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
                            }
                        }
                    }
                }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
                return ({
                    "useLocationMonitoringData.useEffect": ()=>{
                        pieraUnsubscribe();
                        rawUnsubscribe();
                    }
                })["useLocationMonitoringData.useEffect"];
            } else if (dataSource === 'raw') {
                // ===== อาคารวิชาการ 4: ใช้ RAWdata สำหรับทั้ง PM และ อุณหภูมิ/ความชื้น =====
                const rawFirebasePath = `/${RAW_PATH}${locationData.rawDataPath}/${datePath}`;
                console.log('C4 - RAW path for all data:', rawFirebasePath);
                // ลองดึงจาก Firebase
                const rawQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, rawFirebasePath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
                const rawUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(rawQuery, {
                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (snapshot)=>{
                        const timeData = snapshot.val();
                        console.log('C4 - RAW data from Firebase:', timeData);
                        if (timeData) {
                            const latestTime = Object.keys(timeData)[0];
                            const data = timeData[latestTime];
                            if (data) {
                                console.log('C4 - พบข้อมูลจริงใน Firebase!');
                                const pm01 = parseFloat(data.PM01 || 0);
                                const pm25 = parseFloat(data.PM25 || 0);
                                const pm10 = parseFloat(data.PM10 || 0);
                                const airQualityStatus = determineAirQuality(pm01, pm25, pm10);
                                const recommendations = getRecommendations(airQualityStatus);
                                setMonitoringData({
                                    "useLocationMonitoringData.useEffect.rawUnsubscribe": (prev)=>({
                                            ...prev,
                                            date: formatDisplayDate(new Date()),
                                            time: latestTime,
                                            locationName: locationData.name,
                                            mainReading: {
                                                type: "PM0.1",
                                                value: pm01,
                                                unit: "μg/m³",
                                                status: airQualityStatus,
                                                note: "Real Data - C4"
                                            },
                                            pmReadings: [
                                                {
                                                    type: "PM0.1",
                                                    value: pm01
                                                },
                                                {
                                                    type: "PM2.5",
                                                    value: pm25
                                                },
                                                {
                                                    type: "PM10",
                                                    value: pm10
                                                }
                                            ],
                                            conditions: {
                                                temperature: data.IndoorTemperature !== undefined ? `${data.IndoorTemperature}°C` : "N/A",
                                                humidity: data.IndoorHumidity !== undefined ? `${data.IndoorHumidity}%` : "N/A"
                                            },
                                            recommendations
                                        })
                                }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
                            }
                        } else {
                            console.log('C4 - ไม่พบข้อมูลใน Firebase');
                        }
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
    return monitoringData;
};
_s2(useLocationMonitoringData, "II06MZQTUxgEgcZzoWYk1Iv90Ck=");
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
                "หลีกเลี่ยงการทำกิจกรรมที่ก่อให้เกิดฝุ่นและลังเกตอาการผิดปกติของตนเอง"
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
                "ปิดหน้าต่าง และหลีกเลี่ยงการถ่ายเทอากาศจากภานอก",
                "สังเกตอาการของตนเอง หากมีอาการควรไปพบแพทย์"
            ];
        case 'Danger':
            return [
                "มีความเสี่ยงต่อการระคายเคืองอย่างรุนแรงต่อดวงตา ผิวหนัง และลำคอ รวมถึงปัญหาระบบทางเดินหายใจ",
                "หลีกเลี่ยงพื้นที่ หรือการทำกิจกรรมที่ก่อให้เกิดฝุ่น ",
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
// ฟังก์ชันเดิมสำหรับ backward compatibility (ใช้คำแนะนำสำหรับคนทั่วไป)
const getRecommendations = (airQualityStatus)=>{
    return getGeneralRecommendations(airQualityStatus);
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
"[project]/src/components/MapComponents.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/firebase-configs.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const WALAILAK_COORDS = [
    8.64437496101933,
    99.89929488155569
];
const WALAILAK_C4 = [
    8.638222,
    99.897976
];
const DEFAULT_ZOOM = 16.5;
const SEARCH_DELAY = 500;
const MIN_SEARCH_LENGTH = 3;
// ใช้ LOCATION_CONFIGS จาก firebase-configs.js
const LOCATION_DATA = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_CONFIGS"];
const MapComponents = ({ onLocationSelect })=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null) // เพิ่ม ref สำหรับ container
    ;
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const initialMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]) // เก็บ markers เริ่มต้นแยกต่างหาก
    ;
    const searchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(`map-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`) // สร้าง unique ID
    ;
    // Handle marker click
    const handleMarkerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapComponents.useCallback[handleMarkerClick]": (locationId)=>{
            console.log('=== MAP COMPONENT DEBUG ===');
            console.log('Marker clicked for locationId:', locationId);
            console.log('Available LOCATION_DATA:', Object.keys(LOCATION_DATA));
            const locationData = LOCATION_DATA[locationId];
            console.log('Found locationData:', locationData);
            console.log('onLocationSelect function:', typeof onLocationSelect);
            console.log('==========================');
            if (locationData && onLocationSelect) {
                onLocationSelect(locationData);
            }
        }
    }["MapComponents.useCallback[handleMarkerClick]"], [
        onLocationSelect
    ]);
    // Handle location selection
    const goToLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapComponents.useCallback[goToLocation]": (lat, lon, name)=>{
            if (!mapRef.current) return;
            mapRef.current.setView([
                lat,
                lon
            ], DEFAULT_ZOOM);
            // Clear only search markers (not initial markers)
            markersRef.current.forEach({
                "MapComponents.useCallback[goToLocation]": (marker)=>marker.remove()
            }["MapComponents.useCallback[goToLocation]"]);
            markersRef.current = [];
            // Add new search result marker
            const newMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                lat,
                lon
            ]).addTo(mapRef.current).bindTooltip(name, {
                permanent: true,
                direction: 'center',
                offset: [
                    0,
                    0
                ],
                className: 'custom-tooltip'
            });
            markersRef.current.push(newMarker);
            // Clear search
            const searchInput = containerRef.current?.querySelector('#searchInput');
            const searchResults = containerRef.current?.querySelector('#searchResults');
            if (searchResults) searchResults.innerHTML = '';
            if (searchInput) searchInput.value = '';
        }
    }["MapComponents.useCallback[goToLocation]"], []);
    // Handle search input
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapComponents.useCallback[handleSearch]": async (query)=>{
            const searchResults = containerRef.current?.querySelector('#searchResults');
            if (!searchResults) return;
            if (query.length < MIN_SEARCH_LENGTH) {
                searchResults.innerHTML = '';
                return;
            }
            searchResults.innerHTML = '<div class="p-2 text-gray-500 text-sm">กำลังค้นหา...</div>';
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
                const data = await response.json();
                if (data.length === 0) {
                    searchResults.innerHTML = '<div class="p-2 text-gray-500 text-sm">ไม่พบผลการค้นหา</div>';
                    return;
                }
                searchResults.innerHTML = data.slice(0, 5).map({
                    "MapComponents.useCallback[handleSearch]": (result)=>`
          <div 
            class="p-2 hover:bg-gray-100 cursor-pointer text-sm" 
            data-lat="${result.lat}" 
            data-lon="${result.lon}" 
            data-name="${result.display_name.replace(/"/g, '&quot;')}"
          >
            ${result.display_name}
          </div>
        `
                }["MapComponents.useCallback[handleSearch]"]).join('');
                // Add click handlers to search results
                const resultElements = searchResults.querySelectorAll('[data-lat]');
                resultElements.forEach({
                    "MapComponents.useCallback[handleSearch]": (element)=>{
                        element.addEventListener('click', {
                            "MapComponents.useCallback[handleSearch]": ()=>{
                                const lat = parseFloat(element.dataset.lat);
                                const lon = parseFloat(element.dataset.lon);
                                const name = element.dataset.name;
                                goToLocation(lat, lon, name);
                            }
                        }["MapComponents.useCallback[handleSearch]"]);
                    }
                }["MapComponents.useCallback[handleSearch]"]);
            } catch (error) {
                console.error('Search error:', error);
                searchResults.innerHTML = '<div class="p-2 text-red-500 text-sm">เกิดข้อผิดพลาดในการค้นหา</div>';
            }
        }
    }["MapComponents.useCallback[handleSearch]"], [
        goToLocation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapComponents.useEffect": ()=>{
            // ป้องกันการสร้าง map ซ้ำ
            if (mapRef.current || !containerRef.current) return;
            const mapId = mapIdRef.current;
            const mapContainer = containerRef.current.querySelector('.map-container');
            if (!mapContainer) return;
            console.log('Initializing map with ID:', mapId);
            try {
                // สร้าง map instance
                const mapInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapContainer, {
                    zoomControl: false,
                    attributionControl: false
                }).setView(WALAILAK_COORDS, DEFAULT_ZOOM);
                mapRef.current = mapInstance;
                // Add zoom control
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.zoom({
                    position: 'bottomright'
                }).addTo(mapInstance);
                // Add attribution control
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.attribution({
                    position: 'bottomleft',
                    prefix: 'Leaflet | © OpenStreetMap'
                }).addTo(mapInstance);
                // Add tile layer
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap contributors'
                }).addTo(mapInstance);
                // Add custom CSS for tooltips
                if (!document.getElementById('map-styles')) {
                    const style = document.createElement('style');
                    style.id = 'map-styles';
                    style.textContent = `
          .custom-tooltip {
            background-color: rgba(0, 0, 0, 0.8) !important;
            border: none !important;
            border-radius: 6px !important;
            color: white !important;
            font-size: 12px !important;
            font-weight: bold !important;
            padding: 4px 8px !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
            white-space: nowrap !important;
          }
          .custom-tooltip::before {
            display: none !important;
          }
          .clickable-marker {
            cursor: pointer !important;
          }
          .clickable-marker:active {
            opacity: 0.8 !important;
          }
          .leaflet-tooltip {
            transition: opacity 0.2s ease !important;
          }
        `;
                    document.head.appendChild(style);
                }
                // Add initial Walailak markers
                const initialMarker1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(WALAILAK_COORDS).addTo(mapInstance).bindTooltip("Cafe Amazon สาขา ST", {
                    permanent: true,
                    direction: 'center',
                    offset: [
                        0,
                        0
                    ],
                    className: 'custom-tooltip'
                }).on('click', {
                    "MapComponents.useEffect.initialMarker1": ()=>handleMarkerClick('cafe-amazon-st')
                }["MapComponents.useEffect.initialMarker1"]);
                const initialMarker2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(WALAILAK_C4).addTo(mapInstance).bindTooltip("อาคารวิชาการ 4", {
                    permanent: true,
                    direction: 'center',
                    offset: [
                        0,
                        0
                    ],
                    className: 'custom-tooltip'
                }).on('click', {
                    "MapComponents.useEffect.initialMarker2": ()=>handleMarkerClick('building-c4')
                }["MapComponents.useEffect.initialMarker2"]);
                // เพิ่ม CSS class สำหรับ clickable markers
                setTimeout({
                    "MapComponents.useEffect": ()=>{
                        const marker1Element = initialMarker1.getElement();
                        const marker2Element = initialMarker2.getElement();
                        if (marker1Element) {
                            marker1Element.classList.add('clickable-marker');
                            marker1Element.setAttribute('title', 'คลิกเพื่อดูข้อมูล Cafe Amazon สาขา ST');
                        }
                        if (marker2Element) {
                            marker2Element.classList.add('clickable-marker');
                            marker2Element.setAttribute('title', 'คลิกเพื่อดูข้อมูลอาคารวิชาการ 4');
                        }
                    }
                }["MapComponents.useEffect"], 100);
                // เก็บ initial markers
                initialMarkersRef.current = [
                    initialMarker1,
                    initialMarker2
                ];
                // Add search control
                const searchControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control({
                    position: 'topright'
                });
                searchControl.onAdd = ({
                    "MapComponents.useEffect": function() {
                        const div = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomUtil.create('div', 'leaflet-control leaflet-bar');
                        div.innerHTML = `
          <div class="p-2 bg-white rounded-lg shadow-lg" style="min-width: 200px;">
            <input 
              type="text" 
              id="searchInput" 
              placeholder="ค้นหาสถานที่..." 
              class="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div id="searchResults" class="mt-1 max-h-40 overflow-y-auto bg-white rounded-lg"></div>
          </div>
        `;
                        return div;
                    }
                })["MapComponents.useEffect"];
                searchControl.addTo(mapInstance);
                // Set up search input handler
                setTimeout({
                    "MapComponents.useEffect": ()=>{
                        const searchInput = containerRef.current?.querySelector('#searchInput');
                        if (searchInput) {
                            searchInput.addEventListener('input', {
                                "MapComponents.useEffect": (e)=>{
                                    if (searchTimeoutRef.current) {
                                        clearTimeout(searchTimeoutRef.current);
                                    }
                                    searchTimeoutRef.current = setTimeout({
                                        "MapComponents.useEffect": ()=>handleSearch(e.target.value)
                                    }["MapComponents.useEffect"], SEARCH_DELAY);
                                }
                            }["MapComponents.useEffect"]);
                            // Prevent map movement when interacting with search
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomEvent.disableClickPropagation(searchInput);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomEvent.disableScrollPropagation(searchInput);
                        }
                    }
                }["MapComponents.useEffect"], 100);
                // Handle resize
                const handleResize = {
                    "MapComponents.useEffect.handleResize": ()=>{
                        if (mapInstance) {
                            mapInstance.invalidateSize();
                        }
                    }
                }["MapComponents.useEffect.handleResize"];
                window.addEventListener('resize', handleResize);
                // Force resize after a short delay to ensure proper sizing
                setTimeout(handleResize, 100);
                console.log('Map initialized successfully');
                // Cleanup function
                return ({
                    "MapComponents.useEffect": ()=>{
                        console.log('Cleaning up map');
                        window.removeEventListener('resize', handleResize);
                        if (searchTimeoutRef.current) {
                            clearTimeout(searchTimeoutRef.current);
                        }
                        // ลบ markers
                        initialMarkersRef.current.forEach({
                            "MapComponents.useEffect": (marker)=>marker.remove()
                        }["MapComponents.useEffect"]);
                        initialMarkersRef.current = [];
                        markersRef.current.forEach({
                            "MapComponents.useEffect": (marker)=>marker.remove()
                        }["MapComponents.useEffect"]);
                        markersRef.current = [];
                        if (mapRef.current) {
                            mapRef.current.remove();
                            mapRef.current = null;
                        }
                    }
                })["MapComponents.useEffect"];
            } catch (error) {
                console.error('Error initializing map:', error);
            }
        }
    }["MapComponents.useEffect"], [
        handleSearch,
        handleMarkerClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full relative",
        style: {
            position: 'relative'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "map-container w-full h-full",
            style: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0
            }
        }, void 0, false, {
            fileName: "[project]/src/components/MapComponents.js",
            lineNumber: 313,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MapComponents.js",
        lineNumber: 308,
        columnNumber: 5
    }, this);
};
_s(MapComponents, "iJgcTA0aQvvPcLgLqP4q6hiz5zA=");
_c = MapComponents;
const __TURBOPACK__default__export__ = MapComponents;
var _c;
__turbopack_refresh__.register(_c, "MapComponents");
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
    "MonitoringPanel": (()=>MonitoringPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/monitoring-data.js [app-client] (ecmascript)");
// Import Live Activity Animation Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MapComponents.js [app-client] (ecmascript)");
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
// Helper function เพื่อกำหนดระดับความเสี่ยงสำหรับกลุ่มต่างๆ
const getAirQualityForGroup = (pc01, pm01, pm25, pm100, groupType = 'general')=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineAirQuality"])(pc01, pm01, pm25, pm100);
};
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-18 sm:h-20 bg-green-100 border-b border-green-100 flex-shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-between px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 sm:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 sm:w-18 sm:h-18 flex-shrink-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/assets/images/logo.png",
                                alt: "Mupcop logo",
                                className: "w-14 h-14 sm:w-16 sm:h-16 object-contain",
                                width: 64,
                                height: 64
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat",
                                    children: "Mupcop"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base sm:text-lg lg:text-xl font-light text-black max-w-xl font-montserrat",
                                    children: "Multi-factor ultrafine particle optimization prediction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 32,
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
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/history-data",
                            className: "px-4 py-2 text-lg sm:text-xl lg:text-2xl font-semibold text-black rounded-lg hover:bg-green-200 transition-colors font-montserrat",
                            children: "History data"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "sm:hidden",
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 63,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 63,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
const MonitoringPanel = ({ selectedLocation, onLocationClear })=>{
    _s1();
    const [showRecommendationPopup, setShowRecommendationPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRecommendations, setSelectedRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedGroupType, setSelectedGroupType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    const defaultData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitoringData"])();
    const locationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationMonitoringData"])(selectedLocation);
    const data = selectedLocation ? locationData : defaultData;
    const statusColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAirQualityColor"])(data.mainReading.status);
    // คำนวณระดับสำหรับแต่ละกลุ่ม
    const sensitiveStatus = data.pmReadings ? getAirQualityForGroup(parseFloat(data.pmReadings.find((r)=>r.type === 'PM0.1')?.value || 0), parseFloat(data.pmReadings.find((r)=>r.type === 'PM2.5')?.value || 0), parseFloat(data.pmReadings.find((r)=>r.type === 'PM10')?.value || 0), 'sensitive') : 'Good';
    const generalStatus = data.pmReadings ? getAirQualityForGroup(parseFloat(data.pmReadings.find((r)=>r.type === 'PM0.1')?.value || 0), parseFloat(data.pmReadings.find((r)=>r.type === 'PM2.5')?.value || 0), parseFloat(data.pmReadings.find((r)=>r.type === 'PM10')?.value || 0), 'general') : 'Good';
    const handleRecommendationClick = (groupType)=>{
        const recommendations = groupType === 'sensitive' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSensitiveRecommendations"])(sensitiveStatus) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGeneralRecommendations"])(generalStatus);
        setSelectedRecommendations(recommendations);
        setSelectedGroupType(groupType);
        setShowRecommendationPopup(true);
    };
    const closePopup = ()=>{
        setShowRecommendationPopup(false);
        setSelectedRecommendations([]);
    };
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg sm:text-xl text-gray-600 font-sarabun",
                    children: "กำลังโหลดข้อมูล..."
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full lg:w-1/3 bg-white border-r border-gray-100 overflow-auto relative",
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
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            selectedLocation && onLocationClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLocationClear,
                                className: "text-base sm:text-lg text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors font-sarabun",
                                children: "× ล้าง"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 123,
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
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black font-montserrat",
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base sm:text-lg lg:text-xl text-black font-numbers",
                                        children: data.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 137,
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
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate text-base sm:text-lg lg:text-xl font-sarabun",
                                                    children: selectedLocation ? selectedLocation.name : "Cafe Amazon สาขา ST"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 148,
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
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-numbers",
                                                    children: data.time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 146,
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
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-2 text-white opacity-90 font-montserrat",
                                                        children: data.mainReading.type || 'PM0.1'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 leading-tight",
                                                        style: {
                                                            textShadow: '3px 3px 6px rgba(75, 64, 64, 0.8)'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                            value: parseFloat(data.mainReading.value) || 0,
                                                            type: "cascade-slide",
                                                            decimals: data.mainReading.type === 'PM0.1' ? 3 : 1,
                                                            className: "text-white",
                                                            showChangeIndicator: true,
                                                            minDigits: 1,
                                                            direction: "right-to-left"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white opacity-90 font-montserrat",
                                                        children: data.mainReading.unit
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 187,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 164,
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
                                                className: "flex-1 flex items-center gap-2 sm:gap-3 p-2 sm:p-3 transition-all hover:bg-black hover:bg-opacity-10 border-b border-white/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 ml-2 sm:ml-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-person-exclamation text-white text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 204,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 203,
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
                                                                lineNumber: 207,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm sm:text-base lg:text-lg xl:text-3xl font-bold text-white truncate font-montserrat",
                                                                style: {
                                                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                                                                },
                                                                children: sensitiveStatus
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 210,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 text-white text-sm sm:text-base opacity-60",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 214,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleRecommendationClick('general'),
                                                className: "flex-1 flex items-center gap-2 sm:gap-3 p-2 sm:p-3 transition-all hover:bg-black hover:bg-opacity-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 ml-2 sm:ml-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "bi bi-person-check text-white text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 225,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 224,
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
                                                                lineNumber: 228,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm sm:text-base lg:text-2lg xl:text-3xl font-bold text-white truncate font-montserrat",
                                                                style: {
                                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                                                },
                                                                children: generalStatus
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                                lineNumber: 231,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 text-white text-sm sm:text-base opacity-60",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 235,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 162,
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
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-500",
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                value: parseFloat(data.conditions.temperature?.replace(/[^\d.-]/g, '')) || 25.5,
                                                type: "cascade-slide",
                                                decimals: 1,
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl",
                                                showChangeIndicator: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat",
                                                children: "°C"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 245,
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
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-500",
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                value: parseFloat(data.conditions.humidity?.replace(/[^\d.-]/g, '')) || 65,
                                                type: "cascade-slide",
                                                decimals: 0,
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl",
                                                showChangeIndicator: false,
                                                direction: "left-to-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat",
                                                children: "%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 pt-2 sm:pt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center items-center gap-3 sm:gap-4 p-1 flex-wrap",
                                            children: data.recommendations.slice(0, 5).map((recommendation, index)=>{
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
                                                            lineNumber: 301,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm sm:text-base lg:text-lg",
                                                            children: iconPath
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 311,
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
                                                            lineNumber: 314,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 299,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm lg:text-base text-gray-500 mt-1 font-sarabun",
                                            children: "คลิกที่ bubble สีด้านบนเพื่อดูคำแนะนำสำหรับแต่ละกลุ่ม"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 136,
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
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1 sm:gap-2",
                                children: data.pmReadings && data.pmReadings.length > 0 ? data.pmReadings.filter((reading)=>reading.type === 'PM2.5' || reading.type === 'PM10').map((reading, index)=>{
                                    if (!reading || !reading.type || reading.value === undefined) {
                                        return null;
                                    }
                                    let numericValue;
                                    if (typeof reading.value === 'number') {
                                        numericValue = reading.value;
                                    } else {
                                        numericValue = parseFloat(reading.value.toString().replace(/[^\d.-]/g, ''));
                                    }
                                    if (isNaN(numericValue)) {
                                        return null;
                                    }
                                    const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineAirQuality"])(parseFloat(data.pmReadings.find((r)=>r.type === 'PM0.1')?.value || 0), reading.type === 'PM2.5' ? numericValue : parseFloat(data.pmReadings.find((r)=>r.type === 'PM2.5')?.value || 0), reading.type === 'PM10' ? numericValue : parseFloat(data.pmReadings.find((r)=>r.type === 'PM10')?.value || 0));
                                    const bgColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAirQualityColor"])(status);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg p-1 sm:p-2 text-white text-center",
                                        style: {
                                            backgroundColor: bgColor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl sm:text-xl font-medium mb-1 opacity-90 font-montserrat",
                                                children: reading.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 364,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base sm:text-3xl font-bold",
                                                style: {
                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                    value: numericValue,
                                                    type: "cascade-slide",
                                                    decimals: 3,
                                                    className: "text-white text-base sm:text-3xl font-bold",
                                                    showChangeIndicator: false
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 367,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 366,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl sm:text-xl opacity-90 font-montserrat",
                                                children: "μg/m³"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 376,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, `${reading.type}-${selectedLocation?.id || 'default'}-${index}`, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 359,
                                        columnNumber: 21
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 text-center text-xs sm:text-sm text-gray-500 py-4 font-sarabun",
                                    children: "ไม่มีข้อมููลมลพิษในขณะนี้"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-base sm:text-lg lg:text-xl text-yellow-800 font-sarabun",
                            children: [
                                "💡 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "วิธีใช้:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 391,
                                    columnNumber: 16
                                }, this),
                                " คลิกที่หมุดบนแผนที่เพื่อดูข้อมูลคุณภาพอากาศของตำแหน่งนั้น"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            showRecommendationPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                onClick: closePopup,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg max-w-xl w-full mx-4 max-h-[75vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 sm:p-6 border-b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 font-sarabun",
                                    children: [
                                        "คำแนะนำสำหรับ",
                                        selectedGroupType === 'sensitive' ? 'กลุ่มเปราะบาง' : 'คนทั่วไป'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closePopup,
                                    className: "text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 text-base sm:text-lg lg:text-xl text-gray-600 font-sarabun",
                                    children: [
                                        "📍 ",
                                        selectedLocation ? selectedLocation.name : "Cafe Amazon สาขา ST"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: selectedRecommendations.map((recommendation, index)=>{
                                        const iconPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommendationIcon"])(recommendation);
                                        const isImageIcon = typeof iconPath === 'string' && iconPath.startsWith('/assets/images/');
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg",
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
                                                            lineNumber: 434,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg sm:text-xl",
                                                            children: iconPath
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 444,
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
                                                            lineNumber: 447,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 432,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-sarabun",
                                                    children: recommendation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 450,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `popup-rec-${index}`, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 428,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 418,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-6 pb-4 sm:pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closePopup,
                                className: "w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors text-lg sm:text-xl lg:text-2xl font-medium font-sarabun",
                                children: "ปิด"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 459,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 402,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 398,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 120,
        columnNumber: 5
    }, this);
};
_s1(MonitoringPanel, "mER3U6S0m6uGi99xc+wtYVz6q3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitoringData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationMonitoringData"]
    ];
});
_c1 = MonitoringPanel;
// ส่วนแสดงแผนที่ (ด้านขวาบน)
const MapSection = ({ selectedLocation, onLocationSelect })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full lg:w-2/3 bg-white border-b border-gray-100 h-1/2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl lg:text-3xl font-light text-black font-montserrat",
                            children: "แผนที่ตำแหน่งตรวจวัด"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500 font-sarabun",
                            children: "คลิกที่หมุดเพื่อดูข้อมูล"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 479,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[calc(100%-60px)] bg-gray-100 rounded-lg border border-gray-200 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponentWrapper, {
                        onLocationSelect: onLocationSelect
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 489,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 487,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 478,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 477,
        columnNumber: 5
    }, this);
};
_c2 = MapSection;
// Wrapper component สำหรับ MapComponent เพื่อจัดการ dynamic import
const MapComponentWrapper = ({ onLocationSelect })=>{
    _s2();
    const [MapComponent, setMapComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapComponentWrapper.useEffect": ()=>{
            // Dynamic import เพื่อหลีกเลี่ยง SSR issues กับ Leaflet
            (()=>{
                const e = new Error("Cannot find module '../MapComponents'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })().then({
                "MapComponentWrapper.useEffect": (module)=>{
                    setMapComponent({
                        "MapComponentWrapper.useEffect": ()=>module.default
                    }["MapComponentWrapper.useEffect"]);
                }
            }["MapComponentWrapper.useEffect"]);
        }
    }["MapComponentWrapper.useEffect"], []);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 511,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-sarabun",
                        children: "กำลังโหลดแผนที่..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 512,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 510,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 509,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onLocationSelect: onLocationSelect
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 518,
        columnNumber: 10
    }, this);
};
_s2(MapComponentWrapper, "caYTbfYlgVb4g9UF501xYUDslK4=");
_c3 = MapComponentWrapper;
// ส่วนแสดงข้อมูล History (ด้านขวาล่าง) - แบบย่อสำหรับ Main Page
const HistorySection = ({ selectedLocation })=>{
    _s3();
    const [selectedParameter, setSelectedParameter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PM2.5');
    // Mock data สำหรับ History - แบบย่อ 6 ชั่วโมงล่าสุด
    const historyData = [
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
        }
    ];
    // เตรียมข้อมูลสำหรับกราฟแบบง่าย
    const chartData = historyData.map((item)=>({
            time: item.time,
            value: item[selectedParameter.toLowerCase().replace('.', '')]
        })).reverse(); // ย้อนกลับเพื่อให้เรียงจากเก่าไปใหม่
    const getMaxValue = ()=>{
        return Math.max(...chartData.map((d)=>d.value)) * 1.1;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full lg:w-2/3 bg-white h-1/2 overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl lg:text-3xl font-light text-black font-montserrat",
                            children: "ข้อมูลย้อนหลัง"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 549,
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
                                            lineNumber: 552,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-sarabun",
                                            children: "6 ชั่วโมงล่าสุด"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 551,
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
                                            lineNumber: 559,
                                            columnNumber: 15
                                        }, this),
                                        "ดูทั้งหมด"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 548,
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
                                lineNumber: 568,
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
                                lineNumber: 569,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 567,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 566,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700 font-sarabun",
                                    children: "แสดงข้อมูล:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 578,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedParameter,
                                    onChange: (e)=>setSelectedParameter(e.target.value),
                                    className: "px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm font-montserrat",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "PM0.1",
                                            children: "PM0.1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "PM2.5",
                                            children: "PM2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "PM10",
                                            children: "PM10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 579,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 577,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-500 font-sarabun",
                            children: "หน่วย: μg/m³"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 576,
                    columnNumber: 9
                }, this),
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
                                                lineNumber: 601,
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
                                                lineNumber: 610,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    fill: "none",
                                    stroke: "#3b82f6",
                                    strokeWidth: "2",
                                    points: chartData.map((d, i)=>`${i / (chartData.length - 1) * 100}%,${100 - d.value / getMaxValue() * 100}%`).join(' ')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 624,
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
                                                lineNumber: 636,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 635,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 597,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 596,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 595,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg border border-gray-200 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-left text-xs font-medium text-gray-700 font-sarabun",
                                                children: "เวลา"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 665,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat",
                                                children: "PM0.1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat",
                                                children: "PM2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 667,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat",
                                                children: "PM10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 668,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-sarabun",
                                                children: "สถานะ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 669,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-center text-xs font-medium text-gray-700 font-sarabun",
                                                children: "แนวโน้ม"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 670,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 664,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-200",
                                    children: historyData.slice(0, 4).map((data, index)=>{
                                        const statusColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAirQualityColor"])(data.status);
                                        const isLatest = index === 0;
                                        const prevData = index < historyData.length - 1 ? historyData[index + 1] : null;
                                        const trend = prevData ? data.pm25 > prevData.pm25 ? 'up' : data.pm25 < prevData.pm25 ? 'down' : 'stable' : 'stable';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `hover:bg-gray-50 ${isLatest ? 'bg-green-50' : ''}`,
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
                                                            lineNumber: 685,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 682,
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
                                                        lineNumber: 691,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 690,
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
                                                        lineNumber: 700,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 699,
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
                                                        lineNumber: 709,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 708,
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
                                                        lineNumber: 718,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 717,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 text-center",
                                                    children: [
                                                        trend === 'up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-3 h-3 text-red-500 mx-auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 727,
                                                            columnNumber: 27
                                                        }, this),
                                                        trend === 'down' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-3 h-3 text-green-500 mx-auto transform rotate-180"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 730,
                                                            columnNumber: 27
                                                        }, this),
                                                        trend === 'stable' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-3 h-0.5 bg-gray-400 mx-auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 733,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 725,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 681,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 673,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 662,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 661,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 660,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 grid grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-blue-600 font-sarabun",
                                    children: "ค่าเฉลี่ย"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 747,
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
                                            lineNumber: 749,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-xs font-montserrat",
                                            children: "μg/m³"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 748,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 746,
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
                                    lineNumber: 761,
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
                                            lineNumber: 763,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-xs font-montserrat",
                                            children: "μg/m³"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 762,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 760,
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
                                    lineNumber: 775,
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
                                            lineNumber: 777,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-xs font-montserrat",
                                            children: "μg/m³"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 784,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 774,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 745,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 547,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 546,
        columnNumber: 5
    }, this);
};
_s3(HistorySection, "JnxPOrs+MHmcLozG3PU+FC9D6ok=");
_c4 = HistorySection;
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "h-18 sm:h-20 bg-green-100 border-t border-green-100 flex-shrink-0 flex items-center justify-between p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-montserrat",
                children: "Made with by Jaejae Dream Yok ❤️"
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 795,
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
                            className: "w-14 h-14 sm:w-16 sm:h-16 object-contain",
                            width: 64,
                            height: 64
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 798,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 797,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat",
                            children: "Mupcop"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 807,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 806,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 796,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 794,
        columnNumber: 3
    }, this);
_c5 = Footer;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "Header");
__turbopack_refresh__.register(_c1, "MonitoringPanel");
__turbopack_refresh__.register(_c2, "MapSection");
__turbopack_refresh__.register(_c3, "MapComponentWrapper");
__turbopack_refresh__.register(_c4, "HistorySection");
__turbopack_refresh__.register(_c5, "Footer");
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
// src/app/page.js - แบบใหม่ที่รองรับ 3-section layout
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
        className: "h-screen flex flex-col overflow-hidden bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex min-h-0 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonitoringPanel"], {
                        selectedLocation: selectedLocation,
                        onLocationClear: handleLocationClear
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapSection"], {
                                selectedLocation: selectedLocation,
                                onLocationSelect: handleLocationSelect
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MonitoringInterface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistorySection"], {
                                selectedLocation: selectedLocation
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 42,
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
                lineNumber: 56,
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

//# sourceMappingURL=src_224289._.js.map