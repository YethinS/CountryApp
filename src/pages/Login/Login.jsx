import React from "react";
import Styles from "./login.module.scss";
import LoignImage from "../../assets/images/illustration.png";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import {
  GoogleIcon,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { updateLogin } from '../../features/Login/login'

function Login() {
  const [login, setLogin] = useState(false)

  const dispatch = useDispatch()
  let data = {
    "userName" : "User",
    "password" : "User@123"
  }

  const [credentails, setCredentials] = useState({
    "userName" : '',
    "password" : ""
  })

  const handleUserName = (e) => {
    let userName = e.target.value
    setCredentials(prevState => ({
      ...prevState,
      userName: userName
    }))
  }

  const handlePassword = (e) => {
    let password = e.target.value;
    setCredentials(prevState => ({
      ...prevState,
      password: password
    }))
  }

  const handleValidation = () => {
    if(data.userName === credentails.userName && data.password === credentails.password) {
      dispatch(updateLogin(true))
      navigate('/countries')
    }
  }

  const navigate = useNavigate()
  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.innerContainer}>
        <div className={Styles.formSection}>
          <div className={Styles.form}>
            <h3 className={Styles.formTitle}>Sign In</h3>
            <div className={Styles.newUser}>
              <span>New User? </span>
              <a href="">Create an account</a>
            </div>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Username or email"
              className={Styles.input}
              onChange={handleUserName}
            />
            <br />
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              className={Styles.input}
              onChange={handlePassword}
            />
            <Form.Check
              type="checkbox"
              label="Keep me signed in"
              className={Styles.checkbox}
              
            />
            <Button variant="dark" className={Styles.button} onClick={handleValidation}>
              Sign In
            </Button>
          </div>
          <div className={Styles.sso}>
            <div className={Styles.label}>
              Or Sign In With
            </div>
            <div className={Styles.ssoWrapper}>
              <GoogleIcon />
              <FacebookIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div className={Styles.imageSection}>
          <img src={LoignImage} alt="" className={Styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Login;
