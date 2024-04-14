import React from "react";

function Modal({ isOpen, onClose, src, alt, mealName, strInstructions, para }) {
  // Conditional rendering of modal based on isOpen prop
  if (!isOpen) return null;
  const steps = strInstructions.split(/\d+\./).filter((step) => step.trim());

  console.log(para, "para");
  return (
    <div className="fixed  top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg flex w-3/4 h-5/6">
        <div className="w-1/2 p-3  border-grey-500 ">
          {" "}
          <h1 className="font-bold text-10 ml-5 font-sans text-6xl mb-8">
            {mealName}
          </h1>
          <img className="w-110 h-80 p-4 " src={src} alt={alt}></img>
          <p className="font-bold text-3xl ">Ingredients</p>
          <p className=" mt-4 mb-2 font-bold text-zinc-800 text-1xl">{para}</p>
          <button
            className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="w-1/2 rounded-lg  overflow-y-auto p-5">
          <p className="font-bold text-3xl ">Instructions</p>
          <ul>
            {steps.map((step, index) => (
              <li
                key={index}
                className=" mt-4 mb-2 font-bold  text-1xl border-gray-300  text-gray-600"
              >
                {/* Adding the step number and a period */}
                <span className="font-bold  ">{index + 1}.</span> {step.trim()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
