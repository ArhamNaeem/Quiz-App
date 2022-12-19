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
          Quiz App
        </div>
        <div className="text-9xl text-center w-screen font-semibold text-white drop-shadow-3xl">
          Start now!
        </div>
        <div className="text-white font-semibold my-24 text-3xl text-center p-3 w-screen h-50">
          <Link to="/quest">
            <div className="p-4  drop-shadow-4xl shadow-3xl w-96 h-28 m-auto text-6xl mb-5 rounded-lg cursor-pointer">
              Start
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
