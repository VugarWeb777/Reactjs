import React from "react"

class AddTask extends React.Component{

    render() {
        return (
            <div className="AddTask">
                <form method="post" name="task">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Add task"
                               aria-label="Add task" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-md btn-success m-0 px-3 waves-effect waves-light"
                                        type="submit" id="MaterialButton-addon1">Add
                                    task
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTask