import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import User from "../../components/Sidebar/User/User";
import {getAccountInfo} from "../../store/actions/getAccountInfo";
import Categories from "../../components/Sidebar/Categories/Categories";
import TaskList from "../../components/Main/Task-list/Task-list";
import Loader from "../../components/UI/Loader/Loader";
import {getCategories} from "../../store/actions/getCategories";
import {getTasks} from "../../store/actions/getTasks";

class TaskManager extends React.Component {

    state = {
        tasks: null,
        taskCount: 0,
        categoriesList: null,
        isActiveCategoryId: null,
        loading: false,
        accountInfo: null
    }

    componentWillMount() {
        this.props.getAccountInfo(localStorage.getItem('Token'))
        this.props.getCategories()
        this.props.getTasks()
    }

    componentWillReceiveProps(nextProps) {


        if (nextProps.categoriesList.length === 0){
            if (nextProps.categoriesList !== this.state.categoriesList){
                this.setState({
                    categoriesList: null,
                    isActiveCategoryId: null
                })
            }
        }

        if (nextProps.categoriesList.length > 0){
            if (nextProps.categoriesList !== this.state.categoriesList){
                this.setState({
                    categoriesList: nextProps.categoriesList,
                    isActiveCategoryId: nextProps.categoriesList[0].id,
                })
            }
        }

        if (nextProps.tasks.length > 0 ) {
            if ( nextProps.tasks !== this.state.tasks)
                this.setState({
                    tasks: nextProps.tasks,
                })
        }

        if (nextProps.accountInfo){
            if (nextProps.accountInfo !== this.state.accountInfo){
                this.setState({
                    accountInfo: nextProps.accountInfo
                })
            }
        }

        return true
    }


    groupBy = key => array =>
        array.reduce((objectsByKeyValue, obj) => {
            const value = obj[key];
            objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
            return objectsByKeyValue;
        }, {});


    setActiveCategory = (event) => {
        event.preventDefault()

        const isActiveCategoryId = event.target.id

        const listGroup = document.querySelectorAll('.list-group-item')

        listGroup.forEach(el => {
            el.classList.remove("active");
        });

        this.setState({
            isActiveCategoryId
        })
    }


    render() {

        let content = (
            <div className={classes.containerFluid}>
                <div className={classes.row}>
                    <div className={classes.sidebar}>
                        <User email={this.state.accountInfo ? this.state.accountInfo.email : '' }/>
                        <Categories
                            categoriesList={[]}
                            onClick={this.setActiveCategory}
                        />
                    </div>

                    <div className={classes.main}>

                        <TaskList
                            tasks={[]}
                            isDisabled={true}
                        />
                    </div>
                </div>
            </div>
        )

        //if all data loaded
        if (this.state.tasks && this.state.categoriesList && this.state.accountInfo) {
            const tasks = this.state.tasks.filter((task) => {
                return task.categoryId === this.state.isActiveCategoryId
            })

            // const groupByCategoryId = this.groupBy('categoryId');
            // const tasksGroup = groupByCategoryId(this.state.tasks);
            //
            // const taskCount = Object.keys(tasksGroup).map((value, index) => {
            //     return tasksGroup[value].length
            // })

            content = (
                <div className={classes.containerFluid}>
                    <div className={classes.row}>
                        <div className={classes.sidebar}>
                            <User email={this.state.accountInfo.email }/>

                            <Categories
                                categoriesList={this.state.categoriesList}
                                onClick={this.setActiveCategory}
                            />
                        </div>

                        <div className={classes.main}>

                            <TaskList
                                tasks={tasks}
                            />
                        </div>
                    </div>
                </div>
            )
        }

        //if only tasks null
        if (this.state.tasks === null && this.state.categoriesList !== null){

            content = (
                <div className={classes.containerFluid}>
                    <div className={classes.row}>
                        <div className={classes.sidebar}>
                            <User email={this.state.accountInfo ? this.state.accountInfo.email : '' }/>
                            <Categories
                                categoriesList={this.state.categoriesList}
                                onClick={this.setActiveCategory}
                            />
                        </div>

                        <div className={classes.main}>

                            <TaskList
                                tasks={[]}
                            />
                        </div>
                    </div>
                </div>
            )
        }

        return content
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAccountInfo: (token) => dispatch(getAccountInfo(token)),
        getCategories: () => dispatch(getCategories()),
        getTasks: () => dispatch(getTasks())
    }
}


function mapStateToProps(state) {
    return {
        accountInfo: state.account.accountInfo,
        categoriesList: state.category.categoriesList,
        tasks: state.task.tasks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);