import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './plan.css';
import styles from '../../../assets/component.module.css/component.module.css';
import { Col, Row } from 'antd';
import { Dropdown } from 'react-bootstrap';



const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState('Disney+, Hulu Bundle');

  const plans = [
    { name: 'Disney+, Hulu Bundle', link: '#' },
    { name: 'Disney+, Hulu, ESPN+ Bundle', link: '#' },
    { name: 'Disney+, Hulu, Max Bundle', link: '#' },
    { name: 'Hulu + Live TV', link: '#' }
  ];

  return (
    <div className={`${styles.textCenter} ${styles.bgBlack} ${styles.widthAuto}`}>
      <div className={styles.paddingCover}>
        <h1 className={styles.fontWhite}>Select Your Plan</h1>
        <Row justify='center'>
          <Col xs={24} sm={16} md={8}>
            <p className={`${styles.fontWhite18px}`}>
              No hidden fees, equipment rentals, or installation appointments.
              <b> Switch plans or cancel anytime.**</b>
            </p>
          </Col>
        </Row>

        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            className={`${styles.hover} ${styles.fontBlack} ${styles.bgWhite} ${styles.width250px} `}
          >
            {selectedPlan}
          </Dropdown.Toggle>

          <Dropdown.Menu className={`${styles.bgWhite} ${styles.textLeft} ${styles.width250px} `}>
            {plans.map((plan, index) => (
              <Dropdown.Item
                as={Link}
                to={plan.link}
                key={index}
                className={styles.fontBlack}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPlan(plan.name);
                }}
              >
                {plan.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

      
      </div>
    </div>
  );
};

export default Plan;
