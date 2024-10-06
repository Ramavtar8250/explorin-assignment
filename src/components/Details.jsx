import React, { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Activity from "./Activity";

const Details = ({ entry, isChecked }) => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(isChecked);
  const [activityChecks, setActivityChecks] = useState({});

  useEffect(() => {
    // Check if all activities are checked to update the details checkbox
    const allChecked = entry.activities.every((activity) => activityChecks[activity.id]);
    setCheck(allChecked);
  }, [activityChecks, entry.activities]);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setCheck(checked);

    // Update all activity checks based on details checkbox state
    const updatedActivityChecks = {};
    entry.activities.forEach((activity) => {
      updatedActivityChecks[activity.id] = checked;
    });
    setActivityChecks(updatedActivityChecks);
  };

  const handleActivityChange = (id, checked) => {
    setActivityChecks((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <>
      <div className="w-full flex items-center justify-start space-x-6 mt-4 p-2 rounded-md">
        <div className="flex items-center space-x-2 w-2/4">
          <input
            type="checkbox"
            checked={check}
            className="h-4 w-4 text-blue-500"
            onChange={handleCheckboxChange}
          />
          <p className="text-gray-700">{entry?.name}</p>
        </div>
        <div className="w-1/4 text-gray-600">{entry?.rate}</div>
        <div className="w-1/4 text-gray-600 flex justify-between items-center">
          <div>{entry.total}</div>
          <div
            className="text-5xl text-sky-200 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiMinus /> : <GoPlus />}
          </div>
        </div>
      </div>
      {open &&
        entry.activities &&
        entry.activities.length > 0 &&
        entry.activities.map((activity, i) => (
          <Activity
            key={activity.id}
            activity={activity}
            check={activityChecks[activity.id] || false}
            onActivityChange={handleActivityChange}
          />
        ))}
    </>
  );
};

export default Details;
