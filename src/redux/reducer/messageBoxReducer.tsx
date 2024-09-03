import { createSlice } from "@reduxjs/toolkit";
interface MessageBoxState {
    isCheckMsg: boolean;
    msgContent: {id:string,content:string},
}

const messageBoxSlice = createSlice({
    name: 'messageBoxSlice',
    initialState: {
        isCheckMsg: false,
        msgContent: {id:'',content:''},

    } as MessageBoxState,
    reducers: {
        setIsCheckMsg: (state, action) => {
            console.log(`REDUCER- setIsCheckMsg (${state.isCheckMsg}) 
            and action ${action.payload}`)
            state.isCheckMsg = action.payload;
        },
        setMsgContent: (state, action) => {
            console.log(`REDUCER- setMsgContent (${state.msgContent}) 
            and action ${action.payload}`)
            state.msgContent = action.payload;
        },
        setid: (state, action) => {
            console.log(`REDUCER- setMsgContent (${state.msgContent}) 
            and action ${action.payload}`)
            state.msgContent = action.payload;
        },
    }
});

export const { setIsCheckMsg,setMsgContent } = messageBoxSlice.actions;
export default messageBoxSlice;