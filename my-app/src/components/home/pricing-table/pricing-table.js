import React from 'react'

const PricingTable = () => {
  return (
	<div className='table-container'>
	  <div className='table-content'>
		<hr className='table-line' />
		<p className='table-list'>Monthly price</p>

        <p className='list-price'>
		<span className='discount'>$19.98/mo.</span>
		$2.99/mo. for 4 mos.^</p>
		<p className='list-price'>
		<span className='discount'>$34.98/mo.</span>
		$19.99/mo.*</p>
		<hr className='table-line' />
	  </div>
	</div>
  )
}

export default PricingTable