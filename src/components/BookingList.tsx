"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import {AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList(){
    const companyItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch= useDispatch<AppDispatch>()

    return(
        <>
        {
            companyItems.map((bookingItem:BookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.email}> 
                    {/* <div className="text-xl">{bookingItem.name}</div> */}
                    <div className="text-sm">Name: {bookingItem.name}</div>
                    <div className="text-sm">SurName: {bookingItem.email}</div>
                    <div className="text-sm">id: {bookingItem.company}</div>
                    <div className="text-sm">Hospital: {bookingItem.bookDate}</div>
                    <div className="text-sm">BookDate: {bookingItem.bookTime}</div>
            
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                        onClick={()=>dispatch(removeBooking(bookingItem.email))}>
                            remove from my booking
                    </button>
                </div>
            ))
        }
        
        </>
    )

}
