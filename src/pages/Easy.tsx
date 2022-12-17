import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export default function Easy() {
  const { data, refetch, isLoading, error } = useQuery(["question"], async () => {
    return await Axios.get(
      "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=1&difficulty=easy"
    ).then((res) => res.data);
  });
  interface Option {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    }
  const [question, setQuestion] = useState<string | null>(null);
  const [options, setOptions] = useState<Option | null>(null);
 
    
    const getQuestion = () => {
        getOptions();
        setQuestion(data && data[0].question);
    refetch();
  };
  const getOptions = () => {
    // console.log("data", data);
    const opt = {
      op1: data && data[0].correctAnswer,
      op2: data && data[0].incorrectAnswers[0],
      op3: data && data[0].incorrectAnswers[1],
      op4: data && data[0].incorrectAnswers[2],
    };
    setOptions((options) => ({
      ...opt,
    }));
  };
    useEffect(() => {
            getQuestion();
        }, [isLoading]);

       if (isLoading) return <h1 className="text-center text-3xl">Loading..</h1>;
       if (error) return <h1 className="text-center text-3xl">Error</h1>;
  return (
    <>
      <div className="text-center h-96 p-10">
        <p className="text-lg">{question}</p>
        <ul className="mt-10 text-sm grid grid-rows-2 grid-cols-2 ">
          <li>
            <p className="p-5 cursor-pointer m-2 shadow-3xl  transition-all hover:bg-slate-100">
              {options?.op1}
            </p>
            <p
              className="p-5 m-2 shadow-3xl 
              transition-all cursor-pointer hover:bg-slate-100"
            >
              {options?.op2}
            </p>
          </li>
          <li>
            <p className="p-5  m-2 cursor-pointer shadow-3xl  transition-all hover:bg-slate-100">
              {options?.op3}
            </p>
            <p className="p-5  m-2 shadow-3xl  cursor-pointer transition-all hover:bg-slate-100">
              {options?.op4}
            </p>
          </li>
        </ul>
      </div>
      <button className="shadow-3xl h-14 w-48 relative bottom-10 left-1/2" onClick={getQuestion}>
        Next
      </button>
    </>
  );
}
