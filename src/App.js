import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as ReactLink
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./components/MapContainer";
import WeatherComponent from "./components/WeatherComponent";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 d-flex">
          <ul className="navbar-nav">
            <li>
              <ReactLink className="nav-item" to="/finland">
                <div className="nav-link">Finland</div>
              </ReactLink>
            </li>
            <li>
              <ReactLink className="nav-item" to="/usa">
                <div className="nav-link">USA</div>
              </ReactLink>
            </li>
            <li>
              <ReactLink className="nav-item" to="/japan">
                <div className="nav-link">Japan</div>
              </ReactLink>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/usa">
            <div className="d-flex flex-grow">
              <Map
                zoom={7 - 0.6 * (2500 / window.innerHeight)}
                center={{ lat: 38.3, lng: -102.48 }}
              />
            </div>
          </Route>
          <Route path="/japan">
            <div className="d-flex flex-grow">
              <Map
                zoom={7 - 0.6 * (2500 / window.innerHeight)}
                center={{ lat: 36.39, lng: 138.96 }}
              />
            </div>
          </Route>
          <Route path="/finland">
            <div className="d-flex  flex-grow">
              <Map
                zoom={7 - 0.6 * (2500 / window.innerHeight)}
                center={{ lat: 65.5, lng: 25.15 }}
              />
            </div>
          </Route>
          <Route path="/">
            <div className="d-flex flex-grow">
              <Map
                zoom={7 - 0.6 * (2500 / window.innerHeight)}
                center={{ lat: 64.0, lng: 25.15 }}
              />
            </div>
          </Route>
        </Switch>
      </Router>
      <WeatherComponent></WeatherComponent>
    </div>
  );
}
