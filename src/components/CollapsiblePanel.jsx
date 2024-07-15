import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const CollapsiblePanel = ({title,discription ,collapsibleState=true}) => {
  const [collapse, setCollapse] = useState(collapsibleState);
  return (
    <div className="collapsible-panel">
      <div
        onClick={() => setCollapse(!collapse)}
        className="collapsible-panel-header"
      >
        <span>{title}</span>
        <span> {collapse ? <FaAngleDown /> : <FaAngleUp />}</span>
      </div>
      {collapse ? (
        <div className="collapsible-panel-content">
          <p>{discription}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CollapsiblePanel;
