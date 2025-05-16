import { CgArrowRight, CgClose } from "react-icons/cg";
import { FaPoundSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { WobbleCard } from "./components/WobbleCard";
import { skipData } from "./data/data";
import type { SkipTypes } from "./types/dataTypes";

const SKIP_IMAGE =
  "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"; // Example skip image from the site

function App() {
  return (
    <main className="no-scrollbar min-h-screen w-screen max-h-screen max-w-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 py-16 no-scrollbar overflow-hidden">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl font-semibold text-center mb-2 text-gray-900 dark:text-white tracking-tight">
            Choose Your Skip Size
          </h1>
          <h3 className="text-center text-purple-600 dark:text-purple-400 text-lg font-semibold mb-2">
            Fast, Reliable, and Eco-Friendly Skip Hire
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 text-base font-light max-w-2xl">
            Select the skip size that best suits your needs. We make waste
            removal easy and responsible for businesses and homes alike.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skipData.map((item: SkipTypes) => (
            <WobbleCard
              key={item.id}
              containerClassName={`hover:border-4 border-purple-600  cursor-pointer
                rounded-lg`}
            >
              <div className="w-full ">
                <img
                  src={SKIP_IMAGE}
                  alt="Skip bin"
                  className="w-full h-40 object-cover rounded-lg rounded-b-none"
                />
              </div>
              <section className="dark:text-white flex flex-col px-5 py-7">
                <p className="text-2xl">
                  {item.size}m<sup>3</sup> Skip
                </p>
                <p
                  className={`flex flex-row items-center ${
                    item.allows_heavy_waste ? "text-green-500" : "text-red-400"
                  }`}
                >
                  {item.allows_heavy_waste ? (
                    <TiTick className={""} size={25} />
                  ) : (
                    <CgClose className="" size={25} />
                  )}
                  {`Heavy waste ${
                    item.allows_heavy_waste ? "allowed" : "not allowed"
                  }`}
                </p>
                <p
                  className={`flex flex-row items-center ${
                    item.allowed_on_road ? "text-green-500" : "text-red-400"
                  }`}
                >
                  {item.allowed_on_road ? (
                    <TiTick className={""} size={25} />
                  ) : (
                    <CgClose className="" size={25} />
                  )}
                  {`Road placement ${
                    item.allowed_on_road ? "allowed" : "not allowed"
                  }`}
                </p>
                <p className="flex items-center flex-row text-2xl text-purple-300 ">
                  <FaPoundSign /> {item.price_before_vat}
                </p>
                <p className="text-[12px] font-light">
                  Hire Period is {item.hire_period_days} Days
                </p>
                <button className=" bg-purple-600 py-4 mt-2 flex items-center justify-center gap-2 rounded-lg font-semibold hover:bg-purple-900">
                  Select this skip <CgArrowRight size={25} />
                </button>
              </section>
            </WobbleCard>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
