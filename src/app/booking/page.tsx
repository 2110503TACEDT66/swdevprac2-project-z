"use client"
import DateReserve from "@/components/DateReserve"; 

import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

import { useSearchParams } from "next/navigation";
import { Dayjs } from "dayjs"
import { useState } from "react"
import { useDispatch } from "react-redux";
import {AppDispatch, useAppSelector } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice";
import dayjs from "dayjs";
import { profile } from "console";

export default function Booking () {

    // const session= await getServerSession(authOptions)
    // if(!session || !session.user.token) return null

    // const profile= await getUserProfile(session.user.token)
    // var createdAt= new Date (profile.data.createdAt);

    const urlParams= useSearchParams()
    const companyName=urlParams.get('name')

    const companyItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    const makeBooking=()=>{
        // if(name && surname && id && hname && bookDate){
        // if(name && lastName && citizenId && PickUpCompany && bookDate){
        if(name && email&&companyName && bookDate && bookTime){
            const item:BookingItem={
                name: name,
                email: email,
                company: companyName,
                bookDate: bookDate,
                bookTime: bookTime
            }
            dispatch(addBooking(item))
        }
    }

    // const makeBooking = () => {
    //     if (companyName && bookDate && bookTime) {
    //         companyItems.forEach((bookingItem) => {
    //             if(!(bookingItem.name &&bookingItem.email)){
    //                 const item: BookingItem = {
    //                     name: bookingItem.name, 
    //                     email: bookingItem.email, 
    //                     company: companyName!,
    //                     bookDate: bookDate,
    //                     bookTime: bookTime
    //                 };
    //                 dispatch(addBooking(item));
    //             }
    //         });
    //     }
    // };

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    // const [citizenId, setCitizenId] = useState<string>('');

    // const [bookDate, setBookDate]= useState<Dayjs|null>(null)
    // const [PickUpCompany, setPickUpCompany]= useState<string>('Chulalongkorn Hospital')

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
                    Online Job Fair Booking</div> 
                <DateReserve 
                onNameChange={(value:string)=>setName(value)}
                onEmailChange={(value:string)=>setEmail(value)}
                onDateChange={(value:string)=>setBookDate(value)} 
                onTimeChange={(value:string)=>setBookTime(value)} 
                />
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            onClick={makeBooking}>
                Book up
            </button>
            {/*<div className='text-xl font-mono tracking-wide'>Vaccine Booking</div> */}        
            
        
        </main>
    );
}