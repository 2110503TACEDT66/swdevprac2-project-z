"use client"
import DateReserve from "@/components/DateReserve"; 
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import getUserProfile from "@/libs/getUserProfile";
import { useSearchParams } from "next/navigation";
import { Dayjs } from "dayjs"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import dayjs from "dayjs";
import { profile } from "console";

export default function Booking () {
    // const session= await getServerSession(authOptions)
    // if(!session || !session.user.token) return null

    // const profile= await getUserProfile(session.user.token)
    // var createdAt= new Date (profile.data.createdAt);


    // const urlParams= useSearchParams()
    // const hname=urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking=()=>{
        // if(name && surname && id && hname && bookDate){
        if(name && lastName && citizenId && PickUpHospital && bookDate){
            const item:BookingItem={
                name: name,
                surname: lastName,
                id: citizenId,
                hospital: PickUpHospital,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [citizenId, setCitizenId] = useState<string>('');

    const [bookDate, setBookDate]= useState<Dayjs|null>(null)
    const [PickUpHospital, setPickUpHospital]= useState<string>('Chulalongkorn Hospital')

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
            <div className="text-xl text-slate-700 ">Hospital</div> 
            <div className="w-fit space-y-2 pt-[30px] pb-[30px]">
                <div className="text-md text-left text-gray-600 pb-[20px]"> 
                    Vaccination booking</div> 
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                onHospitalChange={(value:string)=>setPickUpHospital(value)} 
                onNameChange={(value:string)=>setName(value)}
                onLastNameChange={(value:string)=>setLastName(value)}
                onCitizenIdChange={(value:string)=>setCitizenId(value)}
                />
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            onClick={makeBooking}>
                Book Vaccine
            </button>
            {/*<div className='text-xl font-mono tracking-wide'>Vaccine Booking</div> */}        
            
        
        </main>
    );
}