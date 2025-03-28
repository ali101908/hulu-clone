import React, { useState } from 'react';
import './faq.css';
import FaqIcon from '../../../images/bundle-images/faq-icon.png';
import faqData from './faq.json';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-portion">
        <h2>Any Questions?</h2>
        <p>
          We’re here to help! Visit our <a href="#">Help Center</a> to learn more.
        </p>
      </div>
      <div className="faq-options">
        {faqData.faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <p className="questionnaire">{faq.question}</p>
              <img
                src={FaqIcon}
                alt="faq-icon"
                className={`faq-icon ${openIndex === index ? 'rotated' : ''}`}
              />
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
	  <p className='faq-footer'>© 2025 Disney and its related entities.</p>
    </div>
  );
};

export default Faq;
