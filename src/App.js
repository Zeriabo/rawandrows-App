
import './App.css';
import NavBar from "./Components/NavBar"
import Services from "./Components/Services";
import MedicalEquipment from "./Components/MedicalEquipments";
import Contactus from "./Components/ContactUs";
import Home from './Components/Home';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
function App() {
  return (
    <div className="App">
 <Router>
   
        <NavBar />
        <br />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/Home" component={Home}>

           <Home />
             
                <Intro />
          </Route>
   
          <Route path="/Services" component={Services}>
              <Services />
          </Route>
          <Route path="/MedicalEquipments" component={MedicalEquipment}>
            <MedicalEquipment />
          </Route>
          <Route path="/AboutUs" component={AboutUs}>
            <AboutUs />
          </Route>
          <Route path="/ContactUs" component={Contactus}>
            <Contactus />
          </Route>
       
        </Switch>
    </Router>

    <Footer />
    </div>
    
  );
}

export default App;
