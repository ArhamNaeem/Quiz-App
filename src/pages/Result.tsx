import React from "react";
import { useNavigate } from "react-router-dom";
export default function Result(props: any) {
    const nav = useNavigate();
    const navigate = () => {
        nav('/');
    }
  return (
    <>
      <div className="flex flex-col items-center ">
        {" "}
        <div className="text-center text-6xl  mt-20">
          Score: {props.score} / 20
        </div>
        {props.score <= 7 ? (
          <div className="text-center text-2xl mt-24 ">
            Not bad! Keep increasing your knowledge
          </div>
        ) : props.score > 7 && props.score <= 14 ? (
          <div>Well done! Keep increasing your knowledge</div>
        ) : (
          <div>Excellent attempt! Keep increasing your knowledge</div>
        )}
        <button onClick={navigate} className="shadow-3xl p-5 text-xl w-36 m-28">
          Try again
        </button>
      </div>
    </>
  );
}
