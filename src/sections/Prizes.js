//libs
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

//images
import a1Img from "../images/awards/award-01.svg";
import a2Img from "../images/awards/award-02.svg";
import a3Img from "../images/awards/award-03.svg";

//css
import "./Prizes.css";
import Reveal from "../components/Reveal";

//components

const Prizes = ({ titles, descriptions, date, dates }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup by removing event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const variantsLeft = {
    hidden: {
      position: "relative",
      opacity: 0,
      left: "-50%"
    },
    visible: {
      opacity: 1,
      left: 0
    }
  };

  const variantsRight = {
    hidden: {
      position: "relative",
      opacity: 0,
      left: "50%"
    },
    visible: {
      opacity: 1,
      left: 0
    }
  };

  return (
    <div className="container prizes">
      <div className="box">
        <h3>Awards</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={screenWidth > 900 ? 3 : 1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            {screenWidth <= 900 && (
              <div className="award-box">
                <img src={a1Img} alt="1st place price" />
                <div className="award-title">Rs.60,000</div>
              </div>
            )}
            {screenWidth > 900 && (
              <Reveal variants={variantsLeft}>
                <div className="award-box">
                  <img src={a2Img} alt="2st place price" />
                  <div className="award-title">Rs.40,000</div>
                </div>
              </Reveal>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {screenWidth <= 900 && (
              <div className="award-box">
                <img src={a2Img} alt="2st place price" />
                <div className="award-title">Rs.40,000</div>
              </div>
            )}
            {screenWidth > 900 && (
              <div className="award-box">
                <img src={a1Img} alt="1st place price" />
                <div className="award-title">Rs.60,000</div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {screenWidth <= 900 && (
              <div className="award-box">
                <img src={a3Img} alt="3st place price" />
                <div className="award-title">Rs.20,000</div>
              </div>
            )}
            {screenWidth > 900 && (
              <Reveal variants={variantsRight}>
                <div className="award-box">
                  <img src={a3Img} alt="3st place price" />
                  <div className="award-title">Rs.20,000</div>
                </div>
              </Reveal>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Prizes;
