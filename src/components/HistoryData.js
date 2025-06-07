'use client'

import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const HistoryData = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Daily');
    const [selectedParameter, setSelectedParameter] = useState('PM0.1');

    // Sample data for different periods and parameters
    const generateData = (period, parameter) => {
        const baseData = {
            'Daily': [
                { name: 'Dec 1', value: Math.random() * 25 + 10 },
                { name: 'Dec 7', value: Math.random() * 35 + 15 },
                { name: 'Dec 14', value: Math.random() * 45 + 20 },
                { name: 'Dec 21', value: Math.random() * 30 + 12 },
            ],
            'Weekly': [
                { name: 'Week 1', value: Math.random() * 40 + 15 },
                { name: 'Week 2', value: Math.random() * 35 + 18 },
                { name: 'Week 3', value: Math.random() * 50 + 25 },
                { name: 'Week 4', value: Math.random() * 28 + 14 },
            ],
            'Monthly': [
                { name: 'Jan', value: Math.random() * 30 + 12 },
                { name: 'Feb', value: Math.random() * 35 + 15 },
                { name: 'Mar', value: Math.random() * 40 + 18 },
                { name: 'Apr', value: Math.random() * 25 + 10 },
            ]
        };

        const multiplier = parameter === 'PM0.1' ? 0.5 : parameter === 'PM2.5' ? 1 : 1.5;
        return baseData[period].map(item => ({
            ...item,
            value: Math.round(item.value * multiplier * 10) / 10
        }));
    };

    const [data, setData] = useState(() => generateData('Daily', 'PM0.1'));

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
        setData(generateData(period, selectedParameter));
    };

    const handleParameterChange = (parameter) => {
        setSelectedParameter(parameter);
        setData(generateData(selectedPeriod, parameter));
    };

    const getBarColor = (value) => {
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

    return (
        <div className="min-h-full bg-green-50">
            {/* Main Content */}
            <div className="p-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">History</h2>
                    <p className="text-sm text-gray-600 mb-6">ข้อมูลคุณภาพอากาศย้อนหลังของ Cafe Amazon สาขา ST</p>

                    {/* Current Reading */}
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="text-right">
                            <p className="text-sm text-gray-500">{currentDate}</p>
                            <p className="text-3xl font-bold text-gray-800">
                                {currentReading} <span className="text-lg text-gray-500">(μg/m³)</span>
                            </p>
                        </div>
                        <span className="px-3 py-1 bg-green-500 text-white rounded-md font-medium">
                            {currentStatus}
                        </span>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-end space-x-4 mb-6">
                        {/* Period Selector */}
                        <div className="relative">
                            <select
                                value={selectedPeriod}
                                onChange={(e) => handlePeriodChange(e.target.value)}
                                className="appearance-none bg-green-100 border border-green-300 rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700">
                                <ChevronUp className="h-4 w-4 rotate-180" />
                            </div>
                        </div>

                        {/* Parameter Selector */}
                        <div className="relative">
                            <select
                                value={selectedParameter}
                                onChange={(e) => handleParameterChange(e.target.value)}
                                className="appearance-none bg-green-100 border border-green-300 rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="PM0.1">PM0.1</option>
                                <option value="PM2.5">PM2.5</option>
                                <option value="PM10">PM10</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700">
                                <ChevronUp className="h-4 w-4 rotate-180" />
                            </div>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                    label={{ value: 'μg/m³', angle: -90, position: 'insideLeft' }}
                                />
                                <Bar
                                    dataKey="value"
                                    radius={[4, 4, 0, 0]}
                                    fill={(entry, index) => {
                                        const dataEntry = data[index];
                                        return getBarColor(dataEntry?.value || 0);
                                    }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Legend */}
                    <div className="flex justify-end mt-4 space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-green-500 rounded"></div>
                            <span className="text-gray-600">Good (0-12)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                            <span className="text-gray-600">Moderate (13-35)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-orange-500 rounded"></div>
                            <span className="text-gray-600">Unhealthy (36+)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryData;