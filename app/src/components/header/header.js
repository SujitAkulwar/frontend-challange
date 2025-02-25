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
                    <Image src={images.headerimages.download_img} alt="Download" width={25} height={25} />
                </button>
                <button className={styles.iconButton}>
                    <Image src={images.headerimages.rocket_img} alt="Rocket" width={25} height={25} />
                </button>
                <button className={styles.iconButton}>
                    <Image src={images.headerimages.settings_img} alt="Settings" width={25} height={25} />
                </button>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.profile}>
                <Image src={images.headerimages.profile_img} alt="Profile" width={35} height={35} className={styles.profileImage} />
                <select className={styles.profileDropdown}>
                    <option value="profile">Profile</option>
                    <option value="settings">Settings</option>
                    <option value="logout">Logout</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
