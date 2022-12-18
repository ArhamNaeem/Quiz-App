import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Topic from "./pages/Topic";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import Easy from "./pages/Question";
function App() {
  const [topics, setTopics] = useState<string[]>([]);

  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            {/* <FetchData /> */}
            <Route path="/" element={<Main />} />
            <Route path="/quest"
              element={<Easy topics={topics} setTopics={setTopics}/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
