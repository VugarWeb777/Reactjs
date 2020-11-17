import React from "react"

class TabContent extends React.Component {
    render() {
        return (
            <div className="tab-content">
                <div className="tab-pane active" id="React" data-name="React" data-index="0" role="tabpanel">
                    <li className="task-item list-group-item list-group-item-light"
                        data-value="Сделать страницу авторизации" data-date="3 November, 2020" data-time="6:00 PM"
                        data-note="1) создать реакт компонент 2) подключить стили" data-key="-ML8O4zE83DH6Ak_mV6D">
                        <input type="checkbox" className="isMarked" title="Mark as completed"/>
                            <span className="task-name" title="Edit Task">Сделать страницу авторизации</span>
                            <span className="deleteTask" title="Delete Task"><i className="fa fa-trash btn_delete"/></span>
                    </li>
                </div>
            </div>
        )
    }
}

export default TabContent