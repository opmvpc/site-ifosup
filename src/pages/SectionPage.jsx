import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { sectionMeta } from '../data/siteData';

function slugLabel(slug) {
  const map = {
    secondaire: 'enseignement secondaire',
    superieur: 'enseignement supérieur',
    langues: 'cours de langues',
    modules: 'modules divers',
  };
  return map[slug] || slug;
}

export default function SectionPage() {
  const { sectionSlug } = useParams();
  const section = sectionMeta.find((item) => item.slug === sectionSlug);

  if (!section) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={section.label}
        description={`Programme ${slugLabel(section.slug)} IFOSUP Wavre: détails, débouchés et liste des cours.`}
        path={`/formations/${section.slug}`}
      />

      <section className="page-shell inner-hero reveal">
        <p className="eyebrow" style={{ color: section.color }}>
          {section.label}
        </p>
        <h1>{section.hero}</h1>
        <p>
          Choisis un parcours calibré pour la vie active avec une pédagogie orientée terrain, des groupes à taille humaine et un accompagnement de proximité.
        </p>
      </section>

      <section className="page-shell dual-grid">
        <article className="glass reveal">
          <h2>Ce que tu gagnes avec cette section</h2>
          <ul className="check-grid">
            {section.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>

        <article className="glass reveal" style={{ animationDelay: '100ms' }}>
          <h2>Format des cours</h2>
          <p>
            Les parcours IFOSUP sont structurés en unités modulaires et planifiés pour t’aider à avancer de façon réaliste, même avec une activité professionnelle.
          </p>
          <p>
            Selon les programmes, les cours sont organisés en journée, en soirée, ou en combinaison flexible.
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Vérifier les horaires avec l’équipe
          </Link>
        </article>
      </section>

      <section className="page-shell section-stack" aria-labelledby="list-title">
        <div className="section-heading reveal">
          <h2 id="list-title">Cours proposés dans cette section</h2>
          <p>Catalogue recensé depuis les données publiques IFOSUP.</p>
        </div>

        <div className="courses-grid">
          {section.courses.map((course, index) => (
            <article className="course-item reveal" style={{ animationDelay: `${index % 10}0ms` }} key={course}>
              <div className="course-item-tag" style={{ backgroundColor: section.color }} aria-hidden="true" />
              <h3>{course}</h3>
              <p>{section.label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}