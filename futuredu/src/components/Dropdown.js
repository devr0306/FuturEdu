import React, { useState } from "react";
import Markdown from 'markdown-to-jsx';

const Dropdown = props => {

    const [isToggle, setToggle] = useState(false)

    const toggleTrueFalse = () => setToggle(!isToggle)

    return (
        <div className="row">
            <div className="col-10">
                <div className="card-body pl-5 py-3" id={props.id}>
                    <button
                        className="invisible"
                        type="button"
                        data-toggle="collapse"
                        data-target={"#" + props.id + "collapse"}
                    >
                        <h5 className="card-title py-2 visible">{props.name}</h5>
                    </button>
                    <p className="card-text my-2 collapse" id={props.id + "collapse"}>{<Markdown>{props.content}</Markdown>}</p>
                </div>
            </div>
            <div className="col-2 text-center">
                <div className="mt-4" onClick={toggleTrueFalse}>
                        <button
                            className="fas fa-angle-down visible"
                            data-fa-transform={isToggle ? "rotate-90" : null}
                            type="button"
                            data-toggle="collapse"
                            data-target={"#" + props.id + "collapse"}
                        />
                </div>
            </div>
        </div>

    )
}


export default Dropdown;