import React from "react";
import styles from "./overview.module.css"; // Importing CSS module

const overview = () => {
  return (
    <div className={styles.dashboard}>
      
      <div className={styles.card}>
        <h2>Total Income</h2>
        <p className={styles.value}>$32,499.93</p>
        <span className={styles.positive}>▲ 12.95% Compared to last month</span>
      </div>
      <div className={styles.card}>
        <h2>Profit</h2>
        <p className={styles.value}>$10,499.93</p>
        <span className={styles.negative}>▼ 0.33% Compared to last month</span>
      </div>
      <div className={styles.card}>
        <h2>Total Views</h2>
        <p className={styles.value}>5,211,832</p>
        <span className={styles.positive}>▲ 0.32% Compared to last month</span>
      </div>
      <div className={styles.card}>
        <h2>Conversion Rate</h2>
        <p className={styles.value}>4.83%</p>
        <span className={styles.positive}>▲ 8.05% Compared to last month</span>
      </div>

      {/* Revenue Over Time Chart */}
      <div className={`${styles.chart} ${styles.revenue}`}>
        <h2>Revenue Over Time</h2>
        <div className={styles.chartContent}>📊 Chart Here</div>
      </div>

      {/* Session by Country */}
      <div className={`${styles.chart} ${styles.country}`}>
        <h2>Session by Country</h2>
        <div className={styles.chartContent}>🌎 Country Data Here</div>
      </div>

      {/* Sales by Region */}
      <div className={`${styles.chart} ${styles.region}`}>
        <h2>Sales by Region</h2>
        <div className={styles.chartContent}>🌍 Sales Data Here</div>
      </div>

      {/* Sales by E-commerce Platform */}
      <div className={`${styles.chart} ${styles.ecommerce}`}>
        <h2>Sales by E-commerce Platform</h2>
        <div className={styles.chartContent}>🛒 Platform Sales Here</div>
      </div>

      {/* Registered Users */}
      <div className={`${styles.chart} ${styles.users}`}>
        <h2>Registered Users</h2>
        <div className={styles.chartContent}>👤 Users Data Here</div>
      </div>
    </div>
  );
};

export default overview;
