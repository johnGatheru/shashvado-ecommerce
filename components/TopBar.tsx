import Link from "next/link";
import React from "react";
import Image from "next/image"
import cart from "@/app/assets/sidebar/cart.svg"

const TopBar = () => {
  return (
    <>
      <div className="flex justify-between py-4 px-[9%] font-semibold text-textColor bg-white ">
        <div className="left-item">
          <ul>
            <li className="flex gap-3">
              <Link href="">Logo</Link>
              <Link href="">Home</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">Sport</Link>
            </li>
          </ul>
        </div>
        <div className=" right-item ">
          <ul>
            <li className="flex gap-3">
              <Link href="">Sign Up</Link>
              <Link href="">My Account</Link>
              <Link href="">
                <div className="relative">
                  <div className="w-[13px] h-[13px] absolute bg-red-500 rounded-full right-[-6px] top-[-2px] flex items-center justify-center text-white text-xs">5</div>
                <Image src={cart} width={30} height={20} alt="loading"/>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopBar;
