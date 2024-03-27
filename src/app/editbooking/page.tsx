"use client"
import DateReserveEdit from "@/components/DateReserveEdit";

import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

import { useSearchParams } from "next/navigation";
import { Dayjs } from "dayjs"
import { useState } from "react"
import { useDispatch } from "react-redux";
import {AppDispatch, useAppSelector } from "@/redux/store"
import { editBooking } from "@/redux/features/bookSlice";
import dayjs from "dayjs";
import { profile } from "console";

export default function EditBooking () {

    // const session= await getServerSession(authOptions)
    // if(!session || !session.user.token) return null

    // const profile= await getUserProfile(session.user.token)
    // var createdAt= new Date (profile.data.createdAt);

    const companyItems = useAppSelector((state)=>state.bookSlice.bookItems)

    const urlParams= useSearchParams()
    const name=urlParams.get('name')
    const email=urlParams.get('email')
    const companyName=urlParams.get('company')

    const dispatch = useDispatch<AppDispatch>()

    // const editBook = () => {
    //     if (companyName && bookDate && bookTime) {
    //         companyItems.forEach((bookingItem) => {
    //             const item: BookingItem = {
    //                 name: bookingItem.name, 
    //                 email: bookingItem.email, 
    //                 company: companyName!,
    //                 bookDate: bookDate,
    //                 bookTime: bookTime
    //             };
    //             dispatch(editBooking(item));
    //         });
    //     }
    // };

    const editBook=()=>{
        // if(name && surname && id && hname && bookDate){
        // if(name && lastName && citizenId && PickUpCompany && bookDate){
        if(name && email && companyName && bookDate && bookTime){
            const item:BookingItem={
                name: name,
                email: email,
                company: companyName,
                bookDate: bookDate,
                bookTime: bookTime
            }
            dispatch(editBooking(item))
        }
    }

    // const [name, setName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');
    
    const [bookDate, setBookDate]= useState<string>('2022-05-10')
    const [bookTime, setBookTime]= useState<string>('9:00-12:00')

    return (
        <main className="w-[100%] font-mono text-gray-600 flex flex-col items-center space-y-4 bg-white p-[60px]">
            {/* <div className="text-2xl font-bold text-blue-900">Your Profile</div> 
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Name</td> <td>{profile.data.name}</td></tr>
                <tr><td>Email</td> <td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td> <td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td> <td>{createdAt.toString()}</td></tr>
                </tbody></table>
            
            {
                (profile.data.role=="admin")?
                <from>

                </from>
                :null
            } */}
                
            <div className="text-2xl font-bold text-blue-900 ">New Booking</div> 
            <div className="text-xl text-slate-700 ">Company</div> 
            <div className="w-fit space-y-2 pt-[30px] pb-[30px]">
                <div className="text-md text-left text-gray-600 pb-[20px]"> 
                    Online job fair booking</div> 
                <DateReserveEdit
                onDateChange={(value:string)=>setBookDate(value)} 
                onTimeChange={(value:string)=>setBookTime(value)} 
                />
                {/* <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                onCompanyChange={(value:string)=>setPickUpCompany(value)} 
                onNameChange={(value:string)=>setName(value)}
                onLastNameChange={(value:string)=>setLastName(value)}
                onCitizenIdChange={(value:string)=>setCitizenId(value)}
                /> */}
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            onClick={editBook}>
                Edit Booking
            </button>
            {/*<div className='text-xl font-mono tracking-wide'>Vaccine Booking</div> */}        

        
        </main>
    );
}