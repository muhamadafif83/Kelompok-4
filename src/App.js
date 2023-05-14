import { BrowserRouter, Switch, Route, } from "react-router-dom"; 
import landingpage from './pages/landingpage';
import ProfileSiswa from './pages/ProfileSiswa';
import Materi from "./pages/materiSiswa";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={landingpage} path="/" exact/>
      <Route component={ProfileSiswa} path="/profile" />
      <Route component={Materi} path="/materi" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
