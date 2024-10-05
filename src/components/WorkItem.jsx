import React, { useEffect, useState } from "react";

const WorkItem = ({ workItem ,checkActivity}) => {
  const [checkWork,setCheckWork]=useState(checkActivity);

  useEffect(()=>{
    setCheckWork(checkActivity);
  },[checkActivity])

  const handleCheckboxChange = (e) => {
    setCheckWork(!checkWork);
    if (e.target.checked) {
      console.log("Checked work item:", workItem);
    }
  };

  return (
    <div className="flex items-center justify-start space-x-6 p-2 rounded-md">
      <div className="w-3/4">
        <div className="ml-20 flex gap-2 items-center">
          <input
            type="checkbox"
            checked={ checkActivity ?checkActivity:checkWork}
            className="h-4 w-4 text-blue-500"
            onChange={handleCheckboxChange} // Attach the handler
          />
          <p className="text-gray-700">{workItem.name}</p>
        </div>
      </div>

      <div className="w-1/4 text-gray-600">
        <div className="ml-[8px]">{workItem.total}</div>
      </div>
    </div>
  );
};

export default WorkItem;
