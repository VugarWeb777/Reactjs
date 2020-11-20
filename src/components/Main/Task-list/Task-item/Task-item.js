import React from "react"

class Task extends React.Component {


    render() {
        return (
            this.props.tasks.map((task, index) => {
                return (
                        <li
                            key={index}
                            className="task-item list-group-item list-group-item-light"
                            data-value={task.name}
                            data-date={task.date}
                            data-time={task.time}
                            data-note={task.description}
                            style={{
                                display: "flex",
                                justifyContent: "flex-start"
                            }}
                        >



                                <input type="checkbox" className="form-check-input" id="materialUnchecked" style={{
                                    width: "30px",
                                    height: "20px",
                                    position: "relative",
                                    top: "5px",
                                    left: "-5px",
                                    cursor: "pointer",
                                    margin: "0px"
                                }}
                                    onClick={this.props.onTaskFinished}
                                />


                            <span
                                className="task-name"
                                title="Edit Task"
                                style={{
                                    fontSize: "20px",
                                    cursor: "pointer"
                                }}
                            >
                                {task.name}
                            </span>


                            <span
                                className="deleteTask"
                                title="Delete Task"
                                style={{
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    position: "absolute",
                                    display: "block",
                                    right: "10px"
                                }}
                            >
                                <i className="fa fa-trash btn_delete" style={{
                                    color: "red",
                                    fontSize: "20px"
                                }}/>
                            </span>
                        </li>
                )
            })
        )
    }
}

export default Task