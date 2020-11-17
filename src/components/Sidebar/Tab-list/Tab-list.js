import React from "react"

class TabList extends React.Component {

    render() {
        return (
            <div className="list-group" id="myList" role="tablist">
                <a className="list-group-item list-group-item-action active" data-name="React" data-index="0"
                   role="tab">
                    <span className="listName"><i className="fa fa-list-ul"/>React</span>
                    <span className="listCount badge badge-primary" title="Task count">1</span>
                    <span className="editList" title="List options"><i className="fa fa-edit"/></span>
                </a>
            </div>
        )
    }
}

export default TabList;