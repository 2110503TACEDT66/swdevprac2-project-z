import { useState, useEffect } from 'react';
import Card from '@/components/Card'
import Link from 'next/link'

export default async function CompanyCatalog({hospitalsJson}:{hospitalsJson:HospitalJson }) {
    const hospitalJsonReady= await hospitalsJson
    
    return(
        <>
            Explore {hospitalJsonReady.count} models in our catalog
            <div style={{margin:"20px", display:"flex", 
            flexDirection:"row", alignContent:"space-around" ,
            justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                {
                    hospitalJsonReady.data.map((companyItem: HospitalItem)=>(
                        <Link href={`/company/${companyItem.id}`} 
                        className='w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8'>
                            <Card companyName={companyItem.name} imgSrc={companyItem.picture} />    
                        </Link>
                    ))
                }
            </div> 
        </>
    )
}