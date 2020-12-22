import React from "react"
import {addCategory} from "../../../store/actions/addCategory";
import {connect} from "react-redux";
import FormTemplate from "./FormTemplate/FormTemplate";
import {deleteCategory} from "../../../store/actions/deleteCategory";
import Loader from "../../UI/Loader/Loader";
import {ContextMenu, ContextMenuTrigger, MenuItem} from "react-contextmenu";
import classes from "../../UI/ContextMenu/ContextMenu.css";
import Modal from "../../Modal/Modal";
import {editCategory} from "../../../store/actions/editCategory";


class Categories extends React.Component {

    state = {
        isModalOpen: false
    }



    submitHandler = (event) => {
        event.preventDefault()

        const form = event.target;
        const formId = form.id
        let categoryName = form['categoryName'].value
        let categoryId = this.props.categoryId
        let categoryIndex = this.props.categoryIndex

        if (formId === "createCategory") {
            this.props.addCategory(categoryName)
            console.log(formId)
        }

        if (formId === "editCategory") {

            const newData = {
                name: categoryName
            }

            this.props.editCategory(categoryId,categoryIndex, newData)
        }



        form.reset()
    }

    handleClick(e, data) {
        e.preventDefault()

        const currentCategoryId = document.querySelector('.list-group-item.active').id
        const firstCategory = document.querySelector('.list-group-item:first-child')

        if (data.key === "delete") {
            data.callback(currentCategoryId)
            setTimeout(function () {
                if (firstCategory) {
                    firstCategory.classList.add('active')
                } else {
                    return false
                }
            }, 500)
        }

        if (data.key === "edit") {
            //show modal edit
            data.callback()
        }
    }

    openModal = () => {
        this.setState({isModalOpen: true})
    }

    closeModal = () => {
        this.setState({isModalOpen: false})
    }


    renderCategories() {

        if (this.props.categoriesList.length > 0) {

            return this.props.categoriesList.map((list, index) => {
                return (
                    <a
                        key={index}
                        className={`list-group-item list-group-item-action  d-flex  align-items-center ${index === 0 ? 'active' : ''}`}
                        data-name={list.name}
                        data-index={index}
                        href={`#${list.name}`}
                        id={list.id}
                        data-toggle="list"
                        role="tab"
                        onClick={this.props.onClick}
                    >
                        {list.name}
                        <span className="badge badge-primary badge-pill"
                              style={{marginLeft: "auto", marginRight: "10px"}}>
                        {/*{this.props.taskCount[index] !== undefined ? this.props.taskCount[index] : 0}*/}
                    </span>
                    </a>

                )
            })
        }

        return []
    }


    render() {

        return (
            <div className="list-group" id="myList" role="tablist">

                <ContextMenuTrigger id='menu'>
                    {this.props.categoriesList ? this.renderCategories() : <Loader/>}
                </ContextMenuTrigger>

                <ContextMenu className={classes.reactContextmenu} id='menu'>
                    <MenuItem className={classes.reactContextmenuItem} data={{key: 'edit', callback: this.openModal}}
                              onClick={this.handleClick}>
                        <i className="fas fa-edit"/>
                        edit
                    </MenuItem>
                    <MenuItem className={classes.reactContextmenuItem}
                              data={{key: 'delete', callback: this.props.deleteCategory}} onClick={this.handleClick}>
                        <i className="fas fa-trash-alt"/>
                        delete
                    </MenuItem>
                    <MenuItem className={classes.reactContextmenuItemDivider} divider/>
                </ContextMenu>

                <FormTemplate
                    formId={'createCategory'}
                    actionName={'create Category'}
                    label={'input category name'}
                    onSubmit={this.submitHandler}
                />

                {this.state.isModalOpen ?
                    <Modal
                        isOpen={this.state.isModalOpen}
                        onClose={() => this.closeModal()}
                        formId={'editCategory'}
                        actionName={'edit Category'}
                        label={'edit category name'}
                        onSubmit={this.submitHandler}
                    >
                        <h3>Modal title</h3>
                        <p>Content</p>
                    </Modal>
                    : null
                }

            </div>
        )
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        addCategory: (category) => dispatch(addCategory(category)),
        deleteCategory: (id) => dispatch(deleteCategory(id)),
        editCategory: (id,index,newData) => dispatch(editCategory(id,index,newData))
    }
}


export default connect(null, mapDispatchToProps)(Categories);