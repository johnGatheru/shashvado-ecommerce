import MenCategory from "@/components/mencategory";
import Carousel from "@/components/carousel";
import TopSearch from "@/components/TopSearch";
import SideMenu from "@/components/SideMenu";
import TopBar from "@/components/TopBar";
import Trending from "@/components/trending";
import CaroselSmall from "@/components/caroselSmall";
import MenDisplay from "@/components/mendisplay";
import Logos from "@/components/logos";

export default function Home() {
  return (
    <main className="bg-slate-100 ">
      <TopBar />
      <TopSearch />
      <div className="carousel px-[9%]">
        <div className="flex">
          <div className="flex flex-col w-[22.3vw]">
            {" "}
            <SideMenu />
          </div>
          <div className="flex flex-col w-[70vw] mx-2 h-3/6 overflow-hidden">
            <Carousel />
          </div>
          <div className="bg-white rounded-b-lg w-[25vw] px-6 py-2 gap-4 ">
            <div className="flex items-center gap-3 mt-3">
              <div className="w-16 h-16 bg-yellow-500 rounded-full"></div>
              <div className="">
                <h2 className="font-bold">Pick Centers</h2>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-16 h-16 bg-yellow-500 rounded-full"></div>
              <div className="">
                <h2 className="font-bold">Pick Centers</h2>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur .{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-16 h-16 bg-yellow-500 rounded-full"></div>
              <div className="">
                <h2 className="font-bold">Pick Centers</h2>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur.{" "}
                </p>
              </div>
            </div>
            <div className="caro-small h-20 overflow-none">
              <CaroselSmall />
            </div>
          </div>
        </div>
        <div className="fashion-logo py-2 flex justify-center w-full bg-white my-4">
          <Logos />
        </div>
        <div className="trending">
          <div className="flex gap-1 items-center">
            <div className="rounded-full w-4 h-4 bg-sky-950"></div>
            <h3 className="font-bold ">Trending Product</h3>
          </div>
          <div className="mb-4">
            {" "}
            <Trending />
          </div>
        </div>
        <div className="men-category mb-2">
          <MenCategory />
          <MenDisplay />
        </div>
        <div className="women-display ">
          <div className="w-full py-2 px-2 font-bold bg-white rounded-md mb-2 flex justify-between items-center">
            <p className="text-orange-500">Women Category</p>
            <button className="text-xs flex items-center gap-1 hover:cursor-pointer text-orange-500 w-fit">
              View All{" "}
              <img src="/items/handright.svg" alt="loading" width={20} />
            </button>
          </div>
          <MenDisplay />
        </div>
        <div className="Kids mt-2">
          <div className="w-full py-2 px-2 font-bold bg-white rounded-md mb-2 flex justify-between items-center">
            <p className="text-orange-500">Kids Category</p>
            <button className="text-xs flex items-center gap-1 hover:cursor-pointer text-orange-500 w-fit">
              View All{" "}
              <img src="/items/handright.svg" alt="loading" width={20} />
            </button>
          </div>
          <MenDisplay />

        </div>
      </div>
      <div className="footer px-[9%] bg-black py-4 mt-3">

      </div>
    </main>
  );
}
