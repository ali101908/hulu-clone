import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import Icon1 from '../../../images/bundle-images/signup-icon.png';
import Icon2 from '../../../images/bundle-images/access-icon.png';
import Icon3 from '../../../images/bundle-images/Download-icon.png';
import styles from '../../../assets/component.module.css/component.module.css';

const { Title, Paragraph } = Typography;

const MaxWork = () => {
  return (
    <div className="work-container" style={{ padding: '2rem' }}>
      <Row justify="center" className="work-portion" style={{ marginBottom: '2rem' }}>
        <Col>
          <Title level={1} className={styles.textCenter}>How it works</Title>
        </Col>
      </Row>

      <Row justify="space-evenly" gutter={[24, 24]} className={`category-container ${styles.paddingCover}`}>
        <Col xs={24} md={8}>
          <Card 
            hoverable 
            bordered={false} 
            className="category-a" 
            style={{ textAlign: 'center', background: 'transparent' }}
          >
            <img src={Icon1} alt="icon1" style={{ marginBottom: '1rem', maxWidth: '100px' }} />
            <Paragraph strong>STEP 1</Paragraph>
            <Title level={3}>Sign up for a bundle</Title>
            <Paragraph>
              Click "Sign Up Now" to create your Hulu account and sign up for Disney+, Hulu, ESPN+ Bundle Premium. 
              You'll be billed $26.99/mo. by Hulu for access to all three services.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card 
            hoverable 
            bordered={false} 
            className="category-b" 
            style={{ textAlign: 'center', background: 'transparent' }}
          >
            <img src={Icon2} alt="icon2" style={{ marginBottom: '1rem', maxWidth: '100px' }} />
            <Paragraph strong>STEP 2</Paragraph>
            <Title level={3}>Access your Disney+ and ESPN+ accounts</Title>
            <Paragraph>
              After signing up, you can use your Hulu account email address and password 
              to log in to both Disney+ and ESPN+.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card 
            hoverable 
            bordered={false} 
            className="category-c" 
            style={{ textAlign: 'center', background: 'transparent' }}
          >
            <img src={Icon3} alt="icon3" style={{ marginBottom: '1rem', maxWidth: '100px' }} />
            <Paragraph strong>STEP 3</Paragraph>
            <Title level={3}>Download apps and start streaming</Title>
            <Paragraph>
              Log in to each app separately and stream across your favorite smart TVs, phones, tablets, laptops, and gaming consoles.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MaxWork;
