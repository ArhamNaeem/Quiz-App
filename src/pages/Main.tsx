import React from "react";
import { Link } from "react-router-dom";
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
        <div className="text-9xl text-center w-screen font-semibold text-white drop-shadow-3xl">
          Play now!
        </div>
        <div className="text-white font-semibold mt-14 text-3xl text-center p-3 w-screen h-50">
          <Link to="/topic" state={{ stateParam: "easy" }}>
            <div className="p-4 text-center drop-shadow-4xl shadow-3xl w-60 m-auto mb-5 rounded-lg cursor-pointer">
              Easy
            </div>
          </Link>
          <Link to="/topic" state={{ stateParam: "medium" }}>
            <div className="p-4 text-center drop-shadow-4xl shadow-3xl w-60 m-auto mb-5 rounded-lg  cursor-pointer">
              Medium
            </div>
          </Link>
          <Link to="/topic" state={{ stateParam: "hard" }}>
            <div className="p-4 rounded-lg text-center drop-shadow-4xl shadow-3xl w-60 m-auto cursor-pointer">
              Hard
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
