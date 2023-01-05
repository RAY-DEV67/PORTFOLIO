import data from "../data.json";
import crowdfunding from "../images/crowdfunding.png";
import manage from "../images/manage.png";
import bookmark from "../images/bookmark.png";
import easybank from "../images/easybank.png";
import space from "../images/space.png";
import shoe_ecommerce from "../images/shoe_ecommerce.png";
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
import $ from "jquery"
import tip from "../images/tip.png";
import form from "../images/form.png";
import piggame from "../images/piggame.png";
import portfolio from "../images/portfolio.png";
import bankapp from "../images/bankist.png";

export const About = ({aboutProject , showAbout}) => {
    return (
        <div className= "about-page">
         <h1 className="about-title">{aboutProject === "1a" ? data.main[0].title : aboutProject === "2a" ? data.main[1].title : aboutProject === "3a" ? data.main[2].title : aboutProject === "4a" ? data.main[3].title : aboutProject === "5a" ? data.main[4].title : aboutProject === "1b" ? data.landingPage[0].title : aboutProject === "2b" ? data.landingPage[1].title : aboutProject === "3b" ? data.landingPage[2].title :aboutProject === "4b" ? data.landingPage[3].title : aboutProject === "5b" ? data.landingPage[4].title : aboutProject === "6b" ? data.landingPage[5].title : aboutProject === "7b" ? data.landingPage[6].title : aboutProject === "8b" ? data.landingPage[7].title : aboutProject === "9b" ? data.landingPage[8].title : aboutProject === "10b" ? data.landingPage[9].title : aboutProject === "11b" ? data.landingPage[10].title : aboutProject === "12b" ? data.landingPage[11].title :aboutProject === "13b" ? data.landingPage[12].title : aboutProject === "14b" ? data.landingPage[13].title : aboutProject === "15b" ? data.landingPage[14].title : aboutProject === "1c" ? data.eCommerce[0].title : aboutProject === "1d" ? data.others[0].title : aboutProject === "2d" ? data.others[1].title : aboutProject === "3d" ? data.others[2].title : aboutProject === "4d" ? data.others[3].title : ""}</h1>
         <p className="">{aboutProject === "1a" ? data.main[0].text : aboutProject === "2a" ? data.main[1].text : aboutProject === "3a" ? data.main[2].text : aboutProject === "4a" ? data.main[3].text : aboutProject === "5a" ? data.main[4].text : aboutProject === "1b" ? data.landingPage[0].text : aboutProject === "2b" ? data.landingPage[1].text : aboutProject === "3b" ? data.landingPage[2].text :aboutProject === "4b" ? data.landingPage[3].text : aboutProject === "5b" ? data.landingPage[4].text : aboutProject === "6b" ? data.landingPage[5].text : aboutProject === "7b" ? data.landingPage[6].text : aboutProject === "8b" ? data.landingPage[7].text : aboutProject === "9b" ? data.landingPage[8].text : aboutProject === "10b" ? data.landingPage[9].text : aboutProject === "11b" ? data.landingPage[10].text: aboutProject === "12b" ? data.landingPage[11].text :aboutProject === "13b" ? data.landingPage[12].text: aboutProject === "14b" ? data.landingPage[13].text : aboutProject === "15b" ? data.landingPage[14].text : aboutProject === "1c" ? data.eCommerce[0].text : aboutProject === "1d" ? data.others[0].text : aboutProject === "2d" ? data.others[1].text: aboutProject === "3d" ? data.others[2].text : aboutProject === "4d" ? data.others[3].text : ""}</p>
         <p className="stack">{aboutProject === "1a" ? data.main[0].stack : aboutProject === "2a" ? data.main[1].stack : aboutProject === "3a" ? data.main[2].stack : aboutProject === "4a" ? data.main[3].stack : aboutProject === "5a" ? data.main[4].stack : aboutProject === "1b" ? data.landingPage[0].stack : aboutProject === "2b" ? data.landingPage[1].stack : aboutProject === "3b" ? data.landingPage[2].stack:aboutProject === "4b" ? data.landingPage[3].stack : aboutProject === "5b" ? data.landingPage[4].stack : aboutProject === "6b" ? data.landingPage[5].stack : aboutProject === "7b" ? data.landingPage[6].stack : aboutProject === "8b" ? data.landingPage[7].stack : aboutProject === "9b" ? data.landingPage[8].stack : aboutProject === "10b" ? data.landingPage[9].stack : aboutProject === "11b" ? data.landingPage[10].stack: aboutProject === "12b" ? data.landingPage[11].stack :aboutProject === "13b" ? data.landingPage[12].stack: aboutProject === "14b" ? data.landingPage[13].stack : aboutProject === "15b" ? data.landingPage[14].stack : aboutProject === "1c" ? data.eCommerce[0].stack: aboutProject === "1d" ? data.others[0].stack: aboutProject === "2d" ? data.others[1].stack: aboutProject === "3d" ? data.others[2].stack : aboutProject === "4d" ? data.others[3].stack : ""}</p>
         <img src={aboutProject === "1a" ? bankapp : aboutProject === "2a" ? mapty : aboutProject === "3a" ? piggame : aboutProject === "4a" ? space : aboutProject === "5a" ? portfolio : aboutProject === "1b" ? manage : aboutProject === "2b" ? bookmark : aboutProject === "3b" ? easybank :aboutProject === "4b" ? clipboard : aboutProject === "5b" ?shortly : aboutProject === "6b" ? crowdfunding : aboutProject === "7b" ? bankweb : aboutProject === "8b" ? room : aboutProject === "9b" ? fylo : aboutProject === "10b" ? insure : aboutProject === "11b" ? loopstudio : aboutProject === "12b" ? blogr :aboutProject === "13b" ? snap : aboutProject === "1c" ? shoe_ecommerce : aboutProject === "1d" ? advice : aboutProject === "2d" ? time : aboutProject === "3d" ? tip : aboutProject === "4d" ? form : ""} alt="bankist" className="about-img"/>
         <h3 className="about-title">Overview</h3>
         <p className="users">{aboutProject === "1a" ? data.main[0].users : aboutProject === "2a" ? data.main[1].users : aboutProject === "3a" ? data.main[2].users : aboutProject === "4a" ? data.main[3].users : aboutProject === "5a" ? data.main[4].users: aboutProject === "1b" ? data.landingPage[0].users : aboutProject === "2b" ? data.landingPage[1].users : aboutProject === "3b" ? data.landingPage[2].users :aboutProject === "4b" ? data.landingPage[3].users : aboutProject === "5b" ? data.landingPage[4].users : aboutProject === "6b" ? data.landingPage[5].users : aboutProject === "7b" ? data.landingPage[6].users : aboutProject === "8b" ? data.landingPage[7].users : aboutProject === "9b" ? data.landingPage[8].users : aboutProject === "10b" ? data.landingPage[9].users : aboutProject === "11b" ? data.landingPage[10].users: aboutProject === "12b" ? data.landingPage[11].users :aboutProject === "13b" ? data.landingPage[12].users: aboutProject === "14b" ? data.landingPage[13].users: aboutProject === "15b" ? data.landingPage[14].users : aboutProject === "1c" ? data.eCommerce[0].users : aboutProject === "1d" ? data.others[0].users: aboutProject === "2d" ? data.others[1].users: aboutProject === "3d" ? data.others[2].users : aboutProject === "4d" ? data.others[3].users : ""}</p>
  <div onClick={() => {
          $(".about-page").fadeOut()
          $(".overlay").fadeOut()
      }} className="close">
  <p className="cl">X</p>
  </div>
         <p>{aboutProject === "1a" ? <div><p>{data.main[0].about[0]}</p> 
         <p>{data.main[0].about[1]}</p> 
         <p>{data.main[0].about[2]}</p> 
         <p>{data.main[0].about[3]}</p> 
         <p>{data.main[0].about[4]}</p></div> 
         
         : 
  
         aboutProject === "2a" ? <div><p>{data.main[1].about[0]}</p> 
         <p>{data.main[1].about[1]}</p> 
         <p>{data.main[1].about[2]}</p> 
         <p>{data.main[1].about[3]}</p> 
         <p>{data.main[1].about[4]}</p></div>
  
         :
  
         aboutProject === "3a" ? <div><p>{data.main[2].about[0]}</p> 
         <p>{data.main[2].about[1]}</p> 
         <p>{data.main[2].about[2]}</p> 
         <p>{data.main[2].about[3]}</p> 
         <p>{data.main[2].about[4]}</p></div>
  
         :
  
         aboutProject === "4a" ? <div><p>{data.main[3].about[0]}</p> 
         <p>{data.main[3].about[1]}</p> 
         <p>{data.main[3].about[2]}</p> 
         <p>{data.main[3].about[3]}</p> 
         <p>{data.main[3].about[4]}</p></div>
  
         :
  
         aboutProject === "5a" ? <div><p>{data.main[4].about[0]}</p> 
         <p>{data.main[4].about[1]}</p> 
         <p>{data.main[4].about[2]}</p> 
         </div>
  
         :
  
         aboutProject === "1b" ? <div><p>{data.landingPage[0].about[0]}</p> 
         <p>{data.landingPage[0].about[1]}</p> 
         <p>{data.landingPage[0].about[2]}</p> 
         <p>{data.landingPage[0].about[3]}</p> 
         <p>{data.landingPage[0].about[4]}</p></div>
         
  
         :
  
         aboutProject === "2b" ? <div><p>{data.landingPage[1].about[0]}</p> 
         <p>{data.landingPage[1].about[1]}</p> 
         <p>{data.landingPage[1].about[2]}</p> 
        </div>
  
         :
  
         aboutProject === "3b" ? <div><p>{data.landingPage[2].about[0]}</p> 
         <p>{data.landingPage[2].about[1]}</p> 
      </div>
  
         :
  
         aboutProject === "4b" ? <div><p>{data.landingPage[3].about[0]}</p> 
         <p>{data.landingPage[3].about[1]}</p> 
      </div>
  
      :
  
      aboutProject === "5b" ? <div><p>{data.landingPage[4].about[0]}</p> 
      <p>{data.landingPage[4].about[1]}</p> 
      <p>{data.landingPage[4].about[2]}</p> 
      <p>{data.landingPage[4].about[3]}</p> 
      <p>{data.landingPage[4].about[4]}</p></div>
  
      :
  
      aboutProject === "6b" ? <div><p>{data.landingPage[5].about[0]}</p> 
      <p>{data.landingPage[5].about[1]}</p> 
      <p>{data.landingPage[5].about[2]}</p> 
      <p>{data.landingPage[5].about[3]}</p> 
      <p>{data.landingPage[5].about[4]}</p></div>
  
      :
  
      aboutProject === "7b" ? <div><p>{data.landingPage[6].about[0]}</p> 
         <p>{data.landingPage[6].about[1]}</p> 
      </div>
  
      :
  
      aboutProject === "8b" ? <div><p>{data.landingPage[7].about[0]}</p> 
      <p>{data.landingPage[7].about[1]}</p> 
      <p>{data.landingPage[7].about[2]}</p> 
   </div>
  
   :
  
   aboutProject === "9b" ? <div><p>{data.landingPage[8].about[0]}</p> 
   <p>{data.landingPage[8].about[1]}</p> 
  </div>
  
  :
  
  aboutProject === "10b" ? <div><p>{data.landingPage[9].about[0]}</p> 
  <p>{data.landingPage[9].about[1]}</p> 
  </div>
  
  :
  
  aboutProject === "11b" ? <div><p>{data.landingPage[10].about[0]}</p> 
  <p>{data.landingPage[10].about[1]}</p> 
  </div>
  
  :
  
  aboutProject === "12b" ? <div><p>{data.landingPage[11].about[0]}</p> 
  <p>{data.landingPage[11].about[1]}</p> 
  </div>
  
  :
  
  aboutProject === "13b" ? <div><p>{data.landingPage[12].about[0]}</p> 
  <p>{data.landingPage[12].about[1]}</p> 
  <p>{data.landingPage[12].about[2]}</p>
  </div>
  
  :
  
  aboutProject === "1c" ? <div><p>{data.eCommerce[0].about[0]}</p> 
  <p>{data.eCommerce[0].about[1]}</p>  
  <p>{data.eCommerce[0].about[2]}</p> 
  <p>{data.eCommerce[0].about[3]}</p> 
  <p>{data.eCommerce[0].about[4]}</p> </div>
  
  :
  
  aboutProject === "1d" ? <div><p>{data.others[0].about[0]}</p> 
  <p>{data.others[0].about[1]}</p>
  <p>{data.others[0].about[2]}</p> 
  <p>{data.others[0].about[3]}</p> 
  </div>
  
  :
  
  aboutProject === "2d" ? <div><p>{data.others[1].about[0]}</p> 
  <p>{data.others[1].about[1]}</p>
  <p>{data.others[1].about[2]}</p> 
  </div>
  
  :
  
  aboutProject === "3d" ? <div><p>{data.others[2].about[0]}</p> 
  <p>{data.others[2].about[1]}</p>
  <p>{data.others[2].about[2]}</p> 
  </div>
  
  :
  
  aboutProject === "4d" ? <div><p>{data.others[3].about[0]}</p> 
  <p>{data.others[3].about[1]}</p>
  <p>{data.others[3].about[2]}</p> 
  <p>{data.others[3].about[3]}</p> 
  </div>
  
  :
  
  ""
         }
         </p>
        </div>
    );
  };