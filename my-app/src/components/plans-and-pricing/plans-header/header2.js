import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Input, Grid } from 'antd';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import styles from '../../../assets/component.module.css/component.module.css';
import '../plan-and-pricing.css';

const { useBreakpoint } = Grid; // Ant Design Hook

const Header2 = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const screens = useBreakpoint();

  const showDrawer = () => setOpenDrawer(true);
  const closeDrawer = () => setOpenDrawer(false);

  const isMobile = !screens.md; // md breakpoint (768px)

  return (
    <div className={`${styles.spaceEvenly} ${styles.whiteColour} plan-nav-container`}>
   
      <div className={`${styles.daCenter} plan-nav`}>
        <span>
          <Link to='/'>hulu</Link>
          <button className={`${styles.bgWhite} ${styles.marginRight} ${styles.fontBlack} ${styles.hover}`}>
            Help Center
          </button>
        </span>

      
        {!isMobile && (
          <ul className={`${styles.dFlex} desktop-menu`}>
            <li><Link to='#'>Home</Link></li>
            <li><Link to='#'>Help Topics</Link></li>
            <li><Link to='#'>Contact Us</Link></li>
          </ul>
        )}

       
        {isMobile && (
          <div className="mobile-menu-icon">
            <Button type="text" icon={<FaBars />} onClick={showDrawer} />
          </div>
        )}
      </div>

 
      {!isMobile && (
        <div className={`${styles.daCenter} nav-search-bar`}>
          <div className='search-input-container'>
            <FaSearch className="search-icon" />
            <input className={styles.bgWhite} type='text' placeholder='Enter a question or topic' />
          </div>
          <button className={styles.fontWhite14px}>Log In</button>
        </div>
      )}

     
      <Drawer
  title="Menu"
  placement="right"
  onClose={closeDrawer}
  open={openDrawer}
  closeIcon={<FaTimes />}
>

        <ul className="drawer-menu">
          <li><Link to='#' onClick={closeDrawer}>Home</Link></li>
          <li><Link to='#' onClick={closeDrawer}>Help Topics</Link></li>
          <li><Link to='#' onClick={closeDrawer}>Contact Us</Link></li>
        </ul>

        <div style={{ marginTop: 20 }}>
          <Input
            placeholder="Enter a question or topic"
            prefix={<FaSearch />}
            style={{ marginBottom: '10px' }}
          />
          <Button color="lime" variant='solid' block>Log In</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header2;
