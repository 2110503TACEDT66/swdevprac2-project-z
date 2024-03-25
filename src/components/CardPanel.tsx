'use client'
import { useReducer, useState } from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import getHospitals from '@/libs/getHospitals'

export default function CardPanel() {
    // const compareReducer = (compareList:Set<string>, action: {type:string, hospitalName:string})=>{ 
    //     switch(action.type) {
    //         case 'updateRating': {
    //             return new Set (compareList.add(action.hospitalName)) } 
    //         case 'deleteHospital': {
    //             compareList.delete(action.hospitalName)
    //             return new Set (compareList)
    //         }
    //         default: return compareList
    //     }
    // }

    const [hospitalResponse, setHospitalResponse]= useState<HospitalJson|null>(null)

    useEffect(()=>{
        const fetchData= async()=>{
            const hospitals= await getHospitals()
            setHospitalResponse(hospitals)
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

    
    const compareReducer = (compareList:Map<string, number>, action: {type:string, hospitalName:string, ratingValue:number})=>{ 
        switch(action.type) {
            case 'updateRating': {
                if (action.ratingValue !== 0 && action.ratingValue !== null) {
                    compareList.set(action.hospitalName, action.ratingValue);
                } else {
                    // compareList.set(action.hospitalName, 0);
                    compareList.delete(action.hospitalName);
                }
                return new Map(compareList);
                //     return new Set(compareList.add(action.hospitalName));
                // } else {
                //     return compareList;
                // }
            }
            case 'deleteHospital': {
                compareList.delete(action.hospitalName)
                return new Map (compareList)
            }
            default: return compareList
        }
    }


    // const [compareList, dispatchCompare]= useReducer(compareReducer, new Map<string, number>())
    
    // const [ratingList, dispatchCompare]= useReducer(compareReducer, new Map<string, number>())

    // const mockHospitalRepo=[
    //     {hid:"001", name:'Chulalongkorn Hospital', image:'/img/chula.jpg'} ,
    //     {hid:"002", name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'} ,
    //     {hid:"003", name:'Thammasat University Hospital', image:'/img/thammasat.jpg'} 
    // ]

    if(!hospitalResponse) return (<p>Hospital Panel is Loading ...</p>)

    return (
      <div className='font-mono' >
        <div style={{margin:"20px", display:"flex", 
          flexDirection:"row", alignContent:"space-around" ,
          justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
            {/* {mockHospitalRepo.map((hospitalItem)=>( */}
            {hospitalResponse.data.map((hospitalItem:HospitalItem)=>(
                <Link href={`/hospital/${hospitalItem.id}`} className='w-1/5' >
                    <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}
                    // onCompare={(card:string, ratingValue: number) => 
                    //     dispatchCompare({type:'updateRating', hospitalName:card, ratingValue: ratingValue||0 })}
                    />    
                </Link>
            ))}
          {/* <Card hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' 
            // onCompare={(card:string)=>dispatchCompare({type:'updateRating',hospitalName:card})} 
            onCompare={(card:string, ratingValue: number) => 
                dispatchCompare({type:'updateRating', hospitalName:card, ratingValue: ratingValue||0 })}       />
          <Card hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'
            onCompare={(card:string, ratingValue: number) => 
                dispatchCompare({type:'updateRating', hospitalName:card, ratingValue: ratingValue||0})} />
          <Card hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'
            onCompare={(card:string, ratingValue: number) => 
                dispatchCompare({type:'updateRating', hospitalName:card, ratingValue: ratingValue||0})} />*/}
        </div> 
        
{/*
        <div className="w-full text-xl font-medium text-slate-700 p-[10px]">
            Compare List {compareList.size}
        </div>
             
        {Array.from(compareList).map(([hos,rat])=> 
                <div className="w-full text-slate-600 pl-[20px]" 
                    data-testid= {hos} key={hos} 
                    onClick={()=>dispatchCompare({type:'deleteHospital',hospitalName:hos,ratingValue:rat})}> 
                    {hos}: {rat}
                </div>
        )} */}


        {/* {Array.from(compareList.keys()).map((card)=> 
            <div className="w-full font-slate-600 pl-[20px]" key={card} 
                onClick={()=>dispatchCompare({type:'deleteHospital',hospitalName:card})} > 
                {card} : {compareList.get(card)} 
            </div>
        )} */}

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
