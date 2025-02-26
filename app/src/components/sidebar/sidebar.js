import React, { useState } from 'react';
import styles from './sidebar.module.css';
import Image from 'next/image';
import images from '../../images/images';

const Sidebar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const menuItems = [
        { name: 'Overview', icon: images.sidebarimages.overview_img },
        { name: 'Performance', icon: images.sidebarimages.performance_img },
        { name: 'Campaigns', icon: images.sidebarimages.campaigns_img },
        { name: 'Orders', icon: images.sidebarimages.orders_img },
        { name: 'Products', icon: images.sidebarimages.products_img },
        { name: 'Message', icon: images.sidebarimages.message_img },
        { name: 'Sales Platform', icon: images.sidebarimages.sales_img }
    ];

    const otherMenuItems = [
        { name: 'Demo Mode', icon: images.sidebarimages.demo_img },
        { name: 'Feedback', icon: images.sidebarimages.feedback_img },
        { name: 'Help and docs', icon: images.sidebarimages.help_img }
    ];

    return (
        <div className={`${styles.sidebar}`} 
            style={{ 
                width: isSidebarVisible ? '250px' : '50px' , 
                padding: isSidebarVisible ? '20px' : '20px 0 0 0'
            }} 
        >
            <div className={styles.sidebartop}>
                <div 
                    className={styles.titlediv} 
                    style={{ justifyContent: isSidebarVisible ? 'space-between' : 'center' }}
                >
                    <div 
                        className={styles.titledivleft} 
                        style={{ display: isSidebarVisible ? 'flex' : 'none' }}
                    >   
                        <Image src={images.sidebarimages.logo_img} alt="Logo" width={25} height={25} />
                        <h2 className={styles.title}>Consist</h2>
                    </div>
                    <button className={styles.menuButton} onClick={toggleSidebar} >
                        <Image src={images.sidebarimages.menu_img} alt="Menu" width={25} height={25} />
                    </button>
                </div>

                <div className={styles.menu} style={{ display: isSidebarVisible ? 'block' : 'none' }}>
                    <div className={styles.menutitle}>Main Menu</div>
                    <div className={styles.menuitems}>
                        {menuItems.map((item, index) => (
                            <div key={index} className={styles.menuItem}>
                                <Image src={item.icon} alt={item.name} width={18} height={18} />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <hr className={styles.divider} />

                    <div className={styles.menuitems}>
                        {otherMenuItems.map((item, index) => (
                            <div key={index} className={styles.menuItem2}>
                                <Image src={item.icon} alt={item.name} width={18} height={18} />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>   

            <div className={styles.footer} style={{ display: isSidebarVisible ? 'block' : 'none' }}>
                <p className={styles.footerP}>Get detailed analytics for help you, upgrade pro</p>
                <button className={styles.upgradeButton}>Upgrade Now</button>
            </div>
        </div>
    );
};

export default Sidebar;
