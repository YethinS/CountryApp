import React from "react";
import Styles from "./country.module.scss";
import DefaultImage from "../../assets/images/DefaultImage.png";

function Country(props) {
  console.log("props: ", props);
  return (
    <div className={Styles.countryWrapper}>
      <div className={Styles.countryContainer}>
        <div className={Styles.imageWrapper}>
          <img src={props.data.flag} alt={DefaultImage} />
        </div>

        <div>
          <h3 className={Styles.countryName}>{props.data.name}</h3>
          <span className={Styles.continent}>{props.data.region}</span>
        </div>
      </div>
    </div>
  );
}

export default Country;
