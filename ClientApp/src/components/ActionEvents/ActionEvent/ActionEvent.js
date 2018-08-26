import React from 'react';
import ParameterList from '../../ParameterList/ParameterList';

const actionEvent = (props) => {
    return (
        <div>
            <h3>Event {props.eventName}</h3>
            <ParameterList parameters={props.arguments}/>
        </div>
    );
};

export default actionEvent;