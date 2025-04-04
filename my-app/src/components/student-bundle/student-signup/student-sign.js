import React from 'react'
import Icon1 from '../../../images/bundle-images/signup-icon.png'
import Sign2 from '../student-images/sign-2.png'
import Sign3 from '../student-images/sign-3.png'

const StudentSign = () => {
  return (
	<div className='work-container'>
			  <div className='work-portion'>
				<h1 style={{color:"black"}}>How it works</h1>
				{/* <p className='work-content' style={{backgroundColor:"#1CE783"}}>Already a Hulu subscriber? <br /> 
				Visit the <a href='#'>Manage Account</a>  page to switch to a bundle now, or <a href='#'>learn more</a>  about how to sign up.
				</p> */}
			  </div>
		
			  {/* <h5 className='work-heading' style={{color:"black"}}>New to Hulu? Start watching in three easy steps:</h5> */}
			  
			<div className='category-container' >
			
			  <div className='categories'>
				<div className='category-a'>
		<img src={Icon1} alt='icon1' />
		<p>STEP 1</p>
		<h2>Create Your Account</h2>
				<p>Click "GET THIS DEAL" and create your Hulu <br /> account. You'll use your email and password to log <br />in and watch on your favorite devices.</p>
				</div>
				<div className='category-b'>
				<img src={Sign2} alt='icon1' />
				<p>STEP 2</p>
				<h2>Verify Your Student Status</h2>
				<p>We’ve partnered with Sheer ID to verify your <br /> student status. You’ll be redirected there to provide <br /> your details.</p>
				</div>
				<div className='category-c'>
				<img src={Sign3} alt='icon1' />
				<p>STEP 3</p>
				<h2>Download App & Start Streaming</h2>
				<p>Stream across your favorite smart TVs, computers, <br />phones, tablets, and gaming consoles.</p>
				</div>
			  </div>
			</div>
		
			</div>
  )
}

export default StudentSign
