import React, { useState } from 'react';
import './iconic.css';
import iconic1 from '../max-images/I1.webp';
import iconic2 from '../max-images/I2.webp';
import iconic3 from '../max-images/I3.webp';
import iconic4 from '../max-images/I4.webp';
import iconic5 from '../max-images/I5.webp';
import iconic6 from '../max-images/I6.webp';
import iconic7 from '../max-images/I7.webp';
import iconic8 from '../max-images/I8.webp';
import iconic9 from '../max-images/I9.webp';
import iconic10 from '../max-images/I10.webp';
import iconic11 from '../max-images/I11.webp';
import iconic12 from '../max-images/I12.webp';
import iconic13 from '../max-images/I13.webp';
import iconic14 from '../max-images/I14.webp';
import iconic15 from '../max-images/I15.webp';
import iconic16 from '../max-images/I16.webp';
import styles from '../../../assets/component.module.css/component.module.css';
import { Row,Col } from 'antd';

const categories = {
  Originals: [iconic1, iconic2, iconic3, iconic4, iconic5, iconic6],
  Films: [iconic7, iconic8, iconic9, iconic10, iconic11, iconic12],
  Trending: [iconic13, iconic1, iconic14, iconic2, iconic15, iconic16]
};

const Iconic = () => {
  const [activeCategory, setActiveCategory] = useState('Originals');

  return (
    <div className={`${styles.width100} ${styles.textCenter}  ${styles.paddingCover}  iconic-container`}>
      <div className='iconic-header'>
        <h1 className={styles.fontWhite32px}>Iconic hits with Max</h1>
        <Row justify='center'>
        <Col span={12} >
        <p className={`${styles.fontWhite18px}  ${styles.textCenter}`}>Get all of HBO, the DC Universe, new releases from Warner Bros. and A24, and more. From  award-winning series and movies to fresh originals and family favorites, Max is the one to watch.</p>
        </Col>
        </Row>
      </div>
      <div className={`${styles.center} ${styles.gap} ${styles.marginBottom}`}>
        {Object.keys(categories).map((category) => (
          <h3 
            key={category} 
            className={`iconic-content-title ${styles.fontWhite18px} ${styles.hover}  ${activeCategory === category ? 'active' : ''}`} 
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </h3>
        ))}
      </div>
      <div className={styles.marginComplete}>
        <div className={`${styles.gap} iconic-content-image`}>
          {categories[activeCategory].map((image, index) => (
            <img className={styles.width100} key={index} src={image} alt='iconic' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Iconic;
