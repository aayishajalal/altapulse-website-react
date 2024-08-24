import React from "react";

const Button = ({ name}) => {
  return (
    <>
      <div
        className={`bg-primary text-white rounded-lg px-3 py-2 text-xs lg:px-4 lg:text-sm hover:bg-secondary`}
      >
        {name}
      </div>
    </>
  );
};

export default Button;
