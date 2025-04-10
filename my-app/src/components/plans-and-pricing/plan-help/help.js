import React from 'react'
import { Link } from 'react-router-dom'
import './help.css'

import ContactIcon
 from './icon_contactus.svg'
 import FeedBackIcon from './icon_feedback.svg'
const Help = () => {
  return (
	<div className='help-container'>
	<center><h1 className='help-title'>Need More Help?</h1></center>
	<p className='help-text'>We are available for live support 24 hours a day 7 days a week.</p>
	  <div className='help-portion'>
		<div className='help-portion-left'>
<img src={ContactIcon} alt='contact-us-icon' />
<div className='help-content'>
<h4 className='left-title'>
	<Link to=''>Get in Touch</Link>
</h4>
<p className='left-text'>
We're happy to assist you, whenever you need us. Log  in to visit our Contact page for further assistance.
</p>
</div>
		</div>
		<div className='help-portion-right'>
		<img src={FeedBackIcon} alt='feedback-icon' />
		<div className='help-content'>
		<h3 className='right-title'>
	<Link to=''>Give feedback</Link>
</h3>
<p className='right-text'>
How can we improve Hulu? Let us know through our  feedback form!
</p>
</div>
		</div>
	  </div>
	</div>
  )
}

export default Help
