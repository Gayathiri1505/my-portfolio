import React from "react";
import Skills from './Skills';
import Download from "./Download";
const About = () => {
  const resumeUrl = 'Resume.pdf';
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>GAYATHIRI</b> and I am from Theni,TamilNadu.
            I'm a <b>Frontend web developer</b> recent <b>MCA Graduate</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it.
            <br />
            <br />I am <b>open</b> to work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to make some crafts work in my spare time.
          </p>
          <div>
      <h1>Resume Download</h1>
  <Download resumeUrl={resumeUrl} />
    </div>

        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
      </div>
    </>
  );
};

export default About;