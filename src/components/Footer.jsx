import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function Footer() {
  const [isClickedContact, setIsClickedContact] = useState(true);
  const [isClickedMetta, setIsClickedMetta] = useState(true);
  const [isClickedQuickLinks, setIsClickedQuickLinks] = useState(true);
  const [isClickedFollow, setIsClickedFollow] = useState(true);

  useEffect(() => {
    const resizeEventFunction = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setIsClickedContact(false);
          setIsClickedMetta(false);
          setIsClickedQuickLinks(false);
          setIsClickedFollow(false);
        } else {
          setIsClickedContact(true);
          setIsClickedMetta(true);
          setIsClickedQuickLinks(true);
          setIsClickedFollow(true);
        }
      }
    };
    const screenEvent = window.addEventListener("resize", resizeEventFunction);

    return () => {
      window.removeEventListener("resize", resizeEventFunction);
    };
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.form}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.linksSection}>
        <div className={styles.contact}>
          <div className={styles.footerHeaders}>
            <h4>CONTACT US</h4>
            <div className={styles.upDownIcons}>
              {isClickedContact ? (
                <span onClick={() => setIsClickedContact(false)}>
                  <FaAngleDown />
                </span>
              ) : (
                <span onClick={() => setIsClickedContact(true)}>
                  <FaAngleUp />
                </span>
              )}
            </div>
          </div>

          {isClickedContact && (
            <>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>

              <h4 id={styles.currency}>CURRENCY</h4>
              <div className={styles.currency}>
                <img src="/Web/USA.svg" alt="US Flag" />
                <span>USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </>
          )}
          <hr className={styles.mobileDivider} />
        </div>

        <div className={styles.column}>
          <div className={styles.footerHeaders}>
            <h4>mettā muse</h4>
            <div className={styles.upDownIcons}>
              {isClickedMetta ? (
                <span onClick={() => setIsClickedMetta(false)}>
                  <FaAngleDown />
                </span>
              ) : (
                <span onClick={() => setIsClickedMetta(true)}>
                  <FaAngleUp />
                </span>
              )}
            </div>
          </div>
          {isClickedMetta && (
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          )}
          <hr className={styles.mobileDivider} />
        </div>

        <div className={styles.column}>
          <div className={styles.footerHeaders}>
            <h4>Quick Links</h4>
            <div className={styles.upDownIcons}>
              {isClickedQuickLinks ? (
                <span onClick={() => setIsClickedQuickLinks(false)}>
                  <FaAngleDown />
                </span>
              ) : (
                <span onClick={() => setIsClickedQuickLinks(true)}>
                  <FaAngleUp />
                </span>
              )}
            </div>
          </div>
          {isClickedQuickLinks && (
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          )}
          <hr className={styles.mobileDivider} />
        </div>

        <div className={styles.column}>
          <div className={styles.column}>
            <div className={styles.footerHeaders}>
              <h4>Follow Us</h4>
              <div className={styles.upDownIcons}>
                {isClickedFollow ? (
                  <span onClick={() => setIsClickedFollow(false)}>
                    <FaAngleDown />
                  </span>
                ) : (
                  <span onClick={() => setIsClickedFollow(true)}>
                    <FaAngleUp />
                  </span>
                )}
              </div>
            </div>
            {isClickedFollow && (
              <div className={styles.socialIcons}>
                <FaInstagram />
                <FaLinkedin />
              </div>
            )}
            <hr className={styles.mobileDivider} />
          </div>
          <h4 id={styles.museAccepts}>mettā muse ACCEPTS</h4>
          <div className={styles.payments}>
            {["Gpay", "Mastercard", "Paypal", "Amex", "Apay", "Opay"].map(
              (img) => (
                <img key={img} src={`/Web/${img}.svg`} alt={img} />
              )
            )}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
