import React from "react";
import classes from "./Task-item.css"


class TaskItem extends React.Component {

    render() {

        if (this.props.task) {
            let task = this.props.task
            return (
                <li
                    className={`task-item list-group-item  ${task.isFinished ? 'list-group-item-success' : 'list-group-item-light'}`}
                    data-value={task.title}
                    data-note={task.description}
                    style={{display: "flex", justifyContent: "flex-start", margin: "10px 0"}}
                    id={task.id}
                    data-index={this.props.index}
                >

                    <input disabled={!!task.isFinished} defaultChecked={!!task.isFinished} onClick={this.props.taskIsFinished} type="checkbox" className={classes.formCheck} id="materialUnchecked"/>

                    <span className="task-name"  onClick={this.props.onEdit} title="Edit Task" style={{fontSize: "20px", cursor: "pointer"}}>
                                    {task.title}
                            </span>

                    <span className={classes.deleteTask} title="Delete Task">
                                    <i className="fa fa-trash btn_delete" style={{color: "red", fontSize: "20px"}} onClick={this.props.onDelete}/>
                            </span>
                </li>
            )
        }
        return null
    }
}

export default TaskItem