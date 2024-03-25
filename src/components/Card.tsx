'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';

// export default function Card({hospitalName,imgSrc}:{hospitalName:string,imgSrc:string}){
export default function Card({ hospitalName, imgSrc, onCompare}: { hospitalName: string, imgSrc: string, onCompare?: Function}) {
    // const [ratingValue, setRatingValue] = useState<number | null>(null);
    const [ratingValue, setRatingValue] = useState<number | null>(null);

    return(
        <InteractiveCard contentName={hospitalName}>
            <div className="w-full h-[70%] relative rounded-t-lg">    
                <Image src={imgSrc}
                    alt='Hospital Pictuce'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className="w-full h-[15%] p-[10px] font-mono text-blue-950">
                {hospitalName}
            </div>

            {/* <button className="block text-sm h-[10%] rounded-md bg-sky-600 
            hover:bg-indigo-600 mx-2 px-1 py-1 shadow-sm text-white"
            onClick={(e)=>{e.preventDefault(); onCompare(hospitalName);}}>
                Compare
            </button> */}

            {
                onCompare? 
                <div className="w-full h-[15%] p-[7px] pt-[15px] text-blue-950"
                onClick={(e)=>{e.stopPropagation(); onCompare(hospitalName);}}>
                {/* onClick={(e)=>{e.preventDefault(); onCompare(hospitalName);}}> */}
                    <Rating
                        id= {hospitalName+' Rating'}
                        name= {hospitalName+' Rating'}
                        // {`${hospitalName} Rating`}
                        data-testid= {hospitalName+' Rating'}
                        value={ratingValue}
                        // onChange={handleChange}
                        onChange={(event, newValue) => {
                            onCompare(hospitalName, newValue);
                            setRatingValue(newValue);
                        }}
                        // onClick={(e)=>{e.preventDefault(); onCompare(hospitalName);}}
                    />
                </div> :''
            }
            
        </InteractiveCard>
    );
}
