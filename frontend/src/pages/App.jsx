import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";
import Reservas from "./pages/Reservas";
import Navbar from "./components/navbar";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reservas" component={Reservas} />
        <Route path="/navbar" component={Navbar} />
      </Switch>
    </Router>
  );
}

export default App;
