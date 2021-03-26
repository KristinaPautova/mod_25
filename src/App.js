import Home from './Home-check/Home/Home'
import './Global/media.css'
import './Global/color.scss'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import RegistrAbout from "./Register/Register";
import About from "./About/AboutUs/AboutUs";
import Questions from "./Questions/Questions";
import ResetPassword from "./Containers/ResetPass";
import Step1 from "./Containers/Registration/Step1/Step1";
import Success from "./Components/Registr-page/Success/Success";

function App() {
  return (
    <Switch>
        <Route path="users/:id" />
        <Route path="/reset-pass" component={ResetPassword} />
        {/*<Route  path="/registration" component={RegistrAbout} />*/}
        <Route path="/about" component={About} />
        <Route path="/success" component={Success} />
        <Route path="/step1" component={Step1} />
        <Route path="/qouestions" component={Questions}/>
        <Route  path="/" component={Home} />
    </Switch>
  );
}

export default App;
