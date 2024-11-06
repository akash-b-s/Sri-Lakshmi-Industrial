import React from 'react';
import ownerPhoto from '../assets/profile.png'; 
import './about.css'
const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-content">
        <div className="about-photo">
          <img src={ownerPhoto} alt="Owner" className="profile-image" />
        </div>
        <div className="about-text">
        <p>With over 30 years of experience in steel fabrication, I began my journey working as an 
          employee in the industry before starting my own business. Throughout the years, 
          I have completed a wide range of services tailored to meet the specific needs of my customers, 
          ensuring their satisfaction with every project. My commitment to quality and attention to detail set me apart, 
          allowing me to deliver solutions that not only meet but exceed expectations. I take pride in building strong relationships with my clients, 
          understanding their unique requirements, and providing personalized service that fosters trust and reliability.</p>
        </div>
      </div>
      {/* Scrolling text section for company names */}
      <div className="scrolling-companies">
    <div className="scroll-text">
        <p>
             SELVAM STORES • THIRUKUMARAN STORES & FURNITURES • RAJA STORES • GIRIAS • MURUGAN WORK • HANEEFA SUPER MARKET • RM METAL FINISHING • SRI SAKTHI STORES
        </p>
    </div>
</div>

    </section>
  );
};

export default About;
