import React from 'react';
import serviceImage1 from '../assets/table2.png'; 
import serviceImage2 from '../assets/window.png';
import serviceImage3 from '../assets/bero1.png';
import serviceImage4 from '../assets/cabinet.png';
import serviceImage5 from '../assets/shed.jpg';
import serviceImage6 from '../assets/shutter.jpg';
import serviceImage7 from '../assets/ti.png';
import serviceImage8 from '../assets/repair.png';

import './services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <img src={serviceImage1} alt="Service 1" />
          <h3>Desk Table</h3>
          <p>This sleek and contemporary writing desk is a perfect blend of style and durability, ideal for any home office or study space. Crafted with high-quality steel, the desk features a spacious top surface with a high-wear DuraGraph faux white marble accent, providing ample room for your laptop, books, and other essentials.</p>
           {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
        </div>
        <div className="service-item">
          <img src={serviceImage2} alt="Service 2" />
          <h3>Grill Window</h3>
          <p>stylish and durable grill window is a perfect blend of functionality and aesthetic appeal, ideal for any home or office space. Crafted with high-quality steel, the window features a robust frame that ensures long-lasting stability and security. The decorative grill design adds a touch of elegance while providing an additional layer of protection.</p>
           {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
        </div>
        <div className="service-item">
          <img src={serviceImage3} alt="Service 3" />
          <h3>Bero</h3>
          <p> sleek and contemporary Bero is a perfect blend of style and durability, ideal for any home or office space. Crafted with high-quality steel, the Bero features a robust frame that ensures long-lasting stability and security. The modern design includes a spacious interior with multiple shelves and compartments, providing ample room for clothes, accessories, and other essentials.</p>
           {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
        </div>
        <div className="service-item">
          <img src={serviceImage4} alt="Service 4" />
          <h3>Filling Cabinet</h3>
          <p> robust and contemporary filing cabinet is a perfect blend of functionality and durability, ideal for any office or home workspace. Crafted with high-quality steel, the cabinet features a sturdy frame that ensures long-lasting stability and security. The modern design includes multiple drawers with smooth metal runners and safety stops, providing ample storage space for documents, files, and other essentials.</p>
           {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
        </div>
        <div className="service-item">
          <img src={serviceImage5} alt="Service 5" />
          <h3>Shed Work</h3>
          <p>robust and contemporary steel shed is a perfect blend of functionality and durability, ideal for any outdoor space. Crafted with high-quality steel, the shed features a sturdy frame that ensures long-lasting stability and security. The modern design includes spacious interiors, providing ample room for storing gardening tools, lawnmowers, bicycles, and other essentials.</p>
          {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
        </div>
        <div className="service-item">
          <img src={serviceImage6} alt="Service 6" />
          <h3>Rolling Shutter</h3>
          <p>rolling shutter is a perfect blend of functionality and durability, ideal for any industrial or commercial space. Crafted with high-quality steel, the shutter features interlocking slats that provide a seamless and secure closure system. The modern design ensures excellent protection against unauthorized access and harsh weather conditions.</p>
           {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
        </div>
        <div className="service-item">
          <img src={serviceImage7} alt="Service 7" />
          <h3>Tinkering</h3>
          <p>For tinkering projects, a custom-built metal workstation is the perfect blend of functionality and durability, ideal for any industrial or DIY setting. Crafted with high-quality steel, this workstation features a sturdy frame, spacious work surface, and integrated storage options, providing a seamless and efficient work environment.</p>
           {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
        </div>
        <div className="service-item">
          <img src={serviceImage8} alt="Service 8" />
          <h3>Maintenance & Repair</h3>
          <p>Crafted with high-quality steel, the workstation features a sturdy frame and a spacious work surface that ensures a seamless and efficient work environment. Its modern design offers integrated storage options for tools and materials, making it highly versatile for precision tasks or heavy-duty tinkering. </p>
          {/*<a href="#!" className="learn-more">LEARN MORE</a>*/}
          
        </div>
      </div>
    </section>
  );
};

export default Services;
