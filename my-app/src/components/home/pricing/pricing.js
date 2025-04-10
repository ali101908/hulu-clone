import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PriceLogo from '../../../images/price-logo.svg';
import TickBtn from '../../../images/tick-btn.svg';
import './pricing.css';
import styles from '../../../assets/component.module.css/component.module.css';

const Pricing = () => {
  const [showAddOns, setShowAddOns] = useState(false);
   const [showTerms, setShowTerms] = useState(false);

  const pricingData = {
    title: 'LIMITED TIME OFFER',
    bundles: [
      {
        name: 'Disney+, Hulu Bundle Basic',
        price: '$2.99/MO. FOR 4 MOS.^',
        footer: 'THEN $10.99/MO.^'
      },
      {
        name: 'Disney+, Hulu Bundle Premium',
        price: '$19.99 / MONTH',
        footer: 'SAVE 42%*'
      }
    ],
    table: [
      { label: 'Monthly price', values: ['$2.99/mo. for 4 mos.^', '$19.99/mo.*'], discount: ['$19.98/mo.', '$34.98/mo.'] },
      { label: 'Subscriptions included', values: ['Disney+ and Hulu', 'Disney+ and Hulu'] },
      { label: 'Hulu streaming library', values: [true, true] },
      { label: 'Endless entertainment with Disney+', values: [true, true] },
      { label: 'Most new episodes on Hulu', values: [true, true] },
      { label: 'Access to Hulu Originals', values: [true, true] },
      { label: 'Watch on various devices', values: [true, true] },
      { label: 'No ads in Hulu', values: [false, true] },
      { label: 'No ads on Disney+', values: ['—', 'Ads in select content'] },
      { label: 'Download on Hulu', values: [false, true] },
      { label: 'Download on Disney+', values: [false, true] }
    ],
    addOns: [
      { name: 'Max', included: [true, true] },
      { name: 'CINEMAX®', included: [true, true] },
      { name: 'Paramount+ with SHOWTIME', included: [true, true] },
      { name: 'STARZ®', included: [true, true] }
    ]
  };

  return (
   
    <div className={`${styles.textCenter}  ${styles.paddingCover} ${styles.bgBlack}`}>
    <div className={`${styles.bgBlack} pricing-sticky`}> 
      <p className={`${styles.bgSkyGreen} ${styles.bgBlack12px} pricing-title`}>{pricingData.title}</p>
      <div className={`${styles.gap} ${styles.justifyR} pricing-portion`}>
        {pricingData.bundles.map((bundle, index) => (
          <div key={index} className={styles.fontWhite14px}>
            <img src={PriceLogo} alt='Disney Plus Logo' />
            <p className={styles.fontWhite12px}>{bundle.name}</p>
            <button className={`${styles.width250px} ${styles.fontBlack} ${styles.hover} pricing-btn`}>{bundle.price}</button>
            <p className={`${styles.fontWhite12px} ${styles.width250px}`}>{bundle.footer}</p>
          </div>
        ))}
      </div>
      </div>
      
	  <div className='table-container'>
  <div className={styles.marginTop}>
  {/* <hr className='table-line' /> */}
    {pricingData.table.map((row, index) => (
      <div key={index} className={`${styles.spaceEvenly} ${styles.paddingCover} table-row`}>
	  {/* <hr className='table-line' /> */}
        <p className={`${styles.fontWhite14px} ${styles.textLeft} ${styles.bgBlack} table-heading`}>{row.label}</p>
        {row.values.map((value, i) => (
          <p key={i} className={`${styles.fontWhite14px} ${styles.bgBlack} ${styles.bgBlack} table-value`}>
            {row.discount ? <span className={`${styles.fontGray} discount`}>{row.discount[i]}</span> : ''}
            {value === true ? <img src={TickBtn} alt='tick btn' /> : value === false ? '—' : value}
          </p>
        ))}
      </div>
    ))}
  </div>
  
<p className={`${styles.fontWhite10px} ${styles.textCenter} ${styles.marginBottom}`}>*Savings compared to regular monthly price of each service. <Link to='#' className={styles.fontGray} onClick={(e) => { e.preventDefault(); setShowTerms(true); }}> Terms apply.</Link>
**Switches from Live TV to Hulu take effect as of the next billing cycle 
†For current-season shows in the streaming library only 
^Savings compared to the then-current regular monthly price of Disney+, Hulu Bundle Basic. Offer applies to ad-supported Disney+, Hulu Bundle plan. Valid only for new and eligible returning Disney+, Hulu, and/or ESPN+ subscribers, who are 18 years of age or older. After 4-month promo period, Disney+, Hulu Bundle Basic auto-renews at then-current monthly retail price ($10.99/mo (plus tax, where applicable)) until canceled. Select Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available via Hulu app. Hulu content can be streamed via Disney+ on up to 2 devices simultaneously. Additional app feature and device restrictions apply. Offer valid until 11:59 PM PT on 3/30/25. <Link to='#' className={styles.fontGray} onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Additional terms apply</Link>
©2025 Disney and its related entities.

</p>
  {showTerms && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowTerms(false)}>&times;</span>
            <p style={{color:"white"}}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the <Link to='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner. 
              Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}
</div>

<div className='add-on-portion'>
  <hr className={`${styles.dFlex} table-line`} />
  <button className={`${styles.hover} ${styles.fontWhite14px} ${styles.textCenter} table-btn`} onClick={() => setShowAddOns(!showAddOns)}>
    {showAddOns ? 'Hide Add-ons' : 'Show Add-ons'}
  </button>
  <hr className='table-line' />
  {showAddOns && (
    <div className='Add-On'>
      <h1 className={`${styles.fontWhite32px}  ${styles.textCenter} available`}>Available Add-ons</h1>
      <p className={` ${styles.fontWhite14px} ${styles.textCenter} add-content`}>Add-ons available at an additional cost.  Add them after you sign up for Hulu.</p>

	  
      <div className='add-on-table'>
	 
        {pricingData.addOns.map((addOn, index) => (
          <div key={index} className={`${styles.spaceBetween} ${styles.paddingCover} add-on-row`}>
            <hr  />
            <p className={`${styles.fontWhite14px} ${styles.textLeft} ${styles.bgBlack} add-on-name`}>{addOn.name}</p>
            {addOn.included.map((included, i) => (
              <p key={i} className='add-on-value'>
                {included ? <img src={TickBtn} alt='tick btn' /> : '—'}
              </p>
            ))}
          </div>
        ))}
      </div>
      {/* <hr className='table-line' /> */}
    </div>
  )}
</div>

    </div>
   
  );
}

export default Pricing;