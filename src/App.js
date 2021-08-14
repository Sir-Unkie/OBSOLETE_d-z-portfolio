// import logo from './logo.svg';
import './App.scss';
import React, { useEffect } from 'react';
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
// Add on h1 homepage a shine effect
// Update Hero image
// Optimize the image for different screens
// add a night icon on the toggle theme btn
// burger navigation
// in future i can add google stats
// the theme and probably an about me choice should be stored somewhere (for example redux store or local storage so the theme is not switched on page reload) - you can do it with a useEffect hook on a top level
// https://gooey-react.netlify.app  gooey effect on some elements?
// change the Spinner(animate it with framer motion https://www.framer.com/docs/examples/)
// also i can add elstic dragable circles

function App() {
  const location = useLocation();
  // useEffect(() => {
  //   const themeLocalStorage = localStorage.getItem('theme');
  //   if (themeLocalStorage === 'null') {
  //     alert('no local storage data');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, []);

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
