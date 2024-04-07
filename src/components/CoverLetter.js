import React from 'react';
import profilepic from '../assets/profilepic.jpg';
import './CoverLetter.css'; // Import component-specific CSS file

function CoverLetter() {
    return (
       <div className="cover-letter-container">
        <img src={profilepic} alt="profile picture" className="profile-pic" />
        <div className="objective-container">
            <h1>Objective</h1>
        </div>
       </div>
    );
}

export default CoverLetter;
