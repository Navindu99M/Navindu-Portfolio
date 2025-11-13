import React from 'react';
import './Header.css';
//import profile_img from '../../assets/Navinduimage.jpg';
import profile_img from '../../assets/hh.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header(){
    return(
        <div id='home' className='hero'>
            <img src={profile_img} alt=''/>
            <h1><span>I'm Navindu Rathnayaka,</span> Software Engineer based in Sri Lanka</h1>
            <p>Dedicated Software Engineer with a strong passion for problem-solving, software design, and development. 
            Skilled in .NET, C#, React, Angular, SQL, and cloud-native solutions.</p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className='hero-resume'><a style={{textDecoration: "none", color:"white"}} href="/resume.pdf" download>My resume</a></div>
            </div>
        </div>
    );
}

export default Header;