import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { globalStats, valuePillars } from '../data/siteData';

export default function SchoolPage() {
  return (
    <>
      <Seo
        title="Notre ecole"
        description="Decouvre la mission IFOSUP Wavre: ecole de promotion sociale pour adultes, pedagogie concrete et culture de la reussite."
        path="/ecole"
      />

      <section className="page-shell inner-hero reveal">
        <p className="eyebrow">Notre ecole</p>
        <h1>Un etablissement a taille humaine, tourne vers ta progression reelle</h1>
        <p>
          IFOSUP est une ecole de promotion sociale officielle. Notre mission: permettre a chaque adulte de renforcer ses competences, trouver un emploi, evoluer ou se reconvertir.
        </p>
      </section>

      <section className="page-shell stats-grid" aria-label="Chiffres IFOSUP">
        {globalStats.map((stat, index) => (
          <article className="glass metric reveal" style={{ animationDelay: `${index * 80}ms` }} key={stat.label}>
            <p className="metric-value">{stat.value}</p>
            <p className="metric-label">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="page-shell dual-grid">
        <article className="glass reveal">
          <h2>Ce qui fait la difference IFOSUP</h2>
          <ul className="check-grid">
            {valuePillars.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </article>

        <article className="glass reveal" style={{ animationDelay: '100ms' }}>
          <h2>Pour qui?</h2>
          <p>
            Pour les adultes en reprise d etudes, les personnes en reconversion, celles qui veulent professionnaliser une passion ou accelerer leur employabilite.
          </p>
          <h2>Comment demarrer?</h2>
          <p>
            Commence par identifier la section qui correspond a ton objectif. Ensuite, contacte l equipe pour valider pre-requis, rythme et calendrier d inscription.
          </p>
          <div className="hero-cta-row">
            <Link to="/formations" className="btn btn-primary">
              Choisir ma section
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Planifier mon entree
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}