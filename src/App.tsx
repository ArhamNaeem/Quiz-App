// import "tailwindcss/dist/tailwind.css";
import React, { useEffect, useState } from "react";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import Axios from "axios";
import "./App.css";
import FetchData from "./FetchData";
function App() {
  const client = new QueryClient();
  return (
    <>
      {/* {FetchData} */}
      <QueryClientProvider client={client}>
        <FetchData />
      </QueryClientProvider>
    </>
  );
}

export default App;
