import Seo from '../components/Seo';
import contactPhoto from '../assets/ifosup/photos/home-contact.jpg';
import { campusInfo, site } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contacte IFOSUP Wavre pour tes inscriptions, horaires et informations de formation."
        path="/contact"
      />

      <section className="page-shell hero-grid">
        <article className="hero-panel reveal">
          <p className="eyebrow">Contact</p>
          <h1>Parlons de ton projet de formation</h1>
          <p>
            Une question sur un parcours, une inscription ou les horaires? L’équipe IFOSUP te répond rapidement et t’aide à choisir la meilleure voie.
          </p>

          <dl className="contact-list">
            <div>
              <dt>Téléphone</dt>
              <dd>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Adresse</dt>
              <dd>
                <a href={site.mapUrl} target="_blank" rel="noreferrer">
                  {site.address}
                </a>
              </dd>
            </div>
          </dl>
        </article>

        <figure className="hero-media reveal" style={{ animationDelay: '120ms' }}>
          <img src={contactPhoto} alt="Accueil IFOSUP et équipe disponible" loading="lazy" />
          <figcaption>Nous sommes à ton écoute pour construire ton parcours.</figcaption>
        </figure>
      </section>

      <section className="page-shell dual-grid" aria-label="Infos pratiques et liens utiles">
        <article className="glass reveal">
          <h2>Horaires indicatifs</h2>
          <ul className="hours-list">
            {campusInfo.openingHours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="small-note">Horaires susceptibles d’adaptation en cours d’année. Vérification conseillée avant de te déplacer.</p>
        </article>

        <article className="glass reveal" style={{ animationDelay: '100ms' }}>
          <h2>Ressources directes</h2>
          <div className="footer-links">
            <a className="footer-pill dark" href="https://ifosup.wavre.be/formations" target="_blank" rel="noreferrer">
              Formations officielles
            </a>
            <a className="footer-pill dark" href="https://ifosup.wavre.be/informations" target="_blank" rel="noreferrer">
              Documents utiles
            </a>
            <a className="footer-pill dark" href="https://sites.google.com/a/ifosupwavre.be/votre-section/" target="_blank" rel="noreferrer">
              Intranet
            </a>
            <a className="footer-pill dark" href={site.mapUrl} target="_blank" rel="noreferrer">
              Ouvrir la carte
            </a>
          </div>
        </article>
      </section>
    </>
  );
}