import React from "react"


class Categories extends React.Component {

    render() {

        return (
            <div className="list-group" id="myList" role="tablist">
                {this.props.data.map((list, index) => {
                    return (

                            <a
                                key={index}
                                className={`list-group-item list-group-item-action  d-flex justify-content-between align-items-center ${list.isActive ? 'active' : ''}`}
                                data-toggle="list"
                                href={`#${list.name}`}
                                role="tab"
                            >
                                {list.name}
                                <span className="badge badge-primary badge-pill">{list.taskCount}</span>
                            </a>
                    )
                })}
            </div>
        )
    }
}

export default Categories;