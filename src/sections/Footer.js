//libs

// images
import aiesecImg from "../images/footer/aiesec.png";
import ieeeImg from "../images/footer/ieee.png";
import revoluXPearsonImg from "../images/footer/logo-pearson.svg";

//css
import "./Footer.css";

//components

const Footer = ({ titles, descriptions, date, dates }) => {
  return (
    <div className="container footer">
      <div className="box">
        <div className="logo-container">
          <img id="aiesec-footer-logo" src={aiesecImg} alt="aiesec logo" />
          <img
            id="ieee-gooter-logo"
            src={ieeeImg}
            alt="ieee student branch logo"
          />
          <img
            id="revolux-footer-logo"
            src={revoluXPearsonImg}
            alt="revoluX event povered by Pearson logo"
          />
        </div>
        <div className="copyright">
          © Copyright 2023 <span>RevolUX 2.0</span> organized by AIESEC in
          University of Colombo in collaboration with{" "}
          <abbr title="Institute of Electrical and Electronics Engineers">
            IEEE
          </abbr>{" "}
          Student Branch of{" "}
          <abbr title="University Of Colombo School Of Computing">UCSC</abbr>
        </div>
      </div>
    </div>
  );
};

export default Footer;
