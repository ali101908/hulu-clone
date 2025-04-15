import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import "../bundles.css";
import DisneyIcon from '../../../images/bundle-images/disney-icon.png';
import styles from '../../../assets/component.module.css/component.module.css';
import { DownCircleOutlined } from '@ant-design/icons';
import { Button,Col, Row } from "antd";
import {  UncontrolledPopover, PopoverBody, PopoverHeader } from 'reactstrap';


const BasicBundle = () => {
  const [showTerms, setShowTerms] = useState(false);
  const bottomRef = useRef(null); 

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='bundle-hero'>
      <div className={styles.directionColumn}>
        <h6 className={styles.fontGreen}>BUNDLE & SAVE</h6>
        <img className={styles.imgSize} src={DisneyIcon} alt='Hulu Hero'  />
      </div>

      <div>
        <h1 className={`${styles.fontWhite} ${styles.textCenter}`}>BUNDLE ALL THREE</h1>
        <Row justify='center'>
        <Col xs={24} sm={16} md={7}>
        <p className={`${styles.fontWhite18px} ${styles.textCenter} `}>
          Get your favorite stories, Originals, and live sports with 
          Disney+, Hulu, ESPN+ Bundle Basic, which includes Hulu, 
          Disney+, and ESPN+, all with ads.
        </p>
        </Col>
        </Row>
      </div>

      <div className='basic-hero-footer'>
        <div className={styles.directionColumn}>
        <div className="text-center">
      <Button
        id="ScheduleUpdateButton"
        color="success"
        className={`${styles.bgTheme} hero-btn2`}
      >
        GET ALL THREE
      </Button>

      <UncontrolledPopover
  placement="top"
  target="ScheduleUpdateButton"
  trigger="click"
  className="popover-white-bg"
>
  <PopoverHeader>Popover Title</PopoverHeader>
  <PopoverBody>
    Content inside the popover goes here!
  </PopoverBody>
</UncontrolledPopover>
    </div>
          <Link className={`${styles.fontWhite12px} ${styles.textDecoration}`} to='#' onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms apply</Link>
        </div>
      </div>

      {showTerms && (
        <div className={`${styles.center} ${styles.heightfull} ${styles.width100} modal `}>
          <div className={` ${styles.whiteColour} ${styles.textLeft} modal-content`}>
            <span className={` ${styles.whiteColour} ${styles.hover} close`} onClick={() => setShowTerms(false)}>&times;</span>
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

      <div className='scroll-down'>
        <p style={{ color: "white" }}>HOW IT WORKS</p>
      <span className={`down-icon ${styles.hover}`} onClick={scrollToBottom}><DownCircleOutlined /></span>
      <span ref={bottomRef} ></span>
      </div>

     
      
    </div>
  );
};

export default BasicBundle;
