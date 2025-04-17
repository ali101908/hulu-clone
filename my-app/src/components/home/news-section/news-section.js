import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import './news.css';
import styles from '../../../assets/component.module.css/component.module.css';
import Modal from 'react-bootstrap/Modal';


import icon1 from '../../../images/i1.png';
import icon2 from '../../../images/i2.png';
import icon3 from '../../../images/i3.png';
import icon4 from '../../../images/i4.png';
import icon5 from '../../../images/i5.png';
import icon6 from '../../../images/i6.png';
import icon8 from '../../../images/i8.png';
import icon9 from '../../../images/i9.png';
import icon10 from '../../../images/i10.png';
import news1 from '../../../images/news1.jpeg';
import news2 from '../../../images/news2.jpeg';
import news3 from '../../../images/news3.jpeg';


const newsData = [
  {
    id: 1,
    title: 'Live Sports',
    backgroundImage: news1,
    description:
      'Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.',
    icons: [icon1, icon2, icon3, icon4, icon5],
  },
  {
    id: 2,
    title: 'Breaking News',
    backgroundImage: news2,
    description:
      "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
    icons: [icon6, icon8, icon9, icon10],
  },
  {
    id: 3,
    title: 'Biggest Events',
    backgroundImage: news3,
    description:
      "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
    icons: [icon10, icon2, icon3, icon6],
  },
];

const Newssection = () => {
  const [activeTab, setActiveTab] = useState(newsData[0]);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Flex 
      vertical 
      align="flex-start"
      justify='center'
      className={`${styles.paddingComplete} ${styles.overflowX} news-container`}
      style={{
        backgroundImage: `url(${activeTab.backgroundImage})`,
      }}
    >
  
      <Flex gap="small" >
        {newsData.map((news) => (
          <button
            key={news.id}
            className={`news-tab ${styles.fontWhite14px} ${activeTab.id === news.id ? 'active' : ''}`}
            onClick={() => setActiveTab(news)}
          >
            {news.title}
          </button>
        ))}
      </Flex>

   
      <div className="news-content">
        <h1>{activeTab.title}</h1>
        <p className={styles.fontWhite18px}>{activeTab.description}</p>

      
        <Flex gap="small" wrap="wrap">
          {activeTab.icons.map((icon, index) => (
            <img className="icons-img" key={index} src={icon} alt={`icon-${index}`} />
          ))}
        </Flex>
      </div>

      <p className={styles.fontGray}>
        Live TV plan required. Regional restrictions, blackouts, and additional terms apply.
        <Link 
          to="#"
          onClick={(e) => { e.preventDefault(); setShowTerms(true); }} 
          className={styles.fontGray}
        >
          See details
        </Link>
      </p>

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

    </Flex>
  );
};

export default Newssection;
