import React from "react"

class Navbar extends React.Component{


    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark primary-color">


                <a className="navbar-brand" >TaskManager</a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>


                <div className="collapse navbar-collapse" id="basicExampleNav">


                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" >Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >open source</a>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">sort tasks by</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" >name</a>
                                <a className="dropdown-item" id={'completed'} onClick={this.props.onSort} >completed</a>
                                <a className="dropdown-item" >new</a>
                                <a className="dropdown-item" >old</a>
                            </div>
                        </li>

                    </ul>


                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <button onClick={this.props.onSearch} className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search
                            </button>
                    </form>
                </div>
            </nav>

        )
    }
}

export default Navbar;