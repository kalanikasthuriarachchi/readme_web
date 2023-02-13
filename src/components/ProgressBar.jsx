import React from "react";

function ProgressBar(props) {
  return (
    <div>
      <div className="flex flex-col gap-2 pt-3">
        <p className=" text-sm capitalize">{props.skillName}</p>
        <div className="bg-gray rounded">
          <div style={{ width: `${props.percentage}`}}  className={`bg-blue h-2 rounded`}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
