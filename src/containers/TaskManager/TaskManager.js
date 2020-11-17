import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class TaskManager extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            accountInfo: this.props.accountInfo
        }
    }


    render() {

        if (this.state.accountInfo) {
            return (
                <div className={classes.containerFluid}>
                    <div className={classes.row}>
                        <div className={classes.sidebar}>
                            <h1>Sidebar</h1>
                        </div>
                        <div className={classes.main}>
                            <h1>Main block</h1>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to={'/'}/>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        accountInfo: state.account.accountInfo
    }
}


export default connect(mapStateToProps)(TaskManager);