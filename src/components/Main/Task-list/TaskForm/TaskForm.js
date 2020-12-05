import React from "react";

class TaskForm extends React.Component {


    componentDidMount() {}

    render() {

        return (
            <React.Fragment>

                    <button type="button" className="btn blue-gradient" data-toggle="modal"  data-target="#fullHeightModalRight" style={{margin: 0,marginBottom: "10px"}}>
                        add Task
                    </button>

                <form action={''} className={'taskForm'} onSubmit={this.props.onSubmit}>
                <div className="modal fade right" id="fullHeightModalRight" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel"
                     aria-hidden="true">



                    <div className="modal-dialog modal-full-height modal-right" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title w-100" id="myModalLabel">Task</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                        <div className="md-form mb-5">
                                            <i className="fas fa-user prefix grey-text"/>
                                            <input type="text" name={'title'} id="form34" className="form-control validate"/>
                                            <label data-error="wrong" data-success="right" htmlFor="form34" className="">title</label>
                                        </div>

                                        <div className="md-form form-sm">
                                            <i className="fas fa-pencil-alt prefix"/>
                                            <textarea type="text" name={'description'} id="form67" className="md-textarea mb-0"/>
                                            <label htmlFor="form67">description</label>
                                        </div>

                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>

                    </div>
                </div>
            </form>
            </React.Fragment>
        )

    }
}

export default TaskForm;