import React from "react";

function Footer() {
  return (
    <div className="bg-black text-gray-400 p-10 mt-12 ">
      <div className="ml-40">
        <div className="flex  -ml-4">
          <img className="w-12 h-12" src="/footer-logo.jpg" alt="logo"></img>
          <div>
            {" "}
            <h1 className="font-bold text-2xl text-white mt-1">Swiggy </h1>
          </div>
        </div>

        <p>© 2024 Bundl Technologies Pvt. Ltd</p>
      </div>
    </div>
  );
}

export default Footer;
