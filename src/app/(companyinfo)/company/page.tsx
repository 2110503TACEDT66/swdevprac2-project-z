import getCompanies from "@/libs/getCompanies"
import CompanyCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default async function Company(){
    const companies= await getCompanies() 
    // const companies= getCompanies() 
    return(
        <main className="min-h-screen text-center bg-slate-800 text-slate-300 p-5">
            <h1 className="text-2xl font-mono text-slate-100">
                Select Your Company </h1><br></br>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CompanyCatalog companyJson={companies}/>
            </Suspense>
            {/* <hr className="my-10" />
            <h1 className="text-xl font-mono text-slate-700">TRY Client-Side Company Panel</h1>
            <CardPanel/> */}
        </main>
    )
}