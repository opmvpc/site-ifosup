import { NavLink } from 'react-router-dom';
import logo from '../assets/ifosup/logo.svg';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/formations', label: 'Formations' },
  { to: '/ecole', label: 'Notre école' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="page-shell header-inner">
        <NavLink to="/" className="brand" aria-label="Retour à l’accueil IFOSUP">
          <img src={logo} alt="Logo IFOSUP Wavre" className="brand-logo" />
        </NavLink>
        <nav aria-label="Navigation principale">
          <ul className="main-nav">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}