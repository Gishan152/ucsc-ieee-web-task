import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import OverlayImage from "./OverlayImg";

import bg from "../../images/main/mobile-bg.jpg";

const Overlay = () => {
  const pic1Control = useAnimation();
  const rotations = ["5deg", "10deg", "15deg", "20deg", "25deg"];

  useEffect(() => {
    pic1Control.start("visible");
  });

  const bgVariants = {
    hidden: {
      // transform: "rotateZ(5deg)",
      position: "absolute"
    },
    visible: {
      transform: "rotateZ(" + rotations[4] + ")",
      scale: 1.1
    }
  };

  return (
    <div className="overlay">
      {[0, 1, 2, 3, 4].map((v, i) => {
        const x = { ...bgVariants };
        x.hidden.transform = "rotateZ(" + rotations[i] + ")";
        return (
          <OverlayImage
            variants={{ ...x }}
            controller={pic1Control}
            image={bg}
          />
        );
      })}
    </div>
  );
};

export default Overlay;
