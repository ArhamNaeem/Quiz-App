import React, { Dispatch, SetStateAction } from "react";
//currently no topic is being saved
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  topics: string[];
  setTopics: Dispatch<SetStateAction<string[]>>;
}

export default function Topic(props: Props) {
  const difficulty = useLocation().state.stateParam;
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="font-semibold text-3xl text-center mt-10 mb-10">
        Select you favorite topics
      </div>
      <div className="p-11 flex justify-center">
        <div className="border border-black flex flex-col text-2xl p-11 justify-center">
          <label>
            <input
              type="checkbox"
              name="GK"
              id="op1"
              className="m-5 ml-10"
              onChange={() => {
                props.topics.includes("General Knowledge")
                  ? props.setTopics(
                      props.topics.filter((topic:string) => topic != "General Knowledge")
                    )
                  : props.setTopics(props.topics.concat("General Knowledge"));
              }}
            />
            General Knowledge
          </label>
          <label>
            <input
              type="checkbox"
              name="History"
              id="op2"
              className="m-5 ml-10"
              // onChange={check}
              onChange={() => {
                props.topics.includes("History")
                  ? props.setTopics(props.topics.filter((topic:string) => topic != "History"))
                  : props.setTopics(props.topics.concat("History"));
              }}
            />
            History
          </label>
          <label>
            <input
              type="checkbox"
              name="Geography"
              id="op3"
              className="m-5 ml-10"
              onChange={() => {
                props.topics.includes("Geography")
                  ? props.setTopics(props.topics.filter((topic:string) => topic != "Geography"))
                  : props.setTopics(props.topics.concat("Geography"));
              }}
            />
            Geography
          </label>
          <label>
            <input
              type="checkbox"
              name="Science"
              id="op4"
              className="m-5 ml-10"
              onChange={() => {
                props.topics.includes("Science")
                  ? props.setTopics(props.topics.filter((topic:string) => topic != "Science"))
                  : props.setTopics(props.topics.concat("Science"));
              }}
            />
            Science
          </label>
          <label>
            <input
              type="checkbox"
              name="Sports"
              id="op5"
              className="m-5 ml-10"
              onChange={() => {
                props.topics.includes("Sports")
                  ? props.setTopics(props.topics.filter((topic: string) => topic != "Sports"))
                  : props.setTopics(props.topics.concat("Sports"));
              }}
            />
            Sports
          </label>
          <div className="mt-5 flex flex-wrap justify-center">
            <button
              className="p-4 text-center text-lg shadow-3xl w-28 rounded-md  mr-5 cursor-pointer"
              onClick={navigateHome}
            >
              Previous
            </button>
            <Link
              to={
                 "/quest"
              }
              state={{ stateParam: difficulty }}
            >
              <button className="p-4 text-lg text-center shadow-3xl w-28 rounded-md ml-5 cursor-pointer">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
      {console.log(props.topics)};
    </>
  );
}
