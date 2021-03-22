import Home from './Home-check/Home/Home'
import './Global/media.css'
import './Global/color.scss'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import RegistrAbout from "./Register/Register";

function App() {
  return (
    <Switch>
        <Route  path="/registration" component={RegistrAbout} />
        <Route  path="/" component={Home} />
    </Switch>
  );
}

export default App;
