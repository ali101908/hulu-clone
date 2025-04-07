import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import DiscountIcon from '../student-images/st-hero.png';
import '../student-bundle.css';


const HuluStudent = () => {
  const [showTerms, setShowTerms] = useState(false);
//    const bottomRef = useRef(null); 
 
//    const scrollToBottom = () => {
// 	 bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//    };
 
   return (
	 <div className='st-bundle-hero'>
	   <div className='hero-logo'>
		 {/* <h6 className='heading'>BUNDLE & SAVE</h6> */}
		 <img className='student-cont-img' src={DiscountIcon} alt='Hulu Hero'  />
	   </div>
 
	   <div>
		 <h1 className='basic-title'>Students: Get Hulu For Just  $1.99/Month</h1>
		 <p className='hero-content1'>
		 Stream tons of shows and movies with our Hulu (With Ads) 
		 plan for just $9.99/month $1.99/month. 
		 Valid as long as you're a college student.
		 </p>

		 <h2 className='hero-content2'>Save 80% off the regular monthly price. Cancel anytime.</h2>

	   </div>
 
	   <div className='basic-hero-footer'>
	  
		 <div className='hero-btn-footer1'>
		   <button className='hero-btn3'>GET THIS DEAL</button>
		  <p className='st-bundle-content'>Student discount offer for Hulu (With Ads) plan only. $1.99/month so long as student enrollment status remains 
		  verified, then $9.99/month or then-current, regular monthly price. Offer valid for new and existing Hulu-billed 
		  subscribers enrolled at a U.S. Title IV accredited college or university who meet verification qualifications. 
		  Verification performed through SheerID.<Link to='#' onClick={(e) => { e.preventDefault(); setShowTerms(true); }}> Additional terms apply.</Link></p>
		 </div>
	   </div>
 
	   {showTerms && (
		 <div className='modal'>
		   <div className='modal-content'>
			 <span className='close' onClick={() => setShowTerms(false)}>&times;</span>
			 <p style={{ color: "white" }}>
			   Cancel anytime, through your account settings or by contacting us, effective at the end of your billing period.
			   No refunds or credits for partial months. Use of the services is subject to the
			   <Link to='#'> Disney+, ESPN+, and Hulu Subscriber Agreement</Link>. Valid payment method required to redeem offer.
			   Cannot be combined with any other offers, coupons, discounts or promotions. Not redeemable for cash or any other goods or services.
			   Eligibility rules and offer timing may vary if you sign up through a third-party billing partner. 
			   Access content from each service separately. Location data may be required to watch certain content.
			   For more information, including detailed information on billing and cancellation, please visit the Hulu Help Center.
			 </p>
		   </div>
		 </div>
	   )}
 
	 
	 </div>
   );
}

export default HuluStudent
