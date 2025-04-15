import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../../../assets/component.module.css/component.module.css';
import { Button ,Row ,Col } from "antd";
import "./trial.css";

const Trial = () => {
 
  const [zipCode, setZipCode] = useState("");
  const [showTerms , setShowTerms] = useState(false)

  return (
    <>
    <div className={`${styles.directionColumn}  ${styles.gap} ${styles.paddingComplete}`} style={{ backgroundColor: "#0B0C0F" }}>
      <p className={`${styles.fontGreenBold} ${styles.textCenter} `}>
        TRY HULU (WITH ADS) + LIVE TV FREE FOR 3 DAYS
      </p>
      <h1 className={`${styles.fontWhite} ${styles.textCenter}`}>
        Watch Live TV From 95+ Channels
      </h1>
      <Col span={10}>
      <p className={`${styles.fontWhite18px} ${styles.textCenter} `}>
        Get top national and local channels on Hulu (With Ads) + Live TV with
        your favorite live  sports, news, and events - plus the entire
        Hulu streaming library. With Unlimited DVR, store  Live TV
        recordings for up to nine months and fast-forward through your DVR
        content.  Includes access to endless entertainment with Disney+
        and live sports with ESPN+.
      </p>
      </Col>
      <div className={styles.center}>
      <Button color="green" variant="solid" to="./login" className={`${styles.hover} ${styles.fontBlack12px} ${styles.textDecoration} ${styles.center}  trial-btn`} >
        START YOUR FREE TRIAL
      </Button></div>
      <Col span={16}>
      <p className={`${styles.fontGray} ${styles.textCenter} `} >
        Hulu (With Ads) + Live TV plan $82.99/mo. after 3-day free trial (if
        any) unless canceled. Cancel anytime. Regional restrictions, blackouts
        and Live TV terms apply. Access content from each service separately.
        Location data required to  watch certain content. Offer valid for
        eligible subscribers only.{" "}
        <Link to="#" className={styles.fontGray}>See details.</Link>
      </p>
      </Col>
      <div className={styles.textCenter}>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            setShowTerms(true);
          }}
          style={{ color: "silver" }}
        >
          VIEW CHANNELS IN YOUR AREA →
        </Link>
        {showTerms && (
          <div className={`${styles.center} ${styles.heightfull}  modal1`}>
            <div className={`${styles.textLeft} ${styles.bgWhite} ${styles.paddingComplete} ${styles.blackColour} modal-content1`}>
              <span className={`${styles.blackColour} ${styles.hover} close1`} onClick={() => setShowTerms(false)}>
                &times;
              </span>
              <h2>Channels in your area</h2>
              <p>Enter your home ZIP code for channels available in your area.</p>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <button className={`${styles.bgBlack} ${styles.whiteColour} ${styles.hover} submit-btn`}>SUBMIT</button>
              </div>
              <div className="trial-content">
              <p className={`${styles.fontGray} ${styles.marginTop} modal-description1 `}>
                Live TV is available for those live local, regional, and
                national channels available in your area, which are subject to
                change. Certain channels or content may not be available in all
                locations or on all devices.
              </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
</div>
   </>
    
  );
};

export default Trial;
