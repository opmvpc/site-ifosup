import { Link } from 'react-router-dom';
import logoWhite from '../assets/ifosup/logo_white.svg';
import { site } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="page-shell footer-grid">
        <section aria-label="Identite IFOSUP">
          <img src={logoWhite} alt="IFOSUP Wavre" className="footer-logo" />
          <p className="footer-copy">
            Ecole de promotion sociale officielle subventionnee par la Ville de Wavre.
          </p>
        </section>

        <section aria-label="Navigation rapide">
          <h2 className="footer-title">Navigation</h2>
          <div className="footer-links">
            <Link to="/formations" className="footer-pill">
              Formations
            </Link>
            <Link to="/ecole" className="footer-pill">
              Notre ecole
            </Link>
            <Link to="/contact" className="footer-pill">
              Contact
            </Link>
          </div>
        </section>

        <section aria-label="Reseaux sociaux">
          <h2 className="footer-title">Reseaux</h2>
          <div className="footer-links">
            {site.socials.map((social) => (
              <a key={social.url} href={social.url} target="_blank" rel="noreferrer" className="footer-pill">
                {social.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}