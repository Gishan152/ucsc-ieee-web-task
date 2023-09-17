//css
import "./TimelineBox.css";

//components
import Reveal from "./Reveal";

const TimelineBox = ({
  title,
  description,
  alignment,
  date,
  animateTo = "right"
}) => {
  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      x: alignment === "left" ? [75, 0] : [-75, 0],
      opacity: 1
    },
    transition: {
      duration: 2
    }
  };

  return (
    <Reveal variants={variants}>
      <div className={alignment === "left" ? "tm-box left" : "tm-box right"}>
        <h3 style={{ position: "relative" }}>{title}</h3>
        <p>{description}</p>
        <div className="time-box-date">
          <time>{date}</time>
        </div>
      </div>
    </Reveal>
  );
};

export default TimelineBox;
