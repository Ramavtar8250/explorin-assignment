import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import WorkItem from "./WorkItem";

const Activity = ({ activity ,check}) => {
  const [open, setOpen] = useState(false);
  const [checkActivity,setCheckActivity]=useState(check);

  useEffect(()=>{
    setCheckActivity(check);
  },[check])

  if (!activity) return null; // Add safety check for undefined activity

  const handleCheckboxChange = (e) => {
    setCheckActivity(!checkActivity);
    if (e.target.checked) {
      console.log("Checked activity:", activity);
    }
  };

  return (
    <>
      <div className="flex items-center justify-start space-x-6 p-2 rounded-md">
        <div className="w-2/4">
          <div className="ml-10 flex gap-2 items-center">
            <input
              type="checkbox"
              checked={checkActivity}
              className="h-4 w-4 text-blue-500"
              onChange={handleCheckboxChange} // Attach the handler
            />
            <p className="text-gray-700">{activity.name}</p>
          </div>
        </div>
        <div className="w-1/4 text-gray-600">{activity.rate}</div>
        <div className="w-1/4 text-gray-600 flex justify-between items-center">
          <div>{activity.total}</div>
          <div
            className="text-2xl text-sky-400 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
      </div>

      {open &&
        Array.isArray(activity.workItems) && // Check if workItems is an array
        activity.workItems.length > 0 && ( // Check if it has items
          activity.workItems.map((workItem, i) => (
            <WorkItem workItem={workItem} checkActivity={checkActivity} key={i} />
          ))
        )}
    </>
  );
};

export default Activity;
