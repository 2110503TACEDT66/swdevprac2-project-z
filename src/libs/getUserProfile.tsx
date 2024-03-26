
export default async function getUserProfile(token:string) {
    const response =await fetch(`${process.env.BACKEND}/api/v1/auth/me`,{
        method: "GET",
        headers: {
            authorization: `Bearer ${token}` ,
        },
    })
    
    if(!response.ok){
        throw new Error("Failed to user profile")
    }
    return await response.json()
}