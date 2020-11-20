import React from "react";
import classes from './Drawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";




class Drawer extends React.Component{

    renderLinks(links){

        return links.map((link, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls = [classes.Drawer]

        const links = []

        if (this.props.isAuthenticated){
            links.push({to: '/logout' , label: 'Выйти', exact: false})
        } else {
            links.push({to: '/' , label: 'Авторизация', exact: true})
            links.push({to: '/registration', label: 'Регистрация', exact: false})
        }

        if (!this.props.isOpen){
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>

        )
    }
}

export default Drawer;