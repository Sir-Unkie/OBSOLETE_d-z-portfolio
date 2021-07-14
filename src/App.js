// import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/projects'>Projects</Route>
        <Route path='/'>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
