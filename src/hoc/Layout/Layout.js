import React, {Component} from 'react'
import classes from './Layout.css'
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import {connect} from "react-redux";

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: false
        }
    }


    toggleMenuHandler = () => {

        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {


        return (
            <div className={classes.Layout}>


                {this.props.isAuthenticated === false ? <Drawer
                        isOpen={this.state.menu}
                        onClose={this.menuCloseHandler}
                        isAuthenticated={this.props.isAuthenticated}
                    />
                    : null
                }

                {this.props.isAuthenticated === false ? <MenuToggle
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}
                    />
                    : null
                }


                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)