import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
// import {BookingItem} from

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState= {bookItems: []}

export const bookSlice= createSlice({
    name:"mybooking",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            const existingIndex = state.bookItems.findIndex(item => item.email === action.payload.email);
            if (existingIndex !== -1) {
                state.bookItems[existingIndex] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action:PayloadAction<string>)=>{
            state.bookItems = state.bookItems.filter(item => item.email !== action.payload);
            // const remainItems= state.bookItems.filter(obj => {
            //     return (
            //     (obj.name!==action.payload.name) ||
            //     (obj.surname!==action.payload.surname) ||
            //     (obj.hospital!==action.payload.hospital) ||
            //     (obj.bookDate!==action.payload.bookDate));
            // })
            // state.bookItems= remainItems
        }
    }
})


export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
