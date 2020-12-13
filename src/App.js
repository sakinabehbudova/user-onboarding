import React from "react";
import "./App.css";
import ContactDetails from './ContactDetails/ContactDetails';
import Sidebar from './Sidebar/Sidebar'
import './App.css';


function App() {

  return (
    <div>
      <div id="user-onboarding">
      <div className="row">
        <div className="col-md-4 px-0"><Sidebar/></div>
        <div className="col-md-8 px-0"><ContactDetails/></div>
      </div>
      </div>
    </div>
  );
}

export default App;
