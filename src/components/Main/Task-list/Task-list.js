import React from "react"
import TaskForm from "./TaskForm/TaskForm";
import {connect} from "react-redux";
import {addTask} from "../../../store/actions/addTask";
import TaskItem from "./Task-item/Task-item";
import {deleteTask} from "../../../store/actions/deleteTask";
import Modal from "../../Modal/Modal";
import {isFinishedHandler} from "../../../store/actions/isFinished";
import Loader from "../../UI/Loader/Loader";

class TaskList extends React.Component {


    addTask = (event) => {
        event.preventDefault();

        const form = event.target
        const data = {
            categoryId: document.querySelector(".list-group-item.active").getAttribute('id'),
            categoryName: document.querySelector(".list-group-item.active").getAttribute('data-name'),
            title: form['title'].value,
            description: form['description'].value,
            dateTime: new Date(),
            isFinished: false
        }

        this.props.addTask(data)
        form.reset()
    }

    deleteTask = (event) => {
        const target = event.target
        const taskId = target.parentElement.parentElement.getAttribute('id')

        this.props.deleteTask(taskId)
    }

    editTask = (event) => {
        const task = event.target.parentElement
        const oldData = {
            title: task.getAttribute('data-value'),
            description: task.getAttribute('data-note'),
            id: task.getAttribute('id'),
            isFinished: event.target.previousSibling.checked
        }
    }

    taskIsFinished = (event) => {
        let data = {
            id: event.target.parentElement.id,
            index:event.target.parentElement.getAttribute('data-index'),
            isFinished: event.target.checked
        }

        console.log(data)

        this.props.isFinishedHandler(data)
    }

    renderTasks = () => {

        if (this.props.tasks) {

            const task = this.props.tasks

            return task.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{color: "#fff"}}
                        className={`tab-pane active`}
                        id={item.categoryName}
                        data-id={item.categoryId}
                        role="tabpanel">


                        <TaskItem index={index} taskIsFinished={this.taskIsFinished} onEdit={this.editTask} key={index}
                                  task={item} onDelete={this.deleteTask}/>
                    </div>
                )
            })
        }
        return <Loader/>
    }

    render() {
        return (
            <div className="tab-content">

                <TaskForm onSubmit={this.addTask} isDisabled={this.props.isDisabled}/>


                {this.renderTasks()}
            </div>
        )
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        addTask: (data) => dispatch(addTask(data)),
        deleteTask: (id) => dispatch(deleteTask(id)),
        isFinishedHandler: (data) => dispatch(isFinishedHandler(data))
    }
}

export default connect(null, mapDispatchToProps)(TaskList);