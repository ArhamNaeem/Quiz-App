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
  const [correctAns, setCorrectAns] = useState<string>("");
  const [question, setQuestion] = useState<string | null>(null);
  const [options, setOptions] = useState<Option | null>(null);
  const [btnState, setBtnState] = useState(true);
   const [qNumber, setQNumber] = useState(-1);
   const [score, setScore] = useState(0); 
    
  const getQuestion = () => {
    setQNumber(qNumber+1)
    setBtnState(!btnState);
      getOptions();
        setQuestion(data && data[0].question);
    refetch();
  };
  const getOptions = () => {
    const rand = Math.floor(Math.random() * 4)
    let opt = { op1: "", op2: "", op3: "", op4: "", };
    setCorrectAns(data && data[0].correctAnswer);
    console.log(correctAns);
    if (rand === 0) {
      opt = {
        op1: data && data[0].correctAnswer,
        op2: data && data[0].incorrectAnswers[0],
        op3: data && data[0].incorrectAnswers[1],
        op4: data && data[0].incorrectAnswers[2],
      };
    } else if (rand == 1) {
      opt = {
        op1: data && data[0].incorrectAnswers[0],
        op2: data && data[0].correctAnswer,
        op3: data && data[0].incorrectAnswers[1],
        op4: data && data[0].incorrectAnswers[2],
      };
    } else if (rand == 2) {
      opt = {
        op1: data && data[0].incorrectAnswers[1],
        op2: data && data[0].incorrectAnswers[0],
        op3: data && data[0].correctAnswer,
        op4: data && data[0].incorrectAnswers[2],
      };
    } else {
      opt = {
        op1: data && data[0].incorrectAnswers[2],
        op2: data && data[0].incorrectAnswers[0],
        op3: data && data[0].incorrectAnswers[1],
        op4: data && data[0].correctAnswer,
      };
    }
    setOptions((options) => ({
      ...opt,
    }));
  };

  const checkForAnswer = (option: string| undefined) => {
    if (!btnState) {
      console.log('option already selected')
      return false;
    }
    setBtnState(!btnState)
    console.log(option, correctAns);
    if (option === correctAns) {
      setScore(score + 1);
    }
}

    useEffect(() => {
            getQuestion();
        }, [isLoading]);

       if (isLoading) return <h1 className="text-center text-3xl">Loading..</h1>;
       if (error) return <h1 className="text-center text-3xl">Error</h1>;
  return (
    <>
      <div className="flex flex-wrap justify-evenly h-40 mt-2 text-6xl relative left-10 ">
        <div>Question: {qNumber}</div>
        <div>Score: {score}</div>
      </div>
      <div className="text-center h-96 p-10">
        <p className="text-lg">{question}</p>
        <ul className="mt-10 text-sm grid grid-rows-2 grid-cols-2 ">
          <li>
            <p
              className="p-5 cursor-pointer m-2 shadow-3xl  transition-all hover:bg-slate-100"
              onClick={() => checkForAnswer(options?.op1)}
            >
              {options?.op1}
            </p>
            <p
              className="p-5 m-2 shadow-3xl 
              transition-all cursor-pointer hover:bg-slate-100"
              onClick={() => checkForAnswer(options?.op2)}
            >
              {options?.op2}
            </p>
          </li>
          <li>
            <p
              className="p-5  m-2 cursor-pointer shadow-3xl  transition-all hover:bg-slate-100"
              onClick={() => checkForAnswer(options?.op3)}
            >
              {options?.op3}
            </p>
            <p
              className="p-5  m-2 shadow-3xl  cursor-pointer transition-all hover:bg-slate-100"
              onClick={() => checkForAnswer(options?.op4)}
            >
              {options?.op4}
            </p>
          </li>
        </ul>
      </div>
      <button
        className="shadow-3xl h-14 w-48 relative bottom-10 left-1/2"
        onClick={getQuestion}
        disabled={btnState}
      >
        Next
      </button>
    </>
  );
}
