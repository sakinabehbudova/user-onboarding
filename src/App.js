import React from "react";
import "./App.css";
import ContactDetails from './ContactDetails/ContactDetails';
import Sidebar from './Sidebar/Sidebar'
import './App.css';
import {Switch,Route} from 'react-router-dom';
import InvestmentPlans from "./InvestmentPlans/InvestmentPlans";
import InvestmentPrefences from "./InvestmentPreferences/InvestmentPreferences";
import NumberRange from "./InvestmentPlans/InvestmentPlans";



function App() {
  
        return (
        <div>
  
      <div id="user-onboarding">
      <div className="row">
        <div className="col-md-4 px-0"><Sidebar/></div>
        <div className="col-md-8 px-0">
          <Switch>
            <Route  path="/user-onboarding" exact component={ContactDetails}/>
            <Route path="/user-onboarding/plans" exact component={InvestmentPlans}/>
            <Route path="/user-onboarding/prefences" exact component={InvestmentPrefences}/>
             <Route path="/user-onboarding/range" exact component={NumberRange}/>
           

            
           
          </Switch>
          </div>
      </div>
      </div>
    </div>
  );

}

export default App;
