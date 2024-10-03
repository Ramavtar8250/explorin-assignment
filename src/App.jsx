import { useState } from "react";

import Others from "./components/Others";
import Overview from "./components/Overview";

function App() {
  const [other, setOthers] = useState(false);

  return (
    <div className="w-full">
      <div className="w-11/12 my-4 mx-auto">
        <div className="flex justify-between">
          <h2 className=" text-3xl">{"<"} Create Workorder</h2>
          <button className=" bg-sky-400 px-8 rounded-md py-1 text-white text-xl">
            Save
          </button>
        </div>

        <div className="w-[40%] flex justify-around mt-12 items-center">
          <button
            className={`w-[50%] border-b-2 p-3 ${
              !other ? "border-black font-bold" : "border-gray-400"
            }`}
            onClick={() => setOthers(false)}
          >
            Overview
          </button>
          <button
            className={`w-[50%] border-b-2 p-3 ${
              other ? "border-black font-bold " : "border-gray-400"
            }`}
            onClick={() => setOthers(true)}
          >
            Others
          </button>
        </div>

        {/* Conditional Rendering */}
        {other ? <Others /> : <Overview />}
      </div>
    </div>
  );
}

export default App;
