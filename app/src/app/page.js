"use client";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import Overview from "@/pages/overview/overview";

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />      
      <Overview />
    </div>
  );
}
