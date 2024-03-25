'use client'

import { useRef, useState } from "react"
import VideoPlayer from "./VideoPlayer"
import useWindowListener from "@/hooks/useWindowListener"

export default function PromoteCard(){
    
    const [playing,setPlaying] =useState(true)
    const [pointerPosition, setPointerPosition]= useState({x:0,y:0});

    // useWindowListener('pointermove',
    // (e)=>{setPointerPosition({x:(e as PointerEvent).clientX, y: (e as PointerEvent).clientY})} )

    useWindowListener('contextmenu', (e) => { e.preventDefault(); });

    return (
        <div className='w-[80%] shadow-lg mx-[10%] my-10 p-2 
        rounded-lg bg-gray-200 font-mono text-slate-800 flex flex-row'>
            <VideoPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4"></VideoPlayer>
            <div className="m-5">
                {/* <div className="pb-[10px]"> */}
                    Get your vaccine today 
                    {/* ({pointerPosition.x},{pointerPosition.y}) */}
                {/* </div> */}
                <button className="block rounded-md bg-sky-600
                    hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                    onClick={() => setPlaying(!playing) }> 
                        {playing? 'Pause':'Play'}
                </button>
            </div>
        </div> 
    )
}