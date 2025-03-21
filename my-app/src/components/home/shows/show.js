import React from 'react';
import './show.css';

import list1 from '../../../images/list1.jpeg';
import list2 from '../../../images/list2.jpeg';
import list3 from '../../../images/list3.jpeg';
import list4 from '../../../images/list4.jpeg';

import Trial from '../trial/trial';

const Show = () => {
  return (
    <div className='show-container' style={{ backgroundColor: '#0B0C0F' }}>
      <div className='show-title'>
        <div className='show-header'>
          <h6 className='heading2'>INCLUDED IN ALL PLANS</h6>
          <h1 style={{ color: 'white' }}>All The TV You Love</h1>
          <p className='show-content' style={{ color: 'white' }}>
            Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu <br />
            Originals, kids shows, and more.
          </p>
        </div>
      </div>
      <div className='shows'>
        <div className='show-lists'>
          <div className='show-row'>
            <div className='show-item'>
              <img src={list1} alt='Hulu Shows' width={280} height={440} />
              <div className='show-overlay'>
                <h3>Past Current Seasons</h3>
                <h2>TV Shows</h2>
              </div>
            </div>
            <div className='show-item'>
              <img src={list2} alt='Hulu Shows' width={280} height={440} />
              <div className='show-overlay'>
                <h3>New & Classic</h3>
                <h2>Movies</h2>
              </div>
            </div>
          </div>
          <div className='show-row'>
            <div className='show-item'>
              <img src={list3} alt='Hulu Shows' width={280} height={440} />
              <div className='show-overlay'>
                <h3>Groundbreaking</h3>
                <h2>Hulu Originals</h2>
              </div>
            </div>
            <div className='show-item'>
              <img src={list4} alt='Hulu Shows' width={280} height={440} />
              <div className='show-overlay'>
                <h3>Add-on</h3>
                <h2>Premiums</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='show-content2' style={{ color: 'gray' }}>Premium network add-ons available for an additional cost</p>
      <Trial />
    </div>
  );
};

export default Show;
