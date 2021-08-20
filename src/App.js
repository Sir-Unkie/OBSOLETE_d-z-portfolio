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
// Optimize the image for different screens
// convert images to webp
// add page tab logo icon
// probablu custom scrollbar
// do something with the mobile homepage image
// on tablet there is always a scroll and also about me section is fucked up in all the tabs - shrink them and fix oboronEnergo logo
// center all the projects on mobile view
// i can add the same thing as a theme but with the about section, so the option selected is stored in the browser

// cleanup the media querries (do it in the end, when you will be already looking for a job)
// in future i can add google stats

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
