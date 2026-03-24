"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);


  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            src="/gne_logo.png"
            alt="GNDEC Logo"
            width={60}
            height={60}
            className={styles.logo}
          />
        </div>

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

        <ul className={`${styles.navLinks} ${isOpen ? styles.mobileActive : ""}`}>
          <li><Link href="https://www.gndecsports.com">Home</Link></li>
          <li><Link href="https://www.gndecsports.com/awards">Awards</Link></li>
          <li><Link href="https://www.gallery.gndecsports.com">Gallery</Link></li>
          <li><Link href="https://www.gndecsports.com/contact">Contact</Link></li>
          <li><Link href="https://www.gndecsports.com/facilities">Facilities</Link></li>
          <li><Link href="https://www.gndecsports.com/intra">IntraMural</Link></li>
          <li><Link href="https://www.gndecsports.com/extra">ExtraMural</Link></li>
          <li><Link href="https://www.gndecsports.com/staff">Staff</Link></li>

          <li className={styles.mobileLogin}>
            <button className={styles.loginBtn}>Login</button>
          </li>
        </ul>

        <div className={styles.loginContainer}>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;
