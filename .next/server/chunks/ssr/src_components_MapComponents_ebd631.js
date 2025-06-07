module.exports = {

"[project]/src/components/MapComponents.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/firebase-configs.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// ค่าคงที่สำหรับพิกัดและการตั้งค่าแผนที่
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
const LOCATION_DATA = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$firebase$2d$configs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCATION_CONFIGS"];
const MapComponents = ({ onLocationSelect })=>{
    // สร้าง useRef สำหรับเก็บข้อมูลที่ไม่ต้องการให้ re-render
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const initialMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const searchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(`map-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
    // สร้าง useState สำหรับควบคุมการทำงาน
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [leafletLoaded, setLeafletLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingError, setLoadingError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // useEffect สำหรับตรวจสอบ client-side และโหลด Leaflet แบบดั้งเดิม
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ตรวจสอบว่าอยู่ใน browser environment หรือไม่
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    // ฟังก์ชันจัดการเมื่อคลิกที่ marker
    const handleMarkerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((locationId)=>{
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
    }, [
        onLocationSelect
    ]);
    // ฟังก์ชันสำหรับไปยังตำแหน่งที่เลือก
    const goToLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lat, lon, name)=>{
        // ใช้ window.L แทนการ import - นี่คือจุดสำคัญของวิธีแบบดั้งเดิม
        if (!mapRef.current || !window.L) return;
        mapRef.current.setView([
            lat,
            lon
        ], DEFAULT_ZOOM);
        // ลบ markers จากการค้นหาก่อนหน้า
        markersRef.current.forEach((marker)=>marker.remove());
        markersRef.current = [];
        // เพิ่ม marker ใหม่ - ใช้ window.L
        const newMarker = window.L.marker([
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
        // ล้างช่องค้นหา
        const searchInput = containerRef.current?.querySelector('#searchInput');
        const searchResults = containerRef.current?.querySelector('#searchResults');
        if (searchResults) searchResults.innerHTML = '';
        if (searchInput) searchInput.value = '';
    }, []);
    // ฟังก์ชันจัดการการค้นหา
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (query)=>{
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
            searchResults.innerHTML = data.slice(0, 5).map((result)=>`
				<div 
					class="p-2 hover:bg-gray-100 cursor-pointer text-sm" 
					data-lat="${result.lat}" 
					data-lon="${result.lon}" 
					data-name="${result.display_name.replace(/"/g, '&quot;')}"
				>
					${result.display_name}
				</div>
			`).join('');
            const resultElements = searchResults.querySelectorAll('[data-lat]');
            resultElements.forEach((element)=>{
                element.addEventListener('click', ()=>{
                    const lat = parseFloat(element.dataset.lat);
                    const lon = parseFloat(element.dataset.lon);
                    const name = element.dataset.name;
                    goToLocation(lat, lon, name);
                });
            });
        } catch (error) {
            console.error('Search error:', error);
            searchResults.innerHTML = '<div class="p-2 text-red-500 text-sm">เกิดข้อผิดพลาดในการค้นหา</div>';
        }
    }, [
        goToLocation
    ]);
    // useEffect หลักสำหรับสร้างแผนที่ - ใช้ window.L แทน imported L
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // รอให้ client พร้อม, Leaflet โหลดเสร็จ, และไม่มี error
        if (!isClient || !leafletLoaded || loadingError || mapRef.current || !containerRef.current) return;
        // ตรวจสอบอีกครั้งว่า window.L มีจริงหรือไม่
        if (!window.L) {
            console.error('window.L ยังไม่พร้อมใช้งาน');
            return;
        }
        const mapContainer = containerRef.current.querySelector('.map-container');
        if (!mapContainer) return;
        console.log('กำลังสร้างแผนที่ด้วย window.L...');
        try {
            // สร้าง map instance - ใช้ window.L แทน imported L
            const mapInstance = window.L.map(mapContainer, {
                zoomControl: false,
                attributionControl: false
            }).setView(WALAILAK_COORDS, DEFAULT_ZOOM);
            mapRef.current = mapInstance;
            // เพิ่ม controls - ใช้ window.L
            window.L.control.zoom({
                position: 'bottomright'
            }).addTo(mapInstance);
            window.L.control.attribution({
                position: 'bottomleft',
                prefix: 'Leaflet | © OpenStreetMap'
            }).addTo(mapInstance);
            // เพิ่ม tile layer - ใช้ window.L
            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapInstance);
            // เพิ่ม CSS styles
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
				.custom-tooltip::before { display: none !important; }
				.clickable-marker { cursor: pointer !important; }
				.clickable-marker:active { opacity: 0.8 !important; }
				.leaflet-tooltip { transition: opacity 0.2s ease !important; }
			`;
                document.head.appendChild(style);
            }
            // เพิ่ม markers เริ่มต้น - ใช้ window.L
            const initialMarker1 = window.L.marker(WALAILAK_COORDS).addTo(mapInstance).bindTooltip("Cafe Amazon สาขา ST", {
                permanent: true,
                direction: 'center',
                offset: [
                    0,
                    0
                ],
                className: 'custom-tooltip'
            }).on('click', ()=>handleMarkerClick('cafe-amazon-st'));
            const initialMarker2 = window.L.marker(WALAILAK_C4).addTo(mapInstance).bindTooltip("อาคารวิชาการ 4", {
                permanent: true,
                direction: 'center',
                offset: [
                    0,
                    0
                ],
                className: 'custom-tooltip'
            }).on('click', ()=>handleMarkerClick('building-c4'));
            // เพิ่ม CSS classes สำหรับ markers
            setTimeout(()=>{
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
            }, 100);
            initialMarkersRef.current = [
                initialMarker1,
                initialMarker2
            ];
            // สร้าง search control - ใช้ window.L
            const searchControl = window.L.control({
                position: 'topright'
            });
            searchControl.onAdd = function() {
                const div = window.L.DomUtil.create('div', 'leaflet-control leaflet-bar');
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
            };
            searchControl.addTo(mapInstance);
            // ตั้งค่า search input
            setTimeout(()=>{
                const searchInput = containerRef.current?.querySelector('#searchInput');
                if (searchInput) {
                    searchInput.addEventListener('input', (e)=>{
                        if (searchTimeoutRef.current) {
                            clearTimeout(searchTimeoutRef.current);
                        }
                        searchTimeoutRef.current = setTimeout(()=>handleSearch(e.target.value), SEARCH_DELAY);
                    });
                    // ใช้ window.L.DomEvent แทน L.DomEvent
                    window.L.DomEvent.disableClickPropagation(searchInput);
                    window.L.DomEvent.disableScrollPropagation(searchInput);
                }
            }, 100);
            // จัดการ resize
            const handleResize = ()=>{
                if (mapInstance) {
                    mapInstance.invalidateSize();
                }
            };
            window.addEventListener('resize', handleResize);
            setTimeout(handleResize, 100);
            console.log('แผนที่สร้างเสร็จเรียบร้อยแล้ว!');
            // Cleanup function
            return ()=>{
                console.log('กำลังล้างค่าแผนที่...');
                window.removeEventListener('resize', handleResize);
                if (searchTimeoutRef.current) {
                    clearTimeout(searchTimeoutRef.current);
                }
                initialMarkersRef.current.forEach((marker)=>marker.remove());
                initialMarkersRef.current = [];
                markersRef.current.forEach((marker)=>marker.remove());
                markersRef.current = [];
                if (mapRef.current) {
                    mapRef.current.remove();
                    mapRef.current = null;
                }
            };
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการสร้างแผนที่:', error);
            setLoadingError('ไม่สามารถสร้างแผนที่ได้');
        }
    }, [
        isClient,
        leafletLoaded,
        loadingError,
        handleSearch,
        handleMarkerClick
    ]);
    // แสดง error state ถ้ามีปัญหา
    if (loadingError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center bg-red-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-6xl mb-4",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapComponents.js",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 font-medium",
                        children: "เกิดข้อผิดพลาด"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapComponents.js",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-sm mt-1",
                        children: loadingError
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapComponents.js",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        className: "mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                        children: "ลองใหม่"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapComponents.js",
                        lineNumber: 372,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapComponents.js",
                lineNumber: 368,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MapComponents.js",
            lineNumber: 367,
            columnNumber: 7
        }, this);
    }
    // แสดง loading state
    if (!isClient || !leafletLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapComponents.js",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "กำลังโหลดแผนที่..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapComponents.js",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm mt-1",
                        children: !isClient ? 'เตรียมข้อมูล...' : 'โหลด Leaflet library...'
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapComponents.js",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapComponents.js",
                lineNumber: 387,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MapComponents.js",
            lineNumber: 386,
            columnNumber: 7
        }, this);
    }
    // Render แผนที่
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full relative",
        style: {
            position: 'relative'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            lineNumber: 405,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MapComponents.js",
        lineNumber: 400,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MapComponents;
}}),

};

//# sourceMappingURL=src_components_MapComponents_ebd631.js.map