"use client";

import { useState } from "react";
import Image from "next/image";
import "./header.css";

const Header = () => {
  const [menu, setmenu] = useState(false);

  return (
    <>
      <header className="header">
        <Image
          src="/images/onbexia-logo.png"
          alt="onbexia"
          width={100}
          height={85}
          className="logo"
        />

        <nav className="navigation">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
        </nav>
        <button type="button" className="cta">
          <Image
            src="/icons/fierce.svg"
            alt="zap"
            width={25}
            height={25}
            className="icon"
          />
          <span className="text">Get Started</span>
        </button>
        <button
          className={`menu ${menu ? "open" : ""}`}
          onClick={() => setmenu(!menu)}
        >
          <Image
            src="/icons/menu.svg"
            alt="menu icon"
            width={25}
            height={25}
            className="menu-icon"
          />
          <Image
            src="/icons/x.svg"
            alt="close icon"
            width={25}
            height={25}
            className="close-icon"
          />
        </button>
      </header>

      <div className={`mobile-navigation ${menu ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
        </ul>
        <button type="button">Get Started</button>
      </div>
    </>
  );
};

export default Header;
