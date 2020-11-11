import React from 'react'
import classes from './Auth.css'
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import is from 'is_js'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Auth extends React.Component {

    state = {
        isFormValid: false,
        isAuth: false,
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

    loginHandler = async () => {
        console.log("login")

        const loginData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOViZHjJLmVCBMdtjWlP5sk3He2AP4gHY',loginData);

            let isAuth = this.state.isAuth;

            if (response.status === 200){
                isAuth = true;

                this.setState({
                    isAuth
                })
            }

        } catch (e) {
            console.log(e.message)
        }

    }

    registrationHandler  = async ()=> {
        console.log("registration")

        const regData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOViZHjJLmVCBMdtjWlP5sk3He2AP4gHY',regData);
            console.log(response.data)
        } catch (e) {
            console.log(e.message)
        }
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


                            <Button
                                type="primary"
                                onClick={this.registrationHandler}
                            >
                                Зарегистрироваться
                            </Button>

                    </div>
                </form>

                {this.state.isAuth ? <Redirect to={'/application'}/> : null}
            </div>
        )
    }
}

export default Auth;