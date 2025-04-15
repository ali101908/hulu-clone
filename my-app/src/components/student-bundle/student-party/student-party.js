import React from 'react'
import PartyImg from '../student-images/st-party.png'
import '../student-bundle.css' // Import CSS for styling
import styles from '../../../assets/component.module.css/component.module.css';
import { Col } from 'antd';
const StudentParty = () => {
  return (
	<div className='party-container'>
	  <div className='party-portion'>
	  <div className='party-portion-a'>
		<h1 className='party-heading'>Watch Party</h1>
		<Col span={18}>
		<p className={`${styles.maxWidth1100px} party-content`}>Missing your crew? Watch together, even when you’re apart with Watch Party. You and up to seven friends can stream and chat together as long as you’re all Hulu subscribers.</p>
		</Col>
	  </div>
<div className='party-portion-img'>
		<img src={PartyImg} alt='laptop-pic' />
	  </div>
	  </div>
	</div>
  )
}

export default StudentParty
