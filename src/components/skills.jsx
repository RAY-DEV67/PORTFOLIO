import "react-multi-carousel/lib/styles.css";
import colorSharp from "../images/color-sharp.png";
import html from "../images/html.webp";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import jquery from "../images/jquery.png";
import sass from "../images/sass.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import react from "../images/react.png";
import git from "../images/git.png";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const { ref: profileRef, inView: profileIsVisible } = useInView();

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
             <div className="skilldiv">
             <p ref={profileRef} className={profileIsVisible ? "skilltext showhead" : "head skilltext"}>I am a Frontend Engineer with experience working with different technologies, bringing solution to the web</p>

             </div>
              <h4 className="soft">SOFT SKILLS</h4>

              <div className="slider">
                <div className="slide-track">
                  {/* SLIDES///// */}

                  <div className="slide softtools">
                    <h5>Presentation Skills</h5>
                  </div>

                  <div className="slide softtools">
                    <h5>Teamwork</h5>
                  </div>

                  <div className="slide softtools">
                    <h5>Problem Solving</h5>
                  </div>

                  <div className="slide softtools">
                    <h5>Communication Skills</h5>
                  </div>

                  {/* SAME SLIDES (DOUBLED)//////// */}


                  <div className="slide softtools">
                    <h5>Presentation Skills</h5>
                  </div>

                  <div className="slide softtools">
                    <h5>Teamwork</h5>
                  </div>

                  <div className="slide softtools">
                    <h5>Problem Solving</h5>
                  </div>

                  <div className="slide softtools">
                    <h5>Communication Skills</h5>
                  </div>
                </div>
              </div>


              <h4>TECHNICAL SKILLS / STACK</h4>

              <div className="slider2">
                <div className="slide-track2">
                  <div className="tools slide2">
                    <h5>HTML</h5>
                    <img src={html} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>CSS</h5>
                    <img src={css} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>JAVASCRIPT</h5>
                    <img
                      src={javascript}
                      alt="html"
                      className="tool javascript"
                    />
                  </div>
                  <div className="tools slide2">
                    <h5>TAILWIND CSS</h5>
                    <img src={tailwind} alt="html" className="tool tailwind" />
                  </div>
                  <div className="tools slide2">
                    <h5>BOOTSTRAP</h5>
                    <img
                      src={bootstrap}
                      alt="html"
                      className="tool bootstrap"
                    />
                  </div>
                  <div className="tools slide2">
                    <h5>SASS</h5>
                    <img src={sass} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>REACT JS</h5>
                    <img src={react} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>JQUERY</h5>
                    <img src={jquery} alt="html" className="tool jquery" />
                  </div>
                  <div className="tools slide2">
                    <h5>GIT</h5>
                    <img src={git} alt="html" className="tool jquery" />
                  </div>

                  {/* SAME SLIDES/////// */}

                  <div className="tools slide2">
                    <h5>HTML</h5>
                    <img src={html} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>CSS</h5>
                    <img src={css} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>JAVASCRIPT</h5>
                    <img
                      src={javascript}
                      alt="html"
                      className="tool javascript"
                    />
                  </div>
                  <div className="tools slide2">
                    <h5>TAILWIND CSS</h5>
                    <img src={tailwind} alt="html" className="tool tailwind" />
                  </div>
                  <div className="tools slide2">
                    <h5>BOOTSTRAP</h5>
                    <img
                      src={bootstrap}
                      alt="html"
                      className="tool bootstrap"
                    />
                  </div>
                  <div className="tools slide2">
                    <h5>SASS</h5>
                    <img src={sass} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>REACT JS</h5>
                    <img src={react} alt="html" className="tool" />
                  </div>
                  <div className="tools slide2">
                    <h5>JQUERY</h5>
                    <img src={jquery} alt="html" className="tool jquery" />
                  </div>
                  <div className="slide2 tools">
                    <h5>GIT</h5>
                    <img src={git} alt="html" className="tool jquery" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
