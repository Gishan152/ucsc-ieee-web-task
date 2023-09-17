//styles
import "./styles.css";
// swiper styles
import "swiper/css";
import "swiper/css/bundle";

//sections
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Timeline from "./sections/Timeline";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Prizes from "./sections/Prizes";

//components
// import Reveal from "./components/Reveal";
// import { motion } from "framer-motion";
// import Overlay from "./components/imageSlide/Overlay";

export default function App() {
  // const x =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.";

  const titles = [
    "Awareness Session",
    "Opening of Registrations",
    "Closing of Registrations",
    " Workshop 1",
    "Workshop 2",
    "Initial Design Submission Opening",
    "Initial Design Submission Closing",
    "Announcement of Finalists",
    "Workshop 3",
    "Designathon",
    "Grab the Trophy"
  ];

  const dates = [
    "11",
    "12",
    "21",
    "26",
    "03",
    "05",
    "08",
    "17",
    "17",
    "23",
    "24"
  ];

  const descriptions = [
    "This session will be held via zoom to give insights on what UI/UX designing is and on how to use design thinking process in projects.",
    "Registrations to the Designathon will be opened via a Google form. Form a team of 3-4 members including a team leader and get registered.",
    "The registrations to the Designathon will be officially closed",
    "The first workshop will be held physically at University premises to introduce what journey maps and user persona are. UI/UX paper prototyping will also be taught by the speaker on this day.",
    "This will be held via zoom with the aim of introducing what Low Level Design (LLD) and High Level Designs (HDD) are.",
    "As per initial round submissions, it is expected to submit a solid UI solution by using mockups and prototypes.",
    "Accepting of initial round submissions will be closed.",
    "The best ten teams will be announced based on the prototypes submitted.",
    "This will also be taking place as a virtual zoom session for the finalists, which would provide insights on how to pitch their solutions/designs to the judges as a presentation.",
    "This will take place as a 24 hr Designathon at University premises.",
    "The final ten teams will be presenting their solutions to the judges and the top 3 teams will be selected."
  ];

  return (
    <div className="App">
      <header>
        <Hero />
      </header>
      <main>
        <section>
          <Intro />
        </section>
        <section>
          <Timeline
            titles={titles.slice(0, 4)}
            descriptions={descriptions.slice(0, 4)}
            date="Oct 2023"
            dates={dates.slice(0, 4)}
          />
          <Timeline
            titles={titles.slice(4, titles.length)}
            descriptions={descriptions.slice(4, descriptions.length)}
            date="Nov 2023"
            dates={dates.slice(4, dates.length)}
          />
        </section>
        <section>
          <Prizes />
        </section>
        <section>
          <FAQ />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>

      {/* <Overlay /> */}
    </div>
  );
}
