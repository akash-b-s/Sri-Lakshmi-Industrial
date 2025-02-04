import React, { useState } from 'react';
import './request-quote.css';
import { db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore'; 
import emailjs from 'emailjs-com'; 
import { useNavigate } from 'react-router-dom';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    material: '',
    findUs: '',
    message: '',
  });
  const navigate = useNavigate(); 

  const handleGetQuoteClick = () => {
    navigate('/'); 
  };
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const quoteData = { ...formData };
      const docRef = await addDoc(collection(db, 'quotes'), quoteData);
      console.log('Document written with ID: ', docRef.id);
      setStatus('Quote request submitted successfully!');

      const serviceID = 'service_45vhybs';
      const templateID = 'template_uun0knf';
      const publicKey = 'MmA5IUmig73gB7_k3';

      const emailTemplateParams = {
        to_name: 'Akash',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        product: formData.product,
        material: formData.material,
        find_us: formData.findUs === '' ? 'Not specified' : formData.findUs,
        message: formData.message,
      };

      try {
        await emailjs.send(serviceID, templateID, emailTemplateParams, publicKey);
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email: ', error);
        setStatus('Error submitting your quote request. Please try again.');
        alert(error.message);
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        material: '',
        findUs: '',
        message: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus('Error submitting your quote request. Please try again.');
      alert(error.message);
    }
  };

  return (
    <div className="quote-form-container">
      <h2>REQUEST QUOTE HERE</h2>
      <p>
        If you are looking for a product or service quote, please enter your
        information below and we will get back to you with an estimate or give you
        a call to get more information in order to give you an accurate quote.
      </p>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">
            What Product or Service Are You Looking For?
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select Product/Service</option>
            <option value="Bero">Bero</option>
            <option value="Cots">Cots</option>
            <option value="Tables">Tables</option>
            <option value="Desks">Desks</option>
            <option value="Filing Cabinets">Filing Cabinets</option>
            <option value="Tinkering Items">Tinkering Items</option>
            <option value="Repainting Services">Repainting Services</option>
            <option value="Grill Works">Grill Works</option>
            <option value="Banner Frames">Banner Frames</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="material">Material Type:</label>
          <select
            id="material"
            name="material"
            value={formData.material}
            onChange={handleChange}
          >
            <option value="">Select Material</option>
            <option value="Steel">Steel</option>
            <option value="Aluminum">Aluminum</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="findUs">How did you find us?</label>
          <select
            id="findUs"
            name="findUs"
            value={formData.findUs}
            onChange={handleChange}
          >
            <option value="">Select Option</option>
            <option value="google">Google</option>
            <option value="referral">Referral</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          REQUEST QUOTE
        </button>
      </form>
    
      <div className="left-arrow" onClick={handleGetQuoteClick}>&#8592;</div> {/* Left arrow */}
    </div>
  );
};

export default QuoteForm;
