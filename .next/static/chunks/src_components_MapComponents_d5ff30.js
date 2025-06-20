(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_MapComponents_d5ff30.js", {

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
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const WALAILAK_COORDS = [
    8.6407383,
    99.8985493
];
const DEFAULT_ZOOM = 16.5;
const SEARCH_DELAY = 500;
const MIN_SEARCH_LENGTH = 3;
const MapComponent = ()=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const searchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle location selection
    const goToLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapComponent.useCallback[goToLocation]": (lat, lon, name)=>{
            if (!mapRef.current) return;
            mapRef.current.setView([
                lat,
                lon
            ], DEFAULT_ZOOM);
            // Clear existing markers
            markersRef.current.forEach({
                "MapComponent.useCallback[goToLocation]": (marker)=>marker.remove()
            }["MapComponent.useCallback[goToLocation]"]);
            markersRef.current = [];
            // Add new marker
            const newMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                lat,
                lon
            ]).addTo(mapRef.current).bindPopup(`<b>${name}</b>`).openPopup();
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
                // Add initial Walailak marker
                const initialMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(WALAILAK_COORDS).addTo(mapInstance).bindPopup("<b>มหาวิทยาลัยวลัยลักษณ์</b>").openPopup();
                markersRef.current = [
                    initialMarker
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
                        if (mapRef.current) {
                            mapRef.current.remove();
                            mapRef.current = null;
                        }
                        markersRef.current = [];
                    }
                })["MapComponent.useEffect"];
            }
        }
    }["MapComponent.useEffect"], [
        goToLocation,
        handleSearch
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
        lineNumber: 193,
        columnNumber: 5
    }, this);
};
_s(MapComponent, "LFOioBpp4t2MMuIjALsUM68LxOo=");
_c = MapComponent;
const __TURBOPACK__default__export__ = MapComponent;
var _c;
__turbopack_refresh__.register(_c, "MapComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_MapComponents_d5ff30.js.map