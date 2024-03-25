import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default async function Hospital(){
    const hospitals= await getHospitals() 
    // const hospitals= getHospitals() 
    return(
        <main className="text-center bg-white text-slate-700 p-5">
            <h1 className="text-xl font-mono text-slate-700">
                Select Your Hospital </h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
            {/* <hr className="my-10" />
            <h1 className="text-xl font-mono text-slate-700">TRY Client-Side Hospital Panel</h1>
            <CardPanel/> */}
        </main>
    )
}