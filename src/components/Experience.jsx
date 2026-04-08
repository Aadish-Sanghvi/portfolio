import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const experiences = [
  {
    role: "Data Science Intern",
    company: "Bajaj Finserv Health",
    location: "Pune, India",
    date: "July 2025 – Present",
    projects: [
      {
        title: "QueryPilot — Natural Language to SQL",
        emoji: "🚀",
        description: "QueryPilot converts natural language queries into accurate SQL using semantic understanding and schema-aware reasoning, enabling non-technical users to explore data effortlessly.",
        whatItDoes: [
          "Translates plain English into SQL queries",
          "Handles filters, aggregations, and joins",
          "Understands database relationships and context",
          "Supports complex multi-table queries"
        ],
        technicalBreakdown: [
          "FAISS for semantic schema matching",
          "NetworkX for relationship-based join discovery",
          "Metadata-driven query understanding",
          "Dynamic SQL generation with validation"
        ],
        stack: ["Python", "FAISS", "NetworkX", "FastAPI", "SQL (Trino/PostgreSQL)", "Pandas"]
      },
      {
        title: "ETL Auditing & MIS Automation",
        emoji: "⚙️",
        description: "Built a robust auditing and reporting system for ETL pipelines to monitor failures, improve observability, and enable automated daily reporting.",
        whatItDoes: [
          "Tracks daily ETL failures with detailed error logs via Airflow",
          "Provides reusable auditing, logging, and DB connection modules",
          "Generates config-driven MIS reports from multiple data sources",
          "Supports flexible formats for reporting and analytics"
        ],
        technicalBreakdown: [
          "Airflow-based failure tracking and monitoring",
          "Modular audit & logging framework for reuse across pipelines",
          "Config-driven architecture for dynamic MIS generation",
          "Automated data extraction, transformation, and reporting"
        ],
        stack: ["Python", "Apache Airflow", "SQL", "Pandas", "Config-driven ETL Framework"]
      },
      {
        title: "ETL Pipelines & Data Engineering",
        emoji: "🔄",
        description: "Designed and optimized scalable ETL pipelines across Airflow, Synapse, and Databricks, enabling reliable data ingestion, transformation, and audit-driven processing.",
        whatItDoes: [
          "Orchestrates end-to-end ETL workflows using Airflow",
          "Builds pipelines from source → landing → delta with auditing",
          "Migrates workloads to Databricks Premium for scalability",
          "Handles complex MongoDB nested data transformations",
          "Implements delete event triggers for data consistency in Delta Lake"
        ],
        technicalBreakdown: [
          "Airflow-based workflow orchestration",
          "Synapse pipelines with structured data flow (landing → delta)",
          "Delta Lake for reliable and auditable storage",
          "MongoDB nested array unnesting logic",
          "Event-driven delete handling for maintaining data integrity"
        ],
        stack: ["Python", "Apache Airflow", "Azure Synapse", "Databricks", "Delta Lake", "MongoDB", "SQL"]
      }
    ]
  }
];

