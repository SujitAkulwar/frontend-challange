import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import Overview from "@/pages/overview/overview";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <Overview />
      </div>
    </div>
  );
}
