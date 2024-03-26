export default async function userRegister(userName:string, userTel: string, userEmail:string, userPassword:string, userRole:string) {
    const response =await fetch(`https://presentation-day-1-z.vercel.app/api/v1/auth/register/`,{
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json" ,
        },
        body: JSON.stringify({
            name: userName,
            tel: userTel,
            email: userEmail,
            password: userPassword,
            role: userRole
        }),
    })
    
    if(!response.ok){
        throw new Error("Failed to register")
    }
    return await response.json()
}