import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Structure from "./Structure";

export default function Question() {
 const [qNumber, setQNumber] = useState(-1);

  const { data:easyQuestion, refetch:easyRefetch, isLoading:loadEasy, error:errorEasy } = useQuery(["question"], async () => {
    return await Axios.get(
      "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=1&difficulty=easy"
    ).then((res) => res.data);
  });
 
  return (
    <>

          <Structure data={easyQuestion} refetch={easyRefetch} isLoading={loadEasy} error={errorEasy} qNumber={qNumber} setQNumber={setQNumber} />
  
    </>
  );
}
