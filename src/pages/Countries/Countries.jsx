import React, { useEffect } from "react";
import Styles from "./countries.module.scss";
import { Container } from "react-bootstrap";
import Header from "../../components/Navbar/Header";
import Country from "../../components/Country/Country";
import { FacebookIcon, GoogleIcon, LinkedInIcon, TwitterIcon } from "../../assets/icons";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCountryList } from "../../features/countries/countryList";

function Countries() {

    const [countryList, setCountryList ] = useState([])
    const dispatch = useDispatch()
    const countries = useSelector(state => state.filteredCountries)
    

    const getCountryList = () => {
        axios.get(' https://restcountries.com/v2/all?fields=name,region,flag')
            .then((rsp) => {
                setCountryList(rsp?.data)
               
                dispatch(addCountryList(rsp?.data))
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getCountryList()
        // if(countryList.length !== 0){
        //   dispatch(addCountryList(countryList))
        // }
        
    },[])

    
  return (
    <>
    <Header />
    <Container className={Styles.countryWrapper}>
        
      <div className={Styles.countryList}>
        
        {countries?.map((country) => <Country data={country} />)}
        
      </div>
      <div className={Styles.footer}>
        <div className={Styles.iconArea}>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <GoogleIcon />
        </div>
        <div className={Styles.email}>Example@gmail.com</div>
        <div className={Styles.email}>Copyright © 2020 Name. All rights reserved.</div>
      </div>
    </Container>
    </>
  );
}

export default Countries;
