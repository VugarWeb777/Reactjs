import React from "react";

class FormTemplate extends  React.Component{

    render() {

        return (

            <React.Fragment>
                <button type="button" className="btn blue-gradient" data-toggle="modal" data-target="#basicExampleModal">
                    {this.props.actionName}
                </button>

                <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true"
                >
                    <form action={''} onSubmit={this.props.onSubmit} id={this.props.formId} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.props.actionName}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="md-form">
                                    <input type="text" name="categoryName" autoFocus={true} id="form1" className="form-control"/>
                                        <label htmlFor="form1">{this.props.label}</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">{this.props.actionName}</button>
                            </div>
                        </div>
                    </form>
                </div>

            </React.Fragment>
        )
    }
}

export default FormTemplate;