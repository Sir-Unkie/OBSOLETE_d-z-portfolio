// import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Make a Logo
// implement a full dark theme
// Add on h1 homepage a shine effect
// Add start animation on homepage
// Update Hero image
// Optimize the image for different screens
// add a night icon on the toggle theme btn
// design the footer and update it
// change the colors for the project card: change the project name font color (prob darker)
// project card - animate image on hover (lighten it scale and maybe slide in some info)

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/projects'>
          <ProjectsPage></ProjectsPage>
        </Route>
        <Route path='/'>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
