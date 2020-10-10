import React from "react";
import { Switch, Route } from 'react-router-dom'

import Header from "./components/Header"
import Homepage from "./components/Homepage";
import Prerequisites from "./components/Prerequisites";
import EmerginTech from "./components/EmergingTech";

function App(){
    return(
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/prereqs" component={Prerequisites} />
                <Route path="/etech" component={EmerginTech} />
		    </Switch>
        </div>
    )
}

export default App;