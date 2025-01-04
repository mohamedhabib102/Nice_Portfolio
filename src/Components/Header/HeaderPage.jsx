import "./HeaderPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function HeaderPage() {
  const [isActive, setIsActive] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I'm Mohamed Habib";


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setTimeout(() => {
          index = 0; 
        }, 2000);
      }
    }, 150); 
    return () => clearInterval(interval);
  }, []);

  const checkActive = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header-container">
      <div className="coustom-container">
        <div className="content-header content-page">
          <div className="icon-title icon-container">
            <div
              className={`icon relative w-[30px] h-[20px] cursor-pointer ${
                isActive ? "show" : ""
              }`}
              onClick={checkActive}
            >
              <span className="span-icons top-0"></span>
              <span className="span-icons top-[8px]"></span>
              <span className="span-icons top-[16px]"></span>
            </div>
            <ul className="nvabar navbra-links">
              <li>
                <Link to="about" smooth={true} duration={500} className="anker-list">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="resume" smooth={true} duration={500} className="anker-list">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500} className="anker-list">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} className="anker-list">
                  Services
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="anker-list">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="title fs-1">
              <span id="span" className="c-main-color font-bold">M</span>Habib
            </div>
          </div>

          <div className="content p-3 text-center">
          <h3 className="text-[55px] max-[767px]:text-[35px]">{displayedText}</h3>
          <div>  
              <span className="fs-2 font-bold of-span-content text-[20px]">Hello World!</span>
              <p className="text-[17px] uppercase m-0 max-[767px]:text-[13px]">
                Front End Developer React.js
              </p>
          </div>
          </div>
          <div className="links">
            <ul className="links-social">
              <li className="pt-0 pb-0 pl-[15px] pr-[15px] text-[25px]">
                <a className="c-white transition-all" href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="pt-0 pb-0 pl-[15px] pr-[15px] text-[25px]">
                <a className="c-white transition-all" href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="pt-0 pb-0 pl-[15px] pr-[15px] text-[25px]">
                <a className="c-white transition-all" href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPage;
