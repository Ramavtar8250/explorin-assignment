import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import WorkItem from "./WorkItem";

const Activity = ({ activity, check, onActivityChange }) => {
  const [open, setOpen] = useState(false);
  const [checkActivity, setCheckActivity] = useState(check);
  const [workItemChecks, setWorkItemChecks] = useState({});

  useEffect(() => {
    setCheckActivity(check);
  }, [check]);

  useEffect(() => {
    const allChecked = activity.workItems.every((item) => workItemChecks[item.id]);
    setCheckActivity(allChecked);
    onActivityChange(activity.id, allChecked); // Notify parent of activity state
  }, [workItemChecks, activity.workItems,onActivityChange]);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setCheckActivity(checked);

    // Update workItemChecks based on activity checkbox state
    const updatedWorkItemChecks = {};
    activity.workItems.forEach(item => {
      updatedWorkItemChecks[item.id] = checked;
    });
    setWorkItemChecks(updatedWorkItemChecks);
  };

  const handleWorkItemChange = (id, checked) => {
    setWorkItemChecks((prev) => ({
      ...prev,
      [id]: checked,
    }));
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
              onChange={handleCheckboxChange}
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

      {open && Array.isArray(activity.workItems) && activity.workItems.length > 0 &&
        activity.workItems.map((workItem) => (
          <WorkItem
            key={workItem.id}
            workItem={workItem}
            checkActivity={workItemChecks[workItem.id] || false}
            onWorkItemChange={handleWorkItemChange}
          />
        ))}
    </>
  );
};

export default Activity;
