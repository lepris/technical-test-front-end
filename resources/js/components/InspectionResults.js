import React from 'react';

function InspectionResults() {
  return (
      <>
        <h2 className="mb-4">Inspection Results</h2>
        {/* Right section with three columns */}
        {/* First Column: Critical */}
        <div>
            <div className="font-bold">Critical</div>
            {/* List of broken parts */}
            {/* Button for more details */}

        </div>
        {/* Second Column: Moderate */}
        <div>
            <div className="font-bold">Moderate</div>
            {/* List of moderately broken parts */}
            {/* Button for more details */}
        </div>
    </>);
}

export default InspectionResults;
