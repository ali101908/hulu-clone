import React, { useState } from 'react';
import '../home.css';
import heroImage from '../../../images/hero-img.png';
import heroImage2 from '../../../images/hero-img2.png';

const HeroSection = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className='hero-container'>
      <div className='hero-logo'>
        <h6 className='heading'>LIMITED TIME OFFER</h6>
        <img src={heroImage} alt='Hulu Hero' width={300} height={100} />
      </div>
      <div>
        <h1>Get Disney+ and Hulu (both <br /> with ads) for $2.99/month <br /> for 4 months</h1>
        <p className='hero-content1'>Save 72% per month for 4 months on Disney+, Hulu <br /> Bundle Basic. Ends 3/30/25.</p>
      </div>
      <div className='hero-btn-container'>
        <button className='hero-btn'>GET THIS DEAL</button>
      </div>
      <p className='hero-content'>
        Savings compared to the then-current regular monthly price of Disney+, Hulu Bundle Basic. Offer applies to ad-<br />
        supported Disney+, Hulu Bundle plan. Valid only for new and eligible returning Disney+, Hulu, and/or ESPN+ <br />
        subscribers, who are 18 years of age or older. <b> After 4-month promo period, Disney+, Hulu Bundle Basic auto-<br />
        renews at then-current monthly retail price ($10.99/mo (plus tax, where applicable)) until canceled. </b> Select<br />
        Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available<br />
        via Hulu app. Hulu content can be streamed via Disney+ on up to 2 devices simultaneously. Additional app<br />
        feature and device restrictions apply. Offer valid until 11:59 PM PT on 3/30/25. <a href='#' onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Additional terms apply..</a>©2025<br />
        Disney and its related entities.
      </p>
	  {showTerms && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowTerms(false)}>&times;</span>
            <p style={{color:"white"}}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the <a href='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</a>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner. <br />
              Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}
      <div className='hero-footer'>
        <img src={heroImage2} alt='Hulu Hero' width={300} height={100} />
        <div className='hero-footer-content'>
          <p className='foot-head'>DISNEY+, HULU, MAX BUNDLE</p>
          <h3>Save 42% per month with a Disney+, Hulu, Max Bundle. Plans start <br /> at $16.99/mo.</h3>
          <p className='saving'>Savings compared to regular monthly price of each service.</p>
        </div>
        <div className='hero-btn-footer'>
          <button className='hero-btn2'>LEARN MORE</button>
          <a href='#' onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms apply</a>
        </div>
      </div>

      {showTerms && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowTerms(false)}>&times;</span>
            <p style={{color:"white"}}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the <a href='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</a>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner. <br />
              Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
