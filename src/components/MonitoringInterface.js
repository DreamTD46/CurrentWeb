'use client'

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // เพิ่ม import สำหรับ Portal เพื่อแก้ปัญหา z-index
import Link from 'next/link';
import { ArrowUpRight, Thermometer, Droplets, Menu, X, ChevronUp, MapPin, Clock, TrendingUp, BarChart3, UserX, Users } from 'lucide-react';
import {
  getAirQualityColor,
  formatPMValue,
  getRecommendationIcon,
  useMonitoringData,
  useLocationMonitoringData,
  getGeneralRecommendations,
  getSensitiveRecommendations,
  determineAirQuality,
  getPMReadingStatusAndColor // เพิ่มการ import ฟังก์ชันใหม่
} from '../data/monitoring-data';

// Import Live Activity Animation Components
import { LiveActivityNumber } from '../components/Animation';
import('./MapComponents')

// Helper function สำหรับกำหนดระดับความเสี่ยงสำหรับกลุ่มต่างๆ
// ฟังก์ชันนี้จะช่วยในการคำนวณสถานะคุณภาพอากาศสำหรับกลุ่มผู้ใช้แต่ละประเภท
const getAirQualityForGroup = (pc01, pm01, pm25, pm100, groupType = 'general') => {
  return determineAirQuality(pc01, pm01, pm25, pm100);
};

// Header Component - ส่วนหัวของหน้าเว็บที่มี navigation และ logo
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-18 sm:h-20 bg-green-100 border-b border-green-100 flex-shrink-0">
      <div className="h-full flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center">
            <img
              src="/assets/images/logo.png"
              alt="Mupcop logo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              width={96}
              height={96}
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat">Mupcop</h1>
            <h2 className="text-base sm:text-lg lg:text-xl font-light text-black max-w-xl font-montserrat">
              Multi-factor ultrafine particle optimization prediction
            </h2>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-4 sm:gap-6">
          <Link href="/" className="px-4 py-2 text-lg sm:text-xl lg:text-2xl font-semibold text-black rounded-lg hover:bg-green-200 transition-colors font-montserrat">
            Air quality
          </Link>
          <Link href="/history-data" className="px-4 py-2 text-lg sm:text-xl lg:text-2xl font-semibold text-black rounded-lg hover:bg-green-200 transition-colors font-montserrat">
            History data
          </Link>
        </nav>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

