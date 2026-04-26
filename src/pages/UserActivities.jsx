import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const ACTIVITIES = [
  {
    id: 1,
    type: "Video",
    title: "Intro pitch for product design",
    subtitle: "60-second reel to introduce my design approach.",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "Post",
    title: "Portfolio refresh: UX case study",
    subtitle: "Shared results from a landing page redesign.",
    date: "Yesterday",
  },
  {
    id: 3,
    type: "Challenge",
    title: "Completed onboarding experience brief",
    subtitle: "Created a mobile-first onboarding flow for a fintech app.",
    date: "3 days ago",
  },
];

export default function UserActivities() {
  const { user } = useContext(AuthContext);

  return (
    <section className="section activity-page">
      <div className="section-card">
        <div className="section-head">
          <div>
            <h2>Activity</h2>
            <p>Latest posts, videos and challenge results from your profile.</p>
          </div>
          <span className="pill">Recent</span>
        </div>

        <div className="activity-list">
          {ACTIVITIES.map((item) => (
            <article key={item.id} className="activity-card">
              <div className="activity-top">
                <span className="activity-type">{item.type}</span>
                <span className="activity-date">{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <div className="activity-footer">
                <span>{user.user_profile?.first_name || user.email}</span>
                <button className="secondary">View details</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
