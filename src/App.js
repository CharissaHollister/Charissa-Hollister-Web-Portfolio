import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Work";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    { name: "about me", description: "", page: "about" },
    {
      name: "work",
      description:
        "Full stack web development projects created by Charissa Hollister",
      page: "work",
    },
    { name: "Contact", description: "", page: "contact" },
    {
      name: "resume",
      description: "Job history and skill sets",
      page: "resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [currentCategoryPage, setCurrentCategoryPage] = useState("about");

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        currentCategoryPage={currentCategoryPage}
        setCurrentCategoryPage={setCurrentCategoryPage}
      ></Nav>

      <main>
        {/* todo update to only show the menu category selected.  */}
        {(currentCategoryPage === "about" && (
          <>
            <About></About>
          </>
        )) ||
          (currentCategoryPage === "contact" && (
            <>
              <ContactForm></ContactForm>
            </>
          )) ||
          (currentCategoryPage === "resume" && (
            <>
              <Resume></Resume>
            </>
          )) || <Gallery currentCategory={currentCategory}></Gallery>}
      </main>
    </div>
  );
}

export default App;
