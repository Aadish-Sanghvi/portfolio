import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Achievements() {
  const achievements = [
    {
      title: "1st Runner-up — HackRx (BFHL Internal)",
      description: "Runner-up at BFHL's internal hackathon, competing with teams across the organisation.",
      emoji: "🥈"
    },
    {
      title: "Government of India Patent",
      description: "Patent granted for the NALCO aluminium processing optimization software, deployed in production at an industrial scale.",
      emoji: "📜"
    },
    {
      title: "Smart India Hackathon 2024 — Finalist",
      description: "National-level finalist building real-world industrial AI solutions.",
      emoji: "🎯"
    },
    {
      title: "GDSC Hackathon 2025 — Runner-up",
      description: "1st runner-up at Google Developer Student Clubs hackathon.",
      emoji: "🥈"
    },
    {
      title: "SVIM Hackathon — Finalist",
      description: "Advanced to finals demonstrating strong technical problem-solving.",
      emoji: "🏁"
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
    <AchievementsSection id="achievements" ref={sectionRef} className="reveal-on-scroll grid-container">
      <div className="section-header">
        <span className="section-label">02. RECOGNITION</span>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className={`achievement-card fade-in ${index < 2 ? 'large' : 'normal'}`} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="card-bg-glow"></div>
            <div className="card-header">
              <div className="mono-text numeric">{(index + 1).toString().padStart(2, '0')}</div>
              <div className="emoji">{item.emoji}</div>
            </div>
            <div className="card-content">
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </AchievementsSection>
  );
}

const AchievementsSection = styled.section`
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);

  .section-header {
    grid-column: 1 / -1;
  }

  .achievements-grid {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-4);
  }

  .achievement-card {
    position: relative;
    grid-column: span 12;
    padding: var(--space-5);
    background: var(--glass-bg);
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .achievement-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-color);
  }

  .card-bg-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, var(--accent-color) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 0;
  }

  .achievement-card:hover .card-bg-glow {
    opacity: 0.15;
  }

  @media (min-width: 768px) {
    .achievement-card.large {
      grid-column: span 6;
      aspect-ratio: 16 / 9;
    }
    .achievement-card.normal {
      grid-column: span 4;
      aspect-ratio: 1 / 1;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-4);
    z-index: 1;
    position: relative;
  }

  .numeric {
    color: var(--text-secondary);
  }

  .emoji {
    font-size: 2rem;
  }

  .card-content {
    z-index: 1;
    position: relative;
  }

  .title {
    font-size: clamp(1.25rem, 1.5vw, 1.5rem);
    margin-bottom: var(--space-2);
    font-weight: 500;
  }

  .desc {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;
