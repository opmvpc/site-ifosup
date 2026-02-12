import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionCard from '../components/SectionCard';
import topPhoto from '../assets/ifosup/photos/home-top.jpg';
import schoolPhoto from '../assets/ifosup/photos/home-school_1.jpg';
import { campusInfo, globalStats, sectionMeta, site, valuePillars } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Accueil"
        description="Reprends tes etudes a IFOSUP Wavre: formations secondaires, bacheliers, BES, langues et modules professionnalisants."
        path="/"
      />

      <section className="page-shell hero-grid">
        <article className="hero-panel reveal">
          <p className="eyebrow">IFOSUP WAVRE</p>
          <h1>Ton nouveau depart professionnel commence ici.</h1>
          <p>
            Ecole de promotion sociale a taille humaine, IFOSUP accompagne les adultes qui veulent evoluer, se reorienter ou valider un diplome reconnu.
          </p>
          <div className="hero-cta-row">
            <Link to="/formations" className="btn btn-primary">
              Decouvrir les formations
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Parler a un conseiller
            </Link>
          </div>
          <p className="hero-note">{campusInfo.enrollmentWindow}</p>
        </article>

        <figure className="hero-media reveal" style={{ animationDelay: '120ms' }}>
          <img src={topPhoto} alt="Etudiants en formation a IFOSUP" loading="eager" />
          <figcaption>
            Cours en journee ou en soiree, formats modulaires, approche metier.
          </figcaption>
        </figure>
      </section>

      <section className="page-shell stats-grid" aria-label="Chiffres cles IFOSUP">
        {globalStats.map((stat, index) => (
          <article className="glass metric reveal" style={{ animationDelay: `${index * 80}ms` }} key={stat.label}>
            <p className="metric-value">{stat.value}</p>
            <p className="metric-label">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="page-shell section-stack" aria-labelledby="home-sections-title">
        <div className="section-heading reveal">
          <p className="eyebrow">Parcours</p>
          <h2 id="home-sections-title">4 univers de formation pour tous les profils</h2>
          <p>
            Tu veux un diplome long, une competence directe, une reconversion ou une remise a niveau: IFOSUP te propose un parcours adapte et concret.
          </p>
        </div>
        <div className="cards-4">
          {sectionMeta.map((section, index) => (
            <SectionCard key={section.slug} section={section} delay={index * 90} />
          ))}
        </div>
      </section>

      <section className="page-shell dual-grid" aria-labelledby="home-values-title">
        <article className="glass reveal">
          <p className="eyebrow">Pourquoi nous choisir</p>
          <h2 id="home-values-title">Une pedagogie orientee reussite et employabilite</h2>
          <ul className="check-grid">
            {valuePillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
          <Link to="/ecole" className="btn btn-secondary">
            Voir la vision IFOSUP
          </Link>
        </article>

        <figure className="glass image-card reveal" style={{ animationDelay: '120ms' }}>
          <img src={schoolPhoto} alt="Batiment et ambiance de l ecole IFOSUP" loading="lazy" />
          <figcaption>
            {site.address}
            <br />
            {site.phoneDisplay} - {site.email}
          </figcaption>
        </figure>
      </section>
    </>
  );
}