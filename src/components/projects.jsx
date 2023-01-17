import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { LandingPageCard } from "./landingPage";
import { OthersCard } from "./others";
import crowdfunding from "../images/crowdfunding.png";
import manage from "../images/manage.png";
import bookmark from "../images/bookmark.png";
import easybank from "../images/easybank.png";
import space from "../images/space.png";
import shoe_ecommerce from "../images/shoe_ecommerce.png";
import bankapp from "../images/bankist.png";
import shortly from "../images/shortly.png";
import bankweb from "../images/bankweb.png";
import clipboard from "../images/clipboard.png";
import loopstudio from "../images/loopstudio.png";
import fylo from "../images/fylo.png";
import insure from "../images/insure.png";
import snap from "../images/snap.png";
import blogr from "../images/blogr.png";
import room from "../images/room.png";
import mapty from "../images/mapty.png";
import advice from "../images/advice.png";
import time from "../images/time.png";
import tip from "../images/tip.png";
import form from "../images/form.png";
import piggame from "../images/piggame.png";
import portfolio from "../images/portfolio.png";
import colorSharp2 from "../images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Ecommerce } from "./ecommerce";
import { Main } from "./main";
import { About} from "./about";
import { useState } from "react";

export const Projects = ({showAbout , setshowAbout}) => {
  const [aboutProject, setaboutProject] = useState("1a");



  const main = [
    {
      title: "Bankist App",
      description: "Design & Development",
      imgUrl: bankapp,
      stack: "HTML, CSS, JavaScript",
      git: "https://github.com/RAY-DEV67/BANKIST",
      live: "https://bankist-finapp.netlify.app/",
      data: "1a"
    },

    {
      title: "Mapty",
      description: "Design & Development",
      imgUrl: mapty,
      stack: "HTML, CSS, JavaScript, API",
      git: "https://github.com/RAY-DEV67/MAPTY",
      live: "https://mapti-workouts.netlify.app/",
      data: "2a"
    },

    {
      title: "Pig Game",
      description: "Design & Development",
      imgUrl: piggame,
      stack: "HTML, CSS, JavaScript, Jquery",
      git: "https://github.com/RAY-DEV67/PIG-GAME",
      live: "https://henry-pig-game.netlify.app/",
      data: "3a"
    },

    {
      title: "Space",
      description: "Design & Development",
      imgUrl: space,
      stack: "React, CSS, Tailwind",
      git: "https://github.com/RAY-DEV67/WELCOME-TO-SPACE",
      live: "https://henry-space-tourism.netlify.app/",
      data: "4a"
    },

    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: portfolio,
      stack: "React, CSS, Bootstrap",
      git: "https://github.com/RAY-DEV67/PORTFOLIO",
      live: "",
      data: "5a"
    },
  ];

  const landingPage = [
    {
      title: "MANAGE",
      description: "Design & Development",
      imgUrl: manage,
      stack: "HTML, Tailwind, Jquery",
      git: "https://github.com/RAY-DEV67/MANAGE-LANDING-PAGE/tree/new-feature",
      live: "https://manage-landin-page.netlify.app/",
      data: "1b"
    },
    {
      title: "BOOKMARK",
      description: "Design & Development",
      imgUrl: bookmark,
      stack: "React JS, Tailwind",
      git: "https://github.com/RAY-DEV67/Bookmark-Landing-Page",
      live: "https://bookmark-landin-page.netlify.app/",
      data: "2b"
    },
    {
      title: "EASY-BANK",
      description: "Design & Development",
      imgUrl: easybank,
      stack: "HTML, CSS, Tailwind , Jquery",
      git: "https://github.com/RAY-DEV67/EASY-BANK",
      live: "https://henry-easy-bank.netlify.app/",
      data: "3b"
    },
    {
      title: "CLIPBOARD",
      description: "Design & Development",
      imgUrl: clipboard,
      stack: "HTML, CSS, Tailwind, JavaScript",
      git: "https://github.com/RAY-DEV67/CLIPBOARD-LANDING-PAGE",
      live: "https://clipboarde-landing-page.netlify.app/",
      data: "4b"
    },
    {
      title: "SHORTLY",
      description: "Design & Development",
      imgUrl: shortly,
      stack: "React, CSS,Tailwind",
      git: "https://github.com/RAY-DEV67/SHORTLY",
      live: "https://shortly-link-app.netlify.app/",
      data: "5b"
    },
    {
      title: "CROWDFUNDING",
      description: "Design & Development",
      imgUrl: crowdfunding,
      stack: "HTML, CSS, JavaScript",
      git: "https://github.com/RAY-DEV67/CROWD-FUNDING-LANDING-PAGE",
      live: "https://crowfundind.netlify.app/",
      data: "6b"
    },
    {
      title: "BANKIST",
      description: "Design & Development",
      imgUrl: bankweb,
      stack: "HTML, CSS, JavaScript",
      git: "https://github.com/RAY-DEV67/BANKIST-WEB",
      live: "https://henry-bankist-web.netlify.app/",
      data: "7b"
    },
    {
      title: "ROOM",
      description: "Design & Development",
      imgUrl: room,
      stack: "HTML,Tailwind, JavaScript",
      git: "https://github.com/RAY-DEV67/ROOM-HOMEPAGE",
      live: "https://roomstore-homepage.netlify.app/",
      data: "8b"
    },
    {
      title: "FYLO",
      description: "Design & Development",
      imgUrl: fylo,
      stack: "HTML,Tailwind",
      git: "https://github.com/RAY-DEV67/FYLO-LANDING-PAGE",
      live: "https://fylo-landin-page.netlify.app/",
      data: "9b"
    },
    {
      title: "INSURE",
      description: "Design & Development",
      imgUrl: insure,
      stack: "HTML, Bootstrap, JQuery",
      git: "https://github.com/RAY-DEV67/INSURE-LANDING-PAGE",
      live: "https://insure-landin-pge.netlify.app/",
      data: "10b"
    },
    {
      title: "LOOPSTUDIO",
      description: "Design & Development",
      imgUrl: loopstudio,
      stack: "HTML, CSS, JavaScript",
      git: "https://github.com/RAY-DEV67/LOOPSTUDIO",
      live: "https://loopstudio-landin-page.netlify.app/",
      data: "11b"
    },
    {
      title: "BLOGR",
      description: "Design & Development",
      imgUrl: blogr,
      stack: "HTML, CSS, JavaScript",
      git: "https://github.com/RAY-DEV67/BLOGR-LANDING-PAGE",
      live: "https://blogr-landin-page.netlify.app/",
      data: "12b"
    },
    {
      title: "SNAP",
      description: "Design & Development",
      imgUrl: snap,
      stack: "HTML, CSS, JavaScript",
      git: "https://github.com/RAY-DEV67/SNAP-LANDING-PAGE",
      live: "https://snap-landin-page.netlify.app/",
      data: "13b"
    },
  ];

  const eCommerce = [
    {
      title: "Sneaker Company",
      description: "Design & Development",
      imgUrl: shoe_ecommerce,
      stack: "HTML, CSS, Bootstrap, JavaScript , Jquery",
      git: "https://github.com/RAY-DEV67/SHOE-STORE",
      live: "https://henry-shoe-store.netlify.app/",
      data: "1c"
    },
  ];

  const others = [
    {
      title: "ADVICE API",
      description: "Design & Development",
      imgUrl: advice,
      stack: "React, CSS, API",
      git: "https://github.com/RAY-DEV67/ADVICE-APP",
      live: "https://henrys-advice.netlify.app/",
      data: "1d"
    },
    {
      title: " Tracking Dashboard",
      description: "Design & Development",
      imgUrl: time,
      stack: "HTML, CSS, JavaScript, JSON",
      git: "https://github.com/RAY-DEV67/TIME-TRACKING-DASHBOARD",
      live: "https://time-tracking-dashbod.netlify.app/",
      data: "2d"
    },
    {
      title: "Tip Calculator",
      description: "Design & Development",
      imgUrl: tip,
      stack: "HTML, CSS, JavaScript",
      git: "https://github.com/RAY-DEV67/TIP-CALCULATOR",
      live: "https://henrys-tip-calculator.netlify.app/",
      data: "3d"
    },

    {
      title: "Multi Step Form",
      description: "Design & Development",
      imgUrl: form,
      stack: "React, CSS",
      git: "https://github.com/RAY-DEV67/MULTI-STEP-FORM",
      live: "https://henry-multi-step-form.netlify.app/",
      data: "4d"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "" : ""
                  }
                >
                  <h2 className="mb-4">My Projects 👨‍💻</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="proj-head">Main Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="proj-head">Landing Page</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="ecommerce proj-head">
                          E-Commerce
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth" className="landing_page proj-head">
                          Others
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                    >
                      <Tab.Pane eventKey="first">
                        <Row >
                          {main.map((project, index) => {
                            return <Main key={index}  {...project} setshowAbout={setshowAbout} aboutProject = {aboutProject} setaboutProject = {setaboutProject}/>;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {landingPage.map((project, index) => {
                            return <LandingPageCard key={index} {...project} aboutProject = {aboutProject} setaboutProject = {setaboutProject} setshowAbout={setshowAbout}/>;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {eCommerce.map((project, index) => {
                            return <Ecommerce key={index} {...project} aboutProject = {aboutProject} setaboutProject = {setaboutProject} setshowAbout={setshowAbout}/>;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {others.map((project, index) => {
                            return <OthersCard key={index} {...project} aboutProject = {aboutProject} setaboutProject = {setaboutProject} setshowAbout={setshowAbout} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
      <About aboutProject = {aboutProject} setaboutProject = {setaboutProject} showAbout={showAbout}/>
    </section>
  );
};
