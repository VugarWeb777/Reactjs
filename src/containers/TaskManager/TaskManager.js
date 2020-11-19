import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import User from "../../components/Sidebar/User/User";
import {getAccountInfo} from "../../store/actions/getAccountInfo";


class TaskManager extends React.Component {

    constructor(props) {
        super(props);

        this.props.getAccountInfo()
    }


    render() {
        return (

            <div className={classes.containerFluid}>
                <div className={classes.row}>
                    <div className={classes.sidebar}>
                        {this.props.accountInfo ? <User email={this.props.accountInfo.email}/> : null}
                    </div>
                    <div className={classes.main}>
                        <h1>Categories name</h1>
                    </div>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getAccountInfo: () => dispatch(getAccountInfo())
    }
}

function mapStateToProps(state) {
    return {
        accountInfo: state.account.accountInfo
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);