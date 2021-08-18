// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Header from './Components/Header/Header.jsx';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import SuspenseSpinner from './Components/SuspenseSpinner/SuspenseSpinner';
import { AnimatePresence } from 'framer-motion';

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
// Make a Logo
// Update Hero image
// Optimize the image for different screens
// add a night icon on the toggle theme btn
// burger navigation
// cleane up the index css colors
// probably can add router redirect to 404page just in SWITCH add the last * route with 404 data
// fix the layout issue with the mobile view
// add page tab logo icon
// probablu custom scrollbar
// add telephone number
// change the contact page popup linked in
// burger is not visible on every width

// also i can add elstic dragable circles
// in future i can add google stats
// https://gooey-react.netlify.app  gooey effect on some elements?

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
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default App;
