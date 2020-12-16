import React from "react";
import classes from "./Task-item.css"


class TaskItem extends React.Component {

    render() {

        if (this.props.task) {
            const task = this.props.task
            return (
                <li
                    className="task-item list-group-item list-group-item-light"
                    data-value={task.title}
                    data-note={task.description}
                    style={{display: "flex", justifyContent: "flex-start", margin: "10px 0"}}
                >

                    <input type="checkbox" className={classes.formCheck} id="materialUnchecked"/>

                    <span className="task-name" title="Edit Task" style={{fontSize: "20px", cursor: "pointer"}}>
                                    {task.title}
                            </span>

                    <span className={classes.deleteTask} title="Delete Task">
                                    <i className="fa fa-trash btn_delete" style={{color: "red", fontSize: "20px"}}/>
                            </span>
                </li>
            )
        }
        return null
    }
}

export default TaskItem