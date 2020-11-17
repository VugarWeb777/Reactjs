import React from 'react'
import classes from './Auth.css'
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import is from 'is_js'
import {auth} from "../../store/actions/auth";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAccountInfo} from "../../store/actions/getAccountInfo";


class Auth extends React.Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
        )

        this.props.getAccountInfo()
    }


    submitHandler = (event) => {
        event.preventDefault();
    }

    controlValidate(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {

        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.controlValidate(control.value, control.validation)

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })

    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {

            const control = this.state.formControls[controlName];

            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    label={control.label}
                    valid={control.valid}
                    errorMessage={control.errorMessage}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={(event) => {
                        this.onChangeHandler(event, controlName)
                    }}
                />
            )
        });
    }


    render() {

        return (
            <div className={classes.wrapper}>
                <form action="" className={classes.Authform} onSubmit={this.submitHandler}>
                    <div className={classes.header}>
                        <h1>Authentication</h1>
                    </div>
                    <div className={classes.content}>
                        {this.renderInputs()}
                    </div>
                    <div className={classes.footer}>
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>

                        <Link to={'/registration'}>
                            <Button
                                type="primary"
                            >
                                Зарегистрироваться
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password) => dispatch(auth(email, password)),
        getAccountInfo: () => dispatch(getAccountInfo())
    }
}

export default connect(null, mapDispatchToProps)(Auth);