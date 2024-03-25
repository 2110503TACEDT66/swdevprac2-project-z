import { useEffect,useState } from "react";

export default function useWindowListener(eventType:string, listener:EventListener) {
    
    // const [winwidth, setWinwidth] = useState(0) 

    // useEffect (()=>{
    //     const handleWinWidthChange = ()=>{
    //         setWinwidth (window.innerWidth);
    //         alert('window width ' + window.innerWidth)
    //     }
    //     window.addEventListener("resize", handleWinWidthChange)
        
    //     return ()=>{
    //         window.removeEventListener("resize", handleWinWidthChange)
    //     }
    // }, [])

    useEffect(()=>{
        window.addEventListener(eventType, listener)

        return ()=>{
            window.removeEventListener(eventType, listener)
        }
    },[eventType, listener])
}