import React from 'react';
import './Projects.css'; // Reusing section titles
import './Achievements.css';

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

  return (
    <section id="achievements" className="achievements section container">
      <div className="section-header fade-in">
        <span className="section-subtitle">RECOGNITION</span>
        <h2 className="section-title">Achievements</h2>
        <p className="section-description">Hackathons, awards, and milestones along the way.</p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="achievement-emoji">{item.emoji}</div>
            <div className="achievement-content">
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
