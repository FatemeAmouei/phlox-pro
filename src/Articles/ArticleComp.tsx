import React from "react";

interface ArticleProps {
  width: string;
  height: string;
  color?: string;
  children?: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({
  width,
  height,
  color,
  children,
}) => {
  return (
    <div
      className="Article-container"
      style={{
        width,
        height,
        color,
      }}
    >
      {children}
    </div>
  );
};

export default Article;
