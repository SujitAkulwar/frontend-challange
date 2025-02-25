import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

import images from '../../images/images';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.searchSection}>
                <Image src={images.headerimages.search_img} alt="Search" width={20} height={20} />
                <input type="text" placeholder="Search..." className={styles.searchInput} />
            </div>

            <div className={styles.actions}>
                <button className={styles.iconButton}>
                    <Image src={images.headerimages.download_img} alt="Download" width={20} height={20} />
                </button>
                <button className={styles.iconButton}>
                    <Image src={images.headerimages.rocket_img} alt="Rocket" width={20} height={20} />
                </button>
                <button className={styles.iconButton}>
                    <Image src={images.headerimages.settings_img} alt="Settings" width={20} height={20} />
                </button>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.profile}>
                <Image src={images.headerimages.profile_img} alt="Profile" width={30} height={30} className={styles.profileImage} />
                <span className={styles.downArrow}>▼</span>
                <div className={styles.profileDropdown}>
                    <button>Profile</button>
                    <button>Settings</button>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
