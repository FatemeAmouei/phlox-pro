import React from "react";
import { circleProps } from "./Circle.types";
import "./Circle.css";

function Circle({
  width,
  height,
  top,
  left,
  bottom,
  right,
  color,
  backgroundImage,
  opacity,
  border,
  borderRadius,
  zIndex,
}: circleProps) {
  return (
    <>
      <div
        className="header-circle"
        style={{
          width,
          height,
          top,
          left,
          bottom,
          right,
          backgroundColor: color,
          backgroundImage: backgroundImage,
          opacity,
          border,
          borderRadius,
          zIndex,
        }}
      ></div>
    </>
  );
}

export default Circle;
