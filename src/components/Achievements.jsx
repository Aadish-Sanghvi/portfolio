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
      title: "Runner-up — Smart India Hackathon 2024",
      description: "National-level runner-up for building real-world industrial AI solutions for NALCO.",
      emoji: "🥈"
    },
    {
      title: "Top 5 — Global Digital Health Summit 2025",
      description: "Placed in the top 5 with Medimind, a multi-agent medical diagnosis system.",
      emoji: "🏆"
    },
    {
      title: "Runner-up — MIT-ADT AI Grand Challenge 2026",
      description: "Runner-up for the Real-Time Claims Fraud Detection Engine.",
      emoji: "🥈"
    },
    {
      title: "Runner-up — GDSC Hackathon 2025",
      description: "1st runner-up at Google Developer Student Clubs hackathon.",
      emoji: "🥈"
    },
    {
      title: "Finalist — SVIM Hackathon",
      description: "Advanced to finals demonstrating strong technical problem-solving.",
      emoji: "🏁"
    },
    {
      title: "NPTEL Certifications",
      description: "Certified in DBMS, Data Analytics, and Computer Networks.",
      emoji: "🎓"
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
