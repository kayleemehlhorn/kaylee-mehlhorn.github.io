import React from 'react';
import profilepic from '../assets/profilepic.jpg';
import wgulogo from '../assets/wgulogo.png';
import './CoverLetter.css'; 

function CoverLetter() {
    return (
       <div className="cover-letter-container">
        <img src={profilepic} alt="profile picture" className="profile-pic" />
        <div className="objective-container">
            <h1 style={{ textDecoration: 'underline'}}>Objective</h1>
            <p className='p'>Motivated software engineering student with a strong foundation of creating impactful solutions through technology. I am eager to secure an internship role where I can apply my skills in web development, git, and frameworks.  I aim to contribute effectively to projects while gaining practical experience in a professional setting. Seeking an internship opportunity that allows personal growth in the expanding and exciting world of tech. </p>
        </div>
        <div className="additional-sections">
            <div className="education-container">
                <h2 style={{ textDecoration: 'underline'}}>Education</h2>
                <img src={wgulogo} alt="school logo" className='wgulogo'/>
                <p>Western Governors University, Salt Lake City</p>
                <ul>
                    <li>Bachelor of Software Engineering</li>
                    <li>Expected graduation (2025)</li>
                </ul>
            </div>
            <div className="technical-proficiency-container">
                <h2 style={{ textDecoration: 'underline'}}>Technical Proficiency</h2>
                <ul>
                    <li>Programming Languages: TypeScript, JavaScript, PostgreSQL, MySQL</li>
                    <li>Frameworks/Libraries: React, Angular, Bootstrap</li>
                    <li>Version Control: Git, PowerShell</li>
                    <li>CI/CD: GitLab</li>
                    <li>Etc: HTML, CSS, SCSS</li>
                </ul>
            </div>
            <div className="transferable-skills-container">
                <h2 style={{ textDecoration: 'underline'}}>Transferable Skills</h2>
                <ul>
                    <li>Problem Solver/Critical Thinker</li>
                    <li>Team Player/Collaborator</li>
                    <li>Attention to Detail</li>
                    <li>Adaptable</li>
                    <li>Creative</li>
                </ul>
            </div>
            <div className="references-container">
                <h2 style={{ textDecoration: 'underline'}}>References</h2>
                <p>Available upon request.</p>
            </div>
        </div>
       </div>
    );
}

export default CoverLetter;
