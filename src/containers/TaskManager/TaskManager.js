import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import User from "../../components/Sidebar/User/User";
import {getAccountInfo} from "../../store/actions/getAccountInfo";
import Categories from "../../components/Sidebar/Categories/Categories";
import TaskList from "../../components/Main/Task-list/Task-list";
import Loader from "../../components/UI/Loader/Loader";


class TaskManager extends React.Component {

    state = {
        tasks: null,
        categoriesList: null,
        isActiveCategoryIndex: 0,
        isActiveCategoryId: null,
        loading: false
    }


    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()");

        if (nextProps.categoriesList !== this.state.categoriesList) {
            this.setState({
                tasks: nextProps.tasks,
                categoriesList: nextProps.categoriesList,
                isActiveCategoryId: nextProps.categoriesList[0].id,
                loading: true
            })
        }
    }

    componentWillMount() {
        this.props.getAccountInfo(localStorage.getItem('Token'))
    }

    setActiveCategory = (event) => {
        event.preventDefault()

        const isActiveCategoryId = event.target.id

        this.setState({
            isActiveCategoryId
        })
    }

    render() {

        if (this.state.tasks && this.state.categoriesList) {
            const tasks = this.state.tasks.filter((task) => {
                return task.categoryId === this.state.isActiveCategoryId
            })

            return (
                <div className={classes.containerFluid}>
                    <div className={classes.row}>
                        <div className={classes.sidebar}>
                            <User email={this.props.accountInfo.email}/>
                            <Categories  categoriesList={this.state.categoriesList} onClick={this.setActiveCategory}/>
                        </div>

                        <div className={classes.main}>
                            <TaskList tasks={tasks}/>
                        </div>
                    </div>
                </div>
            )
        }
        return <Loader/>
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getAccountInfo: (token) => dispatch(getAccountInfo(token)),
    }
}


function mapStateToProps(state) {
    return {
        accountInfo: state.account.accountInfo,
        categoriesList: state.account.categoriesList,
        tasks: state.account.tasks
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);