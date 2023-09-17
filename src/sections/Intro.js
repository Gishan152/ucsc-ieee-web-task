//libs
import { motion } from "framer-motion";

//images
import introPic from "../images/intro_pic.jpg";

//css
import "./Intro.css";

//components
import Reveal from "../components/Reveal";

const Intro = () => {
  const introImgVariants = {
    hidden: {
      opacity: 0,
      scale: 0.1,
      rotate: "-360deg"
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: "-5deg"
    },
    transition: {
      duration: 2,
      delay: 1
    }
  };

  return (
    <div className="container intro">
      <div className="box col2box">
        <Reveal variants={introImgVariants}>
          <motion.img
            variants={introImgVariants}
            initial="hidden"
            animate="visible"
            className="bg"
            src={introPic}
            alt="background"
          />
        </Reveal>
        <div>
          <h2>What is RevolUX?</h2>
          <p className="text-box-left">
            RevolUX is an Inter University UI/UX Designathon co-organized by
            AIESEC at the University of Colombo, in partnership with the IEEE
            Student Branch of the University of Colombo School of Computing.
            <br />
            <br />
            For the second consecutive time, we take pride in presenting this
            event, aiming to offer undergraduates practical experience in User
            Interface and User Experience design.
            <br />
            <br />
            Participating in this event unlocks opportunities to explore
            design-related fields, enabling undergraduates to refine their
            skills and prepare confidently for the world of work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
