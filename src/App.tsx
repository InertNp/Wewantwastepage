import { WobbleCard } from "./components/WobbleCard";
import { skipData } from "./data/data";
import type { SkipTypes } from "./types/dataTypes";

const SKIP_IMAGE =
  "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"; // Example skip image from the site

function App() {
  return (
    <main className="no-scrollbar bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen w-screen overflow-hidden">
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
            <WobbleCard key={item.id} className="h-full flex flex-col">
              <div className="flex flex-col h-full w-full">
                <div className="flex justify-center w-full mb-4">
                  <div className="w-full">
                    <img
                      src={SKIP_IMAGE}
                      alt="Skip bin"
                      className="w-full h-40 object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-4 w-full mx-auto px-10 ">
                  {item.allows_heavy_waste && (
                    <div className="flex items-center gap-2 justify-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Heavy waste allowed
                      </span>
                    </div>
                  )}
                  {item.allowed_on_road ? (
                    <div className="flex items-center gap-2 justify-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 dark:bg-green-900">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        Road placement allowed
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-red-500 flex-shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                        Road placement not allowed
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-3 w-full">
                  Hire Period: {item.hire_period_days} days
                </p>
                <div className="flex items-center justify-between mb-3 px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 shadow-sm w-full">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {item.size}m³ Skip
                  </span>
                  <span className="text-lg font-bold text-white bg-purple-700 dark:bg-purple-500 px-4 py-1 rounded-full shadow-md border-2 border-purple-200 dark:border-purple-400">
                    £{item.price_before_vat}
                  </span>
                </div>
                <button className="w-full bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 font-semibold py-2 px-6 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-200 shadow-sm border border-purple-200 dark:border-purple-700 mt-auto">
                  Select this skip
                </button>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
