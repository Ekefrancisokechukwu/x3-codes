import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import Navigation from "./Navigation";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [visible, setVisible] = useState(false);

  const headerHandler = () => {
    if (window.scrollY > 55) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerHandler);

    return () => window.removeEventListener("scroll", headerHandler);
  }, []);

  const VisibleHandle = () => {
    setVisible(!visible);
  };

  return (
    <header className={headerFixed ? "header fixed" : "header"}>
      <div className="header_logo">
        <img src={logo} alt={logo} />
      </div>

      <Navigation visible={visible} setVisible={setVisible} />

      <div className="nav-toggle-btn" onClick={() => setVisible(!visible)}>
        <div className="">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
