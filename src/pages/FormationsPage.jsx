import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { sectionMeta } from '../data/siteData';

const filterOptions = [
  { key: 'all', label: 'Tout voir' },
  ...sectionMeta.map((section) => ({ key: section.slug, label: section.short })),
];

function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function FormationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const items = useMemo(() => {
    const rows = sectionMeta.flatMap((section) =>
      section.courses.map((course) => ({
        course,
        sectionLabel: section.label,
        sectionSlug: section.slug,
        color: section.color,
      }))
    );

    return rows.filter((row) => {
      if (activeFilter !== 'all' && row.sectionSlug !== activeFilter) {
        return false;
      }
      if (!search.trim()) {
        return true;
      }
      return normalize(row.course).includes(normalize(search));
    });
  }, [activeFilter, search]);

  return (
    <>
      <Seo
        title="Formations"
        description="Catalogue complet IFOSUP: secondaire, supérieur, langues et modules pour adultes en reprise d’études."
        path="/formations"
      />

      <section className="page-shell inner-hero reveal">
        <p className="eyebrow">Catalogue complet</p>
        <h1>Toutes les formations IFOSUP, scannées et organisées par section</h1>
        <p>
          Parcours longs, formations qualifiantes, langues, modules pratiques: retrouve ici l’ensemble des options proposées et dirige-toi vers la section qui te correspond.
        </p>
      </section>

      <section className="page-shell controls-panel reveal" aria-label="Filtres du catalogue">
        <div className="chip-row" role="tablist" aria-label="Filtrer par section">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              className={`chip ${activeFilter === option.key ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(option.key)}
              role="tab"
              aria-selected={activeFilter === option.key}
              aria-controls="catalog-results"
            >
              {option.label}
            </button>
          ))}
        </div>

        <label className="search-block" htmlFor="formation-search">
          <span className="sr-only">Rechercher une formation</span>
          <input
            id="formation-search"
            type="search"
            placeholder="Ex: Bachelier, IA, Néerlandais, Comptabilité..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </section>

      <section id="catalog-results" className="page-shell courses-grid" aria-live="polite">
        {items.length ? (
          items.map((item, index) => (
            <article className="course-item reveal" style={{ animationDelay: `${index % 12}0ms` }} key={`${item.sectionSlug}-${item.course}`}>
              <div className="course-item-tag" style={{ backgroundColor: item.color }} aria-hidden="true" />
              <h2>{item.course}</h2>
              <p>{item.sectionLabel}</p>
              <Link to={`/formations/${item.sectionSlug}`} className="cta-inline">
                Voir la section
              </Link>
            </article>
          ))
        ) : (
          <article className="glass empty-state">
            <h2>Aucun résultat pour ta recherche</h2>
            <p>Essaie un mot-clé plus court ou retire un filtre de section.</p>
          </article>
        )}
      </section>
    </>
  );
}