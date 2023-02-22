import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>afternotes</h2>
      <div className={styles.container}>
        <p>&copy; 2023. All rights reserved.</p>
        <div>
          <Link href="/terms">About</Link>
          <Link href="/terms">Updates</Link>

          <Link href="/terms">FAQ</Link>
          <Link href="/policy">Terms</Link>
          <Link href="/policy">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
