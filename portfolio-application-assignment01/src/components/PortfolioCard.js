import React,{useState} from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import Skills from "./Skills";
import LikeButton from "./LikeButton";
import skills from "../Data/SkillsData";
import Photos from "../Data/photos";

import "./PortfolioCard.css";

function PortfolioCard (){
    const [theme, setTheme] = useState("light");
    const [index, setIndex] = useState(0);
  
    const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    }; 
   

    const nextPhoto = () =>{
        setIndex ((index+1)% Photos.length);
    }

    const prevPhoto = () =>{
        setIndex ((index-1 + Photos.length)% Photos.length);
    }

    const showAlert = () =>{
        alert ("Thanks for contacting!");
    }

    return(
        <div className={`container ${theme}`}>
            <button onClick = {toggleTheme}>Toggle theme</button>
            <div className="card">

                <div className="profile">
                    <ProfileImage src= {Photos[index]}/>
                    <UserInfo/>
                </div>

                <p className="bio">
                  I design and build calm, focused product experiences for fast moving team.
                  Currently exploring AI assisted interfaces, design systems, and high performance 
                  UI engeenering.
                </p>

                <h4>Skills</h4>
                <Skills skillList={skills}/>

                <div className="actions">
                 <button onClick={toggleTheme}>🌙 Dark</button>

                 <button onClick={prevPhoto}>◀</button>

                 <button onClick={nextPhoto}>▶</button>

                  <span className="fraction">{index+1} / {Photos.length}</span>
                 <LikeButton/>
                 <button onClick={showAlert} className="contact-btn">✉ Contact</button>
                </div>

            </div>
        </div>
    )
}

export default PortfolioCard;
