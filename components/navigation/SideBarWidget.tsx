import React from "react";

type TSideBarWidgetProps = {
  name: string;
};

const SideBarWidget = (props: TSideBarWidgetProps) => {
  return (
    <div>
      <div className="hover:bg-blue-400">Widget {props.name}</div>
    </div>
  );
};

export default SideBarWidget;
