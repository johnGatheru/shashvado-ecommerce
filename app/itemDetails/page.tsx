"use client";
import React, { useState } from "react";
import Image from "next/image";
import Ratings from "@/components/ratings";

const PageDetails = () => {
  const [movieRating, setMovieRating] = useState(3);

  const handleRatingChange = (newRating: number) => {
    setMovieRating(newRating);
    // You can add logic here to save the rating to your database or perform other actions.
  };
  return (
    <div className="bg-slate-100 px-[9%] h-screen w-full">
      <div className="flex">
        <div className="flex-1 ">
          {" "}
          <div className="flex justify-center mt-8">
            <div className="">
              <Image
                src="/items/dress.jpeg"
                width={300}
                height={300}
                alt="loading"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Image
              src="/items/dress.jpeg"
              width={100}
              height={100}
              alt="loading"
            />
            <Image
              src="/items/dress.jpeg"
              width={100}
              height={100}
              alt="loading"
            />
            <Image
              src="/items/dress.jpeg"
              width={100}
              height={100}
              alt="loading"
            />
            <Image
              src="/items/dress.jpeg"
              width={100}
              height={100}
              alt="loading"
            />
          </div>
        </div>

        <div className="flex-1 ">
          <div className="mt-8 flex flex-col">
            <h3>Women all times cassuals </h3>
          </div>
          <Ratings initialValue={movieRating} onChange={handleRatingChange} />

          <div className="flex gap-2">
            <div className=" p-2 rounded-md bg-gray-400"> In Stock</div>
          </div>
          <div className="price flex gap-3 items-center">
            {" "}
            <p className="text-orange-500">$89.09</p>{" "}
            <p className="text-xs line-through ">$102.88</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
