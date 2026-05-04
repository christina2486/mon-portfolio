import React, { useState } from "react";

interface Props {
  onBack: () => void;
}

export default function Portflio({ onBack }: Props) {
  const cvPath = "/assets/cv1.pdf";
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [ongletActif, setOngletActif] = useState("presentation");
  const [selectedSkill, setSelectedSkill] = useState<{ nom: string; niveau: number } | null>(null);

  const envoyerWhatsApp = () => {
    if (message.trim() === "") return;
    const url = `https://wa.me/261375541137?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setShowPopup(false);
    setMessage("");
  };

  const onglets = [
    { id: "presentation", label: "Présentation" },
    { id: "langues", label: "Langues" },
    { id: "comportementales", label: "Comportementales" },
    { id: "passions", label: "Passions" },
  ];

  const contenuOnglet: Record<string, React.ReactNode> = {
    presentation: (
      <p style={styles.ongletTexte}>
        Je suis Étudiante en informatique passionné par le développement web et les nouvelles technologies.
        J'aime créer des applications et résoudre des problèmes techniques. Je travaille avec des technologies comme HTML, CSS, JavaScript et React,
        et je cherche constamment à améliorer mes compétences à travers des projets pratiques et l'apprentissage continu.
        J'ai effectué un stage de trois mois au sein du PNUD. Mon objectif est de continuer à évoluer dans le développement web et mobile.
        Si vous souhaitez en apprendre plus sur moi, ou me contacter, n'hésitez plus, vous pouvez explorer ce site ou télécharger mon CV en pdf !
      </p>
    ),
    langues: (
      <div style={styles.ongletListe}>
        <div style={styles.langueItem}>🇲🇬 <b>Malagasy</b> — Langue maternelle</div>
        <div style={styles.langueItem}>🇫🇷 <b>Français</b> — Courant</div>
        <div style={styles.langueItem}>🇬🇧 <b>Anglais</b> — Notions</div>
      </div>
    ),
    comportementales: (
      <div style={styles.ongletListe}>
        <div style={styles.skillItem}>🤝 Travail en équipe (React, projets en groupe)</div>
        <div style={styles.skillItem}>🧠 Apprentissage rapide avec changement de techno</div>
        <div style={styles.skillItem}>💡 Résolution de problèmes</div>
        <div style={styles.skillItem}>⏰ Gestion du temps</div>
        <div style={styles.skillItem}>🗣️ Communication avec l'équipe</div>
      </div>
    ),
    passions: (
      <div style={styles.ongletListe}>
        <div style={styles.skillItem}>💻 Création d'applications</div>
        <div style={styles.skillItem}>🚀 Apprentissage Nouvelles technologies</div>
        <div style={styles.skillItem}>🎨 Intelligence artificielle</div>
        <div style={styles.skillItem}>📚 Lecture & apprentissage en ligne</div>
        <div style={styles.skillItem}>🎵 Musique</div>
      </div>
    ),
  };

  const competences = [
    {
      titre: "Web",
      items: [
        { nom: "HTML / CSS / JS", niveau: 50 },
        { nom: "React + Vite", niveau: 80 },
        { nom: "TypeScript", niveau: 50 },
        { nom: "NodeJs", niveau: 60 },
        { nom: "API REST", niveau: 60 },
      ],
    },
    {
      titre: "Base de données",
      items: [
        { nom: "MySQL", niveau: 50 },
        { nom: "PgSQL", niveau: 45 },
        { nom: "PL/SQL", niveau: 40 },
        { nom: "Oracle", niveau: 40 },
        { nom: "PDO", niveau: 45 },
      ],
    },
    {
      titre: "Programmation",
      items: [
        { nom: "Java", niveau: 60 },
        { nom: "Python", niveau: 45 },
        { nom: "Flutter", niveau: 40 },
        { nom: "Kotlin (Android)", niveau: 45 },
        { nom: "UML", niveau: 65 },
      ],
    },
    {
      titre: "Autres",
      items: [
        { nom: "Git", niveau: 50 },
        { nom: "Scrum", niveau: 40 },
        { nom: "Adobe XD", niveau: 50 },
        { nom: "Photoshop", niveau: 40 },
        { nom: "Auth Token", niveau: 55 },
      ],
    },
  ];

  const diplomes = [
    {
      annee: "2025 — 2026",
      titre: "Mastère Ingénierie Informatique",
      description: "Mastère spécialisé en développement web (bac +5)",
      ecole: "École Supérieure de L'EMIT - Madagascar, Fianarantsoa",
    },
    {
      annee: "2024 — 2025",
      titre: "Licence Développeuse Modélisation Ingénierie Informatique",
      description: "Licence en développement web (bac +3)",
      ecole: "ÉCOLE DE MANAGEMENT ET D'INNOVATION TECHNOLOGIQUE, Fianarantsoa I",
    },
    {
      annee: "2022 — 2023",
      titre: "DUT Informatique",
      description: "Diplôme Universitaire d'Informatique (bac +2)",
      ecole: "EMIT - Développement d'application internet/intranet, Fianarantsoa I",
    },
    {
      annee: "2021",
      titre: "Baccalauréat Scientifique Série D",
      description: "Diplôme spécialisé en sciences — Mention Passable",
      ecole: "Lycée RAHERIVELO Ramamonjy (LRR), Fianarantsoa I",
    },
  ];

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>
        ⬅ Retour
      </button>

      {/* POPUP WHATSAPP */}
      {showPopup && (
        <div style={styles.overlay} onClick={() => setShowPopup(false)}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>✕</button>
            <div style={styles.popupHeader}>
              <img
                src="/assets/whatsapp.svg"
                alt="WhatsApp"
                style={{ width: 28, height: 28, filter: "invert(56%) sepia(90%) saturate(400%) hue-rotate(90deg)" }}
              />
              <h3 style={{ margin: 0, color: "#25D366", fontSize: "1.1rem" }}>WhatsApp</h3>
            </div>
            <p style={styles.popupText}>💬 Vous pouvez envoyer un message à ce numéro :</p>
            <p style={styles.phoneNumber}>+261 37 554 1137</p>
            <textarea
              style={styles.textarea}
              placeholder="Écrivez votre message ici..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
            <button style={styles.sendBtn} onClick={envoyerWhatsApp}>
              ✉️ Envoyer sur WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* HERO BANNIÈRE */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.name}>- RAZAFINDRAVAO Christina -</h1>
          <div style={styles.subtitleBox}>
            <p style={styles.subtitle}>Etudiante Informatique Web et Mobile</p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div style={styles.content}>

        {/* Section À propos */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>-À propos-</h2>
          <div style={styles.aProposBox}>
            <div style={styles.aProposPhoto}>
              <img src="/assets/Snapchat-531117175.jpg" alt="Christine" style={styles.aProposImg} />
            </div>
            <div style={styles.aProposDroite}>
              <div style={styles.ongletBtns}>
                {onglets.map((o) => (
                  <button
                    key={o.id}
                    style={{
                      ...styles.ongletBtn,
                      ...(ongletActif === o.id ? styles.ongletBtnActif : {}),
                    }}
                    onClick={() => setOngletActif(o.id)}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              <div style={styles.ongletContenu}>
                {contenuOnglet[ongletActif]}
              </div>
            </div>
          </div>
        </section>

        {/* Section Diplômes */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>-Diplômes-</h2>
          <div style={styles.diplomesGrid}>
            {diplomes.map((d) => (
              <div key={d.annee} style={styles.diplomeCard}>
                <span style={styles.diplomeAnnee}>📅 {d.annee}</span>
                <h3 style={styles.diplomeTitre}>{d.titre}</h3>
                <p style={styles.diplomeDesc}>{d.description}</p>
                <p style={styles.diplomeEcole}>🏫 {d.ecole}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Compétences */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>-Compétences-</h2>
          <div style={styles.competencesGrid}>
            {competences.map((col) => (
              <div key={col.titre} style={styles.competenceCard}>
                <h3 style={styles.competenceCardTitle}>{col.titre}</h3>
                {col.items.map((item) => (
                  <div key={item.nom}>
                    <p
                      style={{
                        ...styles.competenceItem,
                        color: selectedSkill?.nom === item.nom ? "#fff" : "#cbd5e1",
                        cursor: "pointer",
                        fontWeight: selectedSkill?.nom === item.nom ? "bold" : "normal",
                      }}
                      onClick={() =>
                        setSelectedSkill(selectedSkill?.nom === item.nom ? null : item)
                      }
                    >
                      {item.nom}
                    </p>
                    {selectedSkill?.nom === item.nom && (
                      <div style={styles.barreContainer}>
                        <div style={styles.barreLabel}>
                          <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>Niveau</span>
                          <span style={{ color: "#fff", fontWeight: "bold", fontSize: "0.9rem" }}>
                            {item.niveau}%
                          </span>
                        </div>
                        <div style={styles.barreFond}>
                          <div
                            style={{
                              ...styles.barreRemplie,
                              width: `${item.niveau}%`,
                              background:
                                item.niveau >= 80
                                  ? "#22c55e"
                                  : item.niveau >= 60
                                  ? "#38bdf8"
                                  : "#94a3b8",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Section Contact */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>-Contact-</h2>
          <p>📧 Email : razafindravaochristine441@gmail.com</p>
          <p>📱 WhatsApp : 0375541137</p>
          <div style={styles.socials}>
            <a href={cvPath} target="_blank" rel="noreferrer" style={styles.cvButton}>
              📄 Mon CV
            </a>
            <a href="https://www.facebook.com/christine.razafindravao" target="_blank" rel="noreferrer">
              <img src="/assets/facebook.svg" alt="Facebook" style={styles.icon} />
            </a>
            <img
              src="/assets/whatsapp.svg"
              alt="WhatsApp"
              style={styles.icon}
              onClick={() => setShowPopup(true)}
            />
          </div>
        </section>

      </div>
    </div>
  );
}

/* STYLES */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
    fontFamily: "Segoe UI, sans-serif",
  },
  backButton: {
    position: "fixed",
    top: "20px",
    left: "20px",
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    zIndex: 100,
  },
  hero: {
    width: "100%",
    height: "420px",
    backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
  },
  heroOverlay: {
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "20px",
    background: "rgba(0,0,0,0.35)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  name: {
    fontSize: "3rem",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 10px rgba(0,0,0,0.9)",
    margin: 0,
  },
  subtitleBox: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    borderRadius: "30px",
    padding: "10px 30px",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#fff",
    margin: 0,
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "10px",
  },
  // ✅ Bouton CV — blanc transparent au lieu de rose
  cvButton: {
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  icon: {
    width: "32px",
    height: "32px",
    cursor: "pointer",
    filter: "invert(100%)",
    transition: "0.3s",
  },
  content: {
    padding: "60px 10%",
  },
  section: {
    marginBottom: "60px",
  },
  // ✅ Titres sections — blanc au lieu de rose
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#fff",
    fontFamily: "Georgia, serif",
    fontStyle: "italic",
  },
  aProposBox: {
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
    flexWrap: "wrap" as const,
  },
  aProposPhoto: {
    flexShrink: 0,
  },
  // ✅ Bordure photo — blanc au lieu de rose
  aProposImg: {
    width: "180px",
    height: "220px",
    objectFit: "cover",
    borderRadius: "16px",
    border: "3px solid rgba(255,255,255,0.4)",
  },
  aProposDroite: {
    flex: 1,
    minWidth: "250px",
  },
  ongletBtns: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap" as const,
    marginBottom: "20px",
  },
  ongletBtn: {
    background: "transparent",
    border: "1px solid #475569",
    color: "#94a3b8",
    padding: "8px 18px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "0.95rem",
  },
  // ✅ Onglet actif — blanc/transparent au lieu de rose
  ongletBtnActif: {
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.5)",
    color: "#fff",
    fontWeight: "bold",
  },
  ongletContenu: {
    background: "#1e293b",
    borderRadius: "12px",
    padding: "20px",
    minHeight: "120px",
    border: "1px solid #2d2d3a",
  },
  ongletTexte: {
    color: "#cbd5e1",
    lineHeight: "1.8",
    margin: 0,
  },
  ongletListe: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  langueItem: {
    color: "#cbd5e1",
    fontSize: "1rem",
  },
  skillItem: {
    color: "#cbd5e1",
    fontSize: "1rem",
  },
  // DIPLÔMES
  diplomesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  // ✅ Bordure gauche diplôme — blanc au lieu de rose
  diplomeCard: {
    background: "#1e293b",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #2d2d3a",
    borderLeft: "4px solid rgba(255,255,255,0.5)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  // ✅ Année diplôme — blanc au lieu de rose
  diplomeAnnee: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  diplomeTitre: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    margin: 0,
    fontFamily: "Georgia, serif",
  },
  diplomeDesc: {
    color: "#38bdf8",
    fontSize: "0.9rem",
    margin: 0,
  },
  diplomeEcole: {
    color: "#94a3b8",
    fontSize: "0.85rem",
    margin: 0,
  },
  // COMPÉTENCES
  competencesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  competenceCard: {
    background: "#1e293b",
    borderRadius: "16px",
    padding: "20px",
    border: "1px solid #2d2d3a",
  },
  competenceCardTitle: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#fff",
    marginTop: 0,
    marginBottom: "16px",
    paddingBottom: "10px",
    borderBottom: "1px solid #2d2d3a",
    textAlign: "center" as const,
  },
  competenceItem: {
    fontSize: "0.95rem",
    padding: "8px 0",
    borderBottom: "1px solid #1a2535",
    margin: 0,
    transition: "0.2s",
  },
  barreContainer: {
    marginBottom: "8px",
    padding: "6px 0",
  },
  barreLabel: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
  },
  barreFond: {
    width: "100%",
    height: "8px",
    background: "#0f172a",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barreRemplie: {
    height: "100%",
    borderRadius: "10px",
    transition: "width 0.5s ease",
  },
  // POPUP
  overlay: {
    position: "fixed" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  popup: {
    background: "#1e293b",
    borderRadius: "16px",
    padding: "30px",
    width: "340px",
    position: "relative" as const,
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    border: "1px solid #2d2d3a",
  },
  closeBtn: {
    position: "absolute" as const,
    top: "12px", right: "12px",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
  popupHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  popupText: {
    color: "#94a3b8",
    marginBottom: "5px",
    fontSize: "0.95rem",
  },
  phoneNumber: {
    color: "#25D366",
    fontWeight: "bold",
    fontSize: "1.1rem",
    marginBottom: "15px",
  },
  textarea: {
    width: "100%",
    background: "#0f172a",
    border: "1px solid #2d2d3a",
    borderRadius: "10px",
    color: "#fff",
    padding: "10px",
    fontSize: "0.95rem",
    resize: "none" as const,
    outline: "none",
    boxSizing: "border-box" as const,
    marginBottom: "15px",
  },
  sendBtn: {
    width: "100%",
    background: "#25D366",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
  },
};