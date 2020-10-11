import React from "react";
import { Switch, Route } from 'react-router-dom'

import Header from "./components/Header"
import Homepage from "./components/Homepage";
import Prerequisites from "./components/Prerequisites";
import Skills from "./components/Skills";
import Emerging from "./components/Emerging";
import MachineLearning from "./components/MachineLearning";
import DeepLearning from "./components/DeepLearning";
import AtomicStructure from "./components/AtomicStructure";
import Reactions from "./components/Reactions";
import StatesOfMatter from "./components/StatesOfMatter";
import Equilibrium from "./components/Equilibrium";
import Thermodynamics from "./components/Thermodynamics";
import Mechanics from "./components/Mechanics";
import Electricity from "./components/Electricity";
import Waves from "./components/Waves";
import Fluids from "./components/Fluids";
import QuantumPhy from "./components/QuantumPhy";
import ChemicalBio from "./components/ChemicalBio";
import Cells from "./components/Cells";
import Genetics from "./components/Genetics";
import Ecology from "./components/Ecology";
import Java from "./components/Java";
import Javascipt from "./components/Javascipt";
import Python from "./components/Python";
import Html from "./components/Html";
import Algebra from "./components/Algebra";
import Geometry from "./components/Geometry";
import Calculus from "./components/Calculus";
import LinearAlgebra from "./components/LinearAlgebra";
import Statistics from "./components/Statistics";
import SMBeginner from "./components/SMBeginner";
import SMIntermediate from "./components/SMIntermidiate";
import SMAdvanced from "./components/SMAdvanced";

function App() {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/prereqs" component={Prerequisites} />
                <Route path="/etech" component={Emerging} />
                <Route path="/skills" component={Skills} />
                <Route path="/ml" component={MachineLearning} />
                <Route path="/dl" component={DeepLearning} />
                <Route path="/atomicstructure" component={AtomicStructure} />
                <Route path="/reactions" component={Reactions} />
                <Route path="/statesofmatter" component={StatesOfMatter} />
                <Route path="/equilibrium" component={Equilibrium} />
                <Route path="/thermodynamics" component={Thermodynamics} />
                <Route path="/Mechanics" component={Mechanics} />
                <Route path="/electricity" component={Electricity} />
                <Route path="/waves" component={Waves} />
                <Route path="/fluids" component={Fluids} />
                <Route path="/quantumphy" component={QuantumPhy} />
                <Route path="/chemicalbio" component={ChemicalBio} />
                <Route path="/cells" component={Cells} />
                <Route path="/genetics" component={Genetics} />
                <Route path="/ecology" component={Ecology} />
                <Route path="/java" component={Java} />
                <Route path="/python" component={Python} />
                <Route path="/htmlcss" component={Html} />
                <Route path="/js" component={Javascipt} />
                <Route path="/algebra" component={Algebra} />
                <Route path="/geometrytrig" component={Geometry} />
                <Route path="/calc" component={Calculus} />
                <Route path="/lalgebra" component={LinearAlgebra} />
                <Route path="/stat" component={Statistics} />
                <Route path="/smbeginner" component={SMBeginner} />
                <Route path="/smintermediate" component={SMIntermediate} />
                <Route path="/smadv" component={SMAdvanced} />
            </Switch>
        </div>
    )
}

export default App;