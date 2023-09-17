import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

//css
import "./Reveal.css";

const Reveal = ({ children, variants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div style={{ position: "relative" }}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
