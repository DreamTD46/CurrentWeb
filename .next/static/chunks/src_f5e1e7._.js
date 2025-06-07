(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f5e1e7._.js", {

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
const MapComponent = ({ onLocationSelect })=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const initialMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]) // เก็บ markers เริ่มต้นแยกต่างหาก
    ;
    const searchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle marker click
    const handleMarkerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapComponent.useCallback[handleMarkerClick]": (locationId)=>{
            const locationData = LOCATION_DATA[locationId];
            if (locationData && onLocationSelect) {
                onLocationSelect(locationData);
            }
        }
    }["MapComponent.useCallback[handleMarkerClick]"], [
        onLocationSelect
    ]);
    // Handle location selection
    const goToLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapComponent.useCallback[goToLocation]": (lat, lon, name)=>{
            if (!mapRef.current) return;
            mapRef.current.setView([
                lat,
                lon
            ], DEFAULT_ZOOM);
            // Clear only search markers (not initial markers)
            markersRef.current.forEach({
                "MapComponent.useCallback[goToLocation]": (marker)=>marker.remove()
            }["MapComponent.useCallback[goToLocation]"]);
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
            const searchInput = document.getElementById('searchInput');
            const searchResults = document.getElementById('searchResults');
            if (searchResults) searchResults.innerHTML = '';
            if (searchInput) searchInput.value = '';
        }
    }["MapComponent.useCallback[goToLocation]"], []);
    // Handle search input
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapComponent.useCallback[handleSearch]": async (query)=>{
            const searchResults = document.getElementById('searchResults');
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
                    "MapComponent.useCallback[handleSearch]": (result)=>`
          <div 
            class="p-2 hover:bg-gray-100 cursor-pointer text-sm" 
            onclick="window.goToLocation(${result.lat}, ${result.lon}, '${result.display_name.replace(/'/g, "\\'")}')"
          >
            ${result.display_name}
          </div>
        `
                }["MapComponent.useCallback[handleSearch]"]).join('');
            } catch (error) {
                console.error('Search error:', error);
                searchResults.innerHTML = '<div class="p-2 text-red-500 text-sm">เกิดข้อผิดพลาดในการค้นหา</div>';
            }
        }
    }["MapComponent.useCallback[handleSearch]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapComponent.useEffect": ()=>{
            // Initialize map if not already initialized
            if (!mapRef.current) {
                const mapInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map('map', {
                    zoomControl: false,
                    attributionControl: false // Hide attribution initially
                }).setView(WALAILAK_COORDS, DEFAULT_ZOOM);
                mapRef.current = mapInstance;
                // Add zoom control
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.zoom({
                    position: 'bottomright'
                }).addTo(mapInstance);
                // Add attribution control (bottom-left, more compact)
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control.attribution({
                    position: 'bottomleft',
                    prefix: 'Leaflet | © OpenStreetMap'
                }).addTo(mapInstance);
                // Add tile layer
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19
                }).addTo(mapInstance);
                // Add custom CSS for tooltips
                const style = document.createElement('style');
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
        /* เพิ่ม smooth transition สำหรับ tooltip */
        .leaflet-tooltip {
          transition: opacity 0.2s ease !important;
        }
      `;
                document.head.appendChild(style);
                // Add initial Walailak markers (เก็บแยกต่างหาก)
                const initialMarker1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(WALAILAK_COORDS).addTo(mapInstance).bindTooltip("Cafe Amazon สาขา ST", {
                    permanent: true,
                    direction: 'center',
                    offset: [
                        0,
                        0
                    ],
                    className: 'custom-tooltip'
                }).on('click', {
                    "MapComponent.useEffect.initialMarker1": ()=>handleMarkerClick('cafe-amazon-st')
                }["MapComponent.useEffect.initialMarker1"]);
                // เพิ่ม CSS class สำหรับ clickable marker
                setTimeout({
                    "MapComponent.useEffect": ()=>{
                        const marker1Element = initialMarker1.getElement();
                        if (marker1Element) {
                            marker1Element.classList.add('clickable-marker');
                            marker1Element.setAttribute('title', 'คลิกเพื่อดูข้อมูล Cafe Amazon สาขา ST');
                        }
                    }
                }["MapComponent.useEffect"], 100);
                const initialMarker2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(WALAILAK_C4).addTo(mapInstance).bindTooltip("อาคารวิชาการ 4", {
                    permanent: true,
                    direction: 'center',
                    offset: [
                        0,
                        0
                    ],
                    className: 'custom-tooltip'
                }).on('click', {
                    "MapComponent.useEffect.initialMarker2": ()=>handleMarkerClick('building-c4')
                }["MapComponent.useEffect.initialMarker2"]);
                // เพิ่ม CSS class สำหรับ clickable marker
                setTimeout({
                    "MapComponent.useEffect": ()=>{
                        const marker2Element = initialMarker2.getElement();
                        if (marker2Element) {
                            marker2Element.classList.add('clickable-marker');
                            marker2Element.setAttribute('title', 'คลิกเพื่อดูข้อมูลอาคารวิชาการ 4');
                        }
                    }
                }["MapComponent.useEffect"], 100);
                // เก็บ initial markers แยกต่างหาก
                initialMarkersRef.current = [
                    initialMarker1,
                    initialMarker2
                ];
                // Add search control
                const searchControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].control({
                    position: 'topright'
                });
                searchControl.onAdd = ({
                    "MapComponent.useEffect": function() {
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
                })["MapComponent.useEffect"];
                searchControl.addTo(mapInstance);
                // Prevent map zoom when scrolling over search results
                const searchContainer = document.querySelector('.leaflet-control-container');
                if (searchContainer) {
                    searchContainer.addEventListener('wheel', {
                        "MapComponent.useEffect": (e)=>{
                            if (e.target.closest('#searchResults')) {
                                e.stopPropagation();
                            }
                        }
                    }["MapComponent.useEffect"]);
                }
                // Set up search input handler
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.addEventListener('input', {
                        "MapComponent.useEffect": (e)=>{
                            if (searchTimeoutRef.current) {
                                clearTimeout(searchTimeoutRef.current);
                            }
                            searchTimeoutRef.current = setTimeout({
                                "MapComponent.useEffect": ()=>handleSearch(e.target.value)
                            }["MapComponent.useEffect"], SEARCH_DELAY);
                        }
                    }["MapComponent.useEffect"]);
                    // Prevent map movement when interacting with search
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomEvent.disableClickPropagation(searchInput);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomEvent.disableScrollPropagation(searchInput);
                }
                // Add global location handler
                window.goToLocation = goToLocation;
                // Handle resize
                const handleResize = {
                    "MapComponent.useEffect.handleResize": ()=>{
                        mapInstance.invalidateSize();
                        // Adjust heights of search results based on window size
                        const searchResults = document.getElementById('searchResults');
                        if (searchResults) {
                            const windowHeight = window.innerHeight;
                            searchResults.style.maxHeight = `${Math.min(windowHeight * 0.3, 160)}px`;
                        }
                    }
                }["MapComponent.useEffect.handleResize"];
                window.addEventListener('resize', handleResize);
                handleResize() // Initial call
                ;
                // Cleanup function
                return ({
                    "MapComponent.useEffect": ()=>{
                        window.removeEventListener('resize', handleResize);
                        delete window.goToLocation;
                        if (searchTimeoutRef.current) {
                            clearTimeout(searchTimeoutRef.current);
                        }
                        // ลบ initial markers
                        initialMarkersRef.current.forEach({
                            "MapComponent.useEffect": (marker)=>marker.remove()
                        }["MapComponent.useEffect"]);
                        initialMarkersRef.current = [];
                        // ลบ search markers
                        markersRef.current.forEach({
                            "MapComponent.useEffect": (marker)=>marker.remove()
                        }["MapComponent.useEffect"]);
                        markersRef.current = [];
                        if (mapRef.current) {
                            mapRef.current.remove();
                            mapRef.current = null;
                        }
                    }
                })["MapComponent.useEffect"];
            }
        }
    }["MapComponent.useEffect"], [
        goToLocation,
        handleSearch,
        handleMarkerClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "map",
        className: "w-full h-full",
        style: {
            position: 'relative',
            zIndex: 0
        }
    }, void 0, false, {
        fileName: "[project]/src/components/MapComponents.js",
        lineNumber: 280,
        columnNumber: 5
    }, this);
};
_s(MapComponent, "3eICqVgfauta6VE20BoIQ/vbumI=");
_c = MapComponent;
const __TURBOPACK__default__export__ = MapComponent;
var _c;
__turbopack_refresh__.register(_c, "MapComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_f5e1e7._.js.map