import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import User from "../../components/Sidebar/User/User";
import {getAccountInfo} from "../../store/actions/getAccountInfo";
import Categories from "../../components/Sidebar/Categories/Categories";
import TaskList from "../../components/Main/Task-list/Task-list";
import {getData} from "../../store/actions/getData";

class TaskManager extends React.Component {

    state = {
        categoriesList: [],
        tasks: [],
        isActiveCategoryId: null,
        isActiveCategoryIndex: 0,
        accountInfo: null
    }

    componentWillMount() {
        this.props.getAccountInfo(localStorage.getItem('Token'))
        this.props.getData()
    }


    componentWillReceiveProps(nextProps) {

        if (nextProps.categoriesList !== undefined && nextProps.categoriesList.length > 0) {
            if (nextProps.categoriesList !== this.state.categoriesList) {

                const data = {...nextProps.categoriesList}

                const categoriesList = Object.keys(data).map(value => {
                    return {
                        id: data[value].id,
                        name: data[value].name
                    }
                })

                this.setState({
                    isActiveCategoryIndex: this.state.isActiveCategoryIndex,
                    categoriesList
                })

                if (nextProps.categoriesList.length === 1) {
                    this.setState({
                        isActiveCategoryId: nextProps.categoriesList[0].id,
                    })
                } else {
                    this.setState({
                        isActiveCategoryId: nextProps.categoriesList[this.state.isActiveCategoryIndex].id,
                    })
                }
            }

        } else {
            this.setState({
                categoriesList: null,
                tasks: null,
                isActiveCategoryId: null,
            })
        }

        if (nextProps.tasks !== undefined) {
            if (nextProps.tasks !== this.state.tasks) {
                this.setState({
                    tasks: nextProps.tasks,
                })
            }
        } else {
            this.setState({
                tasks: null
            })
        }


        if (nextProps.accountInfo) {
            if (nextProps.accountInfo !== this.state.accountInfo) {
                this.setState({
                    accountInfo: nextProps.accountInfo
                })
            }
        }

        return true
    }


    setActiveCategory = (event) => {
        event.preventDefault()

        const isActiveCategoryId = event.target.id;
        const isActiveCategoryIndex = parseInt(event.target.getAttribute("data-index"));

        const listGroup = document.querySelectorAll('.list-group-item')

        listGroup.forEach(el => {
            el.classList.remove("active");
        });

        this.setState({
            isActiveCategoryId,
            isActiveCategoryIndex
        })
    }


    render() {

        let content = (
            <div className={classes.containerFluid}>
                <div className={classes.row}>
                    <div className={classes.sidebar}>
                        <User email={this.state.accountInfo ? this.state.accountInfo.email : ''}/>
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


        if (this.state.categoriesList !== null && this.state.accountInfo) {

            let tasks = []

            if (this.state.tasks.length > 0) {
                tasks = this.state.tasks.filter((task) => {
                    return task.categoryId === this.state.isActiveCategoryId
                })
            }

            console.log(tasks)


            content = (
                <div className={classes.containerFluid}>
                    <div className={classes.row}>
                        <div className={classes.sidebar}>
                            <User email={this.state.accountInfo.email}/>

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

        return content
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAccountInfo: (token) => dispatch(getAccountInfo(token)),
        getData: () => dispatch(getData())
    }
}


function mapStateToProps(state) {
    return {
        accountInfo: state.account.accountInfo,
        categoriesList: state.data.categoriesList,
        tasks: state.data.tasks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);