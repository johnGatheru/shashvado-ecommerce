import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import beauty from "@/app/assets/sidebar/beauty.svg"
import womenfashion from "@/app/assets/sidebar/womenfashion.svg"
import shoes from "@/app/assets/sidebar/shoes.svg"


const SideMenu = () => {
  return (
    <div className='w-full bg-white rounded-b-md'>
        <ul><li className='flex flex-col'>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'> <Image src={beauty} width={20} height={50} alt='loading' /> Beauty</Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'> <Image src={womenfashion} width={20} height={50} alt='loading' />Women Fashion</Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'> <Image src={shoes} width={20} height={50} alt='loading' />Shoes</Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'><Image src={shoes} width={20} height={50} alt='loading' />  Boy&#39;s Fashion</Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'><Image src={shoes} width={20} height={50} alt='loading' /> Girl&#39;s Fashion </Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'><Image src={shoes} width={20} height={50} alt='loading' /> Home & Kitchen</Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'><Image src={shoes} width={20} height={50} alt='loading' /> Sports</Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold flex gap-3 items-center'><Image src={shoes} width={20} height={50} alt='loading' /> Men&#39;s Fashion</Link>
            <Link href="" className='borders px-4 py-3 text-xs hover:bg-gray-100 font-semibold rounded-b-md flex gap-3 items-center'><Image src={shoes} width={20} height={50} alt='loading' /> Households</Link>




            </li></ul>
    </div>
  )
}

export default SideMenu