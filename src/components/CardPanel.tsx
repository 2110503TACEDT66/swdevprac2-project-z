'use client'
import { useReducer, useState } from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import getCompanies from '@/libs/getCompanies'

export default function CardPanel() {
    // const compareReducer = (compareList:Set<string>, action: {type:string, companyName:string})=>{ 
    //     switch(action.type) {
    //         case 'updateRating': {
    //             return new Set (compareList.add(action.companyName)) } 
    //         case 'deleteHospital': {
    //             compareList.delete(action.companyName)
    //             return new Set (compareList)
    //         }
    //         default: return compareList
    //     }
    // }

    const [companyResponse, setCompanyResponse]= useState<HospitalJson|null>(null)

    useEffect(()=>{
        const fetchData= async()=>{
            const companies= await getCompanies()
            setCompanyResponse(companies)
        }
        fetchData()
    },[])

    const countRef= useRef(0)
    const inputRef= useRef<HTMLInputElement>(null)

    let count=0 
      
    new Map([
        ['Chulalongkorn Hospital', 5],
        ['Rajavithi Hospital', 5],
        ['Thammasat University Hospital', 5],
    ])

    
    const compareReducer = (compareList:Map<string, number>, action: {type:string, companyName:string, ratingValue:number})=>{ 
        switch(action.type) {
            case 'updateRating': {
                if (action.ratingValue !== 0 && action.ratingValue !== null) {
                    compareList.set(action.companyName, action.ratingValue);
                } else {
                    // compareList.set(action.companyName, 0);
                    compareList.delete(action.companyName);
                }
                return new Map(compareList);
                //     return new Set(compareList.add(action.companyName));
                // } else {
                //     return compareList;
                // }
            }
            case 'deleteHospital': {
                compareList.delete(action.companyName)
                return new Map (compareList)
            }
            default: return compareList
        }
    }


    // const [compareList, dispatchCompare]= useReducer(compareReducer, new Map<string, number>())
    
    // const [ratingList, dispatchCompare]= useReducer(compareReducer, new Map<string, number>())

    // const mockHospitalRepo=[
    //     {cid:"001", name:'Chulalongkorn Hospital', image:'/img/chula.jpg'} ,
    //     {cid:"002", name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'} ,
    //     {cid:"003", name:'Thammasat University Hospital', image:'/img/thammasat.jpg'} 
    // ]

    if(!companyResponse) return (<p>Company Panel is Loading ...</p>)

    return (
      <div className='font-mono' >
        <div style={{margin:"20px", display:"flex", 
          flexDirection:"row", alignContent:"space-around" ,
          justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
            {/* {mockHospitalRepo.map((companyItem)=>( */}
            {companyResponse.data.map((companyItem:HospitalItem)=>(
                <Link href={`/company/${companyItem.id}`} className='w-1/5' >
                    <Card companyName={companyItem.name} imgSrc={companyItem.picture}
                    // onCompare={(card:string, ratingValue: number) => 
                    //     dispatchCompare({type:'updateRating', companyName:card, ratingValue: ratingValue||0 })}
                    />    
                </Link>
            ))}
        </div> 

        <button className='block rounded-md bg-sky-600 
            hover:bg-indigo-600 px-3 py-2 text-white shadow-sm' 
            onClick={()=> {countRef.current= countRef.current+1; alert(countRef.current)}} >
            Count with local variable
        </button>

        <input type="text" placeholder="please fill" 
            className="block text-gray-900 text-sm rounded-1g p-2 m-2 
            bg-purple-50 ring-1 ring-inset ring-purple-400
            focus: outline-none focus: bg-purple-200 focus: ring-2"
            ref={inputRef}/>
        <button className="block rounded-md bg-sky-600 
            hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={() => {if(inputRef.current!=null) inputRef.current.focus()} }> 
                Focus Input
        </button>
    </div >
    )
}
