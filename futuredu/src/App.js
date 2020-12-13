import React from "react";
import { Switch, Route,useLocation } from 'react-router-dom';

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/Error";
import LevelOne from "./components/LevelOne";
import LevelTwo from "./components/LevelTwo";
import LevelThree from "./components/LevelThree";
import Footer from './components/Footer';

function App() {

    let location = useLocation();

    return (
        <div>
            {location.pathname === "/"
                ? null
                : <Header Color={"black"} />
            }
            <Switch>
                <Route path="/error" component={ErrorPage} exact/>
                <Route path="/:lvlone/:lvltwo/:lvlthree" component={LevelThree} />
                <Route path="/:lvlone/:lvltwo" component={LevelTwo} />
                <Route path="/:lvlone" component={LevelOne} />
                <Route path="/" component={Homepage} exact />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
