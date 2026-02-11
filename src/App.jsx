import './App.css'
import logo from './assets/ifosup/logo.svg'
import logoWhite from './assets/ifosup/logo_white.svg'
import triangle from './assets/ifosup/animation-triangle.svg'
import rond from './assets/ifosup/animation-rond.svg'
import rondRouge from './assets/ifosup/animation-rond_rouge.svg'
import cercle from './assets/ifosup/animation-cercle.svg'
import wave from './assets/ifosup/top.svg'

const formations = [
  {
    title: 'Enseignement secondaire',
    description:
      'Sections qualifiantes diversifiees: comptabilite, programmation, commerce, electricite/automation et plus.',
    color: 'bg-[var(--ifosup-cyan)]',
  },
  {
    title: 'Enseignement superieur',
    description:
      'Bacheliers en comptabilite, informatique, marketing et BES webdesigner/webdeveloper, en horaire adapte.',
    color: 'bg-[var(--ifosup-yellow)]',
  },
  {
    title: 'Cours de langues',
    description:
      'Anglais, neerlandais, espagnol, italien, russe, japonais, chinois, FLE et langue des signes.',
    color: 'bg-[var(--ifosup-red)]',
  },
  {
    title: 'Modules divers',
    description:
      'Informatique, IA, bureautique, impression 3D, oenologie et ateliers pratiques orientés emploi.',
    color: 'bg-[var(--ifosup-indigo)]',
  },
]

const practicalInfo = [
  { label: 'Telephone', value: '010 22 20 26', href: 'tel:010222026' },
  { label: 'Email', value: 'info@ifosup.wavre.be', href: 'mailto:info@ifosup.wavre.be' },
  {
    label: 'Adresse',
    value: 'Rue de la Limite 6, 1300 Wavre',
    href: 'https://www.google.com/maps/place/Ifosup/@50.7174648,4.6056434,17z/data=!3m1!4b1!4m5!3m4!1s0x47c17d741a720cbd:0x96bf566252976fb4!8m2!3d50.7174614!4d4.6078321',
  },
]

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--ifosup-bg)] text-[var(--ifosup-navy)]">
      <img
        src={triangle}
        alt=""
        className="pointer-events-none absolute -left-12 top-20 w-24 animate-float opacity-60"
      />
      <img
        src={rond}
        alt=""
        className="pointer-events-none absolute right-[10%] top-28 w-14 animate-float-slow opacity-70"
      />
      <img
        src={rondRouge}
        alt=""
        className="pointer-events-none absolute left-[45%] top-[32rem] w-14 animate-float opacity-70"
      />
      <img
        src={cercle}
        alt=""
        className="pointer-events-none absolute bottom-[22rem] right-[8%] w-20 animate-float-slow opacity-65"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-8 md:px-10 lg:px-14">
        <header className="z-10 flex items-center justify-between gap-6">
          <img src={logo} alt="IFOSUP Wavre" className="w-40 md:w-48" />
          <a
            className="rounded-full border border-[var(--ifosup-navy)]/20 bg-white px-5 py-2 text-sm font-semibold tracking-wide transition hover:-translate-y-0.5 hover:bg-[var(--ifosup-navy)] hover:text-white"
            href="https://ifosup.wavre.be/formations"
            target="_blank"
            rel="noreferrer"
          >
            Voir les formations
          </a>
        </header>

        <main className="pt-10 md:pt-14">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_80px_-30px_rgba(12,20,41,0.35)] backdrop-blur md:p-12">
            <img src={wave} alt="" className="pointer-events-none absolute -right-24 -top-20 w-[25rem] opacity-20" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ifosup-cyan)]">
              IFOSUP WAVRE
            </p>
            <h1 className="mt-3 max-w-3xl font-[Poppins] text-4xl font-bold leading-tight md:text-6xl">
              Une ecole pour tous, pensee pour les adultes en reprise d&apos;etudes.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ifosup-navy)]/85 md:text-lg">
              Etablissement de promotion sociale officiel subventionne par la Ville de Wavre, IFOSUP propose des formations modulaires en journee ou en soiree, du secondaire au superieur.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[var(--ifosup-navy)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--ifosup-cyan)]"
                href="https://ifosup.wavre.be/contact"
                target="_blank"
                rel="noreferrer"
              >
                Contacter l&apos;ecole
              </a>
              <a
                className="rounded-full bg-[var(--ifosup-cyan)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--ifosup-navy)]"
                href="https://ifosup.wavre.be/formations"
                target="_blank"
                rel="noreferrer"
              >
                Explorer les parcours
              </a>
            </div>
          </section>

          <section className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-[Poppins] text-3xl font-bold">4 piliers de formation</h2>
              <p className="hidden text-sm text-[var(--ifosup-navy)]/70 md:block">Ancrage metier + apprentissage flexible</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {formations.map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(12,20,41,0.35)]"
                >
                  <div className={`mb-5 h-2 w-16 rounded-full ${item.color}`} />
                  <h3 className="font-[Poppins] text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ifosup-navy)]/80">{item.description}</p>
                  <span className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ifosup-navy)]/60 transition group-hover:text-[var(--ifosup-navy)]">
                    Orientation metier
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-3">
            <article className="glass-card p-7 lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ifosup-cyan)]">A propos</p>
              <h2 className="mt-3 font-[Poppins] text-3xl font-bold">IFOSUP, a taille humaine et en lien avec le terrain</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-[var(--ifosup-navy)]/85">
                L&apos;ecole accompagne les adultes qui veulent evoluer, se reorienter ou consolider leurs competences. L&apos;approche est pragmatique, avec experts metiers et formations adaptees aux realites professionnelles.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-black text-[var(--ifosup-navy)]">3</p>
                  <p className="text-sm text-[var(--ifosup-navy)]/70">Bacheliers</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[var(--ifosup-navy)]">2</p>
                  <p className="text-sm text-[var(--ifosup-navy)]/70">BES</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[var(--ifosup-navy)]">8+</p>
                  <p className="text-sm text-[var(--ifosup-navy)]/70">Sections secondaires</p>
                </div>
              </div>
            </article>

            <article className="glass-card p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--ifosup-red)]">Infos pratiques</p>
              <ul className="mt-4 space-y-4 text-sm">
                {practicalInfo.map((item) => (
                  <li key={item.label}>
                    <p className="font-semibold text-[var(--ifosup-navy)]">{item.label}</p>
                    <a
                      className="text-[var(--ifosup-navy)]/80 underline decoration-[var(--ifosup-cyan)] decoration-2 underline-offset-4"
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-[var(--ifosup-navy)]/70">
                Horaire indicatif secretariat: du lundi au vendredi de 08:30 a 21:45 (verifier les mises a jour sur le site officiel).
              </p>
            </article>
          </section>
        </main>
      </div>

      <footer className="mt-8 bg-[var(--ifosup-navy)] px-6 py-10 text-white md:px-10 lg:px-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <img src={logoWhite} alt="IFOSUP Wavre" className="w-40" />
            <p className="mt-3 text-sm text-white/75">Promotion sociale officielle subventionnee de la Ville de Wavre.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="footer-pill" href="https://ifosup.wavre.be" target="_blank" rel="noreferrer">
              Site officiel
            </a>
            <a className="footer-pill" href="https://www.facebook.com/ifosup" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a
              className="footer-pill"
              href="https://www.instagram.com/ifosup.wavre/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="footer-pill"
              href="https://www.linkedin.com/in/ifosup-wavre-171281239/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App