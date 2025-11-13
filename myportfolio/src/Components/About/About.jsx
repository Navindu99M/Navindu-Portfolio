import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
//import profile_img from '../../assets/Navinduimage.jpg';
import profile_img from '../../assets/hh.png';

function About(){
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Adept at collaborating with cross functional teams to deliver scalable, high-quality software products.</p>
                        <p> Experienced in both enterprise systems (Project Management, HR, Case Management) and custom solutions (eCommerce, Web Applications, Mobile Apps).</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>C# & .NET Core</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Angular</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>SQL/StoredProcedures</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Azure/Git/API Develop/CI CD</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Manual & Automation Testing</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Prompt Engineering (Software) </p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
}

export default About;