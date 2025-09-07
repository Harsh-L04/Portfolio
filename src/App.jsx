import React from "react";
import { Aboutme,Hero, Projects, Contact ,Skills, Navbar} from "./components";
import { Themeprovider } from "./context/Themecontext";

export default function App() {
  return (
    <>
      <Themeprovider>
        <div className="pb -[100vh]">
          
          <Navbar />
          <Hero  />
          <Projects />

          <Skills />
          <Aboutme />
          <Contact />
        </div>
      </Themeprovider>
      
    </>
  );
}