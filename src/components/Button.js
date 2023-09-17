//libs
import { motion } from "framer-motion";

//css
import "./Button.css";

const Button = ({ title, onClick }) => {
  const buttonVariants = {
    hidden: {},
    visible: {},
    hover: {
      scale: 1.1,
      y: 5
    },
    transition: {
      duration: 0.5,
      stiffness: 120
    }
  };

  return (
    <motion.button
      style={{ position: "relative" }}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="corner-button"
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
};

export default Button;
