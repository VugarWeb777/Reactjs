import React from 'react'
import classes from './TaskManager.css'
import {connect} from "react-redux";
import User from "../../components/Sidebar/User/User";
import {getAccountInfo} from "../../store/actions/getAccountInfo";
import Categories from "../../components/Sidebar/Categories/Categories";
import TaskList from "../../components/Main/Task-list/Task-list";


class TaskManager extends React.Component {

    constructor(props) {
        super(props);

        this.props.getAccountInfo()

        this.state = {
            data: [
                {
                    name: 'React',
                    isActive: true,
                    taskCount: 2,
                    tasks: [
                        {
                            name: 'Сделать страницу авторизации',
                            description: 'создать  компонент авторизации',
                            date: '3 November, 2020',
                            time: '18:00',
                            finished: true
                        },
                        {
                            name: 'Отрисовка списка задач',
                            description: '1) создать компонет списка задач',
                            date: '20 November, 2020',
                            time: '14:33',
                            finished: true
                        }
                    ]
                },
                {
                    name: 'Sport',
                    isActive: false,
                    taskCount: 1,
                    tasks: [
                        {
                            name: 'Качалка',
                            description: 'Начать тренировки в подвале',
                            date: '21 November, 2020',
                            time: '14:33',
                            finished: false
                        }
                    ]
                },
                {
                    name: 'Working',
                    isActive: false,
                    taskCount: 0,
                    tasks: [
                        {
                            name: 'test',
                            description: 'test',
                            date: '21 November, 2020',
                            time: '14:33',
                            finished: false
                        }
                    ]
                },
            ]
        }
    }


    onTaskFinished = (event)=> {
        const id = event.target.id
        console.log(id)
    }

    render() {
        return (

            <div className={classes.containerFluid}>
                <div className={classes.row}>
                    <div className={classes.sidebar}>
                        {this.props.accountInfo ? <User email={this.props.accountInfo.email}/> : null}
                        <Categories
                            data={this.state.data}
                        />
                    </div>
                    <div className={classes.main}>
                        <TaskList
                            data={this.state.data}
                            onTaskFinished={this.onTaskFinished}
                        />
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