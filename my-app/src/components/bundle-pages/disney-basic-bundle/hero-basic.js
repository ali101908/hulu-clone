import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../bundles.css";
import DisneyIcon from '../../../images/bundle-images/disney-icon.png';
import ArrowDown from '../../../images/bundle-images/arrow_down.svg';

const BasicBundle = () => {
  const [showTerms, setShowTerms] = useState(false);
  const bottomRef = useRef(null); // Reference for scrolling

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='bundle-hero'>
      <div className='hero-logo'>
        <h6 className='heading'>BUNDLE & SAVE</h6>
        <img className='bundle-cont-img' src={DisneyIcon} alt='Hulu Hero'  />
      </div>

      <div>
        <h1 className='basic-title'>BUNDLE ALL THREE</h1>
        <p className='hero-content1'>
          Get your favorite stories, Originals, and live sports with 
          Disney+, Hulu, ESPN+ Bundle Basic, which includes Hulu, 
          Disney+, and ESPN+, all with ads.
        </p>
      </div>

      <div className='basic-hero-footer'>
        <div className='hero-btn-footer'>
          <button className='hero-btn2'>GET ALL THREE</button>
          <Link to='#' onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms apply</Link>
        </div>
      </div>

      {showTerms && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowTerms(false)}>&times;</span>
            <p style={{ color: "white" }}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period.
              No refunds or credits for partial months. Use of the services is subject to the
              <Link to='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer.
              Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services.
              Eligibility rules and offer timing may vary if you sign up through a third-party billing partner. 
              Access content from each service separately. Location data may be required to watch certain content.
              For more information, including detailed information on billing and cancellation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}

      <div className='scroll-down' onClick={scrollToBottom} style={{ cursor: "pointer" }}>
        <p style={{ color: "white" }}>HOW IT WORKS</p>
        <img src={ArrowDown} alt='arrowdown' />
      </div>

      {/* Scroll Target */}
      <div ref={bottomRef} style={{ height: "50px" }}></div>
    </div>
  );
};

export default BasicBundle;
