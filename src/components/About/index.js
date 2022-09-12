import React from "react";

import avatarWaving from "../../assets/avatar/avatar-waving.png";
function About() {
  return (
    <section className="my-5 ">
      <div className="hero-pg">
        <img
          class="my-2"
          src={avatarWaving}
          alt="my avatar emerging from my computer to greet you with a wave"
        />
      </div>
      <div className="my-2 about-me">
        <aside></aside>
        <div>
          <p>
            I graduated from University of Wisconsin-Madison with a Bachelor of
            Science in Biology. After working in the laboratory for a number of
            years I migrated to assisting with spreadsheet and software
            validation/implementation; This is how I discovered my passion for
            developing using coding and data processing techniques.
          </p>
          <p>
            Recently earned a certificate in full stack development from the
            University of Central Florida in Coding, with newly developed skills
            in JavaScript, CSS, React.js, and responsive web design. I am known
            for having an innovative problem solver passionate about coding with
            a focus on data processing and process harmonization. With each
            project, my aim is to improve the quality and efficiency without
            losing data integrity for an ideal user experience. I applied
            aspects of Visual Basic, Crystal Reports and Excel macro development
            in a recent project. I was lead for this project working with an
            internal team and software consultants to develop and implement an
            updated data processing method utilizing the software program
            LabWare LIMS. I’m excited to leverage my skills as part of a
            fast-paced, quality-driven team to build better and always improving
            data processing experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
