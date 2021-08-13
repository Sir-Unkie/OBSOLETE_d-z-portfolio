// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Header from './Components/Header/Header.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Spinner from './Components/Spinner/Spinner';
// import HomePage from './Pages/HomePage/HomePage';
// import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
// import AboutMePage from './Pages/AboutMePage/AboutMePage';
// import ContactPage from './Pages/ContactPage/ContactPage';

const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const ProjectsPage = React.lazy(() =>
  import('./Pages/ProjectsPage/ProjectsPage')
);
const AboutMePage = React.lazy(() => import('./Pages/AboutMePage/AboutMePage'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage/ContactPage'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Make a Logo
// implement a full dark theme
// Add on h1 homepage a shine effect
// Add start animation on homepage
// Update Hero image
// Optimize the image for different screens
// add a night icon on the toggle theme btn
// make motion transitions
// burger navigation
// in future i can add google stats
// the theme and probably an about me choice should be stored somewhere (for example redux store or local storage so the theme is not switched on page reload) - you can do it with a useEffect hook on a top level
// https://gooey-react.netlify.app  gooey effect on some elements?
// add lazy loading for components

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/contact'>
          <Suspense fallback={<Spinner />}>
            <ContactPage></ContactPage>
          </Suspense>
        </Route>
        <Route path='/about'>
          <Suspense fallback={<Spinner />}>
            <AboutMePage></AboutMePage>
          </Suspense>
        </Route>
        <Route path='/projects'>
          <Suspense fallback={<Spinner />}>
            <ProjectsPage></ProjectsPage>
          </Suspense>
        </Route>
        <Route path='/' exact>
          <Suspense fallback={<Spinner />}>
            <HomePage></HomePage>
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
