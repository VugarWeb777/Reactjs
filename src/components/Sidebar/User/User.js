import React from 'react'


const User = props => {
    return (
        <div className="user_block">
                <a href={'mailto:' + props.email.toString()} className="user_email">{props.email}</a>
        </div>
    )
}

export default User