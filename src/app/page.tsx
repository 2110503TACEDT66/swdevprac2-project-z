import Image from 'next/image'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import CardPanel from '@/components/CardPanel'
import styles from './page.module.css'
import SelectCard from '@/components/SelectCard'
// import PromoteCard from '@/components/PromoteCard'

export default function Home() {
  return (
    // <main style={{ backgroundColor: "#FFFFFF" , paddingBottom: "30px"}}>
    <main className='bg-slate-800 pb-[30px]'>
      <Banner/>
      <SelectCard></SelectCard>
    </main>
  )
}
