import React from "react";
import Image from "next/image";
import SearchIcon from "../app/assets/search.svg"

const TopSearch = () => {
  return (
    <>
      <div className="bg-[#813588] w-full md:px-[9%] px-[2%] h-1/3 overflow-hidden flex justify-between relative">
        <div className="left-search flex-col primarily px-4 py-2 w-1/6 rounded-t-xl mt-4 hidden md:block">
          <h3 className="font-semibold">All Categories</h3>
          <p className="text-xs"> Available categories</p>
        </div>
        <div className="bg-white md:w-1/3 w-full md:h-10 rounded-xl md:mt-4 my-2 flex items-center justify-between pl-3">
          <div className="flex items-center gap-1"> 
          <Image
            src={SearchIcon}
            width={25}
            height={25}
            alt="loading"
            
          />
          <input
              className="md:w-4/5 w-full rounded-xl md:py-2 py-1 outline-none"
              type="text"
              placeholder="Search product"
            />
          </div>
         
          <div className="flex">
        
            
            <button className="bg-yellow-500 md:h-[41px] py-1 px-4 rounded-r-xl text-white font-bold">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSearch;
