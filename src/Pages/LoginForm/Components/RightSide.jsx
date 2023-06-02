import React, { useState, useEffect } from "react";
import imgHirig from "../../../assets/hiring.png";
import imgWork from "../../../assets/work.png";
const Images = [imgHirig, imgWork];

function RightSide() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (position === 0) setPosition(-100);
      else if (position === -100) setPosition(0);
    }, 6000);
  }, [position]);

  return (
    <div className="hidden lg:visible lg:w-1/2 bg-[url('assets/FormBlueBackground.svg')] bg-cover rounded-r-[37px] lg:flex flex-col justify-between items-stretch overflow-hidden">
      <div
        className="w-[200%] flex items-center flex-grow duration-500 relative"
        style={{ left: `${position}%` }}
      >
        {Images.map((imgUrl) => (
          <div key={imgUrl} className="flex w-1/2 items-center justify-center">
            <img
              className="w-[450px] m-auto flex justify-center bg-white rounded-[20px]"
              src={imgUrl}
              alt="slider"
            ></img>
          </div>
        ))}
      </div>

      <div className="bg-blue w-full h-[133px] rounded-br-[37px] text-center text-white text-[18px] pt-5 px-16 flex flex-col items-center justify-between py-5">
        <p>Manage your all employee from one place.</p>

        <div className="flex gap-2">
          <span
            className={`p-1 flex w-fit rounded-full bg-white cursor-pointer shadow-sm ${position === 0 ? "bg-white" : "bg-[white]/60"
              }`}
            onClick={() => setPosition(0)}
          ></span>
          <span
            className={`p-1 flex w-fit rounded-full cursor-pointer shadow-sm ${position === -100 ? "bg-white" : "bg-[white]/60"
              }`}
            onClick={() => setPosition(-100)}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
