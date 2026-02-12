import { Link } from 'react-router-dom';

export default function SectionCard({ section, delay = 0 }) {
  return (
    <article className="section-card reveal" style={{ animationDelay: `${delay}ms` }}>
      <span className="section-card-dot" style={{ backgroundColor: section.color }} aria-hidden="true" />
      <h3>{section.label}</h3>
      <p>{section.hero}</p>
      <ul aria-label={`Points forts de ${section.label}`}>
        {section.outcomes.slice(0, 2).map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
      <Link className="cta-inline" to={`/formations/${section.slug}`}>
        Explorer cette section
      </Link>
    </article>
  );
}