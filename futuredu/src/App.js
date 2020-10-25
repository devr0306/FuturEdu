import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from "./components/Header"
import Homepage from "./components/Homepage";
import LevelOne from "./components/LevelOne";
import LevelTwo from "./components/LevelTwo";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/prereqs" component={LevelOne} />
                <Route path="/etech" component={LevelOne} />
                <Route path="/skills" component={LevelOne} />
                <Route path="/algebra" component={LevelTwo} />
            </Switch>
        </div>
    )
}

export default App;
