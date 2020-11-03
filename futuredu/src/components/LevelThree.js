import React from "react";

import Dropdown from "./Dropdown"

const text_one = `
- Solving Equations and Inequalities- https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities
- Systems of Equations- https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations
 `
const text_two = `
- Functions- https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions
- Sequences- https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences
`

const LevelThree = props =>{
    return(
        <div className="container">
            <div className="card bg-light my-4 w-100">
                <div className="card-header text-center bg-dark text-white h4">Algebra</div>
                    
                    <Dropdown 
                        id="solving_equations"
                        name="Solving Equations"
                        description={text_one}
                    />
                    
                    <Dropdown 
                        id="functions"
                        name="Functions and Sequences"
                        description={text_two}
                    />
                    
            </div>
        </div>
    )
}

export default LevelThree;