import React from 'react';
import './pricing-section.css';

const PricingSection = () => {

	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: 'smooth'
		});
	  };

  return (
    <div className='pricing-section-container'>
      <div className='pricing-content'>
        <div className='pricing-text' >
          <h1>Hulu plans and prices</h1>
          <p>
            Hulu offers different subscription options to fit a variety of budgets and entertainment needs.
            There are <br/> no hidden costs, long-term commitments, or cancellation fees, and you’re able to
            <a className='highlight' href=''> switch plans and add-<br/>ons </a> at any time.
            <a href='#'> Sign up </a> and get started today, or select an option from the following list.
          </p>

		  <ul>
			<li><a href='#'>Plans</a></li>
			<li><a href='#'>Partner Add-ons</a></li>
			<li><a href='#'>Premium Add-ons</a></li>
			<li><a href='#'>Live TV Add-ons</a></li>
			<li><a href='#'>Extra Member</a></li>
		  </ul>

          <h2>Plans</h2>
          <p>Choose from the following:</p>
          
          <h3>Hulu plans</h3>
          <ul>
            <li><a href='#'>Hulu:</a> Our ad-supported plan costs just <strong>$9.99/month</strong> (or <strong>$99.99/year</strong>) and gives you access to our ad-supported streaming library.</li>
            <li><strong>Students:</strong> Get <a className='highlight' href='#'>Hulu (With Ads) for $1.99/month</a>, if eligible. Additional terms apply.</li>
            <li><a href='#'>Hulu (No Ads):</a> For <strong>$18.99/month</strong>, you can watch most of those same shows and movies without the ad breaks.</li>
          </ul>

          <h3>Hulu + Live TV plans</h3>
          <ul>
            <li><a href='#'>Hulu (With Ads) + Live TV, Disney+ (With Ads) and ESPN+ (With Ads):</a> Sign up for only <strong>$82.99/month</strong>.</li>
            <li><a href='#'>Hulu (No Ads) + Live TV, Disney+ (No Ads) and ESPN+ (With Ads):</a> For <strong>$95.99/month</strong>.</li>
            <li><a href='#'>Hulu (With Ads) + Live TV, Disney+ (No Ads) and ESPN+ (With Ads):</a> For <strong>$87.99/month</strong>.</li>
            <li><a href='#'>Live TV Only:</a> For <strong>$81.99/month</strong>, this plan gives subscribers access to live content only.</li>
          </ul>

          <p>ESPN+ through our Live TV plans is not available for subscribers who are billed by T-Mobile.</p>

          <h3>Bundle plans</h3>
          <p>Interested in bundling your subscriptions? <a href='#'>Sign up</a> for a bundle plan with just Disney+ and Hulu or for a bundle plan with Disney+, Hulu, and ESPN+. Pricing will vary depending on the <a href='#'>bundle plan you choose</a>.</p>
          <p><strong>NOTE:</strong> Bundle subscribers can now access select content from the <a href='#'>Hulu streaming library on the Disney+ app or website</a>.</p>

          <h3>Disney+, Hulu, Max Bundle plans</h3>
          <p>If you're interested in a <a href='#'>Disney+, Hulu, Max Bundle</a>, sign up for a plan that includes Disney+, Hulu, and Max. Pricing will vary depending on the plan you choose.</p>
          <p><button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</button></p>

          <h3>Partner Add-ons</h3>
          <p>Add to an eligible plan:</p>
          <ul>
            <li><a href='#'>ESPN+</a> for <strong>$11.99/month</strong></li>
          </ul>
          <p><button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</button></p>

          <h3>Premium Add-ons</h3>
          <p>Add to any plan*:</p>
          <ul>
            <li><a href='#'>Max (With Ads)</a> for <strong>$9.99/month</strong></li>
            <li><a href='#'>Max (Ad-Free)</a> for <strong>$16.99/month</strong></li>
            <li><a href='#'>Cinemax</a> for <strong>$9.99/month</strong></li>
            <li><a href='#'>Paramount+ with SHOWTIME</a> for <strong>$12.99/month</strong></li>
            <li><a href='#'>STARZ</a> for <strong>$10.99/month</strong></li>
          </ul>
          <p><em>*Third-party billing limitations apply.</em></p>
          <p><button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</button></p>

          <h3>Live TV Add-ons</h3>
          <p>Add to any <a href='#'>Live TV</a> plan:</p>
          <ul>
            <li><a href='#'>Español Add-on</a> for <strong>$4.99/month</strong></li>
            <li><a href='#'>Entertainment Add-on</a> for <strong>$7.99/month</strong></li>
            <li><a href='#'>Sports Add-on</a> for <strong>$9.99/month</strong></li>
            <li><a href='#'>Unlimited Screens Add-on</a> for <strong>$9.99/month</strong></li>
          </ul>
          <p>  <button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</button></p>

          <h3>Extra Member</h3>
          <p><a href='#'>Extra Member</a> is only available with the following plans at this time for the following additional monthly fee:</p>
          <ul>
            <li><a href='#'>Hulu</a> for <strong>$6.99/month</strong></li>
            <li><a href='#'>Hulu (No Ads)</a> for <strong>$9.99/month</strong></li>
            <li><a href='#'>Disney+, Hulu Bundle Basic</a> for <strong>$7.99/month</strong></li>
            <li><a href='#'>Disney+, Hulu Bundle Premium</a> for <strong>$10.99/month</strong></li>
            <li><a href='#'>Disney+, Hulu, ESPN+ Bundle Basic</a> for <strong>$11.99/month</strong></li>
            <li><a href='#'>Disney+, Hulu, ESPN+ Bundle Premium</a> for <strong>$14.99/month</strong></li>
          </ul>

		  <div className='feedback-section'>
            <p><strong>Did this article answer your question?</strong></p>
            <div className='feedback-buttons'>
              <button className='feedback-button yes'>Yes</button>
              <button className='feedback-button no'>No</button>
            </div>
          </div>

        </div>

        <div className='suggested-articles'>
          <h2>Suggested Articles</h2>
          <div className='articles-box'>
            <ul>
              <li><a href='#'>Hulu Payment Options</a></li>
              <li><a href='#'>What is Hulu (No Ads)?</a></li>
              <li><a href='#'>What Is Hulu?</a></li>
              <li><a href='#'>Free Trials on Hulu</a></li>
              <li><a href='#'>Live TV Home network</a></li>
              <li><a href='#'>Create a New Hulu Account</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;