import React from "react"
import TaskForm from "./TaskForm/TaskForm";
import {connect} from "react-redux";
import {addTask} from "../../../store/actions/addTask";
import TaskItem from "./Task-item/Task-item";


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

    renderTasks = () => {

        if (this.props.tasks){

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

                            <TaskItem key={index} task={item}/>
                        </div>
                    )

            })
        }


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
    }
}

export default connect(null, mapDispatchToProps)(TaskList);