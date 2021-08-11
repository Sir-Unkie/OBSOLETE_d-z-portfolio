// import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import AboutMePage from './Pages/AboutMePage/AboutMePage';
import ContactPage from './Pages/ContactPage/ContactPage';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Make a Logo
// implement a full dark theme
// Add on h1 homepage a shine effect
// Add start animation on homepage
// Update Hero image
// Optimize the image for different screens
// add a night icon on the toggle theme btn
// design the footer and update it
// make motion transitions
// burger navigation
// in future i can add google stats
// the theme and probably an about me choice should be stored somewhere (for example redux store or local storage so the theme is not switched on page reload) - you can do it with a useEffect hook on a top level
// add mailto icon on the homepage
// https://gooey-react.netlify.app  gooey effect on some elements?

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/contact'>
          <ContactPage></ContactPage>
        </Route>
        <Route path='/about'>
          <AboutMePage></AboutMePage>
        </Route>
        <Route path='/projects'>
          <ProjectsPage></ProjectsPage>
        </Route>
        <Route path='/' exact>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
