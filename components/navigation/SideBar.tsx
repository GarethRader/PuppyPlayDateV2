import React from "react";
import Widget from "./SideBarWidget";

const SideBar = () => {
  return (
    <div className="h-screen bg-blue-500">
      <div>
        OPTIONS
        <div className="grid grid-cols-1">
          {[...Array<number>(5)].map((i, idx) => (
            <div className="font-bold" key={idx}>
              <Widget name="poop" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
