import React from 'react';
import ActionEvent from './ActionEvent/ActionEvent';

const actionEvents = (props) => {
    const evts = props.events.map(event => {
        return <ActionEvent key={event.topic} eventName={event.topic} arguments={event.arguments}/>;
    });

    return (
        evts.length !== 0 ?
            (<div>
            <h2>Action Events</h2>
            {evts}
        </div>) : null
    );
};

export default actionEvents;