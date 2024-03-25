'use client'
import { useRef } from "react"
import { useEffect ,useState } from "react"
import useWindowListener from "@/hooks/useWindowListener"

export default function VideoPlayer( 
    {vdoSrc,isPlaying} : {vdoSrc:string, isPlaying:Boolean}){
    
    const vdoRef = useRef<HTMLVideoElement>(null)

    useWindowListener('resize',
    (e)=>alert('window width is '+ (e.target as Window).innerWidth) )

    useEffect(()=> {
        // alert('width is '+vdoRef.current?.videoWidth)
        if(isPlaying) { 
            // alert('Play VDO')
            vdoRef.current?.play() 
        }
        else { 
            // alert('Pause VDO')
            vdoRef.current?.pause() 
        }
    }, [isPlaying])


    // const [winwidth, setWinwidth] = useState(0) 
    // useEffect (()=>{
    //     const handleWinWidthChange = ()=>{
    //         setWinwidth (window.innerWidth);
    //         alert('window width' + window.innerWidth)
    //     }
    //     window.addEventListener("resize", handleWinWidthChange)
        
    //     return ()=>{
    //         window.removeEventListener("resize", handleWinWidthChange)
    //     }
    // }, [])

    return (
        <video className='w-[40%]' src={vdoSrc} ref={vdoRef} 
        muted loop controls />
    )
}