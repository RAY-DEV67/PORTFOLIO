import "./App.css";
import $ from "jquery"
import { NavBar } from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { useState } from "react";



function App() {

  const [showAbout, setshowAbout] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects setshowAbout={setshowAbout} showAbout={showAbout}/>
      <Contact/>
      <Footer/>
      <div onClick={() => {
          $(".about-page").fadeOut()
          $(".overlay").fadeOut()
      }} className="overlay"></div>
    </div>
  );
}
export default App;
