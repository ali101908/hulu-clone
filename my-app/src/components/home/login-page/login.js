import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import Button from 'react-bootstrap/esm/Button';
import LoginFooter from './login-footer';

import TopLogo from "./top-logo.svg";
import loginlogo from "./login-logo.svg";
import Logo1 from "./logo1.svg";
import Logo2 from "./logo2.svg";
import Logo3 from "./logo3.svg";
import Logo4 from "./logo4.svg";
import Logo5 from "./logo5.svg";
import Logo6 from "./logo6.svg";
import Logo7 from "./logo7.svg";

import './login.css';
import styles from '../../../assets/component.module.css/component.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.width100} login-page`}>
      <div className={`${styles.directionColumn} ${styles.widthAuto} login-container`}>

        <Button
         variant="success"
          className={` ${styles.hover} go-back-btn`}
          onClick={() => navigate('/')}
        >
          ←
        </Button>

        <img className="top-logo" src={TopLogo} alt="top-logo" />

        <div className={`${styles.bgWhite} login-box`}>
          <img className="img-log" src={loginlogo} alt="login-logo" width={100} />
          <h3 className={`${styles.textLeft} ${styles.font24px} ${styles.deepDarkColor} ${styles.fontBold}`}>
            Enter your email to continue
          </h3>
          <p className={`${styles.textLeft} ${styles.font18px} ${styles.deepDarkColor} ${styles.marginBottom}`}>
            Log in to Hulu with your MyDisney account. If you don’t have one, you will be prompted to create one.
          </p>

        
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className={`${styles.font16px} ${styles.width100} ${styles.marginBottom} email-input`}
              />
            </FormGroup>
            <Button
              variant="dark"
              className={`${styles.font16px} ${styles.fontBold} ${styles.width100} ${styles.hover} ${styles.bgBlack} ${styles.whiteColour} continue-btn`}
            >
              Continue
            </Button>
          </Form>

          <hr />

          <p className={`${styles.textLeft} ${styles.fontLightGray}`}>
            Hulu is part of <strong>The Walt Disney Family of Companies</strong>.
          </p>

          <p className={`${styles.textLeft} ${styles.fontGray}`}>
            MyDisney lets you seamlessly log in to services and experiences across The Walt Disney Family of Companies, such as Disney+, ESPN, Walt Disney World, <Link to="#" style={{ color: "blue" }}>and more.</Link>
          </p>

          <div className={`${styles.spaceAround} ${styles.marginTop}`}>
            <img src={Logo1} alt="logo1" height={20} />
            <img src={Logo2} alt="logo2" height={20} />
            <img src={Logo3} alt="logo3" height={20} />
            <img src={Logo4} alt="logo4" height={20} />
            <img src={Logo5} alt="logo5" height={20} />
            <img src={Logo6} alt="logo6" height={20} />
            <img src={Logo7} alt="logo7" height={20} />
          </div>
        </div>

      </div>
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
