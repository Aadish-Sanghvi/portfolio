import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "Spark", "C++"]
  },
  {
    title: "Techniques",
    skills: ["Machine Learning", "Deep Learning", "LoRA", "PEFT", "AWQ Quantization", "RAG"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Databricks", "Airflow", "Synapse", "PyTorch", "LangGraph", "Transformers", "FastAPI", "Git"]
  }
];

const toolsLogos = [
  { name: "Databricks", slug: "databricks" },
  { name: "Airflow", slug: "apacheairflow" },
  { name: "Synapse", slug: "azure", url: "https://api.iconify.design/logos:azure.svg" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "LangGraph", slug: "langgraph" },
  { name: "Transformers", slug: "huggingface" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Git", slug: "git" }
];

const languagesLogos = [
  { name: "Python", slug: "python" },
  { name: "SQL", slug: "postgresql" },
  { name: "Spark", slug: "apachespark" },
  { name: "C++", slug: "cplusplus" }
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-header fade-in">
        <span className="section-subtitle">Skills</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-description">A broad foundation across the AI/ML stack — built through coursework, side projects, and real production work.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category glass fade-in">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-stack-wrapper fade-in delay-2">
        <div className="tech-stack-row">
          <h4 className="stack-row-title">Tools & Frameworks</h4>
          <div className="tech-stack-grid">
            {toolsLogos.map((tech, index) => (
              <div key={index} className="tech-logo-container" title={tech.name}>
                <img
                  src={tech.url || `https://cdn.simpleicons.org/${tech.slug}`}
                  alt={tech.name}
                  className="tech-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="tech-stack-row">
          <h4 className="stack-row-title">Languages</h4>
          <div className="tech-stack-grid">
            {languagesLogos.map((tech, index) => (
              <div key={index} className="tech-logo-container" title={tech.name}>
                <img
                  src={tech.url || `https://cdn.simpleicons.org/${tech.slug}`}
                  alt={tech.name}
                  className="tech-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
