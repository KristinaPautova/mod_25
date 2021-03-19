import Home from './Home-check/Home/Home'
import './Global/media.css'
import './Global/color.scss'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import RegistrAbout from "./Register/Register";

function App() {
  return (
    <Switch>
       <Route  path="/" component={Home} />
        <Route  path="/registration" component={RegistrAbout} />

    </Switch>
  );
}

export default App;
