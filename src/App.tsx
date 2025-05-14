import { WobbleCard } from "./components/WobbleCard";

function App() {
  return (
    <main className="bg-neutral-950 h-screen w-screen flex gap-8 p-20">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
        THis is spotlight
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
        THis is spotlight
      </WobbleCard>
    </main>
  );
}

export default App;
