import { useState } from "react";
import Navbar from "../components/Navbar";

import TalentCard from "../components/TalentCard";
import "./Talent.css";



const TALENTS = [
  {
    id: 1,
    name: "Sofia Romano",
    age: 22,
    headline: "Brand storyteller with a Gen‑Z radar",
    city: "Barcelona",
    country: "Spain",
    grad: "Grad 2026",
    score: "+92",
    skills: ["Brand Strategy", "TikTok Content", "Copywriting"],
    image: "https://i.pravatar.cc/400?img=47",
  },
  {
    id: 2,
    name: "Marco Bianchi",
    age: 24,
    headline: "APM candidate who actually ships products",
    city: "Milan",
    country: "Italy",
    grad: "Grad 2025",
    score: "+88",
    skills: ["Product", "SQL", "Figma"],
    image: "https://i.pravatar.cc/400?img=12",
  },
  {
    id: 3,
    name: "Emma Lindgren",
    age: 23,
    headline: "Growth marketer, paid + organic, obsessed",
    city: "Stockholm",
    country: "Sweden",
    grad: "Grad 2026",
    score: "+90",
    skills: ["Paid Social", "GA4", "SQL"],
    image: "https://i.pravatar.cc/400?img=32",
  },
  {
    id: 4,
    name: "David Okoye",
    age: 25,
    headline: "Full‑stack engineer who prefers shipping",
    city: "Delft",
    country: "Netherlands",
    grad: "Grad 2025",
    score: "+94",
    skills: ["TypeScript", "React", "Node"],
    image: "https://i.pravatar.cc/400?img=56",
  },
];

export default function Talent() {
  return (
    <>
      <Navbar />

      <div className="talent">
        <div className="container">
          <span className="section-label">TALENT DIRECTORY</span>
          <h1>{TALENTS.length} candidates, all on video.</h1>


            {/* SEARCH + FILTERS */}
          <div className="talent-controls">

            {/* SEARCH ROW */}
            <div className="search-row">
                <input
                className="search-input"
                type="text"
                placeholder="Search name, skill, city..."
                />

                <button className="open-toggle">
                <span className="dot" />
                Open to work
                </button>
            </div>

            {/* FILTER PILLS */}
            <div className="filter-pills">
                <button className="pill active">All</button>
                <button className="pill">Product</button>
                <button className="pill">Engineering</button>
                <button className="pill">Design</button>
                <button className="pill">Growth</button>
                <button className="pill">Data</button>
                <button className="pill">Marketing</button>
            </div>

          </div>


          <div className="talent-grid">
            {TALENTS.map((t) => (
              <TalentCard key={t.id} talent={t} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
