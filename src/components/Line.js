import React from "react";

const Line = ({ title, symbol }) => {
  return (
    <div
      className="line row-flex-center"
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <span className="text-in-line">
        <p>
          {symbol} {title}
        </p>
        <p className="none-unless-hover">Click to copy!</p>
      </span>
    </div>
  );
};

export default Line;
