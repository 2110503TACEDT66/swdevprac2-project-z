'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner(){ 
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    let [index, setIndex]= useState(0)
    const router = useRouter()
    const {data:session}= useSession()
    console.log(session?.user.token) 

    return(
        // <div className={styles.banner} onClick={()=>{index++; alert(index%3)}} >
        <div className={styles.banner} onClick={()=>{setIndex(index+1)} } >
        {/* <div className={styles.banner} onClick={()=>{setIndex((index) => (index + 1) % covers.length)} } > */}
            <Image src={covers[index%4]}
              alt='cover'
              fill={true}
              objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium tracking-wide'>Online Job Fair Registration</h1>
                <br></br>
                {/* <h3 className='text-lg font-mono tracking-widest text-orange-700'>Are you ready to take the next step in your career journey? Whether you're a seasoned professional looking for new opportunities or a recent graduate eager to kickstart your career, the Career Advancement Expo is the place to be!</h3> */}
                <div className='pt-[240px] '>
                    <button className=" font-mono text-white text-lg
                    border border-white py-3 px-4 m-2 rounded z-30 
                    hover:bg-white hover:text-slate-600 hover:border-transparent" 
                    onClick={(e)=>{e.stopPropagation(); router.push('/company')}}>
                        Select Company
                    </button>
                </div>
            </div>
            {/* {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                    Hello {session.user?.name}
                </div>:null
            } */}
            
                
            
        </div>
    );
}
