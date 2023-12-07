import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Join from "./pages/Join";
import JoinEmployer from "./pages/join_subpages/SignupEmployer";
import JoinFreelancer from "./pages/join_subpages/SignupFreelancer";
import Login from "./pages/Login";
import LoginEmp from "./pages/login_subpages/LoginEmployer";
import LoginFree from "./pages/login_subpages/LoginFreelancer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/employer" component={LoginEmp} />
          <Route exact path="/login/freelancer" component={LoginFree} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/join/employer" component={JoinEmployer} />
          <Route exact path="/join/freelancer" component={JoinFreelancer} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
