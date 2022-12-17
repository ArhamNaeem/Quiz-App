import React from "react";
//currently no topic is being saved
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
export default function Topic() {
  const difficulty = useLocation().state.stateParam;
  const navigate = useNavigate();
  const [topics, setTopics] = useState<string[]>([]);
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
                topics.includes("General Knowledge")
                  ? setTopics(
                      topics.filter((topic) => topic != "General Knowledge")
                    )
                  : setTopics(topics.concat("General Knowledge"));
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
                topics.includes("History")
                  ? setTopics(topics.filter((topic) => topic != "History"))
                  : setTopics(topics.concat("History"));
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
                topics.includes("Geography")
                  ? setTopics(topics.filter((topic) => topic != "Geography"))
                  : setTopics(topics.concat("Geography"));
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
                topics.includes("Science")
                  ? setTopics(topics.filter((topic) => topic != "Science"))
                  : setTopics(topics.concat("Science"));
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
                topics.includes("Sports")
                  ? setTopics(topics.filter((topic) => topic != "Sports"))
                  : setTopics(topics.concat("Sports"));
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
                difficulty === "easy"
                  ? "/quest"
                  : difficulty === "medium"
                  ? "/quest"
                  : "/quest"
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
    </>
  );
}
