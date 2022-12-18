import React, {
  Suspense,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Result from "../pages/Result";
import { useLocation } from "react-router-dom";
// import Structure from "./Structure";
const Structure = React.lazy(() => import("./Structure"));

export default function Question() {
  const [qNumber, setQNumber] = useState<number>(-1);
  const [score , setScore] = useState<number>(0);

  const {
    data: easyQuestion,
    refetch: easyRefetch,
    isLoading: loadEasy,
    error: errorEasy,
  } = useQuery(["question"], async () => {
    return await Axios.get(
      "https://the-trivia-api.com/api/questions?categories=general_knowledge,science,geography,history&limit=1&difficulty=easy"
    ).then((res) => res.data);
  });

  const {
    data: medQuestion,
    refetch: medRefetch,
    isLoading: loadMed,
    error: errorMed,
  } = useQuery(["question"], async () => {
    return await Axios.get(
      "https://the-trivia-api.com/api/questions?categories=general_knowledge,science,geography,history&limit=1&difficulty=medium"
    ).then((res) => res.data);
  });

  const {
    data: hardQuestion,
    refetch: hardRefetch,
    isLoading: loadHard,
    error: errorHard,
  } = useQuery(["question"], async () => {
    return await Axios.get(
      "https://the-trivia-api.com/api/questions?categories=general_knowledge,science,geography,history&limit=1&difficulty=hard"
    ).then((res) => res.data);
  });

  return (
    <Suspense fallback={<div>Loading..</div>}>
      {qNumber <= 7 ? (
        <Structure
          data={easyQuestion}
          refetch={easyRefetch}
          isLoading={loadEasy}
          error={errorEasy}
          qNumber={qNumber}
          setQNumber={setQNumber}
          score={score}
          setScore={setScore}
        />
      ) : qNumber > 7 && qNumber <= 12 ? (
        <Structure
          data={medQuestion}
          refetch={medRefetch}
          isLoading={loadMed}
          error={errorMed}
          qNumber={qNumber}
          setQNumber={setQNumber}
          score={score}
          setScore={setScore}
        />
      ) : qNumber > 12 && qNumber <= 20 ? (
        <Structure
          data={hardQuestion}
          refetch={hardRefetch}
          isLoading={loadHard}
          error={errorHard}
          qNumber={qNumber}
          setQNumber={setQNumber}
          score={score}
          setScore={setScore}
        />
      ) : (
              <Result score={score} />
      )}
    </Suspense>
  );
}
