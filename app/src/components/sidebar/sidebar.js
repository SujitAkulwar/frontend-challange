import React from 'react';
import styles from './sidebar.module.css';
import Image from 'next/image';

const Sidebar = () => {
    const menuItems = [
        { name: 'Overview', icon: '/grid.svg' },
        { name: 'Performance', icon: '/Performance.svg' },
        { name: 'Campaigns', icon: '/Campaigns.svg' },
        { name: 'Orders', icon: '/Orders.svg' },
        { name: 'Products', icon: '/Products.svg' },
        { name: 'Message', icon: '/Message.svg' },
        { name: 'Sales Platform', icon: '/SalesPlatform.svg' }
    ];

    const otherMenuItems = [
        { name: 'Demo Mode', icon: '/demo.svg' },
        { name: 'Feedback', icon: '/Feedback.svg' },
        { name: 'Help and docs', icon: '/Help.svg' }
    ];

    return (
        <div className={styles.sidebar}>
            <div className={styles.titlediv}>
                {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
                <h2 className={styles.title}>Consist</h2>
                <button className={styles.menuButton}>
                    {/* <Image src="/menu.svg" alt="Menu" width={25} height={25} /> */}
                </button>
            </div>

            <div className={styles.menu}>
                <div className={styles.menutitle}>Main Menu</div>
                <div className={styles.menuitems}>
                    {menuItems.map((item, index) => (
                        <div key={index} className={styles.menuItem}>
                            {/* <Image src={item.icon} alt={item.name} width={20} height={20} /> */}
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <hr className={styles.divider} />

                <div className={styles.menuitems}>
                    {otherMenuItems.map((item, index) => (
                        <div key={index} className={styles.menuItem}>
                            {/* <Image src={item.icon} alt={item.name} width={20} height={20} /> */}
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.footer}>
                <p>Get detailed analytics for help you, upgrade pro</p>
                <button className={styles.upgradeButton}>Upgrade Now</button>
            </div>
        </div>
    );
};

export default Sidebar;
