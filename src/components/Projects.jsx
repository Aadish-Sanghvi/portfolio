import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Projects() {
  const projects = [
    {
      title: "NALCO Optimization System",
      category: "Industrial ML",
      description: "<strong>Government of India Patent awarded.</strong> Production software for NALCO to optimise raw-to-finished aluminium processing using ML-based process control. SIH 2024 finalist project.",
      meta: {
        tech: "PYTHON_ML // REACT // FASTAPI",
        status: "PATENT AWARDED",
        date: "2024.08",
        url: "github.com/Aadish-Sanghvi"
      }
    },
    {
      title: "MediMind",
      category: "Agentic AI",
      description: "Multi-agent AI system for medical diagnosis using collaborative LLMs with agent orchestration for comprehensive health assessment.",
      meta: {
        tech: "LANGGRAPH // LLMS // NEXT.JS",
        status: "PRODUCTION",
        date: "2024.03",
        url: "github.com/Aadish-Sanghvi"
      }
    },
    {
      title: "Krishi Moolya",
      category: "Applied ML",
      description: "An end-to-end ML platform for farmers — combines <strong>crop price prediction</strong> using market trend analysis, a <strong>crop recommendation system</strong> based on soil and climate inputs, and actionable insights to help farmers decide what to grow and when to sell for maximum benefit.",
      meta: {
        tech: "SCIKIT-LEARN // PANDAS // FLASK",
        status: "COMPLETE",
        date: "2023.11",
        url: "github.com/Aadish-Sanghvi"
      }
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ProjectsSection id="projects" ref={sectionRef} className="reveal-on-scroll grid-container">
      <div className="section-header">
        <span className="section-label">01. PROJECTS</span>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={`https://${project.meta.url}`} target="_blank" rel="noreferrer" key={index} className="project-card">
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category mono-text">{project.category}</p>
            </div>
            
            <div className="card-overlay glass-panel">
              <div className="meta-info mono-text">
                <div className="meta-row">
                  <span>TECH</span>
                  <span>{project.meta.tech}</span>
                </div>
                <div className="meta-row">
                  <span>STATUS</span>
                  <span className="accent-text">{project.meta.status}</span>
                </div>
                <div className="meta-row">
                  <span>DATE</span>
                  <span>{project.meta.date}</span>
                </div>
                <div className="meta-row">
                  <span>URL</span>
                  <span>{project.meta.url}</span>
                </div>
              </div>
              <p className="hover-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
          </a>
        ))}
      </div>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section`
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);

  .section-header {
    grid-column: 1 / -1;
  }

  .projects-grid {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-4);
  }

  .project-card {
    grid-column: span 12;
    aspect-ratio: 16 / 9;
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
    padding: var(--space-5);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    background-color: var(--bg-color); /* To ensure pattern blends */
    opacity: 1 !important; /* override the generic a:hover opacity */
  }

  @media (min-width: 768px) {
    .project-card {
      grid-column: span 6;
      aspect-ratio: 1 / 1;
    }
  }

  @media (min-width: 1024px) {
    .project-card {
      grid-column: span 4;
      aspect-ratio: 3 / 4;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .project-title {
    font-size: clamp(1.5rem, 2vw, 2rem);
    line-height: 1.1;
  }

  .project-category {
    color: var(--text-secondary);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-top: 1px solid var(--accent-color);
  }

  .project-card:hover .card-overlay {
    opacity: 1;
  }

  .meta-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    padding: var(--space-2) 0;
    font-size: 0.75rem;
  }

  .meta-row span:first-child {
    color: var(--text-secondary);
  }

  .hover-description {
    font-family: var(--font-primary);
    font-size: 0.95rem;
    line-height: 1.4;
    color: var(--text-primary);
  }
`;
