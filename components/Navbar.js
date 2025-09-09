"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Navbar.module.css"; // ✅ CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      {/* Left: Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/gne_logo.png"
          alt="GNDEC Logo"
          width={60}
          height={60}
          className={styles.logo}
        />
      </div>

      {/* Hamburger / Close Icon */}
      <div
        className={`${styles.hamburger} ${isOpen ? styles.fixed : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <FaTimes size={28} color="#e0e0e0" />
        ) : (
          <FaBars size={28} color="#e0e0e0" />
        )}
      </div>

      {/* Center: Links + Mobile login */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.mobileActive : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/awards">Awards</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/facilities">Facilities</Link></li>
        <li><Link href="/intra">IntraMural</Link></li>
        <li><Link href="/extra">ExtraMural</Link></li>
        <li><Link href="/staff">Staff</Link></li>

        {/* Mobile-only login */}
        <li className={styles.mobileLogin}>
          <button className={styles.loginBtn}>Login</button>
        </li>
      </ul>

      {/* Desktop-only login */}
      <div className={styles.loginContainer}>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
