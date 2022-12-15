import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Topic from "./pages/Topic";
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
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            {/* <FetchData /> */}
            <Route path="/" element={<Main />} />
            <Route path="/topic" element={<Topic/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
