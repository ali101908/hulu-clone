import React from 'react';
import './category.css';
import Icon1 from '../../../images/bundle-images/icon1.png';
import Icon2 from '../../../images/bundle-images/icon2.png';
import Icon3 from '../../../images/bundle-images/icon3.png';
import styles from '../../../assets/component.module.css/component.module.css';
import {Row, Col, Flex } from 'antd';

const Categories = () => {
  return (
    <div className='category-container'>
      <Flex 
        wrap="wrap" 
        justify="space-evenly" 
        align="center" 
        className={`${styles.textCenter} ${styles.paddingCover} categories`}
        gap="20px"
      >
      
        <div className='category-a'>
        
          <img src={Icon1} alt='icon1' />
          <h2>The stories you love</h2>
          <Row justify='center'>
          <Col span={16} >
          <p>Enjoy new releases and classics from the greatest creators in the world, available anytime.</p>
          </Col>
          </Row>
        </div>

        <div className='category-a'>
        
          <img src={Icon2} alt='icon1' /> 
          <h2>The entertainment you want</h2>
          <Row justify='center'>
          <Col span={16} >
          <p>Find something for every mood with more of the best shows, movies, and live sports.</p>
          </Col>
          </Row>
        </div>

        <div className='category-a'>
          <img src={Icon3} alt='icon1' />
          <h2>On your terms</h2>
          <Row justify='center'>
          <Col span={16} >
          <p>Watch at home or on the go on your favorite devices. Cancel anytime.</p>
          </Col>
          </Row>
        </div>
        
      </Flex>
    </div>
  );
};

export default Categories;
