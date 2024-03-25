import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Resume.css";
import { experiences } from "./Constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        height: "100%",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={
        experience.date
      }
      iconStyle={{ background: experience.iconBg, height: "16.5%", width: "5%"}}
      icon={
        <div className='exp-card'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='logo w-[90%] h-[90%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='title'>{experience.title}</h3>
        <p
          className='pbody'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='experience'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='points'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className='exp'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;