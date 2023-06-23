import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import logo from "../../img/logo.png";
import facebook from "../../img/SVG/Facebook.svg";
import instagram from "../../img/SVG/Instagram.svg";
import twitter from "../../img/SVG/Twitter.svg";
import { RiArrowUpLine } from "react-icons/ri";

const Footer = () => {
  const [scrollBtn, setScrollBtn] = useState(false);
  const footer = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset;
      if (currentScroll > 2300) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setScrollBtn(false);
    }
  });

  function scrollTo() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="footer" ref={ref}>
      <div
        className={`${scrollBtn ? "scroll-btn fixed" : "scroll-btn"}`}
        onClick={scrollTo}
      >
        <RiArrowUpLine />
      </div>
      <div className="footer__container">
        <FooterNav />
        <FooterMedia />
      </div>

      <div className="footer__copyright">
        <p> all right reserved {new Date().getFullYear()}, x3codes. </p>
      </div>
    </footer>
  );
};

const FooterNav = () => {
  return (
    <div className="footer__navigation">
      <div className="footer__logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer__lists-link">
        <ul className="footer__list">
          <h3 className="footer__listHead">Company</h3>
          <li className="footer__item">
            <a href="#" className="footer__link">
              home
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              about us
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              apply now
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <h3 className="footer__listHead">Support</h3>
          <li className="footer__item">
            <a href="#" className="footer__link">
              FAQs
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              events
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              join our team
            </a>
          </li>
        </ul>

        <ul className="footer__list">
          <h3 className="footer__listHead">Contact</h3>
          <li className="footer__item">
            <a href="#" className="footer__link">
              X3code@gmail.com
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              +234-55-5543
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const FooterMedia = () => {
  return (
    <div className="footer__media-content">
      <a href="">
        <div className="footer__media">
          <img src={twitter} alt="vector" />
          <span>Twitter</span>
        </div>
      </a>

      <a href="">
        <div className="footer__media">
          <img src={instagram} alt="vector" />
          <span>Instagram</span>
        </div>
      </a>

      <a href="">
        <div className="footer__media">
          <img src={facebook} alt="vector" />
          <span>Facebook</span>
        </div>
      </a>
    </div>
  );
};

export default Footer;
