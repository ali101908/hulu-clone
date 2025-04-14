import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Flex, Button } from 'antd';
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
      <Row gutter={[24, 24]} className='pricing-content'>
        
        <Col xs={24} md={16}>
          <div className='pricing-text'>
            <h1>Hulu plans and prices</h1>
            <p>
              Hulu offers different subscription options to fit a variety of budgets and entertainment needs.
              There are <br /> no hidden costs, long-term commitments, or cancellation fees, and you’re able to
              <Link className='highlight' to=''> switch plans and add-ons </Link> at any time.
              <Link to='#'> Sign up </Link> and get started today, or select an option from the following list.
            </p>

            <ul>
              <li><Link to='#'>Plans</Link></li>
              <li><Link to='#'>Partner Add-ons</Link></li>
              <li><Link to='#'>Premium Add-ons</Link></li>
              <li><Link to='#'>Live TV Add-ons</Link></li>
              <li><Link to='#'>Extra Member</Link></li>
            </ul>

            <h2>Plans</h2>
            <p>Choose from the following:</p>

            <h3>Hulu plans</h3>
            <ul>
              <li><Link to='#'>Hulu:</Link> Our ad-supported plan costs just <strong>$9.99/month</strong> (or <strong>$99.99/year</strong>) and gives you access to our ad-supported streaming library.</li>
              <li><strong>Students:</strong> Get <Link className='highlight' to='#'>Hulu (With Ads) for $1.99/month</Link>, if eligible. Additional terms apply.</li>
              <li><Link to='#'>Hulu (No Ads):</Link> For <strong>$18.99/month</strong>, you can watch most of those same shows and movies without the ad breaks.</li>
            </ul>

            <h3>Hulu + Live TV plans</h3>
            <ul>
              <li><Link to='#'>Hulu (With Ads) + Live TV, Disney+ (With Ads) and ESPN+ (With Ads):</Link> Sign up for only <strong>$82.99/month</strong>.</li>
              <li><Link to='#'>Hulu (No Ads) + Live TV, Disney+ (No Ads) and ESPN+ (With Ads):</Link> For <strong>$95.99/month</strong>.</li>
              <li><Link to='#'>Hulu (With Ads) + Live TV, Disney+ (No Ads) and ESPN+ (With Ads):</Link> For <strong>$87.99/month</strong>.</li>
              <li><Link to='#'>Live TV Only:</Link> For <strong>$81.99/month</strong>, this plan gives subscribers access to live content only.</li>
            </ul>

            <p>ESPN+ through our Live TV plans is not available for subscribers who are billed by T-Mobile.</p>

            <h3>Bundle plans</h3>
            <p>Interested in bundling your subscriptions? <Link to='#'>Sign up</Link> for a bundle plan with just Disney+ and Hulu or for a bundle plan with Disney+, Hulu, and ESPN+. Pricing will vary depending on the <Link to='#'>bundle plan you choose</Link>.</p>
            <p><strong>NOTE:</strong> Bundle subscribers can now access select content from the <Link to='#'>Hulu streaming library on the Disney+ app or website</Link>.</p>

            <h3>Disney+, Hulu, Max Bundle plans</h3>
            <p>If you're interested in a <Link to='#'>Disney+, Hulu, Max Bundle</Link>, sign up for a plan that includes Disney+, Hulu, and Max. Pricing will vary depending on the plan you choose.</p>

            <Flex justify='center' style={{ marginTop: 16 }}>
              <Button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</Button>
            </Flex>

            <h3>Partner Add-ons</h3>
            <p>Add to an eligible plan:</p>
            <ul>
              <li><Link to='#'>ESPN+</Link> for <strong>$11.99/month</strong></li>
            </ul>

            <Flex justify='center' style={{ marginTop: 16 }}>
              <Button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</Button>
            </Flex>

            <h3>Premium Add-ons</h3>
            <p>Add to any plan*:</p>
            <ul>
              <li><Link to='#'>Max (With Ads)</Link> for <strong>$9.99/month</strong></li>
              <li><Link to='#'>Max (Ad-Free)</Link> for <strong>$16.99/month</strong></li>
              <li><Link to='#'>Cinemax</Link> for <strong>$9.99/month</strong></li>
              <li><Link to='#'>Paramount+ with SHOWTIME</Link> for <strong>$12.99/month</strong></li>
              <li><Link to='#'>STARZ</Link> for <strong>$10.99/month</strong></li>
            </ul>
            <p><em>*Third-party billing limitations apply.</em></p>

            <Flex justify='center' style={{ marginTop: 16 }}>
              <Button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</Button>
            </Flex>

            <h3>Live TV Add-ons</h3>
            <p>Add to any <Link to='#'>Live TV</Link> plan:</p>
            <ul>
              <li><Link to='#'>Español Add-on</Link> for <strong>$4.99/month</strong></li>
              <li><Link to='#'>Entertainment Add-on</Link> for <strong>$7.99/month</strong></li>
              <li><Link to='#'>Sports Add-on</Link> for <strong>$9.99/month</strong></li>
              <li><Link to='#'>Unlimited Screens Add-on</Link> for <strong>$9.99/month</strong></li>
            </ul>

            <Flex justify='center' style={{ marginTop: 16 }}>
              <Button className='back-to-top' onClick={scrollToTop}>BACK TO TOP</Button>
            </Flex>

            <h3>Extra Member</h3>
            <p><a href='#'>Extra Member</a> is only available with the following plans at this time for the following additional monthly fee:</p>
            <ul>
              <li><Link to='#'>Hulu</Link> for <strong>$6.99/month</strong></li>
              <li><Link to='#'>Hulu (No Ads)</Link> for <strong>$9.99/month</strong></li>
              <li><Link to='#'>Disney+, Hulu Bundle Basic</Link> for <strong>$7.99/month</strong></li>
              <li><Link to='#'>Disney+, Hulu Bundle Premium</Link> for <strong>$10.99/month</strong></li>
              <li><Link to='#'>Disney+, Hulu, ESPN+ Bundle Basic</Link> for <strong>$11.99/month</strong></li>
              <li><Link to='#'>Disney+, Hulu, ESPN+ Bundle Premium</Link> for <strong>$14.99/month</strong></li>
            </ul>

           
            <div className='feedback-section'>
              <p><strong>Did this article answer your question?</strong></p>
              <Flex gap='small'>
                <Button className='feedback-button yes'>Yes</Button>
                <Button className='feedback-button no'>No</Button>
              </Flex>
            </div>
          </div>
        </Col>

       
        <Col xs={24} md={8}>
          <div className='suggested-articles'>
            <h2>Suggested Articles</h2>
            <div className='articles-box'>
              <ul>
                <li><Link to='#'>Hulu Payment Options</Link></li>
                <li><Link to='#'>What is Hulu (No Ads)?</Link></li>
                <li><Link to='#'>What Is Hulu?</Link></li>
                <li><Link to='#'>Free Trials on Hulu</Link></li>
                <li><Link to='#'>Live TV Home network</Link></li>
                <li><Link to='#'>Create a New Hulu Account</Link></li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PricingSection;
