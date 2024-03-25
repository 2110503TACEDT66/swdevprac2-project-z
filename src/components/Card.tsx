'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';

export default function Card({ companyName, imgSrc, onCompare}: { companyName: string, imgSrc: string, onCompare?: Function}) {
    const [ratingValue, setRatingValue] = useState<number | null>(null);

    return(
        <InteractiveCard contentName={companyName}>
            <div className="w-full h-[70%] relative rounded-t-lg">    
                <Image src={imgSrc}
                    alt='Company Pictuce'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className="w-full h-[15%] p-[10px] font-mono text-blue-950">
                {companyName}
            </div>

            {/* <button className="block text-sm h-[10%] rounded-md bg-sky-600 
            hover:bg-indigo-600 mx-2 px-1 py-1 shadow-sm text-white"
            onClick={(e)=>{e.preventDefault(); onCompare(companyName);}}>
                Compare
            </button> */}

            {
                onCompare? 
                <div className="w-full h-[15%] p-[7px] pt-[15px] text-blue-950"
                onClick={(e)=>{e.stopPropagation(); onCompare(companyName);}}>
                {/* onClick={(e)=>{e.preventDefault(); onCompare(companyName);}}> */}
                    <Rating
                        id= {companyName+' Rating'}
                        name= {companyName+' Rating'}
                        // {`${companyName} Rating`}
                        data-testid= {companyName+' Rating'}
                        value={ratingValue}
                        // onChange={handleChange}
                        onChange={(event, newValue) => {
                            onCompare(companyName, newValue);
                            setRatingValue(newValue);
                        }}
                        // onClick={(e)=>{e.preventDefault(); onCompare(companyName);}}
                    />
                </div> :''
            }
            
        </InteractiveCard>
    );
}
