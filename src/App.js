import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Auth from "./containers/Auth/Auth";
import Registration from "./containers/Registration/Registration";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import TaskManager from "./containers/TaskManager/TaskManager";
import {connect} from "react-redux";

class App extends Component {

    render() {

        let routes = (
            <Layout>
                <Switch>
                    <Route exact  path={'/'} component={Auth} />
                    <Route exact path={'/registration'} component={Registration}/>
                </Switch>
            </Layout>
        )

        if (this.props.isAuthenticated) {
            routes = (
                <Layout>
                    <Switch>
                        <Route exact  path={'/application'} component={TaskManager} />
                        <Redirect to={'/application'} />
                    </Switch>
                </Layout>
            )
        }

        if (this.props.userInfo){
            routes = (
                <Layout>
                    <Switch>
                        <Route exact  path={'/'} component={Auth} />
                        <Redirect to={'/'} />
                    </Switch>
                </Layout>
            )
        }

        return routes
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.userToken
    }
}

export default  withRouter(connect(mapStateToProps)(App))
