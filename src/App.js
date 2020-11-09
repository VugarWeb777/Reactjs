import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Auth from "./containers/Auth/Auth";
import Registration from "./containers/Registration/Registration";
import {Route,Switch} from  'react-router-dom'


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact  path={'/'} component={Auth} />
                    <Route exact  path={'/registration'} component={Registration}/>
                </Switch>
            </Layout>
        )
    }
}

export default App