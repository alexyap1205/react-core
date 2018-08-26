import React from 'react';
import ParameterList from "../ParameterList/ParameterList";

const triggerEvent = (props) => {
    return (<div className="CommandEventEntry">
        <h1>{props.topic.toUpperCase()}</h1>
        <p>{props.description.toLowerCase()}</p>
        <h2>Arguments</h2>
        <ParameterList parameters={props.arguments}/>
    </div>);
};

export default triggerEvent;