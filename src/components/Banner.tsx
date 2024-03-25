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
                <h1 className='text-4xl font-medium tracking-wider'>Online Job Fair Registration</h1>
                <br></br>
                <h3 className='text-xl font-mono tracking-widest'>Are you ready to take the next step in your career journey? Whether you're a seasoned professional looking for new opportunities or a recent graduate eager to kickstart your career, the Career Advancement Expo is the place to be!</h3>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                    Hello {session.user?.name}
                </div>:null
            }
            <button className="bg-white font-mono text-cyan-600 border border-cyan-600 
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 
            hover:bg-cyan-600 hover:text-white hover:border-transparent" 
            onClick={(e)=>{e.stopPropagation(); router.push('/company')}}>
                Select Company
            </button>
        </div>
    );
}
