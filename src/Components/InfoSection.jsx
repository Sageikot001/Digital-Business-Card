import React from "react";
import Avater from "./Avater";
import Mail from "./Mail"
import LinkedIn from "./LinkedIn";


const InfoSection = () => {
  return (
    <div>
      <header>
        <Avater />
      </header>
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">Nsikak Ikot</h1>
        <h2 className="text-center font-medium text-amber-500 mt-2">Frontend Developer</h2>
        <p className="text-center mt-1 mb-4">ikotnsikak@gmail.com</p>
        
        <div className="flex justify-between ml-9 mr-8">
        
        <button className="flex bg-white text-black px-8 py-2 font-bold rounded-lg justify-center items-center gap-3 "><Mail /> Email</button>

        <button className="flex bg-sky-600 text-white px-8 py-2 font-bold rounded-lg justify-center items-center gap-3 "><LinkedIn /> LinkedIn</button>
        
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
