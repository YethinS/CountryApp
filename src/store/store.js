import { configureStore } from "@reduxjs/toolkit";
import countryList from "../features/countries/countryList";
import loginReducer from '../features/Login/login'
const store = configureStore({
    reducer: countryList
})


export default store
