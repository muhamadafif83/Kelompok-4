import { BrowserRouter, Switch, Route, } from "react-router-dom"; 
import landingpage from './pages/landingpage';
import ProfileSiswa from './pages/ProfileSiswa';
import Materi from "./pages/materiSiswa";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={landingpage} path="/" exact/>
      <Route component={ProfileSiswa} path="/pages/ProfileSiswa" />
      <Route component={Materi} path="/pages/materiSiswa" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
