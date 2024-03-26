"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import {AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import Link from "next/link"

export default function BookingList(){
    const companyItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch= useDispatch<AppDispatch>()

    return(
        <>
        {
            companyItems.map((bookingItem:BookingItem)=>(
                <div className="bg-slate-200 font-mono rounded px-5 mx-5 py-2 my-2 pt-[10px]" key={bookingItem.email}> 
                    {/* <div className="text-xl">{bookingItem.name}</div> */}
                    {/* <div className="text-sm">Name: {bookingItem.name}</div>
                    <div className="text-sm">Email: {bookingItem.email}</div>
                    <div className="text-sm">Company: {bookingItem.company}</div>
                    <div className="text-sm">BookDate: {bookingItem.bookDate}</div>
                    <div className="text-sm">BookTime: {bookingItem.bookTime}</div> */}

                    <table className="table-auto text-sm text-black border-separate border-spacing-2 tracking-wider" key={bookingItem.email}><tbody>
                        <tr><td width="90">Name</td> <td>{bookingItem.name}</td></tr>
                        <tr><td>Email</td> <td>{bookingItem.email}</td></tr>
                        <tr><td>Company</td> <td>{bookingItem.company}</td></tr>
                        <tr><td>BookDate</td> <td>{bookingItem.bookDate}</td></tr>
                        <tr><td>BookTime</td> <td>{bookingItem.bookTime}</td></tr>
                        </tbody></table>
            
                    <div className="flex flex-row space-x-6 pt-[5px] pb-[5px]">
                        <button className="block rounded-md text-sm bg-sky-600 hover:bg-indigo-600 px-3 py-1 shadow-sm text-white"
                            onClick={()=>dispatch(removeBooking(bookingItem))}>
                                remove from my booking
                        </button>

                        {/* <Link href={`/booking?id=${params.cid}&name=${companyDetail.data.name}`}> */}
                        <Link href={`/editbooking?name=${bookingItem.name}&email=${bookingItem.email}&company=${bookingItem.company}`}>
                            <button className="block rounded-md text-sm bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
                                edit my booking
                            </button>
                        </Link>
                    </div>
                </div>
            ))
        }
        
        </>
    )

}
