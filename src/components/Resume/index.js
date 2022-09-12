import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import avatarWorking from "../../assets/avatar/avatar-working.png";
import mindSetTiger from "../../assets/cover/mindsettiger.jpg";
// import downloadResume from "../../..public/charissa-hollister-resume.pdf";

function Resume() {
  return (
    <section class="my-5 mx-5">
      <div className="flex-row hero-pg">
        <img
          class="my-2"
          src={avatarWorking}
          alt="my avatar hard at work designing the next great project"
        />
        <aside class="mx-5">
          <ul>
            <li>
              <a href="#training">Training</a>
            </li>
            <li>
              {" "}
              <a href="#skills">Skills</a>
            </li>
            <li>
              {" "}
              <a href="#education">Education</a>
            </li>
            <li>
              {" "}
              <a href="#experience">Experience</a>
            </li>
          </ul>
          <a
            class="mx-5"
            href="../../..public/charissa-hollister-resume.pdf"
            download
          >
            Download My Resume
          </a>
        </aside>
      </div>
      <div className="my-2 about-me">
        <div>
          <p>
            I am seeking a career focused on implementation,
            development/improvement of computer systems (such as LabWare LIMS),
            and data processing. Leveraging my 16 years of biotechnology
            background, to build an intuitive and harmonized user experience for
            data interpretation without sacrificing quality. I will be earning a
            certificate in full stack web development and programming from the
            University of Central Florida in September, with newly developed
            skills in JavaScript, MySql, MongoDB, REST and React.js to aid with
            my new direction. I am known for being innovative, a problem solver,
            and I am passionate about coding.
          </p>
          <p>
            With each new project, my aim is to improve the quality and
            efficiency without losing data integrity for an ideal user
            experience. In my most recent project I applied aspects of Visual
            Basic, Crystal Reports, LIMS BASIC, and Excel macro development.
            Working with an internal team and software consultants I led to
            gather user requirements, develop, validate, and implement an
            updated data processing method utilizing the software program
            LabWare LIMS. Since 2014 I have been in charge of all aspects of our
            local LIMS including implementation, validation, configurations,
            development of spreadsheets/subroutines, reviewing sql queries,
            updating user workflows, and day-to-day admin duties. I’m excited to
            bring my skill set into a fast-paced, quality-driven team to build
            better data processing experiences.
          </p>
        </div>
      </div>
      <div>
        <h3 id="training">Training</h3>
        <ul>
          <li>Advanced Configuration using LIMS Basic-2019</li>
          <li>LabWare Reporting-2019</li>
          <li>Introduction to SQL (Continued Education)-2019</li>
          <li>Introduction to Programming (Continued Education)-2019</li>
          <li>
            ISO 13485:2012 & ISO 9001 Internal Auditing Certification-2018
          </li>
          <li>ISO 13485:2003 Internal Auditing Certification-2016</li>
          <li>Principles of Successful Project Management-2015</li>
          <li>Laboratory Info Management System Admin I (LabWare)-2013</li>
          <li>FDA Compliance/Audit expectation training- 2013</li>
          <li>Microsoft works Excel (Continued Education)-2011</li>
          <li>LifeScience Alley Statistics-2011</li>
          <li>Lean Manufacturing-2011</li>
          <li>LIAISON® XL in Italy-2009</li>
          <li>Design Of Experiments Stats-2008</li>
        </ul>
      </div>
      <div>
        <h3 id="skills">Skills</h3>
        <ul>
          <li>
            <p>
              Working with LabWare LMS, ELN, NWA, and Crystal Reports for 8+
              years
            </p>
          </li>
          <li>
            <p>
              Working in a highly regulated medical manufacturing environment
              for 16 years{" "}
            </p>
          </li>
          <li>
            <p>
              Learning Full Stack Web Development with certification from UCF
              currently{" "}
            </p>
          </li>
          <li>
            <p>
              Assay development plus transfer of products and technologies for 6
              years{" "}
            </p>
          </li>
          <li>
            <p>
              Validation, Implementation, and Project Management for 10 years
            </p>
          </li>{" "}
          <li>
            <p>Cross-functional and inter-site Global teams for 16 years</p>
          </li>
          <p class="subskill">
            <li>Labware® LMS configuration v6 and v7 - Expert</li>
            <li>Laboratory QC and GMP - Expert</li>
            <li>Software qualification and validation - Expert</li>
            <li>Microsoft Excel with Macros - Expert</li>
            <li>
              LMS development using LIMS Basic programming language - Advanced
            </li>
            <li>Labware® LMS implementation - Advanced </li>
            <li>Product/process validation - Advanced </li>
            <li>Lean manufacturing and process harmonization - Advanced </li>
            <li>
              Project Management (Gantt, GitHub, Microsoft Project) - Advanced
            </li>
            <li>LabWare LMS reporting using Crystal Reports - Proficient </li>
            <li> mySQL and Oracle database queries - Proficient </li>
            <li>
              Internal Quality Auditing (ISO13485 & Part 11) - Proficient{" "}
            </li>
            <li>
              API integration (web, server-side, third-party) - Intermediate
            </li>
            <li>Javascript - Intermediate </li>
            <li>
              ReactJS, HTML, CSS, DOM, Node.JS, OOP, Express, SQL, ORM, MVC,
              noSQL, PWA, MERN, Global State - Learning Presently
            </li>
          </p>
        </ul>
      </div>
      <div className="flex-row">
        <img
          class="my-2"
          src={mindSetTiger}
          alt="mindset is everything inspirational poster"
        />
        <div class="mx-3 my-5">
          <h3 id="education">Education</h3>
          <ul>
            <li>
              <h5>
                University of Wisconsin-Madison{" "}
                <span class="location">Madison, WI</span>
              </h5>
              <p>Bachelors of Science-Biology </p>
              <p>Graduated June 2006</p>
            </li>
            <li>================</li>
            <li>
              <h5>
                University of Central Florida{" "}
                <span class="location">Orlando, FL</span>
              </h5>
              <p>UCF Coding Boot Camp - Web Development </p>
              <p>Certification September 2022</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 id="experience">Work Experience</h3>
        <h5>
          Senior Software Admin & Implementation Specialist{" "}
          <span class="location">September 2020- present</span>
        </h5>
        <ul>
          <li>
            Establishment of User Requirements for new systems or
            functionalities{" "}
          </li>
          <li>
            Use Labware® LIMS Basic programming, Crystal Reports®, ELN, R, and
            others to customize functionalities and spreadsheets{" "}
          </li>
          <li>Implement upgrade to version 7 </li>
          <li>
            Write/execute validations for configurations and updates in LIMS{" "}
          </li>
          <li>
            Stay abreast of any changes to the quality assurance or quality
            control processes and assess the potential impact to in-use
            softwares{" "}
          </li>
          <li>
            Senior Admin duties of software utilized by the Quality Control{" "}
          </li>
          <li>
            Create and revise new functionalities, especially with Labware® LIMS
            v7, and facilitate any changes with Corporate Admins{" "}
          </li>
          <li>
            Troubleshoot, including leading the effort to ensure that software
            is repaired or alternative options are created to alleviate any
            issues{" "}
          </li>
          <li>
            Subject matter expert, software & labeling, for inter-department
            projects
          </li>
          <li>
            Work with Product Transfer and QC teams to review any proposed
            changes for compatibility with the programs in use
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
