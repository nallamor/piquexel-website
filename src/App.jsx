// PIQUEXEL WEBSITE – Final Build with All Pages

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import heroImg from "./assets/images/page_1_img_1.jpeg";
import curatorialHouse from "./assets/images/page_5_img_1.jpeg";
import vueMer from "./assets/images/page_5_img_2.jpeg";
import g21Residences from "./assets/images/page_5_img_3.jpeg";
import interiorConcepts from "./assets/images/page_3_img_1.jpeg";
import buildingDesigns from "./assets/images/page_4_img_1.jpeg";
import urbanPlanning from "./assets/images/page_4_img_2.jpeg";
import adminProject from "./assets/images/page_4_img_3.jpeg";
import contactBg from "./assets/images/page_6_img_1.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">PIQUEXEL</Link>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-black">Services</Link>
          <Link to="/projects" className="text-gray-700 hover:text-black">Projects</Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
        </div>

        {/* Hamburger icon on mobile */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col gap-6">
          <button className="self-end mb-4" onClick={closeMenu}>
            <X size={24} />
          </button>
          <Link to="/about" onClick={closeMenu} className="text-gray-800 hover:text-black">About</Link>
          <Link to="/services" onClick={closeMenu} className="text-gray-800 hover:text-black">Services</Link>
          <Link to="/projects" onClick={closeMenu} className="text-gray-800 hover:text-black">Projects</Link>
          <Link to="/contact" onClick={closeMenu} className="text-gray-800 hover:text-black">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center text-white" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest uppercase mb-4">Piquexel Workshop</h1>
        <p className="text-xl md:text-2xl italic max-w-xl">Exquisitely Unique Designs for Interiors and Architecture</p>
      </section>
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-4xl text-lg leading-relaxed">PIQUEXEL is a registered and licensed design firm focused on planning, documentation, and management of buildings and interiors. We blend technology with artistry, offering detailed documentation, 3D models, and virtual experiences. Based in Gold Coast and Hyderabad, we serve clients across continents.</p>
        <Link to="/about" className="inline-block mt-6 text-blue-600 underline hover:text-blue-800">Learn more</Link>
      </section>
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {["Interior Concepts + Drawings","Interior Styling","Building Concepts + Drawings","Urban Planning","Project Administration","Developed Designs + Drawings"].map(service => (
            <div key={service} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm text-gray-700">Learn more about how we translate ideas into detailed, buildable designs.</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="inline-block mt-10 text-blue-600 underline hover:text-blue-800">View All Services</Link>
      </section>
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[{ name: "Curatorial House", location: "Toorak, VIC", image: curatorialHouse },{ name: "Vue Mer Residences", location: "Gosford, NSW", image: vueMer },{ name: "G21 Residences", location: "Abuja, Nigeria", image: g21Residences }].map(project => (
            <div key={project.name} className="rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects" className="inline-block mt-10 text-blue-600 underline hover:text-blue-800">Explore Full Portfolio</Link>
      </section>
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Create Together</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">Contact us today to start building your dream space with elegance and innovation.</p>
        <Link to="/contact" className="inline-block px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800">Get in Touch</Link>
      </section>
    </div>
  );
}

function ServicesPage() {
  const services = [
    { title: "Interior Concepts + Drawings", image: interiorConcepts, desc: "Detailed interior layouts, 3D views, and schematics for residential and commercial spaces." },
    { title: "Interior Styling", image: curatorialHouse, desc: "Custom furniture, color palettes, lighting, and spatial design that reflect your personality." },
    { title: "Building Concepts + Drawings", image: buildingDesigns, desc: "Conceptual designs and full drawing sets for building approvals and construction." },
    { title: "Urban Planning", image: urbanPlanning, desc: "Design frameworks for large-scale communities, mixed-use developments, and sustainability-driven layouts." },
    { title: "Project Administration", image: adminProject, desc: "We manage procurement, scheduling, budgeting, and coordination from concept to delivery." },
    { title: "Developed Designs + Drawings", image: vueMer, desc: "Refined architectural details with technical accuracy for execution-ready designs." },
  ];

  return (
    <div className="bg-white text-gray-900 px-6 md:px-20 py-20">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, image, desc }) => (
          <div key={title} className="border rounded-lg shadow hover:shadow-lg overflow-hidden">
            <img src={image} alt={title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const projects = [
    { title: "Curatorial House", location: "Toorak, VIC", image: curatorialHouse },
    { title: "Vue Mer Residences", location: "Gosford, NSW", image: vueMer },
    { title: "G21 Residences", location: "Abuja, Nigeria", image: g21Residences },
  ];

  return (
    <div className="bg-white text-gray-900 px-6 md:px-20 py-20">
      <h1 className="text-4xl font-bold mb-12">Our Projects</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, location, image }) => (
          <div key={title} className="border rounded-lg shadow hover:shadow-lg overflow-hidden">
            <img src={image} alt={title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="bg-white text-gray-900 px-6 md:px-20 py-20 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="bg-white bg-opacity-80 p-10 max-w-2xl mx-auto rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-center mb-4">Let's work together! Reach out via email:</p>
        <p className="text-center text-lg font-semibold text-blue-800 underline">contact@piquexel.com</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div className='p-20 text-center'>About Page (WIP)</div>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
