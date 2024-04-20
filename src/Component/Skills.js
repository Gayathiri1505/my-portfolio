import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPython, faDatabase } from '@fortawesome/free-brands-svg-icons';
import {
  FaReact,
  FaHtml5,
  FaCss3,} from "react-icons/fa";
  import { DiJavascript1 } from "react-icons/di"; 


const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    React: <FaReact />,
    //Python: <FontAwesomeIcon icon={faPython} />,
    //SQL: <FontAwesomeIcon icon={faDatabase} />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;