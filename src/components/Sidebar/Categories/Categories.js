import React from "react"
import {addCategory} from "../../../store/actions/addCategory";
import {connect} from "react-redux";
import FormTemplate from "./FormTemplate/FormTemplate";
import {deleteCategory} from "../../../store/actions/deleteCategory";
import Loader from "../../UI/Loader/Loader";

class Categories extends React.Component {



    submitHandler = (event) => {
        event.preventDefault()

        const form = event.target;
        const formId = form.id
        const categoryName = form['categoryName'].value


        if (formId ==="createCategory"){
            this.props.addCategory(categoryName)
        }

        form.reset()
    }


    deleteCategory=(event)=>{
        event.preventDefault()

        const id = event.target.id;
        this.props.deleteCategory(id)
    }



    renderCategories() {
        return this.props.categoriesList.map((list, index) => {
            return (
                <a
                    key={index}
                    className={`list-group-item list-group-item-action  d-flex  align-items-center ${index === 0 ? 'active' : ''}`}
                    data-name={list.name}
                    href={`#${list.name}`}
                    id={list.id}
                    data-toggle="list"
                    role="tab"
                    onClick={this.props.onClick}
                >
                    {list.name}
                    <span className="badge badge-primary badge-pill" style={{marginLeft: "auto", marginRight: "10px"}}>{}</span>
                </a>
            )
        })
    }



    render() {

        return (
            <div className="list-group" id="myList" role="tablist">

                {this.props.categoriesList.length > 0 ? this.renderCategories() : <Loader/> }

                <FormTemplate
                    formId={'createCategory'}
                    actionName={'create Category'}
                    label={'input category name'}
                    onSubmit={this.submitHandler}
                />
            </div>
        )
    }
}



export function mapDispatchToProps(dispatch) {
    return {
        addCategory: (category) => dispatch(addCategory(category)),
        deleteCategory: (id) => dispatch(deleteCategory(id)),
    }
}


export default connect(mapDispatchToProps)(Categories);