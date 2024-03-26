'use client'
import userRegister from "@/libs/userRegister";
import { useState, useEffect} from "react";

export default function register(){

    const [name, setName] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>("user");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(name, tel, email, password, role);
            console.log('handleSubmit');
            await userRegister(name, tel, email, password, role);
            // alert("Registration successful");
        } catch (error) {
            alert("Failed to register");
            
        }
    };

    useEffect(() => { }, []);

    return(
        <main className="text-center bg-white text-slate-700 p-5">
            <div className="text-3xl font-bold">Register</div>
            <form className="my-10 mx-10" onSubmit={handleSubmit}>
                <div className="flex items-center w-2/3 my-2">
                    <label className="w-auto block text-gray-700 pr-4"htmlFor="name">Name</label>
                    <input type="text" required id="name" name="name" placeholder="Name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex items-center w-2/3 my-2">
                    <label className="w-auto block text-gray-700 pr-4"htmlFor="tel">Tel</label>
                    <input type="text" required id="tel" name="tel" placeholder="tel"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    value={tel} onChange={(e) => setTel(e.target.value)}/>
                </div>
                <div className="flex items-center w-2/3 my-2">
                    <label className="w-auto block text-gray-700 pr-4"htmlFor="email">Email</label>
                    <input type="text" required id="email" name="email" placeholder="email"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex items-center w-2/3 my-2">
                    <label className="w-auto block text-gray-700 pr-4"htmlFor="role">Role</label>
                    <input type="text" required id="role" name="role" placeholder="type 'user'"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    value={role} onChange={(e) => setRole(e.target.value)}/>
                </div>
                <div className="flex items-center w-2/3 my-2">
                    <label className="w-auto block text-gray-700 pr-4"htmlFor="password">password</label>
                    <input type="password" required id="password" name="password" placeholder="password"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="bg-blue-500 hover :bg-blue-700
                text-white p-2 rounded my-5">register</button>
            </form>

        </main>
    );
}