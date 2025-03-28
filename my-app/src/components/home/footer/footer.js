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
          "Streaming Library", "Live TV", "Live News", "Live Sports", 
          "TV Shows", "Movies", "Originals", "Networks", "Kids", "FX", 
          "Max", "Cinemax", "Paramount+ with SHOWTIME", "STARZ","Disney+, Hulu, ESPN+ Bundle Basic","Disney+, Hulu, ESPN+ Bundle Premium", "Disney+, Hulu Bundle", "Disney+, Hulu, Max Bundle", "Student Discount"
        ]
      },
      {
        title: "HELP",
        links: ["Account & Billing", "Plans & Pricing", "Supported Devices", "Accessibility"]
      },
      {
        title: "ABOUT US",
        links: ["Shop Hulu", "Press", "Jobs", "Contact", "Guides | What to Watch"]
      }
    ],
    socialIcons: [
      { name: "Facebook", icon: FacebookIcon, link: "/" },
      { name: "Twitter", icon: XIcon, link: "/" },
      { name: "YouTube", icon: YoutubeIcon, link: "/" },
      { name: "Instagram", icon: InstaIcon, link: "/" }
    ],
    legalLinks: [
      "About Ads", "Subscriber Agreement", "Privacy Policy", 
      "Do Not Sell or Share My Personal Information", "Your US State Privacy Rights", 
      "TV Parental Guidelines", "Sitemap"
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
                <a key={linkIndex} href="./bundles">{link}</a>
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
            <a key={linkIndex} href="./bundles">{link}</a>
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
            <a key={index} href="/">{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
