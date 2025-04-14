import React from 'react'
import Icon1 from '../../../images/bundle-images/signup-icon.png'
import Sign2 from '../student-images/sign-2.png'
import Sign3 from '../student-images/sign-3.png'
import styles from '../../../assets/component.module.css/component.module.css';
import { Flex } from 'antd';

const StudentSign = () => {
  return (
	<div className='work-container'>
			  <div className={`${styles.textCenter}`}>
				<h1>How it works</h1>
			  </div>	  
			<div className='category-container' >
			
			<div className={`${styles.textCenter} ${styles.paddingCover} categories`}>
      <Flex justify="space-evenly" align="start" wrap="wrap" gap="large">
        <Flex vertical align="center" className="category-a" style={{ maxWidth: '300px', textAlign: 'center' }}>
          <img src={Icon1} alt="Step 1 Icon" />
          <p>STEP 1</p>
          <h2>Create Your Account</h2>
          <p>
            Click "GET THIS DEAL" and create your Hulu account. You'll use your email and password to log in and watch on your favorite devices.
          </p>
        </Flex>

        <Flex vertical align="center" className="category-b" style={{ maxWidth: '300px', textAlign: 'center' }}>
          <img src={Sign2} alt="Step 2 Icon" />
          <p>STEP 2</p>
          <h2>Verify Your Student Status</h2>
          <p>
            We’ve partnered with Sheer ID to verify your student status. You’ll be redirected there to provide your details.
          </p>
        </Flex>
        <Flex vertical align="center" className="category-c" style={{ maxWidth: '300px', textAlign: 'center' }}>
          <img src={Sign3} alt="Step 3 Icon" />
          <p>STEP 3</p>
          <h2>Download App & Start Streaming</h2>
          <p>
            Stream across your favorite smart TVs, computers, phones, tablets, and gaming consoles.
          </p>
        </Flex>
      </Flex>
    </div>
			</div>
		
			</div>
  )
}

export default StudentSign
