import Image from "next/image"
import getHospital from "@/libs/getHospital"
import Link from "next/link"

export default async function HospitalDetailPage({params}: {params:{hid:string}}){
    const hospitalDetail= await getHospital(params.hid)
    
    // const mockHospitalRepo=new Map()
    // mockHospitalRepo.set("001", {name:'Chulalongkorn Hospital', image:'/img/chula.jpg'})
    // mockHospitalRepo.set("002", {name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'})
    // mockHospitalRepo.set("003", {name:'Thammasat University Hospital', image:'/img/thammasat.jpg'})
    
    return(
        <main className="bg-white font-mono text-slate-700 p-5">
            <h1 className="text-center text-xl text-slate-800">
                {/* Hospital ID {params.hid} */}
                {hospitalDetail.data.name}
            </h1>
            <div className="flex flex-row my-5">
                {/* <Image src={(mockHospitalRepo.get(params.hid)).image} */}
                <Image src= {hospitalDetail.data.picture}
                    alt='Hospital Pictuce'
                    width={0} height={0} sizes="100vw"
                    className='rounded-ld w-[30%] bg-black'
                    // fill={true}
                    // objectFit='cover'
                />
                <div className="text-md mx-5">
                    {hospitalDetail.data.name}
                    <div>address: {hospitalDetail.data.address}</div>
                    <div>district: {hospitalDetail.data.district}</div>
                    <div>province: {hospitalDetail.data.province}</div>
                    <div>postalcode: {hospitalDetail.data.postalcode}</div>
                    <div>tel: {hospitalDetail.data.tel}</div>

                    <Link href={`/booking?id=${params.hid}&name=${hospitalDetail.data.name}`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
                            Make Booking
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams(){
//     return [{cid:'001'}, {cid:'002'}, {cid:'003'}]
// }