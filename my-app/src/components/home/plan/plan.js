import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './plan.css';
import styles from '../../../assets/component.module.css/component.module.css';
import { CaretDownOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';



const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState('Disney+, Hulu Bundle');
  const [isOpen, setIsOpen] = useState(false);

  const plans = [
    { name: 'Disney+, Hulu Bundle', link: '#' },
    { name: 'Disney+, Hulu, ESPN+ Bundle', link: '#' },
    { name: 'Disney+, Hulu, Max Bundle', link: '#' },
    { name: 'Hulu + Live TV', link: '#' }
  ];

  return (
    <div className={`${styles.textCenter}  ${styles.bgBlack} ${styles.widthAuto}`}>
      <div className={styles.paddingCover}>
        <h1 className={styles.fontWhite}>Select Your Plan</h1>
        <Row justify='center'>
        <Col span={8}>
        <p className={`${styles.fontWhite18px}`}>
          No hidden fees, equipment rentals, or installation appointments.
          <b>Switch plans or cancel anytime.**</b>
        </p>
        </Col>
        </Row>
        <div className={`dropdown-btn ${isOpen ? 'open' : ''}`}>
          <button
            className={`${styles.hover} ${styles.fontBlack} ${styles.bgWhite} ${styles.width250px} dropdown-toggle`}
            type='button'
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedPlan} <CaretDownOutlined />
          </button>
          <div className={`dropdown-menu ${isOpen ? 'visible' : 'hidden'} ${styles.bgWhite} ${styles.textLeft} ${styles.width250px}`}>
            {plans.map((plan, index) => (
              <Link
                key={index}
                to={plan.link}
                className={`${styles.fontBlack} dropdown-item`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPlan(plan.name);
                  setIsOpen(false);
                }}
              >
                {plan.name}
              </Link>
            ))}
          </div>
        </div>
        {/* <Pricing /> */}
      </div>
    </div>
  );
};

export default Plan;
