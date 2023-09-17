// libs
import { motion } from "framer-motion";
import ReactTyped from "react-typed";

//images
import bg from "../images/main/mobile-bg.jpg";
import logo from "../images/main/logo.svg";

//css
import "./Hero.css";

//components
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const Hero = () => {
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1
    },
    transition: {
      delay: 1
    }
  };

  const h1Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: "-180deg"
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: "0deg"
    },
    transition: {
      delay: 1
    }
  };

  const bgVariants = {
    hidden: {
      opacity: 0,
      scale: 0.1
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: ["45deg", "-10deg"]
    },
    transition: {
      duration: 2,
      delay: 1
    }
  };

  return (
    <div className="container hero">
      <div className="box bg-container col2box">
        {/* <div className="backdrop"></div> */}
        <div className="heading">
          <motion.img
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="logo"
            src={logo}
            alt="background"
          />
          <motion.h1 variants={h1Variants} initial="hidden" animate="visible">
            Crafting pixels into memorable journeys
          </motion.h1>
          {/* I'm a{" "} */}
          <ReactTyped
            // strings={["Developer", "Writer", "Designer"]}
            strings={[
              '"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs',

              '"Good design is obvious. Great design is transparent." - Joe Sparano',

              '"The next big thing in design is the one that makes the last big thing usable." - D.H.Delaunay'
            ]}
            typeSpeed={50}
            loop
            backSpeed={10}
            cursorChar=">"
            showCursor={true}
          />
          <Button title="Register" onClick={null} />
        </div>
        <Reveal variants={bgVariants}>
          <img className="bg" src={bg} alt="background" />
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
