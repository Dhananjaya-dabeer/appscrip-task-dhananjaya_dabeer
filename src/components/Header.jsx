import { appLogo, logoUrl } from "@/assets/Urls";
import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <div className={styles.appLogo_threeLines}>
          <IoReorderThreeOutline id={styles.threeLines} />
          <Image
            src={appLogo}
            loading="lazy"
            width={30}
            height={30}
            id={styles.appLogo}
            alt="app logo"
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={logoUrl}
            loading="lazy"
            width={60}
            height={20}
            alt="logo"
            id={styles.logo}
          />
        </div>
        <div className={styles.icons}>
          <CiSearch size={20} />
          <CiHeart size={20} />
          <CiShoppingCart size={20} id={styles.cart} />
          <PiUserCircleThin size={20} />
          <select defaultValue={"English"} className={styles.language}>
            <option value="English">ENG</option>
            <option value="Hindi">HIND</option>
            <option value="Kannada">KAN</option>
          </select>
        </div>
      </div>
      <nav className={styles.navLinks}>
        <Link href={"#"}>SHOP</Link>
        <Link href={"#"}>SKILLS</Link>
        <Link href={"#"}>STORIES</Link>
        <Link href={"#"}>ABOUT</Link>
        <Link href={"#"}>CONTACT US</Link>
      </nav>
    </div>
  );
}

export default Header;
