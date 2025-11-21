import { useRoutes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { EditionPage } from './editions/EditionPage';
import { NotFound } from './pages/NotFound';

export default function App() {
  const routes = useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: '/:editionSlug', element: <EditionPage /> },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
}