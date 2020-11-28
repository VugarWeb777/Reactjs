import React from "react"
import {connect} from "react-redux";
import {createTask} from "../../../store/actions/createTask";
import {getTaskList} from "../../../store/actions/getTaskList";
import Loader from "../../UI/Loader/Loader";


class TaskList extends React.Component {



    renderTasks = ()=> {
        console.log(this.props)

        // this.props.tasks.map((task, index) => {
        //     return (
        //         <div
        //             key={index}
        //             style={{color: "#fff"}}
        //             className={`tab-pane ${index === 0 ? 'active' : ''}`}
        //             id={task.categoryName}
        //             role="tabpanel"
        //         >
        //
        //             <li
        //                 key={index}
        //                 className="task-item list-group-item list-group-item-light"
        //                 data-value={task.name}
        //                 data-date={task.date}
        //                 data-time={task.time}
        //                 data-note={task.description}
        //                 style={{
        //                     display: "flex",
        //                     justifyContent: "flex-start"
        //                 }}
        //             >
        //
        //                 <input type="checkbox" className="form-check-input" id="materialUnchecked" style={{
        //                     width: "30px",
        //                     height: "20px",
        //                     position: "relative",
        //                     top: "5px",
        //                     left: "-5px",
        //                     cursor: "pointer",
        //                     margin: "0px"
        //                 }}
        //
        //                 />
        //
        //
        //                 <span
        //                     className="task-name"
        //                     title="Edit Task"
        //                     style={{
        //                         fontSize: "20px",
        //                         cursor: "pointer"
        //                     }}
        //                 >
        //                         {task.name}
        //                     </span>
        //
        //                 <span
        //                     className="deleteTask"
        //                     title="Delete Task"
        //                     style={{
        //                         cursor: "pointer",
        //                         alignSelf: "center",
        //                         position: "absolute",
        //                         display: "block",
        //                         right: "10px"
        //                     }}
        //                     onClick={this.props.createTask}
        //                 >
        //                         <i className="fa fa-trash btn_delete" style={{
        //                             color: "red",
        //                             fontSize: "20px"
        //                         }}/>
        //                     </span>
        //             </li>
        //         </div>
        //     )
        // })
    }


    render() {
        return (
            <div className="tab-content">
                {/*{*/}
                {/*    !this.props.loading ? <Loader/> : this.renderTasks()*/}
                {/*}*/}
                <ul>
                    <li>task 1</li>
                </ul>
            </div>
        )
    }
}


export function mapStateToProps (state){
    return {
        tasks: state.task.tasks,
        loading: state.task.loading
    }
}


export function mapDispatchToProps (dispatch){
    return {
        createTask: ()=> dispatch(createTask()),
        getTaskList: ()=> dispatch(getTaskList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskList)