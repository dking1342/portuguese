'use client';
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import styles from '../styles/Navbar.module.sass';

type Props = {};

const navItems = [
  {
    id: 1,
    name: 'verbs',
    link: 'verbs',
  },
  {
    id: 2,
    name: 'vocab',
    link: 'vocab',
  },
  {
    id: 3,
    name: 'search',
    link: '#',
  },
];
const Navbar = (props: Props) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuState(!mobileMenuState);
    console.log(mobileMenuState);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <AiOutlineHome className={styles.logo} />
        </Link>
      </div>
      <div className={styles.mainContainer}>
        <ul className={styles.navList}>
          {navItems.map(({ id, name, link }) => (
            <li key={id} className={styles.navItem}>
              <Link href={`/${link}`} className={styles.navLink}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.menuIconContainer}>
          <button className={styles.menuBtn} onClick={handleMobileMenu}>
            <GiHamburgerMenu className={styles.menuIcon} />
          </button>
        </div>
        <div
          className={`${styles.menuContainer} ${
            mobileMenuState ? styles.open : styles.closed
          }`}
        >
          <div className={styles.menuCloseContainer}>
            <button className={styles.menuCloseBtn} onClick={handleMobileMenu}>
              <AiOutlineClose className={styles.menuClose} />
            </button>
          </div>
          <ul className={styles.navList}>
            {navItems.map(({ id, name, link }) => (
              <li key={id} className={styles.navItem}>
                <Link
                  href={`/${link}`}
                  className={styles.navLink}
                  onClick={handleMobileMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
