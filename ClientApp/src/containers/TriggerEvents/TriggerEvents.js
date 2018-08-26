import React, {Component} from 'react';
import axios from 'axios';
import TriggerEvent from "../../components/TriggerEvent/TriggerEvent";

class TriggerEvents extends Component {
    state = {
        triggerEventsList: null,
        error: null
    };

    componentDidMount () {
        axios.get('/api/triggerevents')
            .then(response => {
                console.log(response);
                this.setState({triggerEventsList: response.data});
            })
            .catch(error => {
                console.log(error);
                this.setState({error: error})
            });
    }

    render() {
        let eventsList = null;

        if (this.state.triggerEventsList    ){
            eventsList = this.state.triggerEventsList.map((event, index) => {
                return <TriggerEvent key={index}
                                      topic={event.topic}
                                      description={event.description}
                                      arguments={event.arguments}
                />;
            });
        }

        return (
            <div>
                {eventsList}
            </div>
        );
    }
}

export default TriggerEvents;