import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3>afternotes</h3>
        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/updates">Updates</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/blog">
            <a className={styles.btn}>Sign Up</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
