import { useState, useEffect } from 'react';
import Card from '@/components/Card'
import Link from 'next/link'
// import HospitalJson from 'interface'
// import { HospitalJson, HospitalItem } from 'interface'
// import { HospitalJson, HospitalItem } from '../../interface';

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:HospitalJson }) {
    const hospitalJsonReady= await hospitalsJson
    
    return(
        <>
            Explore {hospitalJsonReady.count} models in our catalog
            <div style={{margin:"20px", display:"flex", 
            flexDirection:"row", alignContent:"space-around" ,
            justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                {
                    hospitalJsonReady.data.map((hospitalItem: HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} 
                        className='w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8'>
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />    
                        </Link>
                    ))
                }
            </div> 
        </>
    )
}