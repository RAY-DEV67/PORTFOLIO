import { useState, useEffect } from 'react';
import ham from "../images/icon-hamburger.svg"


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