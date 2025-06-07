(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_694ec4._.js", {

"[project]/src/data/monitoring-data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PM_THRESHOLDS": (()=>PM_THRESHOLDS),
    "formatPMValue": (()=>formatPMValue),
    "getAirQualityColor": (()=>getAirQualityColor),
    "getRecommendationIcon": (()=>getRecommendationIcon),
    "useLocationMonitoringData": (()=>useLocationMonitoringData),
    "useMonitoringData": (()=>useMonitoringData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
;
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqd5rgKGkO7h_Dn76ctkITkgkrvnV5tbE",
    authDomain: "ultrafine-particles.firebaseapp.com",
    databaseURL: "https://ultrafine-particles-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ultrafine-particles",
    storageBucket: "ultrafine-particles.firebasestorage.app",
    messagingSenderId: "231538011955",
    appId: "1:231538011955:web:274e36a3c702324dc31846",
    measurementId: "G-KBQLGTKY0V"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDatabase"])(app);
// Constants
const FIREBASE_USER_ID = 'gdRueJtWeNaMleXbEf4rWfuD6Kr1';
const PIERA_PATH = 'Piera/';
const RAW_PATH = 'RAWdata/';
// Helper functions
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
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};
const getAirQualityColor = (status)=>{
    const colors = {
        Excellent: '#1E88E5',
        Good: '#2DC653',
        Moderate: '#FECF3E',
        Unhealthy: '#FF9500',
        Hazardous: '#D02224'
    };
    return colors[status] || colors.Moderate;
};
const formatPMValue = (value)=>{
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return value;
    return `${numericValue.toFixed(2)} μg/m³`;
};
const getRecommendationIcon = (recommendation)=>{
    // ตรวจสอบว่า recommendation เป็น string หรือไม่
    if (!recommendation || typeof recommendation !== 'string') {
        return '•';
    }
    // ตรวจสอบคำหลักในคำแนะนำและส่งคืนไอคอนที่เหมาะสม
    const text = recommendation.toLowerCase();
    // ไอคอนสำหรับสุขภาพและอาการ
    if (text.includes('ไม่มีผลต่อสุขภาพ')) {
        return '💚';
    }
    // ไอคอนสำหรับการใช้ชีวิตปกติ
    if (text.includes('ใช้ชีวิตได้ตามปกติ')) {
        return '😊';
    }
    // ไอคอนสำหรับการเปิดหน้าต่างระบายอากาศ
    if (text.includes('เปิดหน้าต่างระบายอากาศ')) {
        return '🪟';
    }
    // ไอคอนสำหรับการปิดหน้าต่าง
    if (text.includes('ปิดหน้าต่าง')) {
        return '🚪';
    }
    // ไอคอนสำหรับการหลีกเลี่ยงกิจกรรมที่ก่อให้เกิดฝุ่น
    if (text.includes('หลีกเลี่ยงการทำกิจกรรมที่ก่อให้เกิดฝุ่น')) {
        return '🚫';
    }
    // ไอคอนสำหรับการงดกิจกรรมหรือเข้าใกล้พื้นที่ที่มีฝุ่น
    if (text.includes('งดการทำกิจกรรมหรือเข้าใกล้พื้นที่ที่มีฝุ่น')) {
        return '🛑';
    }
    // ไอคอนสำหรับกลุ่มเปราะบาง (รวมการสังเกตอาการ)
    if (text.includes('กลุ่มเปราะบาง') && text.includes('สังเกตอาการ')) {
        return '⚠️';
    }
    // ไอคอนสำหรับกลุ่มคนทั่วไป (รวมการสังเกตอาการ)
    if (text.includes('กลุ่มคนทั่วไป') && text.includes('สังเกตอาการ')) {
        return '👁️';
    }
    // ไอคอนสำหรับความเสี่ยงสูง
    if (text.includes('ความเสี่ยงสูง')) {
        return '🔴';
    }
    // ไอคอนสำหรับยาและอุปกรณ์การแพทย์
    if (text.includes('เตรียมยาหรืออุปกรณ์ตามคำสั่งแพทย์')) {
        return '💊';
    }
    // ไอคอนสำหรับเครื่องฟอกอากาศ
    if (text.includes('ติดตั้งเครื่องฟอกอากาศ')) {
        return '🌬️';
    }
    // ไอคอนสำหรับการสังเกตอาการและไปพบแพทย์
    if (text.includes('สังเกตอาการของตนเอง หากมีอาการให้ไปพบแพทย์')) {
        return '🏥';
    }
    // ไอคอนสำหรับการโหลดข้อมูล
    if (text.includes('กำลังโหลด') || text.includes('กำลังวิเคราะห์') || text.includes('กำลังประมวลผล')) {
        return '⏳';
    }
    // ไอคอนเริ่มต้น
    return '•';
};
const PM_THRESHOLDS = {
    PM01: {
        Excellent: 0.0,
        Good: 0.5,
        moderate: 1.0,
        unhealthy: 2.0,
        Hazardous: Number.MAX_VALUE
    },
    PM25: {
        Excellent: 15.0,
        Good: 25.0,
        moderate: 37.5,
        unhealthy: 75.0,
        Hazardous: Number.MAX_VALUE
    },
    PM100: {
        Excellent: 50.0,
        Good: 80.0,
        moderate: 120.0,
        unhealthy: 180.0,
        Hazardous: Number.MAX_VALUE
    }
};
const determineAirQuality = (pm01, pm25, pm100)=>{
    // Check Excellent
    if (pm01 <= PM_THRESHOLDS.PM01.Excellent && pm25 <= PM_THRESHOLDS.PM25.Excellent && pm100 <= PM_THRESHOLDS.PM100.Excellent) {
        return "Excellent";
    } else if (pm01 <= PM_THRESHOLDS.PM01.Good && pm25 <= PM_THRESHOLDS.PM25.Good && pm100 <= PM_THRESHOLDS.PM100.Good) {
        return "Good";
    } else if (pm01 <= PM_THRESHOLDS.PM01.moderate && pm25 <= PM_THRESHOLDS.PM25.moderate && pm100 <= PM_THRESHOLDS.PM100.moderate) {
        return "Moderate";
    } else if (pm01 <= PM_THRESHOLDS.PM01.unhealthy && pm25 <= PM_THRESHOLDS.PM25.unhealthy && pm100 <= PM_THRESHOLDS.PM100.unhealthy) {
        return "Unhealthy";
    } else {
        return "Hazardous";
    }
};
const useMonitoringData = ()=>{
    _s();
    return useLocationMonitoringData({
        firebasePath: 'Cafe',
        userId: FIREBASE_USER_ID
    });
};
_s(useMonitoringData, "LNpFy6hpQvvL/JSrmhjWrjoF/Vw=", false, function() {
    return [
        useLocationMonitoringData
    ];
});
const useLocationMonitoringData = (locationData)=>{
    _s1();
    const [monitoringData, setMonitoringData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        date: formatDisplayDate(new Date()),
        time: getCurrentTime(),
        locationName: locationData?.name || "กำลังโหลด...",
        mainReading: {
            value: 0,
            unit: "μg/m³",
            status: "Good",
            note: "(Long-term/Short-term)"
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
            "กำลังวิเคราะห์คุณภาพอากาศ...",
            "กำลังประมวลผลคำแนะนำ..."
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocationMonitoringData.useEffect": ()=>{
            if (!locationData || !locationData.firebasePath) {
                return;
            }
            const datePath = getCurrentDatePath();
            // ใช้ pieraPath หรือ userId สำหรับ Piera data
            const pieraUserId = locationData.pieraPath || locationData.userId;
            // Set up paths for both data sources ตามตำแหน่งที่เลือก
            const pieraDataPath = `/${PIERA_PATH}/${pieraUserId}/${datePath}`;
            const rawDataPath = `/${RAW_PATH}${locationData.firebasePath}/${datePath}`;
            console.log('Loading data from paths:', {
                piera: pieraDataPath,
                raw: rawDataPath,
                location: locationData.name
            });
            // Create queries for both paths to get latest entries
            const pieraQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, pieraDataPath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
            const rawQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(database, rawDataPath), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByKey"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(1));
            // Subscribe to Piera data updates
            const pieraUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(pieraQuery, {
                "useLocationMonitoringData.useEffect.pieraUnsubscribe": (snapshot)=>{
                    const timeData = snapshot.val();
                    if (timeData) {
                        const latestTime = Object.keys(timeData)[0];
                        const data = timeData[latestTime];
                        if (data) {
                            const pm01 = parseFloat(data.PM01 || 0);
                            const pm25 = parseFloat(data.PM25 || 0);
                            const pm10 = parseFloat(data.PM100 || 0);
                            const airQualityStatus = determineAirQuality(pm01, pm25, pm10);
                            const recommendations = getRecommendations(airQualityStatus);
                            setMonitoringData({
                                "useLocationMonitoringData.useEffect.pieraUnsubscribe": (prevData)=>({
                                        ...prevData,
                                        date: formatDisplayDate(new Date()),
                                        time: latestTime,
                                        locationName: locationData.name,
                                        mainReading: {
                                            value: pm01,
                                            unit: "μg/m³",
                                            status: airQualityStatus,
                                            note: "(Long-term/Short-term)"
                                        },
                                        pmReadings: [
                                            {
                                                type: "PM0.1",
                                                value: `${pm01} μg/m³`
                                            },
                                            {
                                                type: "PM2.5",
                                                value: `${pm25} μg/m³`
                                            },
                                            {
                                                type: "PM10",
                                                value: `${pm10} μg/m³`
                                            }
                                        ],
                                        recommendations
                                    })
                            }["useLocationMonitoringData.useEffect.pieraUnsubscribe"]);
                        }
                    } else {
                        console.log('No Piera data found for location:', locationData.name);
                        // แสดงข้อความเมื่อไม่มีข้อมูล
                        setMonitoringData({
                            "useLocationMonitoringData.useEffect.pieraUnsubscribe": (prevData)=>({
                                    ...prevData,
                                    locationName: locationData.name,
                                    recommendations: [
                                        `ไม่พบข้อมูลสำหรับ ${locationData.name}`,
                                        "กรุณาตรวจสอบการเชื่อมต่อ",
                                        "หรือลองเลือกตำแหน่งอื่น"
                                    ]
                                })
                        }["useLocationMonitoringData.useEffect.pieraUnsubscribe"]);
                    }
                }
            }["useLocationMonitoringData.useEffect.pieraUnsubscribe"], {
                "useLocationMonitoringData.useEffect.pieraUnsubscribe": (error)=>{
                    console.error('Error fetching Piera data:', error);
                    setMonitoringData({
                        "useLocationMonitoringData.useEffect.pieraUnsubscribe": (prevData)=>({
                                ...prevData,
                                locationName: locationData.name,
                                recommendations: [
                                    `เกิดข้อผิดพลาดในการโหลดข้อมูลจาก ${locationData.name}`,
                                    "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต",
                                    "หรือลองรีเฟรชหน้าเว็บใหม่"
                                ]
                            })
                    }["useLocationMonitoringData.useEffect.pieraUnsubscribe"]);
                }
            }["useLocationMonitoringData.useEffect.pieraUnsubscribe"]);
            // Subscribe to RAW data updates
            const rawUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(rawQuery, {
                "useLocationMonitoringData.useEffect.rawUnsubscribe": (snapshot)=>{
                    const timeData = snapshot.val();
                    if (timeData) {
                        const latestTime = Object.keys(timeData)[0];
                        const data = timeData[latestTime];
                        if (data) {
                            setMonitoringData({
                                "useLocationMonitoringData.useEffect.rawUnsubscribe": (prevData)=>({
                                        ...prevData,
                                        conditions: {
                                            temperature: `${data.IndoorTemperature || "N/A"}°C`,
                                            humidity: `${data.IndoorHumidity || "N/A"}%`
                                        }
                                    })
                            }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
                        }
                    } else {
                        console.log('No RAW data found for location:', locationData.name);
                        // ใส่ข้อมูล default เมื่อไม่มีข้อมูลอุณหภูมิและความชื้น
                        setMonitoringData({
                            "useLocationMonitoringData.useEffect.rawUnsubscribe": (prevData)=>({
                                    ...prevData,
                                    conditions: {
                                        temperature: "N/A°C",
                                        humidity: "N/A%"
                                    }
                                })
                        }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
                    }
                }
            }["useLocationMonitoringData.useEffect.rawUnsubscribe"], {
                "useLocationMonitoringData.useEffect.rawUnsubscribe": (error)=>{
                    console.error('Error fetching RAW data:', error);
                }
            }["useLocationMonitoringData.useEffect.rawUnsubscribe"]);
            // Cleanup function to unsubscribe from both listeners
            return ({
                "useLocationMonitoringData.useEffect": ()=>{
                    pieraUnsubscribe();
                    rawUnsubscribe();
                }
            })["useLocationMonitoringData.useEffect"];
        }
    }["useLocationMonitoringData.useEffect"], [
        locationData
    ]);
    return monitoringData;
};
_s1(useLocationMonitoringData, "fiTWtykH28xKahWdPD3epCYsQT8=");
const getRecommendations = (airQualityStatus)=>{
    switch(airQualityStatus){
        case 'Excellent':
            return [
                "ไม่มีผลต่อสุขภาพ",
                "สามารถใช้ชีวิตได้ตามปกติ",
                "สามารถเปิดหน้าต่างระบายอากาศได้"
            ];
        case 'Good':
            return [
                "ไม่มีผลต่อสุขภาพ",
                "สามารถใช้ชีวิตได้ตามปกติ",
                "สามารถเปิดหน้าต่างระบายอากาศได้",
                "กลุ่มเปราะบางอาจะมีความเสี่ยงและสังเกตอาการของตนเอง"
            ];
        case 'Moderate':
            return [
                "ควรปิดหน้าต่างเมื่ออยู่ในอาคาร",
                "หลีกเลี่ยงการทำกิจกรรมที่ก่อให้เกิดฝุ่น",
                "กลุ่มคนทั่วไปและกลุ่มเปราะบางมีความเสี่ยงและสังเกตอาการของตนเอง"
            ];
        case 'Unhealthy':
            return [
                "กลุ่มคนทั่วไปและกลุ่มเปราะบางมีความเสี่ยงและสังเกตอาการของตนเอง",
                "หลีกเลี่ยงการทำกิจกรรมที่ก่อให้เกิดฝุ่น",
                "เตรียมยาหรืออุปกรณ์ตามคำสั่งแพทย์",
                "ติดตั้งเครื่องฟอกอากาศ"
            ];
        case 'Hazardous':
            return [
                "ทั้งกลุ่มคนทั่วไปและกลุ่มเปราะบางมีความเสี่ยงสูง",
                "งดการทำกิจกรรมหรือเข้าใกล้พื้นที่ที่มีฝุ่น",
                "สังเกตอาการของตนเอง หากมีอาการให้ไปพบแพทย์"
            ];
        default:
            return [
                "กำลังโหลดข้อมูล...",
                "กำลังวิเคราะห์คุณภาพอากาศ...",
                "กำลังประมวลผลคำแนะนำ..."
            ];
    }
};
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
    "MonitoringPanel": (()=>MonitoringPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/monitoring-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-16 bg-green-100 border-b border-green-100 flex-shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex items-center justify-between px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-18 h-18 flex-shrink-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/mupcop-logo.png",
                                alt: "Mupcop logo",
                                className: "w-14 h-14 object-contain",
                                width: 82,
                                height: 82
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-black",
                                    children: "Mupcop"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-light text-black max-w-xl",
                                    children: "Multi-factor ultrafine particle optimization prediction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden sm:flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "px-3 py-1 text-base font-semibold text-black rounded-lg hover:bg-green-200 transition-colors",
                            children: "Air quality"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/history-data",
                            className: "px-3 py-1 text-base font-semibold text-black rounded-lg hover:bg-green-200 transition-colors",
                            children: "History data"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "sm:hidden",
                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 51,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 51,
                        columnNumber: 43
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
const MonitoringPanel = ({ selectedLocation, onLocationClear })=>{
    _s1();
    // ใช้ข้อมูลตามตำแหน่งที่เลือก หรือใช้ข้อมูลเริ่มต้น
    const defaultData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitoringData"])();
    const locationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationMonitoringData"])(selectedLocation);
    // เลือกข้อมูลที่จะแสดง
    const data = selectedLocation ? locationData : defaultData;
    const statusColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAirQualityColor"])(data.mainReading.status);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mb-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "กำลังโหลดข้อมูล..."
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-1/3 bg-gray-50/50 border-r border-gray-100 overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-light text-black-800",
                            children: "UFPs Monitoring"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        selectedLocation && onLocationClear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onLocationClear,
                            className: "text-xs text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md transition-colors",
                            children: "× ล้าง"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                selectedLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-blue-800",
                                    children: selectedLocation.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-blue-600",
                            children: "📍 คลิกที่หมุดเพื่อดูข้อมูลตำแหน่งนั้น"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-blue-500 mt-1",
                            children: "กำลังแสดงข้อมูลจากตำแหน่งที่เลือก"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 94,
                    columnNumber: 11
                }, this),
                !selectedLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-50 border border-green-200 rounded-lg p-3 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-green-800",
                                    children: "Cafe Amazon สาขา ST"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-green-600",
                            children: "📍 คลิกที่หมุดบนแผนที่เพื่อดูข้อมูลตำแหน่งอื่น"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 112,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold text-black",
                                            children: "LIVE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-black",
                                    children: data.date
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-600 mb-2 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                selectedLocation ? selectedLocation.name : "Cafe Amazon สาขา ST"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg mb-3 shadow-sm text-white",
                            style: {
                                backgroundColor: statusColor
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold",
                                                children: data.mainReading.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm ml-1",
                                                children: data.mainReading.unit
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium",
                                                children: data.mainReading.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs opacity-90",
                                                children: data.mainReading.note
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center flex flex-col items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600",
                                            children: data.conditions.temperature
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center flex flex-col items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                            className: "w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600",
                                            children: data.conditions.humidity
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2 grid-cols-1 mb-3",
                    children: data.pmReadings.map((reading, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-2.5 rounded-lg shadow-sm border border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-blue-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: reading.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MonitoringInterface.js",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-blue-500 font-medium",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPMValue"])(reading.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this)
                        }, `pm-${index}`, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-3 shadow-sm border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium text-gray-800 mb-2",
                            children: [
                                "คำแนะนำสำหรับ ",
                                selectedLocation ? selectedLocation.name : "Cafe Amazon สาขา ST"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 text-xs",
                            children: data.recommendations.map((recommendation, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm mt-0.5 flex-shrink-0",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommendationIcon"])(recommendation)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-1",
                                            children: recommendation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MonitoringInterface.js",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `rec-${index}`, true, {
                                    fileName: "[project]/src/components/MonitoringInterface.js",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 p-2 bg-gray-100 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-green-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "อัพเดทล่าสุด: ",
                                            data.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MonitoringInterface.js",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500",
                                children: selectedLocation ? `ข้อมูลจาก: ${selectedLocation.name}` : 'ข้อมูลเริ่มต้น: Cafe Amazon สาขา ST'
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-yellow-800",
                        children: [
                            "💡 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "วิธีใช้:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 228,
                                columnNumber: 16
                            }, this),
                            " คลิกที่หมุดบนแผนที่เพื่อดูข้อมูลคุณภาพอากาศของตำแหน่งนั้น"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MonitoringInterface.js",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MonitoringInterface.js",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 77,
        columnNumber: 5
    }, this);
};
_s1(MonitoringPanel, "6UcDviwEKWbcXdwgvqoi32uQ8k0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitoringData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$monitoring$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocationMonitoringData"]
    ];
});
_c1 = MonitoringPanel;
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-green-100 border-t border-green-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base text-black",
                children: "Made with by Jaejae Dream Yok ❤️"
            }, void 0, false, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 238,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-end ml-auto gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 flex items-center justify-center -my-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/mupcop-logo.png",
                            alt: "Mupcop logo",
                            className: "w-12 h-12 object-contain",
                            width: 82,
                            height: 82
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 241,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 240,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-black mb-1",
                                children: "Mupcop"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MonitoringInterface.js",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MonitoringInterface.js",
                            lineNumber: 250,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MonitoringInterface.js",
                        lineNumber: 249,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MonitoringInterface.js",
                lineNumber: 239,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MonitoringInterface.js",
        lineNumber: 237,
        columnNumber: 3
    }, this);
_c2 = Footer;
;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Header");
__turbopack_refresh__.register(_c1, "MonitoringPanel");
__turbopack_refresh__.register(_c2, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ClientWrapper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientWrapper": (()=>ClientWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/ClientWrapper.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
'use client';
;
;
const MapComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/src/components/MapComponents.js [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "src/components/ClientWrapper.js -> " + "./MapComponents"
        ]
    },
    ssr: false
});
_c = MapComponent;
function ClientWrapper() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponent, {}, void 0, false, {
            fileName: "[project]/src/components/ClientWrapper.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ClientWrapper.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c1 = ClientWrapper;
var _c, _c1;
__turbopack_refresh__.register(_c, "MapComponent");
__turbopack_refresh__.register(_c1, "ClientWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_694ec4._.js.map