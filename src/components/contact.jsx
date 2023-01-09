
import contactImg from "../images/contact-img.svg";
import 'animate.css';
import navIcon1 from "../images/nav-icon1.svg";
import navIcon3 from "../images/Twitter-logo.svg.png";

export const Contact = () => {
 

  return (
    <section className="contact" id="connect">
      <img src={contactImg} alt="Contact Us" className="contactimage"/>
     <div>
     <h2>Get In Touch 📲</h2>
      <div className="social-icon">
            <section>
            <a href="https://www.linkedin.com/in/ekene-elebor-57ba38206/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/Ray_dev67" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </section>
             <div className="contactmail">
             <a href="mailto:henryekene@gmail.com" className="mail">Send me a mail</a>
             <a href="tel:{+2348114291075}" className="mail">Call Me</a>
             </div>
            </div>
     </div>
    </section>
  )
}