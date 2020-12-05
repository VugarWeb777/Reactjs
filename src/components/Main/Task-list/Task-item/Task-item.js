import React from "react";
import classes from "./Task-item.css"


class TaskItem extends React.Component{

    render() {
        return (
                <li
                    className="task-item list-group-item list-group-item-light"
                    data-value={this.props.task.title}
                    data-note={this.props.task.description}
                    style={{display: "flex", justifyContent: "flex-start", margin: "10px 0"}}
                >

                    <input type="checkbox" className={classes.formCheck} id="materialUnchecked"/>

                    <span className="task-name" title="Edit Task" style={{fontSize: "20px", cursor: "pointer"}}>
                                {this.props.task.title}
                        </span>

                    <span className={classes.deleteTask} title="Delete Task">
                                <i className="fa fa-trash btn_delete" style={{color: "red", fontSize: "20px"}}/>
                        </span>
                </li>
        )
    }
}

export default TaskItem