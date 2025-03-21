import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFooter from './login-footer';
import loginlogo from "./login-logo.svg";
// import hululogo from "../../../../hulu-logo.png";  // Add Hulu logo
import Logo1 from "./logo1.svg";
import Logo2 from "./logo2.svg";
import Logo3 from "./logo3.svg";
import Logo4 from "./logo4.svg";
import Logo5 from "./logo5.svg";
import Logo6 from "./logo6.svg";
import Logo7 from "./logo7.svg";
import './login.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Hulu Logo at the top */}
      {/* <img className="hulu-logo" src={hululogo} alt="hulu-logo" /> */}

      <div className="login-box">
        <img className="img-log" src={loginlogo} alt="login-logo" width={100} />
        <h3>Enter your email to continue</h3>
        <p>
          Log in to Hulu with your MyDisney account. If you don’t have one, you will be prompted to create one.
        </p>

        <form>
          <input type="email" placeholder="Email" required className="email-input" />
          <button type="submit" className="continue-btn">Continue</button>
        </form>

        <hr />

        <p className="footer-title">
          Hulu is part of <strong>The Walt Disney Family of Companies</strong>.
        </p>

        <p className="footer-text">
          MyDisney lets you seamlessly log in to services and experiences across The Walt <br /> Disney Family of Companies, such as Disney+, ESPN, Walt Disney World, <a href="#" style={{ color: "blue" }}>and more.</a>
        </p>

        <div className="login-box-logos">
          <img src={Logo1} alt="logo1" height={20} />
          <img src={Logo2} alt="logo2" height={20} />
          <img src={Logo3} alt="logo3" height={20} />
          <img src={Logo4} alt="logo4" height={20} />
          <img src={Logo5} alt="logo5" height={20} />
          <img src={Logo6} alt="logo6" height={20} />
          <img src={Logo7} alt="logo7" height={20} />
        </div>
      </div>

      <LoginFooter />
    </div>
  );
};

export default LoginPage;
