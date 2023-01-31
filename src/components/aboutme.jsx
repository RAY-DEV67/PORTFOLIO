import { useState } from "react";

export function AboutMe() {

    const [showAbout, setshowAbout] = useState(false);

    return ( <div className="aboutcontainer fontlink" id="about">
        <h2>About Me✍</h2>
        <p className="aboutme"> Hi, my name is Henry Elebor, I enjoy converting ideas into real life products and solving problems with codes.
    </p>
    <p className="aboutme"> With several years of experience in the industry, I have a passion for creating visually stunning and user-friendly websites and applications. My expertise lies in HTML, CSS, and JavaScript, and I am proficient in a variety of frontend frameworks such as React.</p>
      {showAbout ? <div className="aboutmore fontlink" >
        <p className="aboutme">In my previous roles, I have worked on a wide range of projects, from small business websites to large-scale web applications. I am a strong problem solver and thrive in fast-paced, dynamic environments.</p>
       <p className="aboutme">I am constantly learning and staying up-to-date with the latest web development trends and technologies. In my spare time, I enjoy attending meetups and conferences.</p>
       <p className="aboutme">I am excited to bring my skills and experience to new challenges and opportunities. Thank you for visiting my portfolio.<br></br> Feel free to <a className="aboutcontact" href="#connect">contact me</a> if you have any questions or would like to work together.</p>
        </div> : <p onClick={() => {
            setshowAbout(true)
        }} className="contact-me mail readmore">Read more</p>}
       </div> );
}






