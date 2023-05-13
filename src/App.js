import { BrowserRouter, Switch, Route, } from "react-router-dom"; 
import landingpage from './pages/landingpage';
import ProfileSiswa from './pages/ProfileSiswa';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={landingpage} path="/" exact/>
      <Route component={ProfileSiswa} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
