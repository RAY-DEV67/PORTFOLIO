import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import nav1 from "../images/nav-icon1.svg"
import ham from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
import nav3 from "../images/Twitter-logo.svg.png";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [showMobile, setshowMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    // <Router>
    //   <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    //     <Container>
    //       <Navbar.Brand href="/">
    //         <p className='logo'>RAY_DEV</p>
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav">
    //         <span className="navbar-toggler-icon"></span>
    //       </Navbar.Toggle>
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ms-auto">
    //           <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
    //           <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
    //           <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
    //         </Nav>
    //         <span className="navbar-text">
    //           <div className="social-icon">
    //             <a href="https://www.linkedin.com/in/ekene-elebor-57ba38206/" target="_blank" rel="noreferrer"><img src={nav1} alt="" /></a>
    //             <a href="https://twitter.com/Ray_dev67" target="_blank" rel="noreferrer"><img src={nav3} alt="" /></a>
    //           </div>
    //           <HashLink to='#connect'>
    //             <button className="vvd"><span>Let’s Connect</span></button>
    //           </HashLink>
    //         </span>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </Router>

    <div>
<div className={scrolled ? "scroll-navi" : "navibar"}>
<p className='logo'>RAY_DEV</p>
<img src={ham} alt="ham" class="ham"  onClick={() => {
    setshowMobile(true)
  }} />
<div class="hidden">
<a href="#home" className="home-nav">Home</a>
<a href="#skills" className="skill-nav">Skills</a>
<a href="#project" className="project-nav">Projects</a>
</div>
<a href='#connect' class="button hidden">
Let’s Connect
</a>
</div>

<div className={showMobile ? "showmobile-nav mobile-menu" : "mobile-menu mobile-nav"}>
<p
  class="close-menu"
  onClick={() => {
    setshowMobile(false)
  }}
>X</p>
<div class="ray">
<a href="#home" className="home-nav"   onClick={() => {
    setshowMobile(false)
  }}>Home</a>
<a href="#skills" className="skill-nav"   onClick={() => {
    setshowMobile(false)
  }}>Skills</a>
<a href="#project" className="project-nav"   onClick={() => {
    setshowMobile(false)
  }}>Projects</a>
</div>
<a href='#connect' class="mobilebutton button "   onClick={() => {
    setshowMobile(false)
  }}>
Let’s Connect
</a>
</div>
    </div>
  )
}