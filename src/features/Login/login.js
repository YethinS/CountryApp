import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login : false
}


export const login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateLogin: (state, action) => {
            state.login = action.payload
        }
    }
})

export const { updateLogin } = login.actions
export default login.reducer