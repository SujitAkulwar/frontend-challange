import React from 'react';
import styles from './sidebar.module.css';
import Image from 'next/image';
import images from '../../images/images';

const Sidebar = () => {
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
        <div className={styles.sidebar}>
            <div className={styles.titlediv}>
                <Image src={images.sidebarimages.logo_img} alt="Logo" width={25} height={25} />
                <h2 className={styles.title}>Consist</h2>
                <button className={styles.menuButton}>
                    <Image src={images.sidebarimages.menu_img} alt="Menu" width={25} height={25} />
                </button>
            </div>

            <div className={styles.menu}>
                <div className={styles.menutitle}>Main Menu</div>
                <div className={styles.menuitems}>
                    {menuItems.map((item, index) => (
                        <div key={index} className={styles.menuItem}>
                            <Image src={item.icon} alt={item.name} width={20} height={20} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <hr className={styles.divider} />

                <div className={styles.menuitems}>
                    {otherMenuItems.map((item, index) => (
                        <div key={index} className={styles.menuItem}>
                            <Image src={item.icon} alt={item.name} width={20} height={20} />
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
