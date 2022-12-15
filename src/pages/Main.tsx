import React from "react";

export default function Main() {
  return (
    <>
      <div className="container h-screen w-screen">
        <div
          className="
          text-center text-7xl font-bold w-screen h-28 text-white drop-shadow-3xl mt-5"
        >
          Quiz Game
        </div>
        <div className="text-8xl text-center font-semibold text-white drop-shadow-3xl">
          Play now!
        </div>
        <div className="text-white font-semibold mt-16 text-3xl text-center p-3 w-screen h-50">
          <ul>
            <li className="p-4 drop-shadow-3xl shadow-3xl w-52 m-auto mb-5 cursor-pointer">
              Easy
            </li>
            <li className="p-4 drop-shadow-3xl shadow-3xl w-52 m-auto mb-5 cursor-pointer">
              Medium
            </li>
            <li className="p-4 drop-shadow-3xl border shadow-3xl w-52 m-auto cursor-pointer">
              Hard
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
