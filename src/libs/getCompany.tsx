
export default async function getCompany(id:string) {
    const response =await fetch(`https://presentation-day-1-z.vercel.app/api/v1/companies/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch hospital")
    }
    return await response.json()
}