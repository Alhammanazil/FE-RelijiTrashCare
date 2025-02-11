import PropTypes from "prop-types";
import React from "react";

export const TypeFiOctagonSize24ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.48 2.66666H21.52L29.3333 10.48V21.52L21.52 29.3333H10.48L2.66666 21.52V10.48L10.48 2.66666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiOctagonSize24ColorWhite.propTypes = {
  color: PropTypes.string,
};
