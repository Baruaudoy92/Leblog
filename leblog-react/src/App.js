import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}  from "react-router-dom";
import SinglePost from "./components/singlepost/SinglePost";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import User from "./pages/user/User";
import Update from "./pages/updateuser/Update";


function App() {
  const user = false;
  return (
    <Router>
    <Topbar /> 
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/register">  {user ? <Home /> : <Register />}</Route>
    <Route path="/login"> {user ? <Home /> : <Login />} </Route>
    <Route path="/write"> {user ? <Write /> : <Register />} </Route>
    <Route path="/settings"> {user ? <Settings /> : <Register />} </Route>
    <Route path="/contact"> {user ? <Contact /> : <Register />} </Route>
    <Route path="/about"> <About /> </Route>
    <Route path="/user"> <User /> </Route>
    <Route path="/updateuser/:id"> <Update /> </Route>
    <Route path="/post/:postId">
      <SinglePost />
      <Single />  
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
