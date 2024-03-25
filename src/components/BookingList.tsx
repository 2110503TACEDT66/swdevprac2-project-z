"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import {AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList(){
    const hospitalItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch= useDispatch<AppDispatch>()

    return(
        <>
        {
            hospitalItems.map((bookingItem:BookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.id}> 
                    {/* <div className="text-xl">{bookingItem.name}</div> */}
                    <div className="text-sm">Name: {bookingItem.name}</div>
                    <div className="text-sm">SurName: {bookingItem.surname}</div>
                    <div className="text-sm">id: {bookingItem.id}</div>
                    <div className="text-sm">Hospital: {bookingItem.hospital}</div>
                    <div className="text-sm">BookDate: {bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                        onClick={()=>dispatch(removeBooking(bookingItem.id))}>
                            remove from my booking
                    </button>
                </div>
            ))
        }
        
        </>
    )

}
