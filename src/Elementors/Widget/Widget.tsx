import React from "react";

interface WidgetProps {
  width: string;
  height: string;
  color?: string;
  children?: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({ width, height, color, children }) => {
  return (
    <div
      className="widget-container"
      style={{
        width: width,
        height: height,
        backgroundColor: color || "transparent",
      }}
    >
      {children}
    </div>
  );
};

export default Widget;
