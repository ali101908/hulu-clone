import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Space } from 'antd';
import '../home.css';
import heroImage from '../../../images/hero-img.png';
import heroImage2 from '../../../images/hero-img2.png';
import styles from '../../../assets/component.module.css/component.module.css';

const HeroSection = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="hero-container">
      <Row justify="center" align="middle" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <h6 className={styles.fontGreen}>LIMITED TIME OFFER</h6>
        <img className={styles.imgSize} src={heroImage} alt="Hulu Hero" />
      </Row>
      
      <Row justify="center" className={styles.textCenter}>
        <Col xs={24} md={12} lg={8}>
          <h1 className={`${styles.fontWhite}`}>Get Disney+ and Hulu (both with ads) for $2.99/month for 4 months</h1>
          <p className={styles.fontWhiteBold}>
            Save 72% per month for 4 months on Disney+, Hulu Bundle Basic. Ends 3/30/25.
          </p>
        </Col>
      </Row>

      <Row justify="center">
        <Button className={`hero-btn ${styles.fontBlack14px} ${styles.hover}`} color="green" variant='solid' >
          GET THIS DEAL
        </Button>
      </Row>

      <Row justify="center" className={styles.textCenter}>
        <Col xs={24} md={12} lg={8}>
          <p className={styles.fontGray}>
            Savings compared to the then-current regular monthly price of Disney+, Hulu Bundle Basic. Offer applies to ad-
            supported Disney+, Hulu Bundle plan. Valid only for new and eligible returning Disney+, Hulu, and/or ESPN+ 
            subscribers, who are 18 years of age or older. <b>After 4-month promo period, Disney+, Hulu Bundle Basic auto-
            renews at then-current monthly retail price ($10.99/mo (plus tax, where applicable)) until canceled.</b> Select
            Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available
            via Hulu app. Hulu content can be streamed via Disney+ on up to 2 devices simultaneously. Additional app
            feature and device restrictions apply. Offer valid until 11:59 PM PT on 3/30/25.{' '}
            <Link to="#" className={styles.fontGray} onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>
              Additional terms apply..
            </Link> ©2025 Disney and its related entities.
          </p>
        </Col>
      </Row>

      {showTerms && (
        <div className={`modal ${styles.center} ${styles.heightfull} ${styles.width100}`}>
          <div className={`modal-content ${styles.whiteColour} ${styles.textLeft}`}>
            <span className={`close ${styles.whiteColour} ${styles.hover}`} onClick={() => setShowTerms(false)}>&times;</span>
            <p className={styles.fontWhite18px}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the{' '}
              <Link to="#">Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner.
              Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}

      <Row justify="space-evenly" align="middle" className={`hero-footer ${styles.bgBlack} ${styles.paddingCover} ${styles.opacity}`}>
        <Col xs={24} sm={12} md={6}>
          <img src={heroImage2} alt="Hulu Hero" width={300} height={100} />
        </Col>
        <Col xs={24} sm={16} md={9}>
          <p className={`${styles.fontGreenBold} ${styles.textCenter}`}>DISNEY+, HULU, MAX BUNDLE</p>
          <h3 className={`${styles.textCenter} ${styles.whiteColour}`}>
            Save 42% per month with a Disney+, Hulu, Max Bundle. Plans start at $16.99/mo.
          </h3>
          <p className={`${styles.fontWhite18px} ${styles.textCenter}`}>
            Savings compared to regular monthly price of each service.
          </p>
        </Col>
        <Col xs={24} sm={12} md={4}>
          <Space direction="vertical" align="center">
            <Button color="green" variant='solid' className={`hero-btn2 ${styles.hover} ${styles.blackColour} ${styles.bgTheme}`}>
              LEARN MORE
            </Button>
            <Link to="#" className={styles.fontGray} onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>
              Terms apply
            </Link>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
