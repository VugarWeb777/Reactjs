import React from "react"
import {addCategory} from "../../../store/actions/addCategory";
import {connect} from "react-redux";
import {getCategories} from "../../../store/actions/getCategories";
import Button from "../../UI/Button/Button";



class Categories extends React.Component {

    submitHandler = (event) => {
        event.preventDefault()

        const form = event.target;
        const categoryName = form['categoryName'].value

        this.props.addCategory(categoryName)
        form.reset()
    }

    componentDidMount() {
        this.props.getCategories()
    }


    renderCategories() {
        return this.props.categoriesList.map((list, index) => {
            return (
                <a
                    key={index}
                    className={`list-group-item list-group-item-action  d-flex justify-content-between align-items-center ${index === 0 ? 'active' : ''}`}
                    data-toggle="list"
                    href={`#${list.name}`}
                    role="tab"
                    id={list.id}
                >
                    {list.name}
                    <span className="badge badge-primary badge-pill">{list.count}</span>
                </a>
            )
        })
    }



    render() {

        return (
            <div className="list-group" id="myList" role="tablist">

                {this.props.categoriesList.length > 0 ? this.renderCategories() : <h3>Categories is empty</h3> }

                <form onSubmit={this.submitHandler} style={{
                    marginTop: "20px"
                }}>
                    <input type="text" name={'categoryName'}/>
                    <Button type={'primary'}>Add</Button>
                </form>

            </div>
        )
    }
}


export function mapStateToProps(state) {
    return {
        categoriesList: state.category.categoriesList
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        addCategory: (category) => dispatch(addCategory(category)),
        getCategories: () => dispatch(getCategories())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);