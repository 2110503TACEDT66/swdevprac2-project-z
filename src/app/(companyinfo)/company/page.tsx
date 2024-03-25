import getCompanies from "@/libs/getCompanies"
import CompanyCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default async function Company(){
    const companies= await getCompanies() 
    // const companies= getCompanies() 
    return(
        <main className="text-center bg-white text-slate-700 p-5">
            <h1 className="text-xl font-mono text-slate-700">
                Select Your Company </h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CompanyCatalog companyJson={companies}/>
            </Suspense>
            {/* <hr className="my-10" />
            <h1 className="text-xl font-mono text-slate-700">TRY Client-Side Company Panel</h1>
            <CardPanel/> */}
        </main>
    )
}