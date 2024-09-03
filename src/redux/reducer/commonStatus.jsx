import { createSlice } from "@reduxjs/toolkit";

const comStatusSlice = createSlice({
    name: 'comStatusSlice',
    initialState: {
        lanSetting: 'ENG',
        pageSeleted: 'home'
    },
    reducers: {
        setLanSetting: (state, action) => {
            console.log(`REDUCER- setLanSetting (${state.lanSetting}) 
            and action ${action.payload}`)
            state.lanSetting = action.payload;
        },
        setPageSeleted: (state, action) => {
            console.log(`REDUCER- setPageSeleted (${state.pageSeleted}) 
            and action ${action.payload}`)
            state.pageSeleted = action.payload;
        }
    },
});

export default comStatusSlice;