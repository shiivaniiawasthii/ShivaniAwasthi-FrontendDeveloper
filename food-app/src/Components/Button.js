import React from "react";

function Button({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-full h-12 px-4 border border-gray-300  text-gray-600  font-bold text-center align-center py-2 mt-4 ml-2 "
    >
      {children}
    </div>
  );
}

export default Button;
