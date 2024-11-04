import React from "react";

interface ShopcompProps {
  width: string;
  height: string;
  children?: React.ReactNode;
}

const Shopcomp: React.FC<ShopcompProps> = ({
  width,
  height,

  children,
}) => {
  return (
    <div
      className="Shopcomp-container"
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
};

export default Shopcomp;
