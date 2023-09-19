"use client";
import React, { useState } from "react";
import Ratings from "../components/ratings";

const Trending = () => {
  const [movieRating, setMovieRating] = useState(3);

  const handleRatingChange = (newRating: number) => {
    setMovieRating(newRating);
    // You can add logic here to save the rating to your database or perform other actions.
  };
  return (
    <div className="flex h-1/2 mb-4 mt-2 bg-white pt-4 pl-3">
      <div className="most-trending mr-2 border-red-950 rounded-md border p-6 w-1/5 min-w-[18vw]  bg-white hover:scale-[1.03] duration-500 h-[600px]">

        <div className="flex justify-center font-bold mb-4">Today&#39;s Offer</div>
        {/* <Image className="hover:scale-105 duration-500 rounded-lg overflow-hidden" src={koti} width={200} height={400} alt="we are comming" /> */}
        <div className="h-1/3">
          <img
            className="hover:scale-105 duration-500 rounded-lg overflow-hidden h-full w-full"
            src="/items/koti.jpeg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Ratings initialValue={movieRating} onChange={handleRatingChange} />
          <h4 className="text-xs font-bold">Happy Sailed Men Summer Trouser</h4>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            tempore explicabo ipsum recusandae consectetur natus ea sed, sunt
            rerum odit iusto quas et dolorum fugit quisquam deserunt dolores
            veritatis illum? Lorem ipsum dolor sit amet consectetur .
          </p>
          <div className="flex gap-3 items-center">
            <h3 className="text-orange-500">$1300.00</h3>{" "}
            <h3 className="text-xs line-through">$1500.00</h3>
          </div>
          <button className="text-xs bg-yellow-500 px-4 py-[6px] font-bold text-white rounded-md w-3/5 mt-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="other-trending flex flex-wrap gap-4">
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px]">
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
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px]">
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
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px] ">
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
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px]">
          <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
            <img src="/items/koti.jpeg" alt="" width={200} height={300} />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px]">
          <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
            <img src="/items/koti.jpeg" alt="" width={200} height={300} />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px]">
          <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
            <img src="/items/koti.jpeg" alt="" width={200} height={300} />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px]">
          <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
            <img src="/items/koti.jpeg" alt="" width={200} height={300} />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
        <div className="flex flex-col p-2 gap-2 hover:cursor-pointer bg-white h-64 rounded-md hover:scale-105 duration-500 w-[200px]">
          <div className="image rounded-md overflow-hidden hover:scale-105 duration-500 w-full h-1/2">
            <img src="/items/koti.jpeg" alt="" width={200} height={300} />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-bold text-xs">Men slip on shoes cassual </h3>
            <Ratings initialValue={movieRating} onChange={handleRatingChange} />

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
  );
};

export default Trending;
