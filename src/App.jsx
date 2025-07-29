import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import heroImg from "./assets/images/page_1_img_1.jpeg";
import curatorialHouse from "./assets/images/page_5_img_1.jpeg";
import vueMer from "./assets/images/page_5_img_2.jpeg";
import g21Residences from "./assets/images/page_5_img_3.jpeg";

function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Piquexel Workshop</h1>
      <p className="text-lg max-w-xl mx-auto">
        Exquisitely Unique Designs for Interiors and Architecture
      </p>
      <Link to="/about" className="block mt-6 text-blue-600 underline">Learn more about us</Link>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-white text-gray-900 font-sans p-10">
      <h1 className="text-3xl font-bold mb-6">About PIQUEXEL</h1>
      <p className="max-w-4xl mx-auto text-lg leading-relaxed">
        PIQUEXEL is a registered and licensed design firm focused on the planning,
        documentation, and management of small to large-scale buildings and interiors.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
