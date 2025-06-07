(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_2baf4e._.js", {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
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
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat",
                                    children: "Mupcop"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base sm:text-lg lg:text-xl font-light text-black max-w-xl font-montserrat",
                                    children: "Multi-factor ultrafine particle optimization prediction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 31,
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
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/history-data",
                            className: "px-4 py-2 text-lg sm:text-xl lg:text-2xl font-semibold text-black rounded-lg hover:bg-green-200 transition-colors font-montserrat",
                            children: "History data"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "sm:hidden",
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 62,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 62,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 29,
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
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg sm:text-xl text-gray-600 font-sarabun",
                    children: "กำลังโหลดข้อมูล..."
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 110,
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
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            selectedLocation && onLocationClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLocationClear,
                                className: "text-base sm:text-lg text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors font-sarabun",
                                children: "× ล้าง"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 122,
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
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black font-montserrat",
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base sm:text-lg lg:text-xl text-black font-numbers",
                                        children: data.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 136,
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
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate text-base sm:text-lg lg:text-xl font-sarabun",
                                                    children: selectedLocation ? selectedLocation.name : "Cafe Amazon สาขา ST"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 149,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 147,
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
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-numbers",
                                                    children: data.time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 145,
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
                                                lineNumber: 167,
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
                                                        lineNumber: 169,
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
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white opacity-90 font-montserrat",
                                                        children: data.mainReading.unit
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 163,
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
                                                            lineNumber: 203,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 202,
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
                                                                lineNumber: 206,
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
                                                                lineNumber: 209,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 text-white text-sm sm:text-base opacity-60",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 198,
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
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 223,
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
                                                                lineNumber: 227,
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
                                                                lineNumber: 230,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 226,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 text-white text-sm sm:text-base opacity-60",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 234,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 161,
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
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-500",
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 254,
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
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat",
                                                children: "°C"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 244,
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
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-500",
                                                style: {
                                                    display: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 276,
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
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat",
                                                children: "%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 242,
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
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm sm:text-base lg:text-lg",
                                                            children: iconPath
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 310,
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
                                                            lineNumber: 313,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm lg:text-base text-gray-500 mt-1 font-sarabun",
                                            children: "คลิกที่ bubble สีด้านบนเพื่อดูคำแนะนำสำหรับแต่ละกลุ่ม"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 135,
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
                                lineNumber: 328,
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
                                                lineNumber: 363,
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
                                                    lineNumber: 366,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 365,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl sm:text-xl opacity-90 font-montserrat",
                                                children: "μg/m³"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 375,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, `${reading.type}-${selectedLocation?.id || 'default'}-${index}`, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 358,
                                        columnNumber: 21
                                    }, this);
                                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 text-center text-xs sm:text-sm text-gray-500 py-4 font-sarabun",
                                    children: "ไม่มีข้อมููลมลพิษในขณะนี้"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 327,
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
                                    lineNumber: 390,
                                    columnNumber: 16
                                }, this),
                                " คลิกที่หมุดบนแผนที่เพื่อดูข้อมูลคุณภาพอากาศของตำแหน่งนั้น"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 389,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 120,
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
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closePopup,
                                    className: "text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 405,
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
                                    lineNumber: 418,
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
                                                            lineNumber: 433,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg sm:text-xl",
                                                            children: iconPath
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 443,
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
                                                            lineNumber: 446,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 431,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-sarabun",
                                                    children: recommendation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 449,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `popup-rec-${index}`, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 427,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 417,
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
                                lineNumber: 459,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 401,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 397,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 119,
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
                            lineNumber: 479,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500 font-sarabun",
                            children: "คลิกที่หมุดเพื่อดูข้อมูล"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 478,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[calc(100%-60px)] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-12 h-12 mx-auto mb-2 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-sarabun",
                                children: "แผนที่จะแสดงที่นี่"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-sarabun mt-1",
                                children: selectedLocation ? `กำลังแสดง: ${selectedLocation.name}` : 'เลือกตำแหน่งจากแผนที่'
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 490,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 487,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 486,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 477,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 476,
        columnNumber: 5
    }, this);
};
_c2 = MapSection;
// ส่วนแสดงข้อมูล History (ด้านขวาล่าง)
const HistorySection = ({ selectedLocation })=>{
    // Mock data สำหรับ History
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
        }
    ];
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
                            lineNumber: 515,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sarabun",
                                    children: [
                                        "อัพเดทล่าสุด: ",
                                        new Date().toLocaleTimeString('th-TH')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 516,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 514,
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
                                lineNumber: 525,
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
                                lineNumber: 526,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 524,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 523,
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
                                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700 font-sarabun",
                                                children: "เวลา"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 538,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-center text-sm font-medium text-gray-700 font-montserrat",
                                                children: "PM0.1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-center text-sm font-medium text-gray-700 font-montserrat",
                                                children: "PM2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-center text-sm font-medium text-gray-700 font-montserrat",
                                                children: "PM10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 541,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-center text-sm font-medium text-gray-700 font-sarabun",
                                                children: "สถานะ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 542,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-center text-sm font-medium text-gray-700 font-sarabun",
                                                children: "แนวโน้ม"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 537,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 536,
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
                                            className: `hover:bg-gray-50 ${isLatest ? 'bg-green-50' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-sm text-gray-900 font-numbers",
                                                    children: [
                                                        data.time,
                                                        isLatest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 font-sarabun",
                                                            children: "ล่าสุด"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 558,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 555,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-sm text-center font-numbers",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                        value: data.pm01,
                                                        type: "cascade-slide",
                                                        decimals: 1,
                                                        className: "text-gray-900",
                                                        showChangeIndicator: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 564,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 563,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-sm text-center font-numbers",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                        value: data.pm25,
                                                        type: "cascade-slide",
                                                        decimals: 1,
                                                        className: "text-gray-900",
                                                        showChangeIndicator: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 573,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 572,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-sm text-center font-numbers",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                                        value: data.pm10,
                                                        type: "cascade-slide",
                                                        decimals: 1,
                                                        className: "text-gray-900",
                                                        showChangeIndicator: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 582,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 581,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white font-montserrat",
                                                        style: {
                                                            backgroundColor: statusColor
                                                        },
                                                        children: data.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                                        lineNumber: 591,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 590,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-center",
                                                    children: [
                                                        trend === 'up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-4 h-4 text-red-500 mx-auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 600,
                                                            columnNumber: 27
                                                        }, this),
                                                        trend === 'down' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-4 h-4 text-green-500 mx-auto transform rotate-180"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 603,
                                                            columnNumber: 27
                                                        }, this),
                                                        trend === 'stable' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-0.5 bg-gray-400 mx-auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                                            lineNumber: 606,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                                    lineNumber: 598,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 554,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 535,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 534,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 533,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-blue-600 font-sarabun",
                                    children: "ค่าเฉลี่ย PM2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-blue-800 font-numbers",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                            value: historyData.reduce((sum, d)=>sum + d.pm25, 0) / historyData.length,
                                            type: "cascade-slide",
                                            decimals: 1,
                                            className: "text-blue-800",
                                            showChangeIndicator: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-sm font-montserrat",
                                            children: "μg/m³"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 629,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border border-green-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-green-600 font-sarabun",
                                    children: "ค่าต่ำสุด"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-green-800 font-numbers",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                            value: Math.min(...historyData.map((d)=>d.pm25)),
                                            type: "cascade-slide",
                                            decimals: 1,
                                            className: "text-green-800",
                                            showChangeIndicator: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 636,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-sm font-montserrat",
                                            children: "μg/m³"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 643,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 633,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-orange-600 font-sarabun",
                                    children: "ค่าสูงสุด"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 648,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-orange-800 font-numbers",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                            value: Math.max(...historyData.map((d)=>d.pm25)),
                                            type: "cascade-slide",
                                            decimals: 1,
                                            className: "text-orange-800",
                                            showChangeIndicator: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 650,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-sm font-montserrat",
                                            children: "μg/m³"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 649,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 647,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border border-purple-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-purple-600 font-sarabun",
                                    children: "จำนวนข้อมูล"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 662,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-purple-800 font-numbers",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveActivityNumber"], {
                                            value: historyData.length,
                                            type: "cascade-slide",
                                            decimals: 0,
                                            className: "text-purple-800",
                                            showChangeIndicator: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 664,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 text-sm font-sarabun",
                                            children: "รายการ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 671,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 663,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 661,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 618,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex flex-wrap gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-sarabun",
                            children: "ดาวน์โหลด CSV"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-sarabun",
                            children: "ดูกราฟ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm font-sarabun",
                            children: "ส่งออกรายงาน"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 684,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 677,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 513,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 512,
        columnNumber: 5
    }, this);
};
_c3 = HistorySection;
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "h-18 sm:h-20 bg-green-100 border-t border-green-100 flex-shrink-0 flex items-center justify-between p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-montserrat",
                children: "Made with by Jaejae Dream Yok ❤️"
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 695,
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
                            lineNumber: 698,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 697,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat",
                            children: "Mupcop"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 707,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 706,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 696,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 694,
        columnNumber: 3
    }, this);
_c4 = Footer;
;
var _c, _c1, _c2, _c3, _c4;
__turbopack_refresh__.register(_c, "Header");
__turbopack_refresh__.register(_c1, "MonitoringPanel");
__turbopack_refresh__.register(_c2, "MapSection");
__turbopack_refresh__.register(_c3, "HistorySection");
__turbopack_refresh__.register(_c4, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HistoryData.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const HistoryData = ()=>{
    _s();
    const [selectedPeriod, setSelectedPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Daily');
    const [selectedParameter, setSelectedParameter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PM0.1');
    // Sample data for different periods and parameters
    const generateData = (period, parameter)=>{
        const baseData = {
            'Daily': [
                {
                    name: 'Dec 1',
                    value: Math.random() * 25 + 10
                },
                {
                    name: 'Dec 7',
                    value: Math.random() * 35 + 15
                },
                {
                    name: 'Dec 14',
                    value: Math.random() * 45 + 20
                },
                {
                    name: 'Dec 21',
                    value: Math.random() * 30 + 12
                }
            ],
            'Weekly': [
                {
                    name: 'Week 1',
                    value: Math.random() * 40 + 15
                },
                {
                    name: 'Week 2',
                    value: Math.random() * 35 + 18
                },
                {
                    name: 'Week 3',
                    value: Math.random() * 50 + 25
                },
                {
                    name: 'Week 4',
                    value: Math.random() * 28 + 14
                }
            ],
            'Monthly': [
                {
                    name: 'Jan',
                    value: Math.random() * 30 + 12
                },
                {
                    name: 'Feb',
                    value: Math.random() * 35 + 15
                },
                {
                    name: 'Mar',
                    value: Math.random() * 40 + 18
                },
                {
                    name: 'Apr',
                    value: Math.random() * 25 + 10
                }
            ]
        };
        const multiplier = parameter === 'PM0.1' ? 0.5 : parameter === 'PM2.5' ? 1 : 1.5;
        return baseData[period].map((item)=>({
                ...item,
                value: Math.round(item.value * multiplier * 10) / 10
            }));
    };
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HistoryData.useState": ()=>generateData('Daily', 'PM0.1')
    }["HistoryData.useState"]);
    const handlePeriodChange = (period)=>{
        setSelectedPeriod(period);
        setData(generateData(period, selectedParameter));
    };
    const handleParameterChange = (parameter)=>{
        setSelectedParameter(parameter);
        setData(generateData(selectedPeriod, parameter));
    };
    const getBarColor = (value)=>{
        if (value <= 12) return '#4CAF50'; // Green - Good
        if (value <= 35) return '#FFC107'; // Yellow - Moderate
        return '#FF9800'; // Orange - Unhealthy
    };
    const currentReading = "17.85";
    const currentStatus = "Good";
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-full bg-green-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-800 mb-4",
                        children: "History"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HistoryData.js",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mb-6",
                        children: "ข้อมูลคุณภาพอากาศย้อนหลังของ Cafe Amazon สาขา ST"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HistoryData.js",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: currentDate
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-gray-800",
                                        children: [
                                            currentReading,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg text-gray-500",
                                                children: "(μg/m³)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HistoryData.js",
                                                lineNumber: 81,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-3 py-1 bg-green-500 text-white rounded-md font-medium",
                                children: currentStatus
                            }, void 0, false, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HistoryData.js",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedPeriod,
                                        onChange: (e)=>handlePeriodChange(e.target.value),
                                        className: "appearance-none bg-green-100 border border-green-300 rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Daily",
                                                children: "Daily"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HistoryData.js",
                                                lineNumber: 98,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Weekly",
                                                children: "Weekly"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HistoryData.js",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Monthly",
                                                children: "Monthly"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HistoryData.js",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 93,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-4 w-4 rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HistoryData.js",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedParameter,
                                        onChange: (e)=>handleParameterChange(e.target.value),
                                        className: "appearance-none bg-green-100 border border-green-300 rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PM0.1",
                                                children: "PM0.1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HistoryData.js",
                                                lineNumber: 114,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PM2.5",
                                                children: "PM2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HistoryData.js",
                                                lineNumber: 115,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PM10",
                                                children: "PM10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HistoryData.js",
                                                lineNumber: 116,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-4 w-4 rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HistoryData.js",
                                            lineNumber: 119,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HistoryData.js",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-80 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: data,
                                margin: {
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        strokeDasharray: "3 3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 128,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "name",
                                        axisLine: false,
                                        tickLine: false,
                                        tick: {
                                            fontSize: 12,
                                            fill: '#6B7280'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 129,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        axisLine: false,
                                        tickLine: false,
                                        tick: {
                                            fontSize: 12,
                                            fill: '#6B7280'
                                        },
                                        label: {
                                            value: 'μg/m³',
                                            angle: -90,
                                            position: 'insideLeft'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 135,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                        dataKey: "value",
                                        radius: [
                                            4,
                                            4,
                                            0,
                                            0
                                        ],
                                        fill: (entry, index)=>{
                                            const dataEntry = data[index];
                                            return getBarColor(dataEntry?.value || 0);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 141,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 127,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HistoryData.js",
                            lineNumber: 126,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HistoryData.js",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mt-4 space-x-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 bg-green-500 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 156,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Good (0-12)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 157,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 155,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 bg-yellow-500 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 160,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Moderate (13-35)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 159,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 bg-orange-500 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "Unhealthy (36+)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HistoryData.js",
                                        lineNumber: 165,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HistoryData.js",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HistoryData.js",
                        lineNumber: 154,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HistoryData.js",
                lineNumber: 72,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HistoryData.js",
            lineNumber: 71,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HistoryData.js",
        lineNumber: 69,
        columnNumber: 9
    }, this);
};
_s(HistoryData, "W9I6wywTgFe09DFN0IIlJl4dUow=");
_c = HistoryData;
const __TURBOPACK__default__export__ = HistoryData;
var _c;
__turbopack_refresh__.register(_c, "HistoryData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/history-data/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_2baf4e._.js.map