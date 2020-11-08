import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Auth from "./containers/Auth/Auth";

class App extends Component {
    render() {
        return (
            <Layout>
                <Auth/>
            </Layout>
        )
    }
}

export default App
