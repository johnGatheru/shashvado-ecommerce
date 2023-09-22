import Link from "next/link";
import React from "react";
import Image from "next/image"
import cart from "@/app/assets/sidebar/cart.svg"

interface ChildComponentProps {
  onEvent1: () => void;

}

const TopBar:React.FC<ChildComponentProps> = ({ onEvent1 }) => {
  const showMenu=()=>{
onEvent1()
  }
  return (
    <>
      <div className="flex justify-between md:py-4 py-2 md:px-[9%] px-[2%] font-semibold text-textColor bg-white  w-full z-40 ">
      <div className="menu-bar cursor-pointer md:hidden flex gap-2 items-center" onClick={showMenu}>
          <Image src="/items/menu.svg" width={30} height={30} alt="loading"/>
      <Link href="">Logo</Link>

        </div>
        
        <div className="left-item flex items-center gap-3" >
       
          <ul>
            <li className=" gap-3 md:flex hidden">
            <Link href="">Logo</Link>
              <Link href="">Home</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">Sport</Link>
            </li>
          </ul>
        </div>
      
        <div className=" right-item flex items-center gap-2">
          <div className="hidden md:block"> <ul>
            <li className="flex gap-3">
              <Link href="">Sign Up</Link>
              <Link href="">My Account</Link>
             
            </li>
          </ul></div>
          <div className="md:hidden block">
            <Image src="/items/user.svg" width={20} height={50} alt="loading"/>
          </div>
          <div className="">
          <div className="relative">
                  <div className="w-[11px] h-[11px] absolute bg-red-500 rounded-full right-[-6px] top-[-2px] flex items-center justify-center text-white text-[10px]">5</div>
                <Image src={cart} width={20} height={20} alt="loading"/>
                </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default TopBar;
