import React, { useState, useEffect } from 'react';
import './footer.css';
import FacebookIcon from '../../../images/facebook.svg';
import InstaIcon from '../../../images/instagram.svg';
import XIcon from '../../../images/x_logo.svg';
import YoutubeIcon from '../../../images/youtube.svg';
import AboutIcon from '../../../images/about-icon.png';

const Footer = () => {
  const [openSections, setOpenSections] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const footerData = {
    sections: [
      {
        title: "BROWSE",
        links: [
          { text: "Streaming Library", url: "/streaming-library" },
          { text: "Live TV", url: "/live-tv" },
          { text: "Live News", url: "/live-news" },
          { text: "Live Sports", url: "/live-sports" },
          { text: "TV Shows", url: "/tv-shows" },
          { text: "Movies", url: "/movies" },
          { text: "Originals", url: "/originals" },
          { text: "Networks", url: "/networks" },
          { text: "Kids", url: "/kids" },
          { text: "FX", url: "/fx" },
          { text: "Max", url: "/max" },
          { text: "Cinemax", url: "/cinemax" },
          { text: "Paramount+ with SHOWTIME", url: "/paramount-showtime" },
          { text: "STARZ", url: "/starz" },
          { text: "Disney+, Hulu, ESPN+ Bundle Basic", url: "/basic-bundles" },
          { text: "Disney+, Hulu, ESPN+ Bundle Premium", url: "/premium-bundle" },
          { text: "Disney+, Hulu Bundle", url: "/hulu-bundle" },
          { text: "Disney+, Hulu, Max Bundle", url: "/max-bundle" },
          { text: "Student Discount", url: "/discount-bundle" }
        ]
      },
      {
        title: "HELP",
        links: [
          { text: "Account & Billing", url: "/account-billing" },
          { text: "Plans & Pricing", url: "/plan-and-pricing" },
          { text: "Supported Devices", url: "/supported-devices" },
          { text: "Accessibility", url: "/accessibility" }
        ]
      },
      {
        title: "ABOUT US",
        links: [
          { text: "Shop Hulu", url: "/shop-hulu" },
          { text: "Press", url: "/press" },
          { text: "Jobs", url: "/jobs" },
          { text: "Contact", url: "/contact" },
          { text: "Guides | What to Watch", url: "/guides-what-to-watch" }
        ]
      }
    ],
    socialIcons: [
      { name: "Facebook", icon: FacebookIcon, link: "https://www.facebook.com/hulu" },
      { name: "Twitter", icon: XIcon, link: "https://www.twitter.com/hulu" },
      { name: "YouTube", icon: YoutubeIcon, link: "https://www.youtube.com/hulu" },
      { name: "Instagram", icon: InstaIcon, link: "https://www.instagram.com/hulu" }
    ],
    legalLinks: [
      { text: "About Ads", url: "/about-ads" },
      { text: "Subscriber Agreement", url: "/subscriber-agreement" },
      { text: "Privacy Policy", url: "/privacy-policy" },
      { text: "Do Not Sell or Share My Personal Information", url: "/do-not-sell" },
      { text: "Your US State Privacy Rights", url: "/state-privacy-rights" },
      { text: "TV Parental Guidelines", url: "/tv-parental-guidelines" },
      { text: "Sitemap", url: "/sitemap" }
    ],
    copyright: "© 2025 Hulu, LLC"
  };
  

  return (
    <div className="footer-container">
      
      {/* Static version for desktop */}
      {!isMobile && (
        <div className="footer-links">
          {footerData.sections.map((section, index) => (
            <div key={index} className="footer-link-items">
              <h2>{section.title}</h2>
              {section.links.map((link, linkIndex) => (
  <a key={linkIndex} href={link.url}>{link.text}</a>
))}

            </div>
          ))}
        </div>
      )}

      {/* Dropdown version for mobile */}
      {isMobile && (
  <div className="footer-links">
    {footerData.sections.map((section, index) => (
      <div key={index} className="footer-link-items">
        <h2 className="dropdown-title" onClick={() => toggleSection(index)}>
          {section.title} <span className={`dropdown-icon ${openSections[index] ? 'open' : ''}`}>▼</span>
        </h2>
        <div className={`dropdown-content ${openSections[index] ? 'show' : ''}`}>
        {section.links.map((link, linkIndex) => (
  <a key={linkIndex} href={link.url}>{link.text}</a>
))}

        </div>
      </div>
    ))}
  </div>
)}

      <hr className="footer-divider" />

      <div className="social-media">
        <div className="social-icons">
          {footerData.socialIcons.map((social, index) => (
            <a key={index} href={social.link} className="social-icon-link" aria-label={social.name}>
              <img src={social.icon} alt={social.name} className="social-icon-img" />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <small className='footer-copyright'>{footerData.copyright}</small>
        <div className="footer-legal">
          <a href="/" className="about-icon-link">
            <img src={AboutIcon} alt="About Icon" className="about-icon-img" />
          </a>
          {footerData.legalLinks.map((link, index) => (
  <a key={index} href={link.url}>{link.text}</a>
))}

        </div>
      </div>
    </div>
  );
}

export default Footer;
