import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.header}>
            {/* Search Section */}
            <div className={styles.searchSection}>
                <Image src="/search.svg" alt="Search" width={20} height={20} />
                <input type="text" placeholder="Search..." className={styles.searchInput} />
            </div>

            {/* Action Buttons */}
            <div className={styles.actions}>
                <button className={styles.iconButton}>
                    <Image src="/download.svg" alt="Download" width={25} height={25} />
                </button>
                <button className={styles.iconButton}>
                    <Image src="/rocket.svg" alt="Rocket" width={25} height={25} />
                </button>
                <button className={styles.iconButton}>
                    <Image src="/settings.svg" alt="Settings" width={25} height={25} />
                </button>
            </div>

            {/* Divider */}
            <div className={styles.divider}></div>

            {/* Profile Section */}
            <div className={styles.profile}>
                <Image src="/profile.jpg" alt="Profile" width={35} height={35} className={styles.profileImage} />
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
