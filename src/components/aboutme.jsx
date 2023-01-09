import { useInView } from "react-intersection-observer";

export function AboutMe() {

    
  const { ref: profileRef1, inView: profileIsVisible1 } = useInView();
  const { ref: profileRef2, inView: profileIsVisible2} = useInView();
  const { ref: profileRef3, inView: profileIsVisible3} = useInView();
  const { ref: profileRef4, inView: profileIsVisible4 } = useInView();
  const { ref: profileRef5, inView: profileIsVisible5 } = useInView();

    return ( <div className="aboutcontainer fontlink" id="about">
        <h2>About Me✍</h2>
        <p ref={profileRef1} className={profileIsVisible1 ? "aboutme showhead" : "head aboutme"}> Hi, my name is Henry Elebor, I enjoy converting ideas into real life products and solving problems with codes.
    </p>
    <p ref={profileRef2} className={profileIsVisible2 ? "aboutme showhead" : "head aboutme"}> With over 2 years of experience in the industry, I have a passion for creating visually stunning and user-friendly websites and applications. My expertise lies in HTML, CSS, and JavaScript, and I am proficient in a variety of frontend frameworks such as React.</p>
       <p ref={profileRef3} className={profileIsVisible3 ? "aboutme showhead" : "head aboutme"}>In my previous roles, I have worked on a wide range of projects, from small business websites to large-scale web applications. I am a strong problem solver and thrive in fast-paced, dynamic environments.</p>
       <p ref={profileRef4} className={profileIsVisible4 ? "aboutme showhead" : "head aboutme"}>I am constantly learning and staying up-to-date with the latest web development trends and technologies. In my spare time, I enjoy attending meetups and conferences.</p>
       <p ref={profileRef5} className={profileIsVisible5 ? "aboutme showhead" : "head aboutme"}>I am excited to bring my skills and experience to new challenges and opportunities. Thank you for visiting my portfolio. Feel free to <a className="contact-me mail" href="#connect">contact me</a> if you have any questions or would like to work together.</p>
       </div> );
}






