import { configureStore } from "@reduxjs/toolkit";
import comStatusSlice from "./reducer/commonStatus.jsx";

export const { setLanSetting, setPageSeleted } = comStatusSlice.actions;

const store = configureStore({
    reducer: {
        comStatusSlice: comStatusSlice.reducer,
    }
});
console.log("#store", store.getState())

export default store