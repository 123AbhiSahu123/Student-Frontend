import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";


export default function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

