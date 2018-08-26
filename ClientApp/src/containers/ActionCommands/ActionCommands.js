import React, {Component} from 'react';
import axios from 'axios';
import ActionCommand from '../../components/ActionCommand/ActionCommand';

class ActionCommands extends Component {
    state = {
        actionCommandList: null,
        error: null
    };


    componentDidMount() {
        axios.get('/api/actioncommands')
            .then(response => {
                console.log(response);
                this.setState({actionCommandList: response.data});
            })
            .catch(error => {
                console.log(error);
                this.setState({error: error})
            });
    }

    render() {
        let commands = null;

        if (this.state.actionCommandList){
            commands = this.state.actionCommandList.map((action, index) => {
                return <ActionCommand key={index}
                                      topic={action.topic}
                                      description={action.description}
                                      diagrams={action.diagrams}
                                      commandRequest={action.commandRequest}
                                      commandResponse={action.commandResponse}
                                      actionEvents={action.actionEvents}
                />;
            });
        }

        return (
            <div>
                {commands}
            </div>
        );
    }
}

export default ActionCommands;