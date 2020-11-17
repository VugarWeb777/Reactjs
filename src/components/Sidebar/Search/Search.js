import React from "react"

class Search extends React.Component {

    render() {
        return (
            <div className="search-block input-group md-form form-sm form-2 pl-0">
                <form name="search_form">
                    <div className="form-group">
                        <input className="form-control my-0 py-1" id="searchTask" type="search"
                               placeholder="Search task" aria-label="Search" />
                            <div className="input-group-append findTask">
                                <span className="input-group-text" id="search_btn">
                                    <i className="fa fa-search text-grey" aria-hidden="true"/></span>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search