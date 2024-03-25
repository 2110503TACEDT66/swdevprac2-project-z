"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider" 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField, Select, MenuItem, Button} from '@mui/material'
import { Dayjs } from "dayjs"
import { useState } from "react"
import Company from "@/app/(companyinfo)/company/page"

export default function DateReserve ({onDateChange, onCompanyChange, onNameChange, onLastNameChange, onCitizenIdChange}
    :{onDateChange:Function, onCompanyChange:Function, onNameChange:Function, onLastNameChange:Function, onCitizenIdChange:Function}) {


    // const [name, setName]= useState<string|null>(null)
    // const [sname, setSName]= useState<string|null>(null)
    // const [id, setId]= useState<string|null>(null)

    const [reserveDate, setReserveDate]= useState<Dayjs|null>(null)
    const [hospital, setHospital]= useState('Chulalongkorn Hospital')

    const [name, setName]= useState<string>('');
    const [lastName, setLastName]= useState<string>('');
    const [citizenId, setCitizenId]= useState<string>('');

    return (
        <form className="bg-slate-100 rounded-1g space-x-5
        w-fit px-10 py-5 flex flex-row justify-center">
        {/* <form className="space-y-4 "> */}
            
            <TextField
                id="name"
                label="Name"
                name="Name"
                variant="standard"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    onNameChange(e.target.value); // เรียกใช้งาน function ที่ส่งค่า name ไปยัง component ที่เรียกใช้ DateReserve
                }}
            />
            <TextField
                id="lastname"
                label="Lastname"
                name="Lastname"
                variant="standard"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                    onLastNameChange(e.target.value); // เรียกใช้งาน function ที่ส่งค่า lastname ไปยัง component ที่เรียกใช้ DateReserve
                }}
            />
            <TextField
                id="citizen-id"
                label="Citizen ID"
                name="Citizen ID"
                variant="standard"
                value={citizenId}
                onChange={(e) => {
                    setCitizenId(e.target.value);
                    onCitizenIdChange(e.target.value); // เรียกใช้งาน function ที่ส่งค่า citizen-id ไปยัง component ที่เรียกใช้ DateReserve
                }}
            />
            <Select variant="standard" name="hospital" id="hospital" value={hospital}
            onChange={(e)=>{setHospital(e.target.value); onCompanyChange(e.target.value);}}
            className="h-[3em] w-[200px]"> 
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                    value={reserveDate}
                    onChange={(value)=>{setReserveDate(value); onDateChange(value);}}
                />
            </LocalizationProvider>
{/* 
            <Button
                type="submit"
                variant="contained"
                color="primary"
                name="Book Vaccine"
                fullWidth
            >
                Book Vaccine
            </Button> */}
        </form>
    )
}