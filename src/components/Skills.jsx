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
    </section>
  );
}
