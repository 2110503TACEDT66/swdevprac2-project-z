"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider" 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField, Select, MenuItem, Button} from '@mui/material'
import { Dayjs } from "dayjs"
import { useState } from "react"
import Company from "@/app/(companyinfo)/company/page"

// export default function DateReserveEdit ({onNameChange, onEmailChange, onDateChange, onTimeChange}
//         :{onNameChange:Function, onEmailChange:Function, onDateChange:Function, onTimeChange:Function}) {
export default function DateReserveEdit ({onDateChange, onTimeChange}
    :{onDateChange:Function, onTimeChange:Function}) {
            

    // const [name, setName]= useState<string|null>(null)
    // const [sname, setSName]= useState<string|null>(null)
    // const [id, setId]= useState<string|null>(null)

    // const [reserveDate, setReserveDate]= useState<Dayjs|null>(null)

    const [bookDate, setBookDate]= useState('2022-05-10')
    const [bookTime, setBookTime]= useState('9:00-12:00')

    // const [name, setName]= useState<string>('');
    // const [email, setEmail]= useState<string>('');
    

    return (
        <form className="bg-slate-100 rounded-1g space-x-5
        w-fit px-10 py-5 flex flex-row justify-center">
        {/* <form className="space-y-4 "> */}
            
            {/* <TextField
                id="name"
                label="Name"
                name="Name"
                variant="standard"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    onNameChange(e.target.value); 
                }}
            />
            <TextField
                id="email"
                label="Email"
                name="Email"
                variant="standard"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    onEmailChange(e.target.value); 
                }}
            /> */}

            <Select variant="standard" name="bookDate" id="bookDate" value={bookDate}
            onChange={(e)=>{setBookDate(e.target.value); onDateChange(e.target.value);}}
            className="h-[3em] w-[200px]"> 
                <MenuItem value="2022-05-10">2022-05-10</MenuItem>
                <MenuItem value="2022-05-11">2022-05-11</MenuItem>
                <MenuItem value="2022-05-12">2022-05-12</MenuItem>
                <MenuItem value="2022-05-13">2022-05-13</MenuItem>
            </Select>

            <Select variant="standard" name="bookTime" id="bookTime" value={bookTime}
            onChange={(e)=>{setBookTime(e.target.value); onTimeChange(e.target.value);}}
            className="h-[3em] w-[200px]"> 
                <MenuItem value="9:00-12:00">9:00-12:00</MenuItem>
                <MenuItem value="13:00-16:00">13:00-16:00</MenuItem>
                <MenuItem value="17:00-20:00">17:00-20:00</MenuItem>
            </Select>
             
        </form>
    )
}