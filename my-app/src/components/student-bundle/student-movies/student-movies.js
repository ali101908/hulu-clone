import React from 'react';
import sm1 from '../student-images/sm1.webp';
import sm2 from '../student-images/sm2.webp';
import sm3 from '../student-images/sm3.webp';
import sm4 from '../student-images/sm4.webp';
import sm5 from '../student-images/sm5.webp';
import m2 from '../../../images/bundle-images/m2.webp';
import styles from '../../../assets/component.module.css/component.module.css';
import { Flex , Col , Row } from 'antd';

const StudentMovies = () => {
  return (
    <div className={styles.widthAuto}>
      <div className={`${styles.textCenter} ${styles.paddingComplete} movies-portion`}>
        <div className='movies-portion-a'>
        <Row justify='center'>
          <Col xs={24} sm={16} md={10}>
          <h1>Tons of shows and movies with Hulu</h1>
          <p className={`${styles.fontWhite14px} box-content`}>
            Get access to Hulu with thousands of episodes of every kind of TV. From Shōgun to Only Murders in The Building to The Kardashians – there’s plenty of all the things you’re into.
          </p>
          </Col>
        </Row>
         
		  <div className='portion-a-movies'>
          <Flex wrap="wrap" justify="center" gap="small">
            <img src={sm1} alt='img1' />
            <img src={sm2} alt='img1' />
            <img src={sm3} alt='img1' />
            <img src={sm4} alt='img1' />
            <img src={sm5} alt='img1' />
            <img src={m2} alt='img1' />	
          </Flex>
        </div>
        </div>
      </div>
    </div>
  );
}

export default StudentMovies;
