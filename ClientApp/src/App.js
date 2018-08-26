import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { Layout } from './components/Layout';
import ActionCommands from './containers/ActionCommands/ActionCommands';
import TriggerEvents from "./containers/TriggerEvents/TriggerEvents";

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/action-commands' component={ActionCommands} />
                    <Route path='/trigger-events' component={TriggerEvents} />
                    <Redirect from='/' to='/action-commands'/>
                </Switch>
            </Layout>
        );
    }
}
