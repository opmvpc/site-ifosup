import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function AppLayout() {
  return (
    <div className="site-root">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <AnimatedBackground />
      <Header />
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}