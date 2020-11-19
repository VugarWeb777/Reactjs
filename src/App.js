import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Auth from "./containers/Auth/Auth";
import Registration from "./containers/Registration/Registration";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import TaskManager from "./containers/TaskManager/TaskManager";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./store/actions/auth";

class App extends Component {


    componentDidMount() {
        this.props.autoLogin()
    }

    render() {

        let routes = (
                <Switch>
                    <Route exact  path={'/'} component={Auth} />
                    <Route exact path={'/registration'} component={Registration}/>
                    <Redirect to={'/'} />
                </Switch>
        )

        if (this.props.isAuthenticated) {
            routes = (
                    <Switch>
                        <Route exact  path={'/application'} component={TaskManager} />
                        <Route exact  path={'/logout'}      component={Logout}/>
                        <Redirect to={'/application'} />
                    </Switch>
            )
        }

        return (
            <Layout>
                { routes }
            </Layout>
        )

    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
