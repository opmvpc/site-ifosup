import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import ContactPage from './pages/ContactPage';
import FormationsPage from './pages/FormationsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SchoolPage from './pages/SchoolPage';
import SectionPage from './pages/SectionPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/formations/:sectionSlug" element={<SectionPage />} />
        <Route path="/ecole" element={<SchoolPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}