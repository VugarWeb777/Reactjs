import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Auth from "./containers/Auth/Auth";
import {Route,Switch} from  'react-router-dom'
import TaskManager from "./containers/TaskManager/TaskManager";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact  path={'/'} component={Auth} />
                    <Route exact  path={'/application'} component={TaskManager} />
                </Switch>
            </Layout>
        )
    }
}

export default App
