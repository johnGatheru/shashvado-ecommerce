import React from "react";
import Image from "next/image";
import SearchIcon from "../app/assets/search.svg"

const TopSearch = () => {
  return (
    <>
      <div className="secondary-blue w-full px-[7%] h-1/3 overflow-hidden flex justify-between">
        <div className="left-search flex flex-col primarily px-4 py-2 w-1/6 rounded-t-xl mt-4">
          <h3 className="font-semibold">All Categories</h3>
          <p className="text-xs"> Available categories</p>
        </div>
        <div className="bg-white w-1/3 h-10 rounded-xl mt-4 flex items-center justify-between pl-3">
          <div className="flex items-center gap-1"> 
          <Image
            src={SearchIcon}
            width={25}
            height={25}
            alt="loading"
            
          />
          <input
              className="w-4/5 rounded-xl py-2 outline-none"
              type="text"
              placeholder="Search product"
            />
          </div>
         
          <div className="flex">
        
            
            <button className="primarily h-[41px] px-4 rounded-r-xl">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSearch;
