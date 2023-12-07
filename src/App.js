import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Join from "./pages/Join";
import JoinEmployer from "./pages/join_subpages/Signup_employer";
import JoinFreelancer from "./pages/join_subpages/Lignup_freelancer";
import Login from "./pages/Login";
import LoginEmp from "./pages/login_subpages/Login-employer";
import LoginFree from "./pages/login_subpages/Login-freelancer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Login/employer" component={LoginEmp} />
            <Route exact path="/Login/freelancer" component={LoginFree} />
            <Route exact path="/Join" component={Join} />
            <Route exact path="/Join/employer" component={JoinEmployer} />
            <Route exact path="/Join/freelancer" component={JoinFreelancer} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
          <div className="footer">
            <Footer />
          </div>
        </Router>
      </ToastContainer>
    </div>
  );
}

export default App;
