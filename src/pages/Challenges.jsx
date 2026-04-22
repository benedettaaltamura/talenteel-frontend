import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChallengeCard from '../components/ChallengeCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from '../api/axios';
import './Challenges.css';

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/jobs/challenges/');
        setChallenges(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching challenges:', err);
        // Mock data per sviluppo
        setChallenges([
          {
            id: 1,
            title: 'The Nutella Gen-Z Moment',
            description: 'In 60 seconds, pitch us a Gen-Z campaign for Nutella that would work on TikTok in 3 different European countries. Bonus: propose a creator partnership.',
            company_name: 'Ferrero',
            industry: 'FMCG / Consumer Goods',
            location: 'Alba',
            role: 'Brand Marketing Intern',
            reward: 'Fast-track interview + €500 content budget',
            submissions_count: 47,
            days_left: 12,
            company_logo: null,
          },
          {
            id: 2,
            title: 'TikTok Brand Challenge',
            description: 'Create an engaging TikTok video showcasing your creativity and marketing skills.',
            company_name: 'TikTok',
            industry: 'Social Media / Technology',
            location: 'Milan',
            role: 'Content Creator',
            reward: 'Paid opportunity + Portfolio feature',
            submissions_count: 32,
            days_left: 8,
            company_logo: null,
          },
          {
            id: 3,
            title: 'Fashion Brand Visual Content',
            description: 'Design visual content for an upcoming fashion collection launch.',
            company_name: 'Gucci',
            industry: 'Fashion / Luxury Goods',
            location: 'Florence',
            role: 'Graphic Designer',
            reward: 'Contract opportunity + €750',
            submissions_count: 28,
            days_left: 5,
            company_logo: null,
          },
        ]);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="challenges-container">
          <div className="loading">Caricamento delle challenge...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="challenges-container">
        <div className="challenges-intro">
          <div className="intro-content">
            <p className="intro-label">LIVE CHALLENGES</p>
            <h1 className="intro-title">
              Real briefs. <span className="highlight">Real companies.</span>
            </h1>
            <p className="intro-description">
              Pick a challenge. Answer in 60 to 90 seconds of video. The best responses get fast-tracked past the CV pile.
            </p>
          </div>
          <Link to="/register" className="intro-button">
            Start submitting <span className="arrow">→</span>
          </Link>
        </div>

        <div className="challenges-header">
          <h2>Explore Challenges</h2>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="challenges-list">
          {challenges.length > 0 ? (
            challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))
          ) : (
            <div className="no-challenges">Nessuna challenge disponibile al momento</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
