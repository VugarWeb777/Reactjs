import React from "react"
import Task from "./Task-item/Task-item";

class TaskList extends React.Component {


    render() {
        return (
            <div className="tab-content">
                {this.props.data.map((list, index) => {

                    return (
                        <div
                            key={index}
                            style={{color: "#fff"}}
                            className={`tab-pane ${list.isActive ? 'active' : ''}`}
                            id={list.name}
                            role="tabpanel"
                        >
                            <h1>{list.name}</h1>
                            <Task
                                tasks={list.tasks}
                                onTaskFinished={this.props.onTaskFinished}
                            />
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default TaskList