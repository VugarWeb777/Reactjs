import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import User from "../../components/Sidebar/User/User";
import Search from "../../components/Sidebar/Search/Search";
import TabList from "../../components/Sidebar/Tab-list/Tab-list";
import Button from "../../components/UI/Button/Button";
import AddTask from "../../components/Forms/AddTask/AddTask";
import TabContent from "../../components/Main/Tab-content/Tab-content";

class TaskManager extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            accountInfo: this.props.accountInfo
        }
    }

    render() {
            return (
                <div className={classes.containerFluid}>
                    <div className={classes.row}>
                        <div className={classes.sidebar}>
                            <h1>Sidebar</h1>
                            <User email={this.state.accountInfo.email}/>
                            <Search/>
                            <TabList/>
                            <Button type="primary" >create list</Button>
                        </div>
                        <div className={classes.main}>
                            <h1>Categories name</h1>
                            <AddTask/>
                            <TabContent/>
                        </div>
                    </div>
                </div>
            )
        }
}


function mapStateToProps(state) {
    return {
        accountInfo: state.account.accountInfo
    }
}


export default connect(mapStateToProps)(TaskManager);