import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Activity from "./Activity";

const Details = ({ entry ,isChecked}) => {
  const [open, setOpen] = useState(false);
  const [check,setCheck] = useState(isChecked);


  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    setCheck(!check)
    if (e.target.checked) {
      console.log("Checked entry:", entry);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-start space-x-6 mt-4 p-2 rounded-md">
        <div className="flex items-center space-x-2 w-2/4">
          <input
            type="checkbox"
            checked={check}
            className="h-4 w-4 text-blue-500"
            onChange={handleCheckboxChange} // Attach the handler here
          />
          <p className="text-gray-700">{entry?.name}</p>
        </div>
        <div className="w-1/4 text-gray-600">{entry?.rate}</div>
        <div className="w-1/4 text-gray-600 flex justify-between items-center">
          <div>{entry.total}</div>
          <div
            className="text-5xl text-sky-200 cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <FiMinus /> : <GoPlus />}
          </div>
        </div>
      </div>
      {open &&
        entry.activities &&
        entry.activities.length > 0 &&
        entry.activities.map((activity, i) => (
          <Activity activity={activity} check={check} key={i} />
        ))}
    </>
  );
};

export default Details;
