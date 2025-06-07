'use client'

// src/app/page.js - แก้ไขให้ UFPs Panel sticky ด้านซ้าย
import { useState } from 'react';
import { Header, MonitoringPanel, MapSection, HistorySection, Footer } from '../components/MonitoringInterface'
import { ClientWrapper } from '../components/ClientWrapper'

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (locationData) => {
    console.log('=== PAGE.JS DEBUG ===');
    console.log('Location selected in page.js:', locationData);
    console.log('Location ID:', locationData?.id);
    console.log('Location Name:', locationData?.name);
    console.log('Has rawDataPath:', !!locationData?.rawDataPath);
    console.log('Full locationData:', locationData);
    console.log('==================');
    setSelectedLocation(locationData);
  };

  const handleLocationClear = () => {
    console.log('Location cleared in page.js');
    setSelectedLocation(null);
  };

  console.log('Page.js current selectedLocation:', selectedLocation);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Main Content - UFPs Panel sticky ด้านซ้าย, ส่วนขวาเลื่อนได้ */}
      <main className="flex-1 flex">
        {/* Left Panel - UFPs Monitoring - Sticky */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-r border-gray-100 bg-white">
          <MonitoringPanel
            selectedLocation={selectedLocation}
            onLocationClear={handleLocationClear}
          />
        </div>

        {/* Right Side - Map + History - Scrollable */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* MapSection - กำหนดความสูงขั้นต่ำ */}
          <div className="min-h-[400px] lg:min-h-[500px]">
            <MapSection
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
            />
          </div>

          {/* HistorySection - ขยายตามเนื้อหา */}
          <div className="min-h-[600px]">
            <HistorySection
              selectedLocation={selectedLocation}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}