import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import heroImg from "./assets/images/page_1_img_1.jpeg";
import curatorialHouse from "./assets/images/page_5_img_1.jpeg";
import vueMer from "./assets/images/page_5_img_2.jpeg";
import g21Residences from "./assets/images/page_5_img_3.jpeg";

function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center text-white" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest uppercase mb-4">
          Piquexel Workshop
        </h1>
        <p className="text-xl md:text-2xl italic max-w-xl">
          Exquisitely Unique Designs for Interiors and Architecture
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-4xl text-lg leading-relaxed">
          PIQUEXEL is a registered and licensed design firm focused on planning,
          documentation, and management of small to large-scale buildings and
          interiors. We blend technology with artistry, offering detailed
          documentation, 3D models, and virtual experiences that help clients
          envision their dream spaces. Based in Gold Coast (Australia) and
          Hyderabad (India), we serve clients across continents including Africa.
        </p>
        <Link to="/about" className="inline-block mt-6 text-blue-600 underline hover:text-blue-800">
          Learn more
        </Link>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Interior Concepts + Drawings",
            "Interior Styling",
            "Building Concepts + Drawings",
            "Urban Planning",
            "Project Administration",
            "Developed Designs + Drawings"
          ].map(service => (
            <div key={service} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm text-gray-700">
                Learn more about how we translate ideas into detailed, buildable designs.
              </p>
            </div>
          ))}
        </div>
        <Link to="/services" className="inline-block mt-10 text-blue-600 underline hover:text-blue-800">
          View All Services
        </Link>
      </section>

      {/* Featured Projects Preview */}
      <section id="portfolio" className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Curatorial House", location: "Toorak, VIC", image: curatorialHouse },
            { name: "Vue Mer Residences", location: "Gosford, NSW", image: vueMer },
            { name: "G21 Residences", location: "Abuja, Nigeria", image: g21Residences },
          ].map(project => (
            <div key={project.name} className="rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects" className="inline-block mt-10 text-blue-600 underline hover:text-blue-800">
          Explore Full Portfolio
        </Link>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Create Together</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Contact us today to start building your dream space with elegance and innovation.
        </p>
        <a
          href="mailto:dadi@piquexel.com"
          className="inline-block px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800"
        >
          Contact Dadi Dindul
        </a>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-white text-gray-900 font-sans px-6 md:px-20 py-20">
      <h1 className="text-4xl font-bold mb-8">About PIQUEXEL</h1>
      <p className="max-w-4xl text-lg leading-relaxed mb-8">
        PIQUEXEL is a registered and licensed design firm primarily focused on the planning,
        documentation, and management of small to large-scale buildings and interiors. We
        deliver exquisitely unique designs with detailed drawings and documentation. 
      </p>
      <p className="max-w-4xl text-lg leading-relaxed mb-8">
        We also utilize advanced technology such as 3D models and simulations to better
        illustrate our designs and enable our clients to visualize their space in real time. 
        With offices in Gold Coast, Australia, and Hyderabad, India, our services span across
        Australia, India, and select countries in Africa.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Our Approach</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Process:</strong> A linear, structured workflow from brief to documentation and delivery.</li>
        <li><strong>Work Ethic:</strong> Transparent, collaborative, and client-focused every step of the way.</li>
        <li><strong>Teamwork:</strong> Close client collaboration and iterative design reviews for tailored results.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Leadership</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold">Dadi Dindul</h3>
          <p className="text-sm italic mb-2">Director & Lead Designer</p>
          <p>
            Licensed designer with 13+ years of international and domestic experience across
            residential, commercial, hospitality, heritage, and cultural sectors. Known for his
            inventive and eco-friendly design philosophy.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Curie Abbadasari</h3>
          <p className="text-sm italic mb-2">BDM & Architect</p>
          <p>
            Accomplished architect and co-founder with experience in residential and commercial
            design. Holds degrees from India and Australia. Previously worked with IKEA, bringing
            valuable global insights to the team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Future pages will be added here */}
      </Routes>
    </Router>
  );
}
