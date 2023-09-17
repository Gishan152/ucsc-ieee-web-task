//libs
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

//css
import "./FAQBox.css";

const FAQBox = ({
  question,
  answer,
  isActive,
  activeIndex,
  changeActiveIndex,
  index
}) => {
  const answerVisibilityControl = useAnimation();

  useEffect(() => {
    if (activeIndex !== index) {
      // changeActiveIndex(null);
      answerVisibilityControl.start("close");
    }
    // isActive = isActive ? false : true;
  }, [activeIndex]);

  const clickHandle = (e) => {
    // console.log(e);
    e.preventDefault();
    if (activeIndex === index) {
      changeActiveIndex(null);
      answerVisibilityControl.start("close");
    } else {
      changeActiveIndex(index);
      answerVisibilityControl.start("open");
    }
    // isActive = isActive ? false : true;
  };

  const answerBoxVariants = {
    hidden: {
      // opacity: 0
      height: "0",
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 15,
      paddingRight: 15
    },
    open: {
      // opacity: 1,
      paddingBottom: 15,
      paddingTop: 15,
      height: "100%",
      transition: {
        duration: 0.25
      }
    },
    close: {
      paddingBottom: 0,
      height: "0",
      paddingTop: 0
    }
  };

  return (
    <div className="faq-box">
      <div className="question" onClick={clickHandle}>
        <div className="corner-box box-tl-top"></div>
        <div className="corner-box box-tl-left"></div>
        {question}
        <div className="corner-box box-br-bottom"></div>
        <div className="corner-box box-br-right"></div>
      </div>
      <div class="answer-container">
        <motion.p
          variants={answerBoxVariants}
          initial="hidden"
          animate={answerVisibilityControl}
          className={
            activeIndex === index ? "answer visisble" : "answer hidden"
          }
        >
          {answer}
        </motion.p>
      </div>
    </div>
  );
};

export default FAQBox;
