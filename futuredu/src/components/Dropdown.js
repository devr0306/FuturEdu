import React from "react";
import Markdown from 'markdown-to-jsx';

const Dropdown = props => {
    return (
        <div className="card-body pl-5 py-4">
            <p className="card-text my-2">{<Markdown>{props.description}</Markdown>}</p>
        </div>
    )
}

export default Dropdown;