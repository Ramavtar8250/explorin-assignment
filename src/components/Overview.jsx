import React, { useState } from "react";
import Details from "./Details";
import { entries } from "../constant/data"; 

const Overview = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Update the checkbox state

    if (e.target.checked) {
      console.log("Checked entries:", entries); // Log the entries data when checked
    }
  };

  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-start space-x-6 border-b bg-sky-100 p-4 rounded-md shadow-md">
        {/* Checkbox and Packages */}
        <div className="flex items-center space-x-2 w-2/4">
          <input
            type="checkbox"
            name="package"
            id="package"
            className="h-4 w-4 text-blue-500"
            onChange={handleCheckboxChange} // Attach the handler here
            checked={isChecked} // Set the checkbox state
          />
          <label htmlFor="package" className="text-lg font-medium text-gray-700">
            Packages
          </label>
        </div>

        {/* Rate */}
        <div className="w-1/4">
          <p className="text-lg text-gray-600">
            Rate <i className="text-sm text-gray-400">{"(in sqft)"}</i>
          </p>
        </div>

        {/* Total */}
        <div className="w-1/4">
          <p className="text-lg font-semibold text-gray-700">Total</p>
        </div>
      </div>

      {/* Additional example row for multiple entries */}
      {entries.map((entry, i) => (
        <Details key={i} entry={entry} />
      ))}
    </div>
  );
};

export default Overview;
