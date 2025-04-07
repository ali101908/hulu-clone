import React from 'react'
import './category.css'
import Icon1 from '../../../images/bundle-images/icon1.png'
import Icon2 from '../../../images/bundle-images/icon2.png'
import Icon3 from '../../../images/bundle-images/icon3.png'
const Categories = () => {
  return (
	<div className='category-container' >
	  <div className='categories'>
		<div className='category-a'>
<img src={Icon1} alt='icon1' />
<h2>The stories you love</h2>
		<p>Enjoy new releases and classics from the greatest  creators in the world, available anytime.</p>
		</div>
		<div className='category-b'>
		<img src={Icon2} alt='icon1' />
		<h2>The entertainment you want</h2>
		<p>Find something for every mood with more of the best  shows, movies, and live sports.</p>
		</div>
		<div className='category-c'>
		<img src={Icon3} alt='icon1' />
		<h2>On your terms</h2>
		<p>Watch at home or on the go on your favorite devices.  Cancel anytime.</p>
		</div>
	  </div>
	</div>
  )
}

export default Categories
