import React from 'react'
import PartyImg from '../student-images/st-party.png'
import '../student-bundle.css' // Import CSS for styling

const StudentParty = () => {
  return (
	<div className='party-container'>
	  <div className='party-portion'>
	  <div className='party-portion-a'>
		<h1 className='party-heading'>Watch Party</h1>
		<p className='party-content'>Missing your crew? Watch together, even when you’re apart with <br />Watch Party. You and up to seven friends can stream and chat <br /> together as long as you’re all Hulu subscribers.</p>
	  </div>
<div className='party-portion-img'>
		<img src={PartyImg} alt='laptop-pic' />
	  </div>
	  </div>
	</div>
  )
}

export default StudentParty
