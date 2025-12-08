import Image from "next/image";
import "./header.css";

const Header = () => {
  return (
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
    </header>
  );
};

export default Header;
