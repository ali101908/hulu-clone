import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './news.css';
import styles from '../../../assets/component.module.css/component.module.css';

// Import images
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

// Data Array
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
  // Default to 'Live Sports'
  const [activeTab, setActiveTab] = useState(newsData[0]);
   const [showTerms, setShowTerms] = useState(false);

  return (
    <div className={` ${styles.directionColumn} ${styles.flexStart}  ${styles.height80vh} ${styles.bgImage} ${styles.overflowX} ${styles.paddingComplete} news-container`} style={{ backgroundImage: `url(${activeTab.backgroundImage})` }}>
      {/* Navigation Tabs */}
      <div className='news-tabs'>
        {newsData.map((news) => (
          <button
            key={news.id}
            className={`news-tab ${activeTab.id === news.id ? 'active' : ''} ${styles.fontWhite14px}`}
            onClick={() => setActiveTab(news)}
          >
            {news.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className='news-content'>
        <h1 className={styles.fontWhite}>{activeTab.title}</h1>
        <p className={styles.fontWhite18px}>{activeTab.description}</p>

        {/* Icons */}
        <div className={`${styles.spaceEvenly} ${styles.gap} ${styles.marginTop}`}>
          {activeTab.icons.map((icon, index) => (
            <img className='icons-img' key={index} src={icon} alt={`icon-${index}`} />
          ))}
        </div>

      
      </div>
        {/* Disclaimer */}
        <p className={styles.fontGray}>
          Live TV plan required. Regional restrictions, blackouts, and additional terms apply.<Link to='#' onClick={(e) => { e.preventDefault(); setShowTerms(true); }} style={{ color: 'gray' }}> See details</Link>
        </p>

        {showTerms && (
        <div className={`${styles.center} ${styles.heightfull} ${styles.width100} modal `}>
          <div className={`${styles.whiteColour} ${styles.textLeft} modal-content`}>
            <span className={`${styles.whiteColour} ${styles.hover} close`} onClick={() => setShowTerms(false)}>&times;</span>
            <p className={styles.fontWhite18px}>
              Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period. No refunds or credits for partial months. Use of the services is subject to the <Link to='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer. Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services. Eligibility rules and offer timing may vary if you sign up through a third party billing partner. 
              Access content from each service separately. Location data may be required to watch certain content. For more information, including detailed information on billing and cancelation, please visit the Hulu Help Center.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Newssection;
