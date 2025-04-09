import React, { useState } from 'react';
import './faq.css';
import FaqIcon from '../../../images/bundle-images/faq-icon.png';
import faqData from './faq.json';
import styles from '../../../assets/component.module.css/component.module.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.textCenter} faq-container`}>
      <div className="faq-portion">
        <h2 className={styles.fontDarkBlue32px}>Any Questions?</h2>
        <p className={styles.textCenter}>
          We’re here to help! Visit our <a href="#">Help Center</a> to learn more.
        </p>
      </div>
      <div className={`${styles.onlyColumn} ${styles.gap} faq-options`}>
        {faqData.faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className={`${styles.paddingCover} ${styles.spaceBetween} ${styles.hover} faq-question `} onClick={() => toggleFaq(index)}>
              <p className={`${styles.textLeft} questionnaire`}>{faq.question}</p>
              <img
                src={FaqIcon}
                alt="faq-icon"
                className={`faq-icon ${openIndex === index ? 'rotated' : ''}`}
              />
            </div>
            {openIndex === index && <p className={`${styles.fontDarkBlue} ${styles.textLeft} ${styles.bgOffWhite}`}>{faq.answer}</p>}
          </div>
        ))}
      </div>
	  <p className={`${styles.fontDarkBlack} ${styles.textCenter}`}>© 2025 Disney and its related entities.</p>
    </div>
  );
};

export default Faq;
