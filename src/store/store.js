import { configureStore } from "@reduxjs/toolkit";
import countryList from "../features/countries/countryList";

const store = configureStore({
    reducer: countryList
})


export default store
