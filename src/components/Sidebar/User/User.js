import React from 'react'
import classes from './User.css'

const User = props => {
    return (
        <div className={classes.User}>
                <a href={'mailto:' + props.email.toString()}>{props.email}</a>
        </div>
    )
}

export default User