import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import ProtectedRoute from "./components/ProtectedRoute";

import Join from "./pages/Join";
import JoinEmployer from "./pages/join_subpages/SignupEmployer";
import JoinFreelancer from "./pages/join_subpages/SignupFreelancer";

import ProfileEmployer from "./pages/profile_subpages/ProfileEmployer";
import ProfileFreelancer from "./pages/profile_subpages/ProfileFreelancer";

import UpdateProfileEmployer from "./pages/update_profile_subpages/UpdateProfileEmployer";
import UpdateProfileFreelancer from "./pages/update_profile_subpages/UpdateProfileFreelancer";

import Login from "./pages/Login";
import LoginEmployer from "./pages/login_subpages/LoginEmployer";
import LoginFreelancer from "./pages/login_subpages/LoginFreelancer";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="login">
            <Route index element={<Login />} />
            <Route path="employer" element={<LoginEmployer />} />
            <Route path="freelancer" element={<LoginFreelancer />} />
          </Route>
          <Route path="join">
            <Route index element={<Join />} />
            <Route path="employer" element={<JoinEmployer />} />
            <Route path="freelancer" element={<JoinFreelancer />} />
          </Route>

          <Route
            exact
            path="user"
            element={
              <ProtectedRoute>
                <Outlet />
              </ProtectedRoute>
            }
          >
            <Route path="profile">
              <Route path="employer" element={<ProfileEmployer />} />
              <Route path="freelancer" element={<ProfileFreelancer />} />
            </Route>
            <Route path="update">
              <Route path="freelancer" element={<UpdateProfileFreelancer />} />
              <Route path="employer" element={<UpdateProfileEmployer />} />
            </Route>
          </Route>

          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
