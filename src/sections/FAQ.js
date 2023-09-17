//libs
import { useState } from "react";

//css
import "./FAQ.css";

//components
import FAQBox from "../components/FAQBox";

const Timeline = ({ titles, descriptions, date, dates }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    "What is the UCSC UI/UX Design Workshop Series & Competition?",
    "Who can participate in the event?",
    "How do I register for the workshop series and competition?",
    "Is there a registration fee for the event?",
    "What topics will the workshop series cover?",
    "Who will be leading the workshops?",
    "What happens during the design competition?",
    "Are there prizes for the competition winners?",
    "Can I participate as a team or an individual in the design competition?",
    "How can I stay updated on event details and announcements?",
    "Is there any recommended software or tools for the event?",
    "What should I bring to the workshops?",
    "How can I contact the event organizers for further inquiries?"
  ];

  const answers = [
    "The UCSC UI/UX Design Workshop Series & Competition is an educational program aimed at enhancing your skills in user interface (UI) and user experience (UX) design. It consists of a series of workshops followed by a design competition.",
    "This event is open to all UCSC students and design enthusiasts who are interested in UI/UX design, regardless of their level of experience.",
    "To register, please visit our registration portal [link to registration page]. Follow the instructions provided and complete the registration process.",
    "The registration fee, if applicable, will be mentioned on the registration page. It helps cover the costs of organizing the event, securing guest speakers, and providing materials.",
    "The workshop series will cover a wide range of topics, including user research, wireframing, prototyping, usability testing, design principles, and more. Each session will focus on a specific aspect of UI/UX design.",
    "The workshops will be led by experienced UI/UX design professionals and faculty members who have expertise in the field.",
    "At the end of the workshop series, participants will be given a design challenge or project brief to work on. Submissions will be evaluated by a panel of judges based on creativity, usability, and adherence to design principles.",
    "Yes, there will be exciting prizes awarded to the winners of the design competition. Prizes may include certificates, software subscriptions, and potential internships or job opportunities with local design firms.",
    "You can choose to participate as an individual or form a team with other participants. Please make sure to follow the competition guidelines for team submissions.",
    "We will post event updates, announcements, and important information on our website and social media channels. Be sure to follow us on [list social media links] for the latest news.",
    "While specific software is not required, it's recommended to have access to design tools such as Adobe XD, Figma, Sketch, or similar software for the workshops and competition.",
    "Participants are encouraged to bring their laptops and any design-related materials they may find useful. Workshop-specific requirements will be communicated in advance.",
    "You can reach out to us via email at [email address] for any additional questions or clarifications. We are here to assist you throughout the event."
  ];

  return (
    <div className="container faq">
      <h2 className="section-title">FAQ</h2>
      <div className="box">
        {questions.map((question, i) => {
          return (
            <FAQBox
              index={i}
              question={question}
              answer={answers[i]}
              isActive={i === activeIndex ? true : false}
              activeIndex={activeIndex}
              changeActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
