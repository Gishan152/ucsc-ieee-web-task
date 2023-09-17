import { motion } from "framer-motion";

const overlayImage = ({ variants, controller, image }) => {
  return (
    <motion.img
      variants={variants}
      initial="hidden"
      animate={controller}
      whileHover="visible"
      style={{ width: "200px", transformOrigin: "bottom right" }}
      className="bg"
      src={image}
      alt="background"
    />
  );
};

export default overlayImage;
