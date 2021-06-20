
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import GetRows from './GetRows';
import Services from './Services';
import Medicalequipments from './Medicalequipments';




const Router = (props) => (<Switch>
<Route exact path='/' component={Home}/>
<Route  path='/Home' component={Home}/>
<Route path="/getrows" component={GetRows} />
<Route path="/Services" component={Services} />
<Route path="/Medicalequipments" component={Medicalequipments} />

</Switch>)
export default Router;