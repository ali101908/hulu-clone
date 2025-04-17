import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PriceLogo from '../../../images/price-logo.svg';
import TickBtn from '../../../images/tick-btn.svg';
import './pricing.css';
import styles from '../../../assets/component.module.css/component.module.css';
import { CaretDownOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/esm/Modal';

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
    <div className={`${styles.textCenter} ${styles.paddingCover} ${styles.bgBlack}`}>
      <div className={`${styles.bgBlack} pricing-sticky`}>
        <p className={`${styles.bgSkyGreen} ${styles.bgBlack12px} pricing-title`}>
          {pricingData.title}
        </p>
        <div className={`${styles.gap} ${styles.justifyR} pricing-portion`}>
          {pricingData.bundles.map((bundle, index) => (
            <div key={index} className={styles.fontWhite14px}>
              <img src={PriceLogo} alt="Disney Plus Logo" />
              <p className={styles.fontWhite12px}>{bundle.name}</p>
              <Button variant="success" className={`${styles.width250px} ${styles.fontBlack} ${styles.hover} pricing-btn`}>
                {bundle.price}
              </Button>
              <p className={`${styles.fontWhite12px} ${styles.width250px} ${styles.marginTop}`}>{bundle.footer}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="table-container mt-4">
        <Table striped bordered hover variant="dark" className="text-white text-center">
          <thead>
            <tr>
              <th className="text-start">Features</th>
              <th>Bundle Basic</th>
              <th>Bundle Premium</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.table.map((row, index) => (
              <tr key={index}>
                <td className="text-start">{row.label}</td>
                {row.values.map((value, i) => (
                  <td key={i}>
                    {row.discount && <small className="text-muted d-block">{row.discount[i]}</small>}
                    {value === true ? <img src={TickBtn} alt="tick" /> : value === false ? '—' : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>

        <Row justify="center" className="mt-3">
          <Col xs={24} sm={16} md={5}>
            <p className={`${styles.fontWhite10px} ${styles.textCenter}`}>
              *Savings compared to regular monthly price of each service.{' '}
              <Link to="#" className={styles.fontGray} onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>
                Terms apply.
              </Link>
              <br />
              **Switches from Live TV to Hulu take effect as of the next billing cycle <br />
              †For current-season shows in the streaming library only <br />
              ©2025 Disney and its related entities.
            </p>
          </Col>
        </Row>

        <Modal
        show={showTerms}
        onHide={() => setShowTerms(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Terms</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.deepDarkColour}>
          Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the{' '}
          <Link to="#">Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner.
          Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
        </Modal.Body>
      </Modal>
      </div>

 
      <div className="add-on-portion mt-5">
        <hr className="table-line" />
        <button
          className={`${styles.hover} ${styles.fontWhite14px} ${styles.textCenter} table-btn`}
          onClick={() => setShowAddOns(!showAddOns)}
        >
          {showAddOns ? 'Hide Add-ons' : 'Show Add-ons'} <CaretDownOutlined className={showAddOns ? 'rotate-icon' : ''} />
        </button>
        <hr className="table-line" />

        {showAddOns && (
          <div className="Add-On">
            <h1 className={`${styles.fontWhite32px} ${styles.textCenter} available`}>Available Add-ons</h1>
            <Row justify="center">
              <Col xs={24} sm={16} md={4}>
                <p className={`${styles.fontWhite14px} ${styles.textCenter} add-content`}>
                  Add-ons available at an additional cost. Add them after you sign up for Hulu.
                </p>
              </Col>
            </Row>

            <div className="table-container">
  {/* <div style={{ width: '50%' }}> */}
    <Table striped bordered hover variant="dark" className=" text-white text-center mt-3">
      <thead>
        <tr>
          <th className="text-start">Add-on</th>
          <th>Bundle Basic</th>
          <th>Bundle Premium</th>
        </tr>
      </thead>
      <tbody>
        {pricingData.addOns.map((addOn, index) => (
          <tr key={index}>
            <td className="text-start">{addOn.name}</td>
            {addOn.included.map((included, i) => (
              <td key={i}>{included ? <img src={TickBtn} alt="tick" /> : '—'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  {/* </div> */}
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
