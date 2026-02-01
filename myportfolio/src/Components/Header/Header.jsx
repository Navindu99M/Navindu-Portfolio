import React, {useEffect, useRef} from 'react';
import './Header.css';
import profile_img from '../../assets/hh1.png';
import Typed from "typed.js";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header(){

    const textRef = useRef(null);

    useEffect(() => {
        
    const typed = new Typed(textRef.current, {
      strings: ["Software Engineer", "Web Developer", ".NET Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
    }, []);
    

    return(
        <div id='home' className='hero'>
            <img src={profile_img} alt=''/>
            <h1><span>I'm Navindu Rathnayaka,</span> Software Engineer based in Sri Lanka</h1>
            <h1><span ref={textRef} className="text"></span></h1>
            <p>Dedicated Software Engineer with a strong passion for problem-solving, software design, and development. 
            Skilled in .NET, C#, React, Angular, SQL, and cloud-native solutions.</p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className='hero-resume'><a style={{textDecoration: "none", color:"white"}} href="/My_React_Portfolio/resume.pdf" download="resume.pdf">My resume</a></div>
            </div>
        </div>
    );
}

export default Header;