"use client";
import React, { useState } from "react";
import Ratings from "../components/ratings";

const MenDisolay = () => {
  const [movieRating, setMovieRating] = useState(3);

  const handleRatingChange = (newRating: number) => {
    setMovieRating(newRating);
    // You can add logic here to save the rating to your database or perform other actions.
  };
  return (
    <div>
      <div className=" bg-white  p-3">
        <div className="other-trending md:flex md:flex-wrap gap-4 grid grid-cols-2 ">
          <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 md:w-[200px] w-40 shadow-lg hover:shadow-gray-400">
            <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
              <img
                src="/items/dress.jpeg"
                alt=""
                width={200}
                height={300}
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
              <Ratings
                initialValue={movieRating}
                onChange={handleRatingChange}
              />

              <div className="price flex gap-3 items-center">
                {" "}
                <p className="text-orange-500">$89.09</p>{" "}
                <p className="text-xs line-through ">$102.88</p>
              </div>

              <button className="text-xs bg-yellow-500 px-4 py-[6px] font-bold text-white rounded-md w-3/5 mt-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 md:w-[200px] w-40 shadow-lg hover:shadow-gray-400">
            <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
              <img
                src="/items/shoes.jpeg"
                alt=""
                width={200}
                height={300}
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
              <Ratings
                initialValue={movieRating}
                onChange={handleRatingChange}
              />

              <div className="price flex gap-3 items-center">
                {" "}
                <p className="text-orange-500">$89.09</p>{" "}
                <p className="text-xs line-through ">$102.88</p>
              </div>

              <button className="text-xs bg-yellow-500 px-4 py-[6px] font-bold text-white rounded-md w-3/5 mt-2">
                Buy Now
              </button>
            </div>
          </div>{" "}
          <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 md:w-[200px] w-40 shadow-lg hover:shadow-gray-400">
            <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
              <img
                src="/items/shoes2.jpeg"
                alt=""
                width={200}
                height={300}
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
              <Ratings
                initialValue={movieRating}
                onChange={handleRatingChange}
              />

              <div className="price flex gap-3 items-center">
                {" "}
                <p className="text-orange-500">$89.09</p>{" "}
                <p className="text-xs line-through ">$102.88</p>
              </div>

              <button className="text-xs bg-yellow-500 px-4 py-[6px] font-bold text-white rounded-md w-3/5 mt-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 md:w-[200px] w-40 shadow-lg hover:shadow-gray-400">
            <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
              <img src="/items/koti.jpeg" alt="" width={200} height={300} />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
              <Ratings
                initialValue={movieRating}
                onChange={handleRatingChange}
              />

              <div className="price flex gap-3 items-center">
                {" "}
                <p className="text-orange-500">$89.09</p>{" "}
                <p className="text-xs line-through ">$102.88</p>
              </div>

              <button className="text-xs bg-yellow-500 px-4 py-[6px] font-bold text-white rounded-md w-3/5 mt-2">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 md:w-[200px] w-40 shadow-lg hover:shadow-gray-400">
            <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
              <img src="/items/koti.jpeg" alt="" width={200} height={300} />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
              <Ratings
                initialValue={movieRating}
                onChange={handleRatingChange}
              />

              <div className="price flex gap-3 items-center">
                {" "}
                <p className="text-orange-500">$89.09</p>{" "}
                <p className="text-xs line-through ">$102.88</p>
              </div>

              <button className="text-xs bg-yellow-500 px-4 py-[6px] font-bold text-white rounded-md w-3/5 mt-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenDisolay;
