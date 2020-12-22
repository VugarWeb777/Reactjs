import React from "react"
import classes from "./Modal.css"

class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) {return  null}

        const cls = [
            'modal',
            this.props.isOpen ? classes.isOpen : ''
        ]

        return (

            <div className={cls.join(' ')} id="basicExampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel"
                 aria-modal="true"
            >
                <form action={''} onSubmit={this.props.onSubmit} id={this.props.formId} className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.actionName}</h5>
                            <button type="button" className="close"  onClick={this.props.onClose} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="md-form">
                                <input type="text" autoFocus={true} name="categoryName"  className="form-control"/>
                                <label htmlFor="form1">{this.props.label}</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.props.onClose} data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">{this.props.actionName}</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

export default Modal;