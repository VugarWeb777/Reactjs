import React from 'react'
import classes from './Input.css'



function isInvalid({valid,touched,shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {

    const cls = [classes.Input]

    if (isInvalid(props)){
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type || 'text'}
                name={props.label}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props)  ? <span>{props.errorMessage || 'введите верное значение'}</span> : null
            }
        </div>
    )
}

export default Input;