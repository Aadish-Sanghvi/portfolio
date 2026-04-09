import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "NALCO Optimization System",
      description: "<strong>Government of India Patent awarded.</strong> Production software for NALCO to optimise raw-to-finished aluminium processing using ML-based process control. SIH 2024 finalist project.",
      link: "https://github.com/Aadish-Sanghvi/NALCO-SIH",
      emoji: "🏭"
    },
    {
      title: "MediMind — Multi-Agent Diagnosis",
      description: "Multi-agent AI system for medical diagnosis using collaborative LLMs with agent orchestration for comprehensive health assessment.",
      link: "https://github.com/Aadish-Sanghvi/Medi-Mind",
      emoji: "🏥"
    },
    {
      title: "Krishi Moolya",
      description: "An end-to-end ML platform for farmers — combines <strong>crop price prediction</strong> using market trend analysis, a <strong>crop recommendation system</strong> based on soil and climate inputs, and actionable insights to help farmers decide what to grow and when to sell for maximum benefit.",
      link: "https://github.com/Aadish-Sanghvi/Krishi_Moolya",
      emoji: "🌾"
    },
    {
      title: "AI Attendance System",
      description: "Computer vision-based attendance management using facial recognition — real-time processing with anti-spoofing mechanisms.",
      link: "https://github.com/Aadish-Sanghvi/AI-powered-attendance-management-system",
      emoji: "👤"
    }
  ];

  return (
    <section id="projects" className="projects section container">
      <div className="section-header fade-in">
        <span className="section-subtitle">PERSONAL PROJECTS</span>
        <h2 className="section-title">Things I've Built Outside Work</h2>
        <p className="section-description">A mix of healthcare, agriculture, industry, and general ML projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-emoji">{project.emoji}</div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
            <div className="project-footer">
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View on GitHub <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
