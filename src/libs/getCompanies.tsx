import { resolve } from "path"

export default async function getCompanies() {
    await new Promise<CompanyJson>((resolve)=>setTimeout(resolve,1000))

    const response =await fetch("https://presentation-day-1-z.vercel.app/api/v1/companies")
    if(!response.ok){
        throw new Error("Failed to fetch hospitals")
    }
    return await response.json()
}