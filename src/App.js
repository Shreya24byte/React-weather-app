import './App.css';
import {useState} from 'react';
import Sidebar from './components/Sidebar';
import Setting from './components/Setting';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState({userName:"", userLocation:"Bangalore"});
  return (
    <Router>
   <div className="p-5 background">
    <div className="row rounded-5" id="container">
      <Sidebar user={user} setUser={setUser}/>
      <Navbar/>
      <div className="col-md-9 col-sm-12">
        <Switch>
          <Route path="/settings">
          <Setting user={user} setUser={setUser}/>
          </Route>
          <Route path="/">
            <Dashboard user={user}/>
          </Route>
      </Switch>
      </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
