import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import './work-portion.css'
import Icon1 from '../../../images/bundle-images/signup-icon.png'
import Icon2 from '../../../images/bundle-images/access-icon.png'
import Icon3 from '../../../images/bundle-images/Download-icon.png'
import styles from '../../../assets/component.module.css/component.module.css'

const Work = () => {
  return (
    <div className='work-container'>
      <div className={`${styles.textCenter}`}>
        <h1>How it works</h1>
       
        <div className={styles.bgTheme}>
       <p className={` ${styles.textCenter} ${styles.fontBlack} work-content`}>
          Already a Hulu subscriber? 
        </p>
  <p className={` ${styles.textCenter} ${styles.fontBlack} work-content`}>  Visit the <Link className={styles.fontBlack} to='#'>Manage Account</Link> page to switch to a bundle now, or <Link className={styles.fontBlack} to='#'>learn more</Link> about how to sign up.</p>
        </div>
        
      </div>

      <h5 className={`${styles.textCenter} ${styles.fontBlack}`}>
        New to Hulu? Start watching in three easy steps:
      </h5>

      <div className={styles.overflowX}>
        <Row gutter={[12, 12]} justify="center" align="top" className={`${styles.textCenter} ${styles.paddingCover}`}>
          <Col xs={20} sm={16} md={8} className="category-a">
            <img src={Icon1} alt='icon1' />
            <p>STEP 1</p>
            <h2>Sign up for a bundle</h2>
            <p>
              Click "Sign Up Now" to create your Hulu account
              and sign up for Disney+, Hulu, ESPN+ Bundle Premium.
              You'll be billed 26.99/mo. by Hulu for access to all three services.
            </p>
          </Col>

          <Col xs={20} sm={16} md={8} className="category-b">
            <img src={Icon2} alt='icon1' />
            <p>STEP 2</p>
            <h2>Access your Disney+ and ESPN+ accounts</h2>
            <p>
              After signing up, you can use your Hulu account
              email address and password to log in to both
              Disney+ and ESPN+.
            </p>
          </Col>

          <Col xs={20} sm={16} md={8} className="category-c">
            <img src={Icon3} alt='icon1' />
            <p>STEP 3</p>
            <h2>Download apps and start <br /> streaming</h2>
            <p>
              Log in to each app separately and stream across
              your favorite smart TVs, phones, tablets, laptops,
              and gaming consoles.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Work
