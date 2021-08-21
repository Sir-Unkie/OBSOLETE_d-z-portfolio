// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Header from './Components/Header/Header.jsx';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import SuspenseSpinner from './Components/SuspenseSpinner/SuspenseSpinner';
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

// import HomePage from './Pages/HomePage/HomePage';
// import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
// import AboutMePage from './Pages/AboutMePage/AboutMePage';
// import ContactPage from './Pages/ContactPage/ContactPage';

//Routes lazy loading
const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const ProjectsPage = React.lazy(() =>
  import('./Pages/ProjectsPage/ProjectsPage')
);
const AboutMePage = React.lazy(() => import('./Pages/AboutMePage/AboutMePage'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage/ContactPage'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Optimize the image for different screens and prepare webp images
// probablu custom scrollbar
// i can add the same thing as a theme but with the about section, so the option selected is stored in the browser
// MPEI logo!!!!!!!!!!!

// cleanup the media querries (do it in the end, when you will be already looking for a job)
// in future i can add google stats
// package/json production >0.2%

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      <Header></Header>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/contact'>
            <Suspense fallback={<SuspenseSpinner />}>
              <ContactPage></ContactPage>
            </Suspense>
          </Route>
          <Route path='/about'>
            <Suspense fallback={<SuspenseSpinner />}>
              <AboutMePage></AboutMePage>
            </Suspense>
          </Route>
          <Route path='/projects'>
            <Suspense fallback={<SuspenseSpinner />}>
              <ProjectsPage></ProjectsPage>
            </Suspense>
          </Route>
          <Route path='/' exact>
            <Suspense fallback={<SuspenseSpinner />}>
              <HomePage></HomePage>
            </Suspense>
          </Route>
          <Route path='*' exact>
            <Suspense fallback={<SuspenseSpinner />}>
              <NotFoundPage></NotFoundPage>
            </Suspense>
          </Route>
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default App;
