
import Image from "next/image"
import getCompany from "@/libs/getCompany"
import Link from "next/link"


export default async function CompanyDetailPage({params}: {params:{cid:string}}){
    const companyDetail= await getCompany(params.cid)

    return(
        <main className="min-h-screen bg-slate-800 font-mono text-slate-100 p-5">
            <h1 className="text-center text-2xl text-slate-50">
                {companyDetail.data.name}
            </h1>
            <div className="flex flex-row rounded-md my-5 p-[20px]">
                <Image src= {companyDetail.data.picture}
                    alt='Company Pictuce'
                    width={0} height={0} sizes="100vw"
                    className='rounded-ld w-[30%] bg-black'
                />
                <div className="text-md mx-5">
                    <table className="table-auto font-mono border-separate border-spacing-2 tracking-wider" key={companyDetail.data.name}><tbody>
                    
                        <tr><td width="100">Name</td> <td>{companyDetail.data.name}</td></tr>
                        <tr><td>Address</td> <td>{companyDetail.data.address}</td></tr>
                        <tr><td>District</td> <td>{companyDetail.data.district}</td></tr>
                        <tr><td>Province</td> <td>{companyDetail.data.province}</td></tr>
                        <tr><td>Postalcode</td> <td>{companyDetail.data.postalcode}</td></tr>
                        <tr><td>Tel</td> <td>{companyDetail.data.tel}</td></tr>
                        </tbody></table>
                    <div className="pt-[20px]">
                        <Link href={`/booking?id=${params.cid}&name=${companyDetail.data.name}`}>
                            <button className="block font-mono rounded-md border border-white hover:bg-white px-3 py-2 shadow-sm text-white hover:text-slate-800">
                                Make Booking
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </main>
    )
}
