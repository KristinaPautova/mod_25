import Home from './Home-check/Home/Home'
import './Global/media.css'
import './Global/color.scss'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import RegistrAbout from "./Register/Register";
import About from "./About/AboutUs/AboutUs";
import Questions from "./Questions/Questions";
import Entrance from "./Global/Register/Entrance";
import Lease from "./Arenda/ArnCar/Lease";


function App() {
  return (
    <Switch>
        <Route  path="/registration" component={RegistrAbout} />
        <Route path="/about" component={About} />
        <Route path="/qouestions" component={Questions}/>
        <Route path="/entrance" component={Entrance}/>
        <Route path="/lease"  component={Lease}/>
        <Route  path="/" component={Home} />
    </Switch>
  );
}

export default App;
