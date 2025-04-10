import React from 'react'
import Icon1 from '../../../images/bundle-images/signup-icon.png'
import Icon2 from '../../../images/bundle-images/access-icon.png'
import Icon3 from '../../../images/bundle-images/Download-icon.png'
import styles from '../../../assets/component.module.css/component.module.css';

const MaxWork = () => {
  return (
		<div className='work-container'>
		  <div className='work-portion'>
			<h1 className={styles.textCenter}>How it works</h1>
			{/* <p className='work-content' style={{backgroundColor:"#1CE783"}}>Already a Hulu subscriber? <br /> 
			Visit the <a href='#'>Manage Account</a>  page to switch to a bundle now, or <a href='#'>learn more</a>  about how to sign up.
			</p> */}
		  </div>
	
		  {/* <h5 className='work-heading' style={{color:"black"}}>New to Hulu? Start watching in three easy steps:</h5> */}
		  
		<div className='category-container' >
		
		  <div className={`${styles.spaceEvenly} ${styles.textCenter} ${styles.paddingCover} categories`}>
			<div className='category-a'>
	<img src={Icon1} alt='icon1' />
	<p>STEP 1</p>
	<h2>Sign up for a bundle</h2>
			<p>Click "Sign Up Now" to create your Hulu account  and sign up for Disney+, Hulu, ESPN+ Bundle  Premium. You'll be billed 26.99/mo. by Hulu for  access to all three services.</p>
			</div>
			<div className='category-b'>
			<img src={Icon2} alt='icon1' />
			<p>STEP 2</p>
			<h2>Access your Disney+ and ESPN+  accounts</h2>
			<p>After signing up, you can use your Hulu account  email address and password to log in to both  Disney+ and ESPN+.</p>
			</div>
			<div className='category-c'>
			<img src={Icon3} alt='icon1' />
			<p>STEP 3</p>
			<h2>Download apps and start  streaming</h2>
			<p>Log in to each app separately and stream across  your favorite smart TVs, phones, tablets, laptops,  and gaming consoles.</p>
			</div>
		  </div>
		</div>
	
		</div>
  )
}

export default MaxWork
