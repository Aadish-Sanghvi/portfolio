import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const skillsList = [
  "PYTHON", "SQL", "SPARK", "C++", "MACHINE_LEARNING", "DEEP_LEARNING",
  "LORA", "PEFT", "AWQ_QUANTIZATION", "RAG", "DATABRICKS", "AIRFLOW",
  "SYNAPSE", "PYTORCH", "LANGGRAPH", "TRANSFORMERS", "FASTAPI", "GIT", "REACT"
];

export default function Skills() {
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
    <SkillsSection id="skills" ref={sectionRef} className="reveal-on-scroll grid-container">
      <div className="section-header">
        <span className="section-label">03. CAPABILITIES</span>
      </div>
      
      <div className="tag-cloud">
        {skillsList.map((skill, index) => (
          <span key={index} className="skill-tag mono-text fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            {skill}
          </span>
        ))}
      </div>
    </SkillsSection>
  );
}

const SkillsSection = styled.section`
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);

  .section-header {
    grid-column: 1 / -1;
  }

  .tag-cloud {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  @media (min-width: 768px) {
    .tag-cloud {
      grid-column: 2 / 12;
      gap: var(--space-3);
    }
  }

  .skill-tag {
    padding: var(--space-1) var(--space-3);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    transition: all 0.2s ease;
    cursor: default;
  }

  .skill-tag:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    background: var(--glass-bg);
  }
`;
