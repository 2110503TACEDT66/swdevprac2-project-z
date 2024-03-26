'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';

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
            <div className="w-full h-[15%] p-[10px] font-mono text-slate-100">
                {companyName}
            </div>
            <div className="w-full h-[15%] font-mono text-slate-200">
                <AddIcon></AddIcon>
            </div>

        </InteractiveCard>
    );
}
