import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg';


function MyWork(){

    const [selectedImg, setSelectedImg] = useState(null);

    return(
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt=''/>
            </div>

            {selectedImg && (
                <div className="mywork-lightbox" onClick={() => setSelectedImg(null)}>
                    <img src={selectedImg} alt="Selected Work"/>
                </div>
            )}

            <div className='mywork-container'>
                {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt=""
            onClick={() => setSelectedImg(work.w_img)} // show clicked image
          />
           ))}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
}

export default MyWork;