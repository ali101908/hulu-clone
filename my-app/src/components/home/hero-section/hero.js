import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import { Button } from "antd";
import '../home.css';
import heroImage from '../../../images/hero-img.png';
import heroImage2 from '../../../images/hero-img2.png';
import styles from '../../../assets/component.module.css/component.module.css';



const HeroSection = () => {

  const [visible, setVisible] = useState(false);
  // const onDismiss = () => setVisible(true);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className={` hero-container`}>
      <div className={styles.directionColumn}>
        <h6 className={styles.fontGreen}>LIMITED TIME OFFER</h6>
        <img className={styles.imgSize} src={heroImage} alt='Hulu Hero' />
      </div>
      <div className='hero-head-content'>
        <h1 className={`${styles.fontWhite} ${styles.textCenter}`}>Get Disney+ and Hulu (both  with ads) for $2.99/month  for 4 months</h1>
        <p className={`${styles.fontWhiteBold} ${styles.textCenter}`}>Save 72% per month for 4 months on Disney+, Hulu  Bundle Basic. Ends 3/30/25.</p>
      </div>
      <div className={styles.center}>
        <Button color="green" variant="solid" className={`${styles.fontBlack14px} ${styles.textDecoration} ${styles.center} ${styles.hover} hero-btn`}>GET THIS DEAL</Button>
      
      </div>


      
      <p className={`${styles.fontGray} ${styles.textCenter} `}>
        Savings compared to the then-current regular monthly price of Disney+, Hulu Bundle Basic. Offer applies to ad-
        supported Disney+, Hulu Bundle plan. Valid only for new and eligible returning Disney+, Hulu, and/or ESPN+ 
        subscribers, who are 18 years of age or older. <b> After 4-month promo period, Disney+, Hulu Bundle Basic auto-
        renews at then-current monthly retail price ($10.99/mo (plus tax, where applicable)) until canceled. </b> Select
        Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available
        via Hulu app. Hulu content can be streamed via Disney+ on up to 2 devices simultaneously. Additional app
        feature and device restrictions apply. Offer valid until 11:59 PM PT on 3/30/25. <Link to='#' className={styles.fontGray} onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Additional terms apply..</Link>©2025
        Disney and its related entities.
      </p>
	  {showTerms && (
        <div className={`${styles.center} ${styles.heightfull} ${styles.width100} modal `}>
          <div className={`${styles.whiteColour} ${styles.textLeft} modal-content`}>
            <span className={`${styles.whiteColour} ${styles.hover} close`} onClick={() => setShowTerms(false)}>&times;</span>
            <p className={styles.fontWhite18px}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the <Link to='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner. 
              Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}
      <div className={`${styles.spaceEvenly} ${styles.paddingCover} ${styles.widthAuto} ${styles.opacity} ${styles.bgBlack} hero-footer`}>
        <img src={heroImage2} alt='Hulu Hero' width={300} height={100} />
        <div className='hero-footer-content'>
          <p className={`${styles.fontGreenBold} ${styles.textCenter}`}  >DISNEY+, HULU, MAX BUNDLE</p>
          <h3 className={`${styles.textCenter} ${styles.whiteColour}`}>Save 42% per month with a Disney+, Hulu, Max Bundle. Plans start  at $16.99/mo.</h3>
          <p className={`${styles.fontWhite18px} ${styles.textCenter}`}>Savings compared to regular monthly price of each service.</p>
        </div>
        <div className={`${styles.directionColumn} ${styles.atags} ${styles.paddingCover} ${styles.textCenter}`}>
          <Button color="green" variant="solid"  className={`${styles.hover}  ${styles.blackColour} ${styles.bgTheme} hero-btn2`}>LEARN MORE</Button>
          <Link to='#' className={styles.fontGray} onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms apply</Link>
        </div>
      </div>

      {showTerms && (
        <div className={`${styles.center} ${styles.heightfull} ${styles.width100} modal `}>
          <div className={`${styles.whiteColour} ${styles.textLeft} modal-content`}>
            <span className={`${styles.whiteColour} ${styles.hover} close`} onClick={() => setShowTerms(false)}>&times;</span>
            <p className={styles.fontWhite18px}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the <Link to='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner. 
              Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
