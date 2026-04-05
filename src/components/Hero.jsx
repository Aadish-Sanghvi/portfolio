import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="about" className="hero container">
      <div className="hero-content">
        <div className="status-badge fade-in delay-1">
          <span className="status-dot"></span> Currently at Bajaj Finserv Health Limited
        </div>

        <h1 className="hero-title fade-in delay-1">
          Hi, I'm Aadish Sanghvi
        </h1>
        <h2 className="hero-subtitle fade-in delay-2">
          Data Scientist & AI/ML Engineer
        </h2>

        <div className="hero-description fade-in delay-3">
          <p>
            Final-year B.Tech CSE student, 2026 and Data Engineering Intern at Bajaj Finserv Health, specializing in scalable ETL pipelines and Applied AI. As a Smart India Hackathon 2024 Finalist, I’ve built high-impact solutions ranging from industrial AI systems for NALCO to RAG-based LLM applications and NLP-to-SQL interfaces. I thrive at the intersection of robust data architecture (Airflow, Synapse) and intelligent systems (LangGraph, Generative AI).
          </p>
        </div>

        <ul className="hero-list fade-in delay-3">
          <li>🏢 Data Science Intern · Bajaj Finserv Health Limited, Pune</li>
          <li>🎓 B.Tech CSE · Acropolis Institute of Technology & Research, Indore</li>
          <li>📅 Expected Graduation: 2026 · CGPA 7.42</li>
          <li>📍 Pune, Maharashtra</li>
        </ul>

        <div className="hero-actions fade-in delay-3">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="https://github.com/Aadish-Sanghvi" target="_blank" rel="noreferrer" className="btn btn-outline">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/aadish-sanghvi/" target="_blank" rel="noreferrer" className="btn btn-outline">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-image-container fade-in delay-2">
        <img src="/profile.jpg" alt="Aadish Sanghvi" className="hero-image" />
      </div>
    </section>
  );
}
