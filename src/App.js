import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState} from "react";
import News from "./components/News.js";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App =()=>{
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 20;
  const country = "us";
  const[progress, setProgress]= useState(0);
  
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
          <Route
              path="/"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="FalconSight"
                  pageSize={ pageSize}
                  country={ country}
                  category="FalconSight"
                />
              }
            />
            <Route
              path="/world"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="world"
                  pageSize={ pageSize}
                  country={ country}
                  category="World"
                />
              }
            />
            <Route
              path="/nation"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="nation"
                  pageSize={ pageSize}
                  country={ country}
                  category="Nation"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="business"
                  pageSize={ pageSize}
                  country={ country}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="entertainment"
                  pageSize={ pageSize}
                  country={ country}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="science"
                  pageSize={ pageSize}
                  country={ country}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="sports"
                  pageSize={ pageSize}
                  country={ country}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={ setProgress} apiKey={ apiKey}
                  key="technology"
                  pageSize={ pageSize}
                  country={ country}
                  category="technology"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country={country}
                  category="health"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={ pageSize}
                  country={ country}
                  category="general"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
export default App;