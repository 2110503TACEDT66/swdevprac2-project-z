'use client'

import { useRef, useState } from "react"
import useWindowListener from "@/hooks/useWindowListener"
import { useRouter } from "next/navigation"
import { Button } from "@mui/material"
import { useSession } from "next-auth/react"

export default function SelectCard(){

    const router = useRouter()

    const {data:session}= useSession()
    console.log(session?.user.token) 

    return (
        <div className='w-[80%] shadow-lg mx-[10%] my-10 p-2 
        rounded-lg bg-slate-700 font-mono text-slate-200 flex flex-row'>
            
            <div className="m-5 flex flex-col justify-between">
                {
                    session? <div className="h-[20%] text-lg center">
                        Hello {session.user?.name}!
                    </div>:null
                }   

                <div className='h-[75%] pt-[10px] font-mono tracking-widest text-slate-300'>
                    Are you ready to take the next step in your career journey? Whether you're a seasoned professional looking for new opportunities or a recent graduate eager to kickstart your career, the Career Advancement Expo is the place to be!
                </div>
                
                
            </div>
        </div> 
    )
}