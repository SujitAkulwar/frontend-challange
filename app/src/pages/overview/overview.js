import React from "react";
import styles from "./overview.module.css"; 
import Header from "@/components/header/header";

const overview = () => {

  const cardData = [
    {
      title: "Total Income",
      value: "$32,499.93",
      change: "▲ 12.95%",
      changeClass: styles.positive,
      text: "Compared to last month",
    },
    {
      title: "Profit",
      value: "$10,499.93",
      change: "▼ 0.33%",
      changeClass: styles.negative,
      text: "Compared to last month",
    },
    {
      title: "Total Views",
      value: "5,211,832",
      change: "▲ 0.32%",
      changeClass: styles.positive,
      text: "Compared to last month",
    },
    {
      title: "Conversion Rate",
      value: "4.83%",
      change: "▲ 8.05%",
      changeClass: styles.positive,
      text: "Compared to last month",
    },
  ];


  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.title}>
        <h1>Overview</h1>
        <div className={styles.titlebuttons}>
          <button className={styles.titlebuttons}>Costomize Widget</button>
          <button className={styles.titlebuttons}>Filter</button>
          <button className={styles.titlebuttons}>Share</button>
        </div>  
      </div>

      <div className={styles.dashboard}>

        {cardData.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardtitle}>{card.title}</div>
            <p className={styles.value}>{card.value}</p>
            <span className={styles.cardspan}>
              <div className={card.changeClass}>{card.change}</div>
              <div className={styles.cardtext}>{card.text}</div>
            </span>
          </div>
        ))}


        <div className={`${styles.chart} ${styles.revenue}`}>
          <div className={styles.charttitle}>Revenue Over Time</div>
          <div className={styles.chartContent}>📊 Chart Here</div>
        </div>

        <div className={`${styles.chart} ${styles.country}`}>
          <div className={styles.charttitle}>Session by Country</div>
          <div className={styles.chartContent}>🌎 Country Data Here</div>
        </div>

        <div className={`${styles.chart} ${styles.region}`}>
          <div className={styles.charttitle}>Sales by Region</div>
          <div className={styles.chartContent}>🌍 Sales Data Here</div>
        </div>

        <div className={`${styles.chart} ${styles.ecommerce}`}>
          <div className={styles.charttitle}>Sales by E-commerce Platform</div>
          <div className={styles.chartContent}>🛒 Platform Sales Here</div>
        </div>

        <div className={`${styles.chart} ${styles.users}`}>
          <div className={styles.charttitle}>Registered Users</div>
          <div className={styles.chartContent}>👤 Users Data Here</div>
        </div>
        
      </div>
    </div>
  );
};

export default overview;
