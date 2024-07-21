import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    countries: [],
    filteredCountries: []
}

export const countryList = createSlice({
    name: 'countryList',
    initialState,
    reducers: {
        addCountryList: (state, action) => {
            const countryList = {
                // id: nanoid(),
                text: action.payload,

            }

            // state.countries.push(countryList)
            state.countries = action.payload
            state.filteredCountries = action.payload
        },

        countryListAsia: (state, action) => {
           state.countries =  state.countries.filter((country) => country.region === 'Asia')
        },

        countryListEurope: (state, action) => {
            state.countries = state.countries.filter((country) => country.region === 'Europe')
        }
    }
})

export const {addCountryList, countryListAsia, countryListEurope} = countryList.actions
export default countryList.reducer