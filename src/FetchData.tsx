import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
export default function FetchData() {
    const { data } = useQuery(["question"], () => {
        return Axios.get(
            "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=1&difficulty=easy"
        ).then((res) => res.data)
    });
  interface Options {
    opt1: string;
    op2: string;
    opt3: string;
    opt4: string;
  }
  const [question, setQuestion] = useState<string | null>(null);
  const [options, setOptions] = useState<Options|null>(null);
  
  const getQuestion = () => {
    // console.log('here')
    setQuestion(data&& data[0].question)
  }
  // const getOptions = () => {
  //  const opt = {
  //    op1: data && data[0].correctAnswer,
  //    op2: data && data[0].incorrectAnswer[0],
  //    op3: data && data[0].incorrectAnswer[1],
  //    op4: data && data[0].incorrectAnswer[2],
  //  };
  //   setOptions(opt);
  // }
  
  return (
      <div>
      {/* question: */}
      <button onClick={getQuestion}>Question</button>
      {question}

      </div>
    );
}