function AccordionItem({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="accordion-item" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`accordion-header ${isOpen ? 'active-header' : ''}`}>
        <h4 className="accordion-title">
          <span>{project.emoji} {project.title}</span>
        </h4>
        <span className={`mono-text accent-text toggle-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '[ - ]' : '[ + ]'}
        </span>
      </div>
      
      <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
        <p className="project-desc">{project.description}</p>
        
        <div className="detail-grid">
          <div className="detail-col">
            <h5 className="mono-text detail-heading">WHAT IT DOES</h5>
            <ul className="detail-list">
              {project.whatItDoes.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          
          <div className="detail-col">
            <h5 className="mono-text detail-heading">TECHNICAL</h5>
            <ul className="detail-list">
              {project.technicalBreakdown.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="stack-row mono-text">
          <span>STACK: </span>
          {project.stack.map((tech, i) => (
            <span key={i} className="stack-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
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
    <ExperienceSection id="experience" ref={sectionRef} className="reveal-on-scroll grid-container">
      <div className="section-header">
        <span className="section-label">04. BACKGROUND</span>
      </div>

      <div className="two-column-layout">
        <div className="image-column">
          <div className="image-wrapper">
            <img src="/profile.jpg" alt="Aadish Sanghvi" />
            <div className="grain-overlay"></div>
          </div>
        </div>

        <div className="text-column">
          <div className="about-text">
            <p>
              I am a final-year B.Tech CSE student (2026) and a Data Science Intern at Bajaj Finserv Health. 
              My work revolves around designing scalable ETL pipelines and building Applied AI solutions. 
              As a Smart India Hackathon 2024 Finalist, I’ve delivered high-impact software — from industrial 
              ML control systems to RAG-based natural language interfaces for databases.
            </p>
          </div>

          <div className="experience-list">
            <h3 className="mono-text accent-text exp-title">PROFESSIONAL EXPERIENCE</h3>
            
            {experiences.map((exp, index) => (
              <div key={index} className="exp-item">
                <div className="exp-meta mono-text">
                  <span>{exp.date}</span>
                  <span>{exp.location}</span>
                </div>
                <h4 className="exp-role">{exp.role} <span className="text-secondary">@ {exp.company}</span></h4>
                
                <div className="projects-accordion">
                  {exp.projects.map((proj, pIdx) => (
                    <AccordionItem key={pIdx} project={proj} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ExperienceSection>
  );
}

const ExperienceSection = styled.section`
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);

  .section-header {
    grid-column: 1 / -1;
  }

  .two-column-layout {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }

  @media (min-width: 768px) {
    .two-column-layout {
      grid-template-columns: repeat(12, 1fr);
      gap: var(--space-4);
    }
    
    .image-column {
      grid-column: 1 / 6;
    }

    .text-column {
      grid-column: 7 / 13;
    }
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: #000;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(120%) brightness(0.9);
  }

  .grain-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
  }

  .about-text {
    font-size: clamp(1.1rem, 1.5vw, 1.25rem);
    line-height: 1.6;
    margin-bottom: var(--space-6);
  }

  .exp-title {
    margin-bottom: var(--space-4);
    border-bottom: 1px solid var(--border-color);
    padding-bottom: var(--space-2);
  }

  .exp-item {
    margin-bottom: var(--space-5);
  }

  .exp-meta {
    display: flex;
    justify-content: space-between;
    color: var(--text-secondary);
    margin-bottom: var(--space-2);
  }

  .text-secondary {
    color: var(--text-secondary);
    font-weight: 400;
  }

  .exp-role {
    font-size: 1.5rem;
    margin-bottom: var(--space-4);
  }

  .projects-accordion {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .accordion-item {
    border: 1px solid var(--border-color);
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3);
    cursor: default;
    transition: all 0.3s ease;
    user-select: none;
  }

  .accordion-item:hover .accordion-header, .accordion-header.active-header {
    background: var(--glass-bg);
    color: var(--accent-color);
  }

  .accordion-title {
    font-size: 1rem;
    font-weight: 500;
  }

  .accordion-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), padding 0.5s ease, opacity 0.5s ease;
    background: var(--glass-bg);
    opacity: 0;
  }

  .accordion-body.open {
    max-height: 1000px;
    padding: var(--space-4) var(--space-3);
    opacity: 1;
    transition: max-height 0.8s ease-in-out, padding 0.5s ease, opacity 0.5s ease;
    border-top: 1px solid var(--border-color);
  }

  .project-desc {
    font-size: 0.95rem;
    margin-bottom: var(--space-4);
    color: var(--text-primary);
  }

  .detail-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
    margin-bottom: var(--space-4);
  }

  @media (min-width: 640px) {
    .detail-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .detail-heading {
    color: var(--text-secondary);
    margin-bottom: var(--space-2);
  }

  .detail-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .detail-list li {
    font-size: 0.85rem;
    color: var(--text-secondary);
    position: relative;
    padding-left: 1rem;
    margin-bottom: 0.25rem;
    line-height: 1.4;
  }

  .detail-list li::before {
    content: "·";
    position: absolute;
    left: 0;
    color: var(--accent-color);
  }

  .stack-row {
    font-size: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    align-items: center;
    color: var(--text-secondary);
    border-top: 1px dashed var(--border-color);
    padding-top: var(--space-3);
  }

  .stack-tag {
    color: var(--text-primary);
  }
`;
