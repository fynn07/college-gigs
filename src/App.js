import "./App.css"
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Join from './pages/join';
import Login from './pages/login';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">    
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Join' component={Join}/>  
        <Route exact path='/Services' component={Services}/>  
        <Route exact path='/About' component={About}/> 
        <Route exact path='/Contact' component={Contact}/>   
        </Switch>
        <Footer/>
        </Router>
      
    </div>
  );
}

export default App;
