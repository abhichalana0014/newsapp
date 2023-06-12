import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App=()=>{
  const [progress, setProgress] = useState(0)
  
  const pageSize = 9;
  const apiKey = "c0162a651dd14208823f3c69fc3e11dd";
  
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}
export default App;