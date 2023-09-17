//libs

//css
import "./Timeline.css";

//components
import TimelineBox from "../components/TimelineBox";
// import Reveal from "../components/Reveal";

const Timeline = ({ titles, descriptions, date, dates }) => {
  // const x =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.";

  return (
    <div className="container timeline">
      <div className="box">
        <div className="timeline-date">
          <time>{date}</time>
        </div>
        {titles &&
          descriptions &&
          dates &&
          titles.map((title, i) => {
            return (
              <TimelineBox
                title={title}
                description={descriptions[i]}
                alignment={i % 2 === 0 ? "left" : "right"}
                date={
                  date.split(" ")[0] +
                  " " +
                  dates[i] +
                  ", " +
                  date.split(" ")[1]
                }
              />
            );
          })}
        {/* <div className="v-line"></div> */}
      </div>
    </div>
  );
};

export default Timeline;
