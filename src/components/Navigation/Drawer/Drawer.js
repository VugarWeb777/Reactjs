import React from "react";
import classes from './Drawer.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";


const links = [
    {to: '/' , label: 'Авторизация', exact: true},
    {to: '/registration', label: 'Регистрация', exact: false},
    {to: '/task-creator' , label: 'Создать задачу', exact: false}
]

class Drawer extends React.Component{

    renderLinks(){

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

        if (!this.props.isOpen){
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>

        )
    }
}

export default Drawer;