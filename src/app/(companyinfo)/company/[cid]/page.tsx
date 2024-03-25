
// "use client"

import Image from "next/image"
import getCompany from "@/libs/getCompany"
import Link from "next/link"

// import DateReserve from "@/components/DateReserve" 
// // import { authOptions } from "../api/auth/[...nextauth]/route";
// // import { getServerSession } from "next-auth";
// // import getUserProfile from "@/libs/getUserProfile";
// import { useSearchParams } from "next/navigation"
// import { Dayjs } from "dayjs"
// import { useState } from "react"
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/redux/store"
// import { addBooking } from "@/redux/features/bookSlice"
// import dayjs from "dayjs";
// import { profile } from "console";



export default async function CompanyDetailPage({params}: {params:{cid:string}}){
    const companyDetail= await getCompany(params.cid)
    

    return(
        <main className="bg-white font-mono text-slate-700 p-5">
            <h1 className="text-center text-xl text-slate-800">
                {companyDetail.data.name}
            </h1>
            <div className="flex flex-row my-5">
                <Image src= {companyDetail.data.picture}
                    alt='Company Pictuce'
                    width={0} height={0} sizes="100vw"
                    className='rounded-ld w-[30%] bg-black'
                />
                <div className="text-md mx-5">
                    {companyDetail.data.name}
                    <div>address: {companyDetail.data.address}</div>
                    <div>district: {companyDetail.data.district}</div>
                    <div>province: {companyDetail.data.province}</div>
                    <div>postalcode: {companyDetail.data.postalcode}</div>
                    <div>tel: {companyDetail.data.tel}</div>

                    {/* <Link href={`/booking?id=${params.cid}&name=${companyDetail.data.name}`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
                            Make Booking
                        </button>
                    </Link> */}
                </div>
            </div>
            <div>
                choose
                {/* <div className="text-2xl font-bold text-blue-900 ">New Booking</div> 
                <div className="text-xl text-slate-700 ">Company</div> 
                <div className="w-fit space-y-2 pt-[30px] pb-[30px]">
                    <div className="text-md text-left text-gray-600 pb-[20px]"> 
                        Vaccination booking</div> 
                    <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                    onCompanyChange={(value:string)=>setPickUpCompany(value)} 
                    onNameChange={(value:string)=>setName(value)}
                    onLastNameChange={(value:string)=>setLastName(value)}
                    onCitizenIdChange={(value:string)=>setCitizenId(value)}
                    />
                </div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                onClick={makeBooking}>
                    Book Vaccine
                </button> */}
            </div>
                                  
            
        </main>
    )
}
