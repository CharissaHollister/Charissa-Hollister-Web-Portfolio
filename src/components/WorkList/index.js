import React, { useState } from "react";
import Modal from "../Modal";

const WorkList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [projects] = useState([
    {
      name: "Indecisive-Decision",
      description: `Group Project: This is a site made to ease the load off of it's users when coming to a decision. A decision that may seem simple but is most of the time not. We as a group felt that we have all run in to a constant problem when it comes to picking our source of entertainment. We've all spun in circles rewatching comfort shows and re reading books on the basis of it being easier that way. So we collectively decided to make a site which decides for users, not only to take the stress of choosing away but also to widen the users horizons in entertainment. In our site users are welcomed in to take a quick and easy quiz on the basis of your feelings and preferences. Once all of our questions have been answered it automatically generates a random movie as well as a random book with a description of each based off of the users answers. If users dont like or maybe have already seen this movie or read this book than the users can easily hit the try again button which re generates anew book and movie based oof your same answers. You will also be able to change your answers with the push of a start over button. Another option before users take the quiz would be to have a random book and movie chosen for users by selecting the suprise me button. At the bottom of our site users will find credits to us devlopers as well as to our apis used in the making of this site. Thank you and enjoy as we help users relax and broden the horizons of entertainment.`,
      github: "https://github.com/MaraDear/IndecisiveDecision",
      badges: ["JavaScript", "API", "Bulma"],
      URL: "https://maradear.github.io/IndecisiveDecision/",
      imageID: "0",
    },
    {
      name: "Be-Prepared-for-Fun",
      description: `Group Project: A simple  vacation  planning  tool, to take the stress out of every step of planning  your getaway. This vacation planner is a multi-page application which helps users organize every facet of their vacation, from daily agenda, packing lists, to itinerary.`,
      github: "https://github.com/CharissaHollister/Be-Prepared-for-Fun",
      badges: [
        "JavaScript",
        "HandleBars",
        "Express",
        "Full-Calendar",
        "sequelize",
      ],
      URL: "https://guarded-stream-10933.herokuapp.com/",
      imageID: "1",
    },
    {
      name: "Credible",
      description: `Group Project: Coming Soon`,
      github: "https://github.com/quicksilver524/credible",
      badges: ["React"],
      URL: "/",
      imageID: "2",
    },
    {
      name: "Weather-Dashboard",
      description: `Easily and quickly see what the weather is and will be this week in any city in the United States by just entering the city and state of the desired location. The upcoming forecast has the icons and description to know what is coming at just a glance. This website stores previous search locations making it the perfect tool for planning a spontaneous road trip or checking on what weather family and friends are experiencing.`,
      github: "https://github.com/CharissaHollister/Weather-Dashboard",
      badges: ["API", "jQuery"],
      URL: "https://charissahollister.github.io/Weather-Dashboard/",
      imageID: "3",
    },
    {
      name: "Work-Day-Scheduler",
      description: `An interactive webpage that allows the user to stay organized for the work day. Users will be given a schedule for 9AM to 5PM with the opportunity to enter in tasks or events within one or multiple hour blocks and save these entries. If an error is made or an event changes, the user can simply click the task/event block they wish to modify and type in the new wording and click Save to overwrite the previous task/event details. The current hour will have highlighting to help users stay on track with what is past or coming. Tasks/events entered in will be maintained so the user is free to leave the webpage and return when they are ready to evaluate their schedule again. If the user is no longer pleased with the events listed or simply wants to start afresh, then there is a clear schedule option available to create the desired clean slate.`,
      github: "https://github.com/CharissaHollister/Work-Day-Scheduler",
      badges: ["BootStrap", "Moment", "jQuery"],
      URL: "https://charissahollister.github.io/Work-Day-Scheduler/",
      imageID: "4",
    },
    {
      name: "Employee-Tracker",
      description: `Employee Tracker is a command line application that can be used to track, add, and update your work force database. Database contains 3 tables to track and manager Departments, Roles, and Employees. npm start can get the team organized and ready for success.`,
      github: "https://github.com/CharissaHollister/Employee-Tracker",
      badges: ["console.table", "node", "inquirer", "mysql2"],
      URL: "https://drive.google.com/file/d/1U3wVLoivhMRUWFRr5QmnUZAvYNQp-Z6k/view",
      imageID: "5",
    },
  ]);
  const [projectMinors] = useState([
    {
      name: "Social-Network-API",
      description: `This is an API for a social network web application that allows users to be created to share their thoughts, react to other thoughts, and create a list of friends. It uses Express.js for routing and MongoDB for the database. Testing and demonstration is done using Insomnia.`,
      github: "https://github.com/CharissaHollister/Social-Network-API",
      badges: ["API", "Insomnia", "JSON"],
      URL: "https://watch.screencastify.com/v/9aakcZnt2Qyj0ChLFg4q",
      imageID: "6",
    },
    {
      name: "Tech-Blog",
      description: `Keep up to date with all the tech articles that are important to you and your companions. Once you log in you will have access to add new articles, comment on all posted articles, edit posts you’ve made previously and vote to show your support for the items you find most interesting. Casually perusing posts is allowed for those who prefer to not sign up. However, it is recommended to create an account to better interact and to have access to track your own posts and comments.`,
      github: "https://github.com/CharissaHollister/Tech-Blog",
      badges: ["MySQL", "Heroku", "CMS"],
      URL: "https://stark-sea-34668.herokuapp.com/",
      imageID: "7",
    },
    {
      name: "E-Commerce",
      description: `E-Commerce is a database application that can be used to track, add, and update your store inventory database. ecommerce_db database contains tables to track and manage Products, Categories, and Tags, as well as their associated information. npm start can get the inventory organized and ready for success.`,
      github: "https://github.com/CharissaHollister/E-Commerce",
      badges: ["ORM"],
      URL: "https://drive.google.com/file/d/1DA3bupewWYJUA7hC6eFsApI2P0_WxjNF/view",
      imageID: "8",
    },

    {
      name: "Note-Taker",
      description: `This is a Note Taker app that allows the user to write and save a note. You can save multiple notes that will be saved within the db file and folder keeping previously written data for later use. Notes can be deleted as desired by the user.`,
      github: "https://github.com/CharissaHollister/Note-Taker",
      badges: ["Heroku", "Express"],
      URL: "https://fathomless-plains-16786.herokuapp.com/",
      imageID: "9",
    },
    {
      name: "Team-Profile-Generator",
      description: `Quickly and easily generator a profile of a team of Engineers and/or interns and the manager they report to. Information will be collected in the command-line through a sequence of prompts. Although details can be left blank it is recommended that you answer all questions to have a thorough profile page. A copy your newly populated Team Profile files (index.HTML and style.css) will be saved in the dist folder once you indicate that your team is complete.`,
      github: "https://github.com/CharissaHollister/Team-Profile-Generator",
      badges: ["OOP", "cla", "Inquirer"],
      URL: "https://drive.google.com/file/d/1ZI6e9Ig0CYkyMqfhnLsV3y7eWFadR3xn/view",
      imageID: "10",
    },
    {
      name: "Code-Quiz",
      description: `Code Quiz - Javascript is an interactive quiz filled with multiple-choice questions about javascript and related processes. Players will be racing against a clock to see not only if they can finish in time, but if they can achieve the fastest score. Players should be weary though, because an incorrect answer deducts 10 seconds from the remaining time.`,
      github: "https://github.com/CharissaHollister/Code-Quiz",
      badges: ["JavaScript"],
      URL: "https://charissahollister.github.io/Code-Quiz/",
      imageID: "11",
    },
    {
      name: "Password-Generator-2000",
      description: `Site has a simple style to keep the focus on generating a unique and secure password`,
      github: "https://github.com/CharissaHollister/Password-Generator-2000",
      badges: ["HTML", "JavaScript"],
      URL: "https://charissahollister.github.io/Password-Generator-2000/",
      imageID: "12",
    },
  ]);

  const toggleModal = (image) => {
    setCurrentPhoto({ ...image, index: image.imageID });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {projects.map((image) => (
          <div
            class="card"
            title={image.name}
            onClick={() => toggleModal(image)}
          >
            <h3 class="modalTitle">{image.name} </h3>
            <img
              src={require(`../../assets/small/${image.imageID}.jpg`).default}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          </div>
        ))}
      </div>

      <div className="flex-row">
        {projectMinors.map((image) => (
          <div
            class="card"
            title={image.name}
            onClick={() => toggleModal(image)}
          >
            <img
              src={require(`../../assets/small/${image.imageID}.jpg`).default}
              alt={image.name}
              className="img-thumbnail-minor mx-1"
              key={image.name}
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkList;
