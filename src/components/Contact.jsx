import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { db } from "../firebase"; 
import { collection, addDoc } from 'firebase/firestore'; 
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      await addDoc(collection(db, 'contactMessages'), formData);
      console.log('Form Data Submitted:', formData);

      const serviceID = 'service_shu8ryj';
      const templateID = 'template_eq998lp'; 
      const publicKey = 'MmA5IUmig73gB7_k3'; 

      
      const emailTemplateParams = {
        to_name: 'Akash', 
        from_name: formData.name,
        from_email: formData.email,
        address: formData.address,
        message: formData.message,
      };

      
      await emailjs.send(serviceID, templateID, emailTemplateParams, publicKey);
      console.log('Email sent successfully!');

      
      setFormData({
        name: '',
        email: '',
        address: '',
        message: '',
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form: ', error);
      setError('Error submitting your message. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-details">
          <h2 className="contact-title">CONTACT US</h2>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <strong> Call Us:</strong> 9444333926/9444440353
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <strong> Location:</strong>  A1, Thiruverkadu Bus Depot Rd, Gangaiamman Nagar, Pallikuppam, Thiruverkadu, Tamil Nadu 600056
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faClock} />
            <strong> Business Hours:</strong> Mon - Sun: 9 am - 10 pm.
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <strong> Email:</strong> <a href="mailto:info@example.com">srilakshmiindustries74@gmail.com</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faWhatsapp} />
            <strong> WhatsApp:</strong> 9444333926
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">SUBMIT</button>

            {submitted && (
              <div className="submit-message">
                Thank you! Your message has been sent.
              </div>
            )}
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;