// MonitoringPanel Component - component หลักสำหรับแสดงข้อมูลการตรวจวัด
// component นี้จะรับ props เกี่ยวกับตำแหน่งที่เลือกและฟังก์ชันสำหรับล้างการเลือก
const MonitoringPanel = ({ selectedLocation, onLocationClear }) => {
  // State สำหรับจัดการ modal popup ของคำแนะนำ
  const [showRecommendationPopup, setShowRecommendationPopup] = useState(false);
  const [selectedRecommendations, setSelectedRecommendations] = useState([]);
  const [selectedGroupType, setSelectedGroupType] = useState('general');

  // ใช้ custom hooks สำหรับดึงข้อมูลจาก Firebase
  // hooks เหล่านี้จะส่งคืน object ที่มี data, loading, และ error state
  const { data: defaultData, loading: defaultLoading, error: defaultError } = useMonitoringData();
  const { data: locationData, loading: locationLoading, error: locationError } = useLocationMonitoringData(selectedLocation);

  // เลือกข้อมูลที่จะใช้แสดงผลขึ้นอยู่กับว่าผู้ใช้เลือกตำแหน่งหรือไม่
  // หากเลือกตำแหน่งจะใช้ข้อมูลของตำแหน่งนั้น หากไม่เลือกจะใช้ข้อมูล default
  const data = selectedLocation ? locationData : defaultData;
  const loading = selectedLocation ? locationLoading : defaultLoading;
  const error = selectedLocation ? locationError : defaultError;

  // ตรวจสอบความถูกต้องของข้อมูลก่อนนำไปใช้แสดงผล
  // การตรวจสอบนี้จำเป็นเพื่อป้องกัน runtime errors เมื่อข้อมูลไม่ครบถ้วน
  const isDataValid = data && data.pmReadings && Array.isArray(data.pmReadings);
  const statusColor = isDataValid ? getAirQualityColor(data.mainReading?.status || 'Good') : '#2DC653';

  // ฟังก์ชันปลอดภัยสำหรับดึงค่า PM จาก array ของ readings
  // ฟังก์ชันนี้จะคืนค่า 0 หากไม่พบข้อมูลหรือข้อมูลไม่ถูกต้อง
  const getSafeValue = (readings, type) => {
    if (!readings || !Array.isArray(readings)) return 0;
    const reading = readings.find(r => r && r.type === type);
    return parseFloat(reading?.value || 0) || 0;
  };

  // คำนวณสถานะคุณภาพอากาศสำหรับกลุ่มต่างๆ
  // ฟังก์ชันนี้จะใช้ข้อมูล PM ทั้งหมดมาคำนวณสถานะโดยรวม
  const calculateGroupStatus = (groupType = 'general') => {
    if (!isDataValid) return 'Good';

    const pc01Value = getSafeValue(data.pmReadings, 'PC01');
    const pm01Value = getSafeValue(data.pmReadings, 'PM0.1');
    const pm25Value = getSafeValue(data.pmReadings, 'PM2.5');
    const pm10Value = getSafeValue(data.pmReadings, 'PM10');

    return determineAirQuality(pc01Value, pm01Value, pm25Value, pm10Value);
  };

  // คำนวณสถานะสำหรับทั้งสองกลุ่ม
  const sensitiveStatus = calculateGroupStatus('sensitive');
  const generalStatus = calculateGroupStatus('general');

  // จัดการการคลิกปุ่มคำแนะนำ
  // ฟังก์ชันนี้จะดึงคำแนะนำที่เหมาะสมตามกลุ่มและสถานะคุณภาพอากาศ
  const handleRecommendationClick = (groupType) => {
    const status = groupType === 'sensitive' ? sensitiveStatus : generalStatus;
    const recommendations = groupType === 'sensitive'
      ? getSensitiveRecommendations(status)
      : getGeneralRecommendations(status);

    setSelectedRecommendations(recommendations);
    setSelectedGroupType(groupType);
    setShowRecommendationPopup(true);
  };

  // ฟังก์ชันสำหรับปิด modal popup
  const closePopup = () => {
    setShowRecommendationPopup(false);
    setSelectedRecommendations([]);
  };

  // จัดการการกด Escape key เพื่อปิด modal
  // useEffect นี้จะเพิ่ม event listener เมื่อ modal เปิดและลบออกเมื่อปิด
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showRecommendationPopup) {
        closePopup();
      }
    };

    if (showRecommendationPopup) {
      document.addEventListener('keydown', handleEscapeKey);
      // ป้องกันการ scroll ของ body เมื่อ modal เปิด
      document.body.style.overflow = 'hidden';
    } else {
      // คืนค่า scroll ของ body เมื่อ modal ปิด
      document.body.style.overflow = 'unset';
    }

    // cleanup function จะทำงานเมื่อ component unmount หรือ dependencies เปลี่ยน
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [showRecommendationPopup]);

  // แสดง loading state ขณะที่ข้อมูลกำลังถูกดึงจาก Firebase
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] w-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mb-3"></div>
          <p className="text-lg sm:text-xl text-gray-600 font-sarabun">กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    );
  }

  // แสดง error state หากเกิดปัญหาในการดึงข้อมูล
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] w-full">
        <div className="text-center">
          <div className="text-red-500 mb-3">⚠️</div>
          <p className="text-lg sm:text-xl text-red-600 font-sarabun">เกิดข้อผิดพลาด: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            รีเฟรช
          </button>
        </div>
      </div>
    );
  }

  // แสดง no data state หากไม่มีข้อมูล
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px] w-full">
        <div className="text-center">
          <div className="text-gray-400 mb-3">📭</div>
          <p className="text-lg sm:text-xl text-gray-600 font-sarabun">ไม่มีข้อมูล</p>
        </div>
      </div>
    );
  }

  // แสดงเนื้อหาหลักของ component
  return (
    <div className="w-full bg-white">
      <div className="p-3 sm:p-4">
        {/* Location Header - ส่วนหัวที่แสดงชื่อและปุ่มล้างการเลือกตำแหน่ง */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-black font-montserrat">UFPs Monitoring</h2>
          {selectedLocation && onLocationClear && (
            <button
              onClick={onLocationClear}
              className="text-base sm:text-lg text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors font-sarabun"
            >
              × ล้าง
            </button>
          )}
        </div>

        {/* Main reading card - การ์ดหลักที่แสดงข้อมูลสำคัญ */}
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 mb-3 sm:mb-4">
          {/* LIVE indicator และวันที่ */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black font-montserrat">LIVE</span>
            </div>
            <span className="text-base sm:text-lg lg:text-xl text-black font-numbers">{data.date || 'N/A'}</span>
          </div>

          {/* Location name และเวลาอัพเดท */}
          <div className="text-base sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate text-base sm:text-lg lg:text-xl font-sarabun">
                  {selectedLocation ? selectedLocation.name : data.location || "Cafe Amazon สาขา ST"}
                </span>
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-gray-500 sm:ml-2">
                <span className="font-sarabun">อัพเดท: </span>
                <span className="font-numbers">{data.time || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* PM Reading Section - ส่วนแสดงค่า PM หลักและปุ่มคำแนะนำ */}
          <div className="flex rounded-lg mb-3 sm:mb-4 shadow-sm overflow-hidden min-h-[140px] sm:min-h-[160px]">
            {/* ส่วนซ้าย: ค่า PC0.1 หรือ PM0.1 พร้อมหน่วยและ animation */}
            <div
              className="w-[50%] sm:w-[45%] p-2 sm:p-3 flex flex-col justify-center relative"
              style={{ backgroundColor: statusColor }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 text-center">
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-2 text-white opacity-90 font-montserrat">
                  {data.mainReading?.type || 'PC0.1'}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 leading-tight" style={{ textShadow: '3px 3px 6px rgba(75, 64, 64, 0.8)' }}>
                  <LiveActivityNumber
                    value={data.mainReading?.value || getSafeValue(data.pmReadings, 'PC01')}
                    type="cascade-slide"
                    decimals={0}
                    className="text-white"
                    showChangeIndicator={true}
                    minDigits={1}
                    direction="right-to-left"
                  />
                </div>
                <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white opacity-90 font-montserrat">
                  {data.mainReading?.unit || 'PNC'}
                </div>
              </div>
            </div>

            {/* ส่วนขวา: ปุ่มคำแนะนำสำหรับกลุ่มต่างๆ */}
            <div
              className="w-[50%] sm:w-[55%] flex flex-col"
              style={{ backgroundColor: statusColor }}
            >
              {/* ปุ่มสำหรับกลุ่มเปราะบาง */}
              <button
                onClick={() => handleRecommendationClick('sensitive')}
                className="flex-1 flex items-center gap-2 sm:gap-3 p-2 sm:p-3 transition-all hover:bg-black hover:bg-opacity-10 border-b border-white/20 focus:outline-none focus:bg-black focus:bg-opacity-20"
                aria-label="ดูคำแนะนำสำหรับกลุ่มเปราะบาง"
              >
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  <span
                    className="material-symbols-outlined text-white drop-shadow-lg"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    shield_person
                  </span>
                </div>
                <div className="flex-1 text-center min-w-0">
                  <div className="text-xs sm:text-sm lg:text-xl font-semibold text-white opacity-90 mb-1 font-sarabun">
                    กลุ่มเปราะบาง
                  </div>
                  <div className="text-sm sm:text-base lg:text-xl xl:text-3xl font-bold text-white truncate font-montserrat" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                    {sensitiveStatus}
                  </div>
                </div>
                <div className="flex-shrink-0 text-white text-sm sm:text-base opacity-60">
                  →
                </div>
              </button>

              {/* ปุ่มสำหรับคนทั่วไป */}
              <button
                onClick={() => handleRecommendationClick('general')}
                className="flex-1 flex items-center gap-2 sm:gap-3 p-2 sm:p-3 transition-all hover:bg-black hover:bg-opacity-10 focus:outline-none focus:bg-black focus:bg-opacity-20"
                aria-label="ดูคำแนะนำสำหรับคนทั่วไป"
              >
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  <span
                    className="material-symbols-outlined text-white drop-shadow-lg"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    person
                  </span>
                </div>
                <div className="flex-1 text-center min-w-0">
                  <div className="text-xs sm:text-sm lg:text-xl font-semibold text-white opacity-90 mb-1 font-sarabun">
                    กลุ่มคนทั่วไป
                  </div>
                  <div className="text-sm sm:text-base lg:text-xl xl:text-3xl font-bold text-white truncate font-montserrat" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    {generalStatus}
                  </div>
                </div>
                <div className="flex-shrink-0 text-white text-sm sm:text-base opacity-60">
                  →
                </div>
              </button>
            </div>
          </div>

          {/* Temperature and Humidity Section - ส่วนแสดงอุณหภูมิและความชื้น */}
          <div className="flex justify-center gap-8 sm:gap-12 text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 py-3 sm:py-4 bg-gray-50 rounded-lg">
            {/* Temperature */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/assets/images/temperature.png"
                alt="Temperature"
                className="w-8 h-8 sm:w-10 sm:h-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <Thermometer className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" style={{ display: 'none' }} />
              <LiveActivityNumber
                value={parseFloat(data.conditions?.temperature?.replace(/[^\d.-]/g, '')) || 25.5}
                type="cascade-slide"
                decimals={1}
                className="text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl"
                showChangeIndicator={false}
              />
              <span className="text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat">°C</span>
            </div>

            {/* Humidity */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/assets/images/humidity.png"
                alt="Humidity"
                className="w-8 h-8 sm:w-10 sm:h-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" style={{ display: 'none' }} />
              <LiveActivityNumber
                value={parseFloat(data.conditions?.humidity?.replace(/[^\d.-]/g, '')) || 65}
                type="cascade-slide"
                decimals={0}
                className="text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl"
                showChangeIndicator={false}
                direction="left-to-right"
              />
              <span className="text-gray-700 font-medium text-base sm:text-lg lg:text-xl xl:text-2xl font-montserrat">%</span>
            </div>
          </div>

          {/* Recommendations Icons - ไอคอนแสดงคำแนะนำแบบย่อ */}
          <div className="border-t border-gray-100 pt-2 sm:pt-3">
            <div className="text-center">
              <div className="flex justify-center items-center gap-3 sm:gap-4 p-1 flex-wrap">
                {(data.recommendations || []).slice(0, 5).map((recommendation, index) => {
                  const iconPath = getRecommendationIcon(recommendation);
                  const isImageIcon = typeof iconPath === 'string' && iconPath.startsWith('/assets/images/');

                  return (
                    <div key={index} className="flex flex-col items-center">
                      {isImageIcon ? (
                        <img
                          src={iconPath}
                          alt=""
                          className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'inline';
                          }}
                        />
                      ) : (
                        <span className="text-sm sm:text-base lg:text-lg">{iconPath}</span>
                      )}
                      {isImageIcon && (
                        <span style={{ display: 'none' }} className="text-sm sm:text-base lg:text-lg">•</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1 font-sarabun">
                คลิกที่ bubble สีด้านบนเพื่อดูคำแนะนำสำหรับแต่ละกลุ่ม
              </div>
            </div>
          </div>
        </div>

        {/* PM Summary Card - การ์ดแสดงข้อมูล PM2.5 และ PM10 โดยละเอียด */}
        <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-gray-100 mb-2 sm:mb-3">
          <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 mb-2 sm:mb-3 font-sarabun">ข้อมูลมลพิษทางอากาศ</h3>
          <div className="grid grid-cols-2 gap-1 sm:gap-2">
            {isDataValid ? (
              (() => {
                // กรองเฉพาะ PM2.5 และ PM10
                const pm25Reading = data.pmReadings.find(r => r && r.type === 'PM2.5');
                const pm10Reading = data.pmReadings.find(r => r && r.type === 'PM10');

                console.log('=== PM SUMMARY CARD DEBUG ===');
                console.log('All PM Readings:', data.pmReadings);
                console.log('PM2.5 Reading:', pm25Reading);
                console.log('PM10 Reading:', pm10Reading);
                console.log('============================');

                const pmDataToShow = [pm25Reading, pm10Reading].filter(Boolean);

                return pmDataToShow.length > 0 ? pmDataToShow.map((reading, index) => {
                  // แปลงค่าให้เป็นตัวเลข
                  let numericValue = 0;
                  if (typeof reading.value === 'number') {
                    numericValue = reading.value;
                  } else if (reading.value !== undefined) {
                    numericValue = parseFloat(String(reading.value).replace(/[^\d.-]/g, '')) || 0;
                  }

                  // *** สำคัญ: ใช้สถานะและสีของแต่ละค่า PM แยกกัน ***
                  const { status: individualStatus, color: individualColor } = getPMReadingStatusAndColor({
                    type: reading.type,
                    value: numericValue
                  });

                  console.log(`=== ${reading.type} INDIVIDUAL STATUS ===`);
                  console.log('Value:', numericValue);
                  console.log('Individual Status:', individualStatus);
                  console.log('Individual Color:', individualColor);
                  console.log('=====================================');

                  return (
                    <div
                      key={`${reading.type}-${selectedLocation?.id || 'default'}-${index}`}
                      className="rounded-lg p-1 sm:p-2 text-white text-center"
                      style={{ backgroundColor: individualColor }}
                    >
                      <div className="text-sm sm:text-base lg:text-lg font-medium mb-1 opacity-90 font-montserrat">
                        {reading.type}
                      </div>

                      <div className="text-lg sm:text-2xl lg:text-3xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                        <LiveActivityNumber
                          value={numericValue}
                          type="cascade-slide"
                          decimals={2}
                          className="text-white"
                          showChangeIndicator={false}
                        />
                      </div>

                      <div className="text-xs sm:text-sm lg:text-base opacity-90 font-montserrat">
                        μg/m³
                      </div>

                      {/* เพิ่มแสดงสถานะของแต่ละค่า PM (ถ้าต้องการ) */}
                      <div className="text-xs opacity-75 mt-1 font-montserrat">
                        {individualStatus}
                      </div>
                    </div>
                  );
                }) : (
                  <div className="col-span-2 text-center text-xs sm:text-sm text-gray-500 py-4 font-sarabun">
                    ไม่พบข้อมูล PM2.5 และ PM10
                  </div>
                );
              })()
            ) : (
              <div className="col-span-2 text-center text-xs sm:text-sm text-gray-500 py-4 font-sarabun">
                ไม่มีข้อมูลมลพิษในขณะนี้
              </div>
            )}
          </div>
        </div>
  {/* Air Quality Chevron Bar - แถบแสดงระดับคุณภาพอากาศ */}
  {/* <ChevronAirQualityBar currentStatus={data.mainReading?.status} /> */}
  <SimpleChevronBar />

  {/* Click instruction - คำแนะนำการใช้งาน
  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
    <div className="text-base sm:text-lg lg:text-xl text-yellow-800 font-sarabun">
      💡 <strong>วิธีใช้:</strong> คลิกที่หมุดบนแผนที่เพื่อดูข้อมูลคุณภาพอากาศของตำแหน่งนั้น
    </div>
  </div> */}
</div>

      {/* Modal ที่ใช้ Portal เพื่อแก้ปัญหาการซ้อนทับ */}
      {/* การใช้ createPortal จะทำให้ modal render ไปยัง document.body โดยตรง */}
      {/* ซึ่งจะทำให้หลุดออกจาก stacking context ของ parent components */}
      {showRecommendationPopup && createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            zIndex: 9999, // z-index สูงมากเพื่อให้แน่ใจว่าจะอยู่บนสุด
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // backdrop overlay
          }}
          onClick={closePopup} // ปิด modal เมื่อคลิกที่ backdrop
          role="dialog" // accessibility attribute
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-lg max-w-xl w-full mx-4 max-h-[75vh] overflow-y-auto shadow-2xl"
            style={{
              zIndex: 10000, // z-index สูงกว่า backdrop เล็กน้อย
              transform: 'translateZ(0)' // สร้าง stacking context ใหม่
            }}
            onClick={(e) => e.stopPropagation()} // ป้องกันการปิด modal เมื่อคลิกใน content
          >
            {/* Header ของ Modal */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h3
                id="modal-title"
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 font-sarabun"
              >
                คำแนะนำสำหรับ{selectedGroupType === 'sensitive' ? 'กลุ่มเปราะบาง' : 'คนทั่วไป'}
              </h3>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                aria-label="ปิดหน้าต่าง"
              >
                ×
              </button>
            </div>

            {/* Content ของ Modal */}
            <div className="p-4 sm:p-6">
              {/* แสดงตำแหน่ง */}
              <div className="mb-4 text-base sm:text-lg lg:text-xl text-gray-600 font-sarabun">
                📍 {selectedLocation ? selectedLocation.name : data.location || "Cafe Amazon สาขา ST"}
              </div>

              {/* รายการคำแนะนำ */}
              <div className="space-y-4">
                {selectedRecommendations.map((recommendation, index) => {
                  const iconPath = getRecommendationIcon(recommendation);
                  const isImageIcon = typeof iconPath === 'string' && iconPath.startsWith('/assets/images/');

                  return (
                    <div
                      key={`popup-rec-${index}`}
                      className="flex items-center gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg transition-colors duration-200 hover:bg-gray-100"
                    >
                      {/* ไอคอนของคำแนะนำ */}
                      <span className="flex-shrink-0">
                        {isImageIcon ? (
                          <img
                            src={iconPath}
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'inline';
                            }}
                          />
                        ) : (
                          <span className="text-lg sm:text-xl">{iconPath}</span>
                        )}
                        {isImageIcon && (
                          <span style={{ display: 'none' }} className="text-lg sm:text-xl">•</span>
                        )}
                      </span>

                      {/* ข้อความคำแนะนำ */}
                      <span className="flex-1 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-sarabun">
                        {recommendation}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer ของ Modal */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
              <button
                onClick={closePopup}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 text-lg sm:text-xl lg:text-2xl font-medium font-sarabun focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>,
        document.body // render ไปยัง document.body แทนที่จะอยู่ใน component tree
      )}
    </div>
  );
};

// ส่วนแสดงแผนที่ (ด้านขวาบน)
const MapSection = ({ selectedLocation, onLocationSelect }) => {
  return (
    <div className="flex-1 p-4 h-full bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 mb-2 sm:mb-3 font-sarabun">แผนที่ตำแหน่งตรวจวัด</h2>
        <div className="text-sm text-gray-500 font-sarabun">
          คลิกที่หมุดเพื่อดูข้อมูล
        </div>
      </div>

      {/* Map Container - ใช้ MapComponent */}
      <div className="w-full h-[calc(100%-60px)] bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
        {/* Dynamic import เพื่อหลีกเลี่ยง SSR issues */}
        <MapComponentWrapper onLocationSelect={onLocationSelect} />
      </div>
    </div>
  );
};

// Wrapper component สำหรับ MapComponent ที่ใช้ dynamic import
const MapComponentWrapper = ({ onLocationSelect }) => {
  const [MapComponents, setMapComponents] = useState(null);

  useEffect(() => {
    // Dynamic import เพื่อหลีกเลี่ยง SSR issues กับ Leaflet
    import('./MapComponents').then((module) => {
      setMapComponents(() => module.default);
    });
  }, []);

  if (!MapComponents) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-2"></div>
          <p className="text-sm font-sarabun">กำลังโหลดแผนที่...</p>
        </div>
      </div>
    );
  }

  return <MapComponents onLocationSelect={onLocationSelect} />;
};

// ส่วนแสดงข้อมูล History (ด้านขวาล่าง)
const HistorySection = ({ selectedLocation }) => {
  const [selectedParameter, setSelectedParameter] = useState('PM2.5');

  // Mock data สำหรับ History - ในการใช้งานจริงควรดึงจาก Firebase
  const historyData = [
    { time: '15:00', pm01: 19.8, pm25: 31.2, pm10: 58.7, status: 'Moderate' },
    { time: '14:00', pm01: 15.2, pm25: 25.1, pm10: 45.3, status: 'Good' },
    { time: '13:00', pm01: 18.5, pm25: 28.7, pm10: 52.1, status: 'Moderate' },
    { time: '12:00', pm01: 12.8, pm25: 22.3, pm10: 38.9, status: 'Good' },
    { time: '11:00', pm01: 21.3, pm25: 35.2, pm10: 68.4, status: 'Unhealthy for Sensitive Groups' },
    { time: '10:00', pm01: 16.7, pm25: 30.1, pm10: 55.8, status: 'Moderate' },
    { time: '09:00', pm01: 14.2, pm25: 24.6, pm10: 42.1, status: 'Good' },
    { time: '08:00', pm01: 13.5, pm25: 23.8, pm10: 41.2, status: 'Good' },
    { time: '07:00', pm01: 17.1, pm25: 29.4, pm10: 54.3, status: 'Moderate' },
    { time: '06:00', pm01: 22.4, pm25: 37.8, pm10: 72.1, status: 'Unhealthy for Sensitive Groups' },
    { time: '05:00', pm01: 20.3, pm25: 34.6, pm10: 65.9, status: 'Unhealthy for Sensitive Groups' },
    { time: '04:00', pm01: 18.9, pm25: 32.1, pm10: 61.4, status: 'Moderate' },
    { time: '03:00', pm01: 16.1, pm25: 28.9, pm10: 53.7, status: 'Moderate' },
    { time: '02:00', pm01: 19.5, pm25: 33.2, pm10: 62.8, status: 'Moderate' },
    { time: '01:00', pm01: 23.7, pm25: 39.1, pm10: 74.3, status: 'Unhealthy for Sensitive Groups' },
    { time: '00:00', pm01: 21.2, pm25: 36.4, pm10: 69.1, status: 'Unhealthy for Sensitive Groups' },
  ];

  // เตรียมข้อมูลสำหรับกราฟ
  const chartData = historyData.map(item => ({
    time: item.time,
    value: item[selectedParameter.toLowerCase().replace('.', '')]
  })).reverse(); // ย้อนกลับเพื่อให้เรียงจากเก่าไปใหม่

  const getMaxValue = () => {
    return Math.max(...chartData.map(d => d.value)) * 1.1;
  };

  return (
    <div className="w-full bg-white">
      {/* Header Section - ไม่เลื่อน */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 font-sarabun">ข้อมูลย้อนหลัง</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="font-sarabun">{historyData.length} ชั่วโมงล่าสุด</span>
            </div>
            <Link
              href="/history-data"
              className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-sarabun"
            >
              <BarChart3 className="w-4 h-4" />
              ดูทั้งหมด
            </Link>
          </div>
        </div>

        {/* Location indicator */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 text-blue-800">
            <MapPin className="w-4 h-4" />
            <span className="font-sarabun">
              ตำแหน่ง: {selectedLocation ? selectedLocation.name : "Cafe Amazon สาขา ST"}
            </span>
          </div>
        </div>

        {/* Parameter Selector */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 font-sarabun">แสดงข้อมูล:</span>
            <select
              value={selectedParameter}
              onChange={(e) => setSelectedParameter(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm font-montserrat"
            >
              <option value="PC0.1">PC0.1</option>
              <option value="PM0.1">PM0.1</option>
              <option value="PM2.5">PM2.5</option>
              <option value="PM10">PM10</option>
            </select>
          </div>
          <div className="text-xs text-gray-500 font-sarabun">
            หน่วย: μg/m³
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">
        {/* Simple Chart */}
        <div className="mb-4 bg-gray-50 rounded-lg p-4 h-40">
          <div className="relative h-full">
            <svg className="w-full h-full">
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((value, index) => (
                <g key={index}>
                  <line
                    x1="0"
                    y1={`${100 - value}%`}
                    x2="100%"
                    y2={`${100 - value}%`}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text
                    x="5"
                    y={`${100 - value}%`}
                    dy="-3"
                    fontSize="10"
                    fill="#6b7280"
                    className="font-numbers"
                  >
                    {Math.round((getMaxValue() * value) / 100)}
                  </text>
                </g>
              ))}

              {/* Chart line */}
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                points={chartData.map((d, i) =>
                  `${(i / (chartData.length - 1)) * 100}%,${100 - (d.value / getMaxValue()) * 100}%`
                ).join(' ')}
              />

              {/* Data points */}
              {chartData.map((d, i) => (
                <g key={i}>
                  <circle
                    cx={`${(i / (chartData.length - 1)) * 100}%`}
                    cy={`${100 - (d.value / getMaxValue()) * 100}%`}
                    r="3"
                    fill="#3b82f6"
                  />
                  {/* แสดง time labels เฉพาะบางจุด เพื่อไม่ให้แออัด */}
                  {i % Math.ceil(chartData.length / 8) === 0 && (
                    <text
                      x={`${(i / (chartData.length - 1)) * 100}%`}
                      y="100%"
                      dy="-5"
                      textAnchor="middle"
                      fontSize="10"
                      fill="#6b7280"
                      className="font-numbers"
                    >
                      {d.time}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* History Table - Scrollable */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700 font-sarabun">เวลา</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat">PM0.1</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat">PM2.5</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700 font-montserrat">PM10</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700 font-sarabun">สถานะ</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700 font-sarabun">แนวโน้ม</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {historyData.map((data, index) => {
                  const statusColor = getAirQualityColor(data.status);
                  const isLatest = index === 0;
                  const prevData = index < historyData.length - 1 ? historyData[index + 1] : null;
                  const trend = prevData ? (data.pm25 > prevData.pm25 ? 'up' : data.pm25 < prevData.pm25 ? 'down' : 'stable') : 'stable';

                  return (
                    <tr key={`${data.time}-${index}`} className={`hover:bg-gray-50 transition-colors ${isLatest ? 'bg-green-50' : ''}`}>
                      <td className="px-3 py-2 text-xs text-gray-900 font-numbers">
                        {data.time}
                        {isLatest && (
                          <span className="ml-1 inline-flex items-center px-1 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 font-sarabun">
                            ล่าสุด
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2 text-xs text-center font-numbers">
                        <LiveActivityNumber
                          value={data.pm01}
                          type="cascade-slide"
                          decimals={1}
                          className="text-gray-900"
                          showChangeIndicator={false}
                        />
                      </td>
                      <td className="px-3 py-2 text-xs text-center font-numbers">
                        <LiveActivityNumber
                          value={data.pm25}
                          type="cascade-slide"
                          decimals={1}
                          className="text-gray-900"
                          showChangeIndicator={false}
                        />
                      </td>
                      <td className="px-3 py-2 text-xs text-center font-numbers">
                        <LiveActivityNumber
                          value={data.pm10}
                          type="cascade-slide"
                          decimals={1}
                          className="text-gray-900"
                          showChangeIndicator={false}
                        />
                      </td>
                      <td className="px-3 py-2 text-center">
                        <span
                          className="inline-flex items-center px-1 py-0.5 rounded text-xs font-medium text-white font-montserrat"
                          style={{ backgroundColor: statusColor }}
                        >
                          {data.status === 'Unhealthy for Sensitive Groups' ? 'Unhealthy*' : data.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-center">
                        {trend === 'up' && (
                          <TrendingUp className="w-3 h-3 text-red-500 mx-auto" />
                        )}
                        {trend === 'down' && (
                          <TrendingUp className="w-3 h-3 text-green-500 mx-auto transform rotate-180" />
                        )}
                        {trend === 'stable' && (
                          <div className="w-3 h-0.5 bg-gray-400 mx-auto"></div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats - สถิติแบบรวดเร็ว */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
            <div className="text-xs text-blue-600 font-sarabun">ค่าเฉลี่ย</div>
            <div className="text-lg font-bold text-blue-800 font-numbers">
              <LiveActivityNumber
                value={historyData.reduce((sum, d) => sum + d[selectedParameter.toLowerCase().replace('.', '')], 0) / historyData.length}
                type="cascade-slide"
                decimals={1}
                className="text-blue-800"
                showChangeIndicator={false}
              />
              <span className="ml-1 text-xs font-montserrat">μg/m³</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border border-green-200">
            <div className="text-xs text-green-600 font-sarabun">ต่ำสุด</div>
            <div className="text-lg font-bold text-green-800 font-numbers">
              <LiveActivityNumber
                value={Math.min(...historyData.map(d => d[selectedParameter.toLowerCase().replace('.', '')]))}
                type="cascade-slide"
                decimals={1}
                className="text-green-800"
                showChangeIndicator={false}
              />
              <span className="ml-1 text-xs font-montserrat">μg/m³</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200">
            <div className="text-xs text-orange-600 font-sarabun">สูงสุด</div>
            <div className="text-lg font-bold text-orange-800 font-numbers">
              <LiveActivityNumber
                value={Math.max(...historyData.map(d => d[selectedParameter.toLowerCase().replace('.', '')]))}
                type="cascade-slide"
                decimals={1}
                className="text-orange-800"
                showChangeIndicator={false}
              />
              <span className="ml-1 text-xs font-montserrat">μg/m³</span>
            </div>
          </div>
        </div>

        {/* Data Info */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg mb-4">
          <div className="text-sm text-blue-800 font-sarabun">
            💡 <strong>การใช้งาน:</strong> เลื่อนตารางเพื่อดูข้อมูลย้อนหลัง หรือเลือก Parameter ที่ต้องการดูในกราฟและสถิติ
          </div>
        </div>
      </div>
    </div>
  );
};

// Export all components ให้สามารถนำไปใช้ในไฟล์อื่นได้
const SimpleChevronBar = () => {
  const levels = [
    { label: 'Good', color: '#2DC653', thai: 'ดี' },
    { label: 'Warning', color: '#FECF3E', thai: 'ปานกลาง' },
    { label: 'Affect health', color: '#FF9500', thai: 'มีผลต่อสุขภาพ' },
    { label: 'Danger', color: '#D02224', thai: 'อันตราย' },
    { label: 'Hazardous', color: '#973AA8', thai: 'เป็นอันตรายร้ายแรง' }
  ];

  const chevronWidth = 130; // ขยายความกว้างแต่ละบาร์
  const chevronHeight = 50;
  const svgWidth = chevronWidth * levels.length;

  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 mb-3 sm:mb-4">
      <h3 className="text-base sm:text-lg lg:text-2xl font-medium text-gray-800 mb-3 font-sarabun">
        ระดับคุณภาพอากาศ
      </h3>
      <div className="relative mb-3">
        <svg viewBox={`0 0 ${svgWidth} ${chevronHeight}`} className="w-full h-12 sm:h-14">
          {levels.map((level, index) => {
            const x = index * chevronWidth;
            return (
              <g key={level.label}>
                <path
                  d={`M ${x} 5 
          L ${x + chevronWidth - 10} 5 
          L ${x + chevronWidth} 25 
          L ${x + chevronWidth - 10} 45 
          L ${x} 45 
          ${index > 0 ? `L ${x + 10} 25` : `L ${x} 25`} 
          Z`}
                  fill={level.color}
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                />
                <text
                  x={x + chevronWidth / 2}
                  y="28"
                  textAnchor="middle"
                  fill="white"
                  fontSize="15"
                  fontWeight="600"
                  className="font-montserrat"
                  style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.8)' }}
                >
                  {level.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      {/* ป้ายกำกับภาษาไทย */}
      <div className="grid grid-cols-5 gap-1 text-center">
        {levels.map((level) => (
          <div
            key={`simple-${level.label}`}
            className="text-base sm:text-lg font-sarabun text-gray-700 break-words"
            style={{ minWidth: 0, wordBreak: 'break-word' }}
          >
            {level.thai}
          </div>
        ))}
      </div>
    </div>
  );
};

// Footer Component - ส่วนท้ายของหน้าเว็บ
const Footer = () => (
  <footer className="h-18 sm:h-20 bg-green-100 border-t border-green-100 flex-shrink-0 flex items-center justify-between p-4 sm:p-6">
    <span className="text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-montserrat">Created by Jaejae Dream Yok ❤️</span>
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="flex-shrink-0 flex items-center justify-center">
        <img
          src="/assets/images/logo.png"
          alt="Mupcop logo"
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
          width={96}
          height={96}
        />
      </div>
      <div>
        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black font-montserrat">Mupcop</p>
      </div>
    </div>
  </footer>
);

export {
  Header,
  MonitoringPanel,
  MapSection,
  HistorySection,
  SimpleChevronBar,
  Footer
};