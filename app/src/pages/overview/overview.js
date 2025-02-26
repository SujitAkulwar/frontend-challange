import React from "react";
import styles from "./overview.module.css"; 
import Header from "@/components/header/header";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, PieChart, Pie, Cell, Legend, RadialBarChart, RadialBar } from "recharts";
import images from "../../images/images";

const firstchartdata = [
  { month: "Mar 2023", revenue: 15000, target: 10000 },
  { month: "Jun 2023", revenue: 12000, target: 10500 },
  { month: "Sep 2023", revenue: 10000, target: 10700 },
  { month: "Dec 2023", revenue: 13000, target: 11000 },
  { month: "Mar 2024", revenue: 9000, target: 10800 },
  { month: "Jun 2024", revenue: 11000, target: 10900 },
  { month: "Sep 2024", revenue: 12823.98, target: 10100 },
  { month: "Dec 2024", revenue: 16000, target: 11500 },
];

const piedata = [
  { name: "Amazon", value: 45, color: "#FF9900" }, 
  { name: "Alibaba", value: 35, color: "gray" }, 
  { name: "Tokopedia", value: 25, color: "#2DCC70" } 
];


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

  const Progressdata = [
    { name: "Premium Plan", value: 1809, fill: "#1f8b4c" }, 
    { name: "Basic Plan", value: 515, fill: "#D3D3D3" }     
  ];
  const Progressdata2 = [{ name: "Progress", value: 80, fill: "black" }];

  const totalUsers = 2324;

  const countrydata = [
    { country: "Australia", sessions: 634, percentage: "8%", flag: images.overviewflagimages.australia_flag_img },
    { country: "Indonesia", sessions: 589, percentage: "7.2%", flag: images.overviewflagimages.indonesia_flag_img },
    { country: "Thailand", sessions: 562, percentage: "6.2%", flag: images.overviewflagimages.thailand_flag_img },
    { country: "Germany", sessions: 453, percentage: "5.4%", flag: images.overviewflagimages.germany_flag_img },
  ];

  const regiondata = [
    { region: "Europe", value: 2728 },
    { region: "Americas", value: 2409 },
    { region: "Asia", value: 2843 },
    { region: "Africa", value: 3028 },
    { region: "Pacific", value: 1838 },
    { region: "Middle East", value: 800 }
  ];

const overview = () => {

  const percentage = 80; 
  const radius = 50;
  const strokeWidth = 10;
  const circumference = Math.PI * radius; 
  const progress = (percentage / 100) * circumference;


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
          <div className={styles.revenuedata}>

            <div className={styles.revenuetext}>
              <div className={styles.revenueitemtitlelogo}>🔷</div>
              <div className={styles.revenueitem}> 
                <div className={styles.revenueitemtitle}> Total Revenue</div>
                <div className={styles.revenueitembottom}>
                  <div className={styles.revenueitemvalue}>$32,839.99</div>
                  <div className={styles.revenueitemdot}>·</div>
                  <div className={styles.revenueitemchange}>55%</div>
                </div>
              </div>
            </div>

            <div className={styles.revenuetext}>
              <div className={styles.revenueitemtitlelogo}>🔶</div>
              <div className={styles.revenueitem}>
                <div className={styles.revenueitemtitle}> Total Target</div>
                <div className={styles.revenueitembottom}>
                  <div className={styles.revenueitemvalue}>30,932.12</div>
                  <div className={styles.revenueitemdot}>·</div>
                  <div className={styles.revenueitemchange}>45%</div>
                </div>
              </div>
            </div>

          </div>
          
          <ResponsiveContainer className="responsive-chart" width="100%" height="100%">
            <LineChart data={firstchartdata} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month"  tick={{ fontSize: 12, fill: "#333" }} />
              <YAxis domain={['dataMin','dataMax']} tick={{ fontSize: 12, fill: "#333" }} />
              <Tooltip />
              <Line type="step" dataKey="revenue" stroke="blue" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="step" dataKey="target" stroke="red" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={`${styles.chart} ${styles.country}`}>
          <div className={styles.charttitle}>Session by Country</div>
          <div className={styles.chartsubtitle}>Showing data for Top Session</div>
          <div className={`${styles.chartContent} ${styles.bargraph}`}>
            {countrydata.map((item, index) => (
              <div key={index} className={styles.chartRow}>
                <Image src={item.flag} alt={item.country} width={35} height={35} />
                <div className={styles.chartInfo}>
                  <div className={styles.chartInfoTop}>
                    <div className={styles.chartInfoleft}>
                      <span className={styles.countryName}>{item.country}</span>
                    </div>
                    <div className={styles.chartInforight}>  
                      <span className={styles.sessionCount}>{item.sessions}</span>
                      <span className={styles.percentage}>• {item.percentage}</span>
                    </div>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${(item.sessions / 800) * 100}%` }}
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.chart} ${styles.region}`}>
          <div className={styles.charttitle}>Sales by Region</div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={regiondata}>
              <PolarGrid />
              <PolarAngleAxis dataKey="region" />
              <PolarRadiusAxis />
              <Radar name="Sales" dataKey="value" stroke="#07874e" fill="#07874e" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className={`${styles.chart} ${styles.ecommerce}`}>
          <div className={styles.charttitle}>Sales by E-commerce Platform</div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={piedata}
                cx="50%"
                cy="50%"
                innerRadius={60} 
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
              >
                {piedata.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={`${styles.chart} ${styles.users}`}>
          <div className={styles.charttitle}>Registered Users</div>
          <div className={styles.chartsubtitle}>an overview of your users</div>
          <div style={{ textAlign: "center", width: "100%", padding: "10px"}}>
            <svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
              <path
                d="M10,60 A50,50 0 0,1 110,60"
                fill="none"
                stroke="#D3D3D3"
                strokeWidth="6"
              />
              <path
                d="M10,60 A50,50 0 0,1 110,60"
                fill="none"
                stroke="#1f8b4c"
                strokeWidth="6"
                strokeDasharray="80 100"
                strokeLinecap="round"
              />
              <text x="50%" y="70%" textAnchor="middle" fontSize="12" fill="black" fontWeight="bold">
                2,324
              </text>
              <text x="50%" y="85%" textAnchor="middle" fontSize="6" fill="black" color="gray">
                Total Users
              </text>
            </svg>
          </div>
          <div className={styles.planDetails}>
            <div>
              <span style={{ color: "#1f8b4c" }}>⬤</span> {Progressdata[0].value.toLocaleString()} <br />
              <small>Premium Plan</small>
            </div>
            <div>
              <span style={{ color: "#D3D3D3" }}>⬤</span> {Progressdata[1].value.toLocaleString()} <br />
              <small>Basic Plan</small>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default overview;
