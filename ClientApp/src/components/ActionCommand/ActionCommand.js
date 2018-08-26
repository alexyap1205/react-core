import React from 'react';
import ParameterList from '../ParameterList/ParameterList';
import ActionEvents from '../ActionEvents/ActionEvents';

const actionCommand = (props) => {
    const images = props.diagrams.map((diagram, index) => {
        return <img key={index} src={ require('../../assets/' + diagram)}/>
    });

    return (
        <div className="CommandEventEntry">
            <h1>{props.topic.toUpperCase()}</h1>
            <p>{props.description.toLowerCase()}</p>
            <h2>Diagrams</h2>
            <span>{images}</span>
            <h2>Command Request</h2>
            <ParameterList parameters={props.commandRequest.parameters}/>
            <h2>Command Response</h2>
            <ParameterList parameters={props.commandResponse.parameters}/>
            <ActionEvents events={props.actionEvents}/>
        </div>);
};

export default actionCommand;