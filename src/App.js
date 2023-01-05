import "./App.css";
import $ from "jquery"
import { NavBar } from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/banner";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { useState, useEffect } from "react";
import intro from "./images/intro-loader.webp"



function App() {
const [loading, setloading] = useState(false);

useEffect(() => {
  setloading(true)
  setTimeout(() => {
    setloading(false)
  }, 4000)
}, []);

  return (
    <div className="App">
      {loading ? <div className="intro-cont">
        <img src={intro} alt="" className="intro"/> 
      </div>
      :
      <div>
         <NavBar />
       <Banner />
       <Skills />
       <Projects/>
       <Contact/>
       <Footer/>
       <div onClick={() => {
           $(".about-page").fadeOut()
           $(".overlay").fadeOut()
       }} className="overlay"></div>
      </div>
       
      }
     
    </div>
  );
}
export default App;
