import React, { useState } from 'react';
import './plan.css';
import Pricing from '../pricing/pricing';

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
    <div className='plan-container'>
      <div className='plan-heading'>
        <h1 className='plan-title'>Select Your Plan</h1>
        <p className='plan-content'>
          No hidden fees, equipment rentals, or installation appointments.<br />
          <b>Switch plans or cancel anytime.**</b>
        </p>
        <div className={`dropdown-btn ${isOpen ? 'open' : ''}`}>
          <button
            className='dropdown-toggle'
            type='button'
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedPlan} ▼
          </button>
          <div className={`dropdown-menu ${isOpen ? 'visible' : 'hidden'}`}>
            {plans.map((plan, index) => (
              <a
                key={index}
                href={plan.link}
                className='dropdown-item'
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  setSelectedPlan(plan.name);
                  setIsOpen(false);
                }}
              >
                {plan.name}
              </a>
            ))}
          </div>
        </div>
        {/* <Pricing /> */}
      </div>
    </div>
  );
};

export default Plan;
