import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const COMPANY_OFFERS = [
  {
    id: 1,
    name: "Ferrero",
    role: "UX Designer",
    location: "Alba, Italy",
    type: "Full-time",
    description: "Design digital experiences for market-leading brands.",
  },
  {
    id: 2,
    name: "Gucci",
    role: "Product Designer",
    location: "Florence, Italy",
    type: "Internship",
    description: "Work on luxury online products and brand interactions.",
  },
  {
    id: 3,
    name: "TikTok",
    role: "Interaction Designer",
    location: "Milan, Italy",
    type: "Contract",
    description: "Create social and mobile-first user experiences.",
  },
];

export default function UserCompanies() {
  const { user, updateUser } = useContext(AuthContext);

  const appliedOffers = user?.applications?.map((application) => application.offer_id) || [];

  const handleApply = async (offer) => {
    if (!user) return;
    const existing = user.applications?.some((item) => item.offer_id === offer.id);
    if (existing) return;

    await updateUser({
      ...user,
      applications: [
        ...(user.applications || []),
        {
          id: Date.now(),
          offer_id: offer.id,
          role: offer.role,
          company: offer.name,
          status: "Applied",
          recruiter_note: "Your application is now visible in your profile.",
        },
      ],
    });
  };

  return (
    <section className="section companies-page">
      <div className="section-card">
        <div className="section-head">
          <div>
            <h2>Companies & offers</h2>
            <p>Browse the latest job opportunities from matching companies.</p>
          </div>
          <span className="pill">Open roles</span>
        </div>

        <div className="company-grid">
          {COMPANY_OFFERS.map((offer) => {
            const isApplied = appliedOffers.includes(offer.id);
            return (
              <div key={offer.id} className="company-card">
                <div>
                  <h3>{offer.name}</h3>
                  <p className="company-role">{offer.role}</p>
                  <p className="company-location">{offer.location} · {offer.type}</p>
                  <p>{offer.description}</p>
                </div>
                <button
                  className={isApplied ? "secondary small" : "primary small"}
                  type="button"
                  disabled={isApplied}
                  onClick={() => handleApply(offer)}
                >
                  {isApplied ? "Applied" : "Apply now"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
