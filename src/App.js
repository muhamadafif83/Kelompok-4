import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink, Redirect, Link } from "react-router-dom"; 
import landingpage from './pages/landingpage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={landingpage} path="/" exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
