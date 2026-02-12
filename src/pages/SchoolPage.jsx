import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { globalStats, valuePillars } from '../data/siteData';

export default function SchoolPage() {
  return (
    <>
      <Seo
        title="Notre école"
        description="Découvre la mission IFOSUP Wavre: école de promotion sociale pour adultes, pédagogie concrète et culture de la réussite."
        path="/ecole"
      />

      <section className="page-shell inner-hero reveal">
        <p className="eyebrow">Notre école</p>
        <h1>Un établissement à taille humaine, tourné vers ta progression réelle</h1>
        <p>
          IFOSUP est une école de promotion sociale officielle. Notre mission: permettre à chaque adulte de renforcer ses compétences, trouver un emploi, évoluer ou se reconvertir.
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
          <h2>Ce qui fait la différence IFOSUP</h2>
          <ul className="check-grid">
            {valuePillars.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </article>

        <article className="glass reveal" style={{ animationDelay: '100ms' }}>
          <h2>Pour qui?</h2>
          <p>
            Pour les adultes en reprise d’études, les personnes en reconversion, celles qui veulent professionnaliser une passion ou accélérer leur employabilité.
          </p>
          <h2>Comment démarrer?</h2>
          <p>
            Commence par identifier la section qui correspond à ton objectif. Ensuite, contacte l’équipe pour valider prérequis, rythme et calendrier d’inscription.
          </p>
          <div className="hero-cta-row">
            <Link to="/formations" className="btn btn-primary">
              Choisir ma section
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Planifier mon entrée
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}