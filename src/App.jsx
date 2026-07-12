import React from 'react'
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data />} /> */}
      </Routes>
      <Footer />
    </>
  )
}
