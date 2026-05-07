import profile from "./profile.jpg.jpeg";
import './App.css';

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <h1>Fatimaezzahra Abouame</h1>
        <div>
          <a href="#about">À propos</a>
          <a href="#project">Projet</a>
          <a href="#skills">Compétences</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="badge">Étudiante en Licence Informatique</p>
          <h2>
            Portfolio de <br />
            Fatimaezzahra
          </h2>
          <p className="desc">
            Basée à Marrakech, je recherche un stage PFE pour développer mes
            compétences en développement web et participer à des projets utiles.
          </p>
          <button>Projet : Covoiturage Universitaire</button>
        </div>

        <div className="hero-card">
          <img src={profile} alt="Fatimaezzahra" className="profile-img" />

          <h3>Étudiante en Informatique</h3>
          <p>
            Passionnée par le développement web moderne et les interfaces
            professionnelles.
          </p>

          <h3>Projet principal</h3>
          <p>Covoiturage Universitaire</p>

          <h3>Objectif</h3>
          <p>Recherche de stage PFE</p>

          <h3>Ville</h3>
          <p>Marrakech, Maroc</p>
        </div>
      </section>

      <section id="about" className="section white">
        <h2>À propos de moi</h2>
        <p>
          Je suis Fatimaezzahra Abouame, étudiante en Licence Informatique.
          Je suis motivée, sérieuse et passionnée par le développement web,
          les applications modernes et la création de solutions pratiques.
        </p>
      </section>

      <section id="project" className="section project">
        <h2>Mon projet : Covoiturage Universitaire</h2>
        <p>
          Une application web destinée aux étudiants pour faciliter le
          covoiturage entre l’université, la maison et les différents quartiers
          de la ville.
        </p>

        <div className="cards">
          <div className="card">
            <h3>🚗 Publication de trajets</h3>
            <p>Les étudiants peuvent proposer des trajets disponibles.</p>
          </div>

          <div className="card">
            <h3>🔍 Recherche rapide</h3>
            <p>Recherche par destination, date ou lieu de départ.</p>
          </div>

          <div className="card">
            <h3>👩‍🎓 Communauté étudiante</h3>
            <p>Une solution pensée pour les besoins des étudiants.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section white">
        <h2>Compétences</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>Git</span>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>📍 Marrakech, Maroc</p>
        <p>🎯 Recherche : Stage PFE</p>
        <p>📧 Email : fatimaezzahra@email.com</p>
      </section>
    </div>
  );
}

export default App;