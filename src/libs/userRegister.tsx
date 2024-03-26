export default async function userRegister(userName:string, userTel: string, userEmail:string, userPassword:string, userRole:string) {
    try {
        const response =await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`,{
            method: "POST",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json" ,
                // "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                name: userName,
                tel: userTel,
                email: userEmail,
                password: userPassword,
                role: userRole
            }),
        })
        console.log('response :>> ', response);
        if(!response.ok){
            throw new Error("Failed to register")
        }
        return await response.json() 
    } catch (error) {
        console.log('error :>> ', error);
    }
    
}