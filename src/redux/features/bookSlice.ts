import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
// import {BookingItem} from

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState= {bookItems: []}
const MAX_BOOKINGS = 3;

export const bookSlice= createSlice({
    name:"mybooking",
    initialState,
    reducers:{
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            // const existingIndex = state.bookItems.findIndex(item => item.email === action.payload.email);
            // if (existingIndex !== -1) {
            //     state.bookItems[existingIndex] = action.payload;
            // } else {
            //     state.bookItems.push(action.payload);
            // }
            // state.bookItems.push(action.payload);
            const { email, company } = action.payload;

            const userBookings = state.bookItems.filter((item) => item.email === email);
            if (userBookings.length >= MAX_BOOKINGS) {
                console.error("User has reached the maximum number of bookings");
                return;
            }

            const existingIndex = state.bookItems.findIndex(
                (item) => item.email === email && item.company === company
            );
            if (existingIndex !== -1) {
                console.log("Company already booked by this user. Updating booking.");
                state.bookItems[existingIndex] = action.payload;
            } else {
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=>{
            state.bookItems = state.bookItems.filter(item =>(( item.email !== action.payload.email)|| (item.company !== action.payload.company)));
            // const emailToRemove = action.payload;
            // state.bookItems = state.bookItems.filter(
            //     (item) => item.email !== emailToRemove
            // );
        },
        editBooking: (state, action:PayloadAction<BookingItem>)=>{
            const existingIndex = state.bookItems.findIndex(item => item.email === action.payload.email);
            if (existingIndex !== -1) {
                state.bookItems[existingIndex] = action.payload;
            } else {
                console.error("Company does not match with existing email");
            }
        },
    }
})


export const { addBooking, removeBooking, editBooking } = bookSlice.actions;
export default bookSlice.reducer;
