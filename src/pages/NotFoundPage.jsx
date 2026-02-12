import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page non trouvee" description="La page demandee n existe pas." path="/404" />
      <section className="page-shell inner-hero reveal">
        <p className="eyebrow">Erreur 404</p>
        <h1>Cette page n existe pas ou plus.</h1>
        <p>Retourne au catalogue ou a l accueil pour poursuivre ton parcours.</p>
        <div className="hero-cta-row">
          <Link to="/" className="btn btn-primary">
            Retour accueil
          </Link>
          <Link to="/formations" className="btn btn-secondary">
            Voir les formations
          </Link>
        </div>
      </section>
    </>
  );
}