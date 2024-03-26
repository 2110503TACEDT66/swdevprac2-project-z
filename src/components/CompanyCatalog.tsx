import { useState, useEffect } from 'react';
import Card from '@/components/Card'
import Link from 'next/link'

export default async function CompanyCatalog({companyJson}:{companyJson:CompanyJson }) {
    const companyJsonReady= await companyJson
    
    return(
        <>
            Explore {companyJsonReady.count} models in our catalog
            <div style={{margin:"20px", display:"flex", 
            flexDirection:"row", alignContent:"space-around" ,
            justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                {
                    companyJsonReady.data.map((companyItem: CompanyItem)=>(
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