import React, { useState } from 'react';
import './Experience.css';

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
        description: "Designed and optimized scalable ETL pipelines across Airflow, Azure Data Factory (ADF), and Databricks, enabling reliable data ingestion, transformation, and audit-driven processing.",
        whatItDoes: [
          "Orchestrates end-to-end ETL workflows using Airflow",
          "Builds pipelines from source → landing → delta with auditing",
          "Migrates workloads to Databricks Premium for scalability",
          "Handles complex MongoDB nested data transformations",
          "Implements delete event triggers for data consistency in Delta Lake integrated with Kafka"
        ],
        technicalBreakdown: [
          "Airflow-based workflow orchestration",
          "ADF pipelines with structured data flow (landing → delta)",
          "Delta Lake for reliable and auditable storage",
          "MongoDB nested array unnesting logic",
          "Event-driven delete handling via Kafka for maintaining data integrity"
        ],
        stack: ["Python", "Apache Airflow", "Azure Data Factory", "Databricks", "Delta Lake", "MongoDB", "Apache Kafka", "SQL"]
      }
    ]
  }
];

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="exp-project-card">
      <div className="exp-project-header">
        <div className="exp-project-title-row">
          <h4 className="exp-project-title">
            <span className="exp-project-emoji">{project.emoji}</span> {project.title}
          </h4>
          <div 
            className="chevron-wrapper" 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title="Expand Details"
          >
            <svg
              className={`exp-chevron ${isExpanded ? 'rotated' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <p className="exp-project-desc">{project.description}</p>
      </div>

      <div className={`exp-project-body ${isExpanded ? 'expanded' : ''}`}>
        <div className="exp-project-section">
          <h5 className="exp-section-heading">WHAT IT DOES</h5>
          <ul>
            {project.whatItDoes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="exp-project-section">
          <h5 className="exp-section-heading">TECHNICAL BREAKDOWN</h5>
          <ul>
            {project.technicalBreakdown.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="exp-project-section">
          <h5 className="exp-section-heading">STACK</h5>
          <div className="exp-stack-tags">
            {project.stack.map((tech, i) => (
              <span key={i} className="exp-stack-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <div className="section-header fade-in">
        <span className="section-subtitle">Professional Work</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-description">Systems I've designed, built, and shipped in production during my internship. Click a card to expand the detail.</p>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item glass fade-in">
            <div className="timeline-header">
              <div>
                <h3 className="role">{exp.role}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="timeline-meta">
                <span className="date">{exp.date}</span>
                <span className="location">{exp.location}</span>
              </div>
            </div>

            <div className="timeline-content">
              {exp.projects.map((project, pIdx) => (
                <ProjectCard key={pIdx} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
