import React from "react";
import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import Navbar from "./Header/Navbar/Navbar";
import routes from "./Routes/Routes";
import Footer from "./Footer/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Navbar />
      <div>{router}</div>
      <Footer />
    </>
  );
}

export default App;
