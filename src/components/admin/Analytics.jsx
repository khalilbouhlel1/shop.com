import React, { useState, useEffect } from 'react';
import { analyticsService } from '../../services/api';
import {
  LineChart,
  BarChart,
  PieChart
} from 'react-chartjs-2';
import './Analytics.css';

const Analytics = () => {
  const [salesData, setSalesData] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [timeFrame, setTimeFrame] = useState('week');

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeFrame]);

  const fetchAnalyticsData = async () => {
    try {
      const [sales, customers, products] = await Promise.all([
        analyticsService.getSalesData(timeFrame),
        analyticsService.getCustomerData(timeFrame),
        analyticsService.getProductData(timeFrame)
      ]);

      setSalesData(sales.data);
      setCustomerData(customers.data);
      setProductData(products.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  return (
    <div className="analytics-dashboard">
      <div className="analytics-header">
        <h2>Dashboard Analytics</h2>
        <select 
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
        >
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Sales Overview</h3>
          {salesData && (
            <LineChart data={salesData} />
          )}
        </div>

        <div className="analytics-card">
          <h3>Customer Demographics</h3>
          {customerData && (
            <PieChart data={customerData} />
          )}
        </div>

        <div className="analytics-card">
          <h3>Top Products</h3>
          {productData && (
            <BarChart data={productData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics; 