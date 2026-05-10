import "../Style/Doctor.css";

export default function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Muhammad Iqbal",
      image: "data:image/jpeg;base64,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",
      experience: "5 Years",
      qualifications: "BDS, MDS (Orthodontics)",
      specialty: "Orthodontist & Smile Designer",
      tags: ["Expert Care", "Patient-Focused"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      image: "data:image/jpeg;base64,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",
      experience: "10 Years",
      qualifications: "BDS, MDS (Endodontics)",
      specialty: "Root Canal Specialist",
      tags: ["Expert Care", "Patient-Focused"]
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "15 Years",
      qualifications: "BDS, MDS (Prosthodontics)",
      specialty: "Dental Implant Expert",
      tags: ["Expert Care", "Patient-Focused"]
    }
  ];

  return (
    <section className="doctors" id="doctors">
      <div className="doctors-header">
        <p className="doctors-label">Meet Our Team</p>
        <h2 className="doctors-title">Expert Dentists You Can Trust</h2>
        <p className="doctors-subtitle">
          Our team of highly qualified dental professionals is committed to providing you with personalized care and exceptional results.
        </p>
      </div>

      <div className="doctors-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-image-wrapper">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="experience-badge">
                <span>{doctor.experience}</span>
              </div>
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-qualifications">
                <span className="qual-icon">📋</span>
                {doctor.qualifications}
              </p>
              <p className="doctor-specialty">
                <span className="spec-icon">🔍</span>
                {doctor.specialty}
              </p>
              <div className="doctor-tags">
                {doctor.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}