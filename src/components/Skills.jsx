import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "C++"]
  },
  {
    title: "Techniques",
    skills: ["Machine Learning", "Deep Learning", "LoRA", "PEFT", "Hyperparameter Tuning", "RAG", "OCR"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Azure Databricks", "Apache Airflow", "Azure Data Factory", "Apache Kafka", "Trino", "FastAPI", "Git"]
  },
  {
    title: "Generative AI",
    skills: ["PyTorch", "LangGraph", "LangChain", "Prompt Engineering", "Transformers", "Vector Stores", "Embeddings"]
  }
];

const toolsLogos = [
  { name: "Databricks", slug: "databricks" },
  { name: "Airflow", slug: "apacheairflow" },
  { name: "Azure Data Factory", slug: "azure", url: "https://api.iconify.design/logos:azure.svg" },
  { name: "Kafka", slug: "apachekafka" },
  { name: "Trino", slug: "trino" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Git", slug: "git" }
];

const genAILogos = [
  { name: "PyTorch", slug: "pytorch" },
  { name: "LangGraph", slug: "langchain", url: "https://api.iconify.design/simple-icons:langchain.svg" },
  { name: "LangChain", slug: "langchain", url: "https://api.iconify.design/simple-icons:langchain.svg" },
  { name: "Transformers", slug: "huggingface" }
];

const languagesLogos = [
  { name: "Python", slug: "python" },
  { name: "SQL", slug: "postgresql" },
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
          <h4 className="stack-row-title">Generative AI</h4>
          <div className="tech-stack-grid">
            {genAILogos.map((tech, index) => (
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
