import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import User from "../../components/Sidebar/User/User";
import {getAccountInfo} from "../../store/actions/getAccountInfo";
import Categories from "../../components/Sidebar/Categories/Categories";


class TaskManager extends React.Component {


    componentDidMount() {

        const token = localStorage.getItem('Token')

        this.props.getAccountInfo(token)
    }


    render() {
        return (

            <div className={classes.containerFluid}>
                <div className={classes.row}>
                    <div className={classes.sidebar}>
                        {this.props.accountInfo ? <User email={this.props.accountInfo.email}/> : null}
                        <Categories />
                    </div>
                    <div className={classes.main}>
                    </div>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getAccountInfo: (token) => dispatch(getAccountInfo(token))
    }
}


function mapStateToProps(state) {
    return {
        accountInfo: state.account.accountInfo
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);