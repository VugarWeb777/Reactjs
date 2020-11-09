import React from 'react'
import classes from './Registration.css'
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";


class Registration extends React.Component{

    state = {
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                type: 'text',
                label: 'Name',
                errorMessage: 'Введите ваше имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 5,
                }
            },
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
            },
            birthday: {
                value: '',
                type: 'date',
                label: 'Birthday',
                errorMessage: 'Введите дату рождения',
                valid: false,
                touched: false,
                validation: {
                    required: false,
                }
            },
            gender: {
                value: '',
                type: 'text',
                label: 'Gender',
                errorMessage: 'Укажите ваш пол',
                valid: false,
                touched: false,
                validation: {
                    required: false,
                }
            },
            phone: {
                value: '',
                type: 'tel',
                label: 'Phone',
                errorMessage: 'Введите телефон +7',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    length: 11,
                }
            }
        }
    }


    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {

            const control = this.state.formControls[controlName];

            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    name={control.label}
                    label={control.label}
                    valid={control.valid}
                    errorMessage={control.errorMessage}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                />
            )
        });
    }

    // goToHome = ()=> {
    //     this.props.history.push({
    //         pathname: '/'
    //     })
    // }

    registerHandler = () => {}

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.pageWrapper}>
                <div className={classes.wrapper}>
                    <h1>Registration</h1>
                    <form method="POST" name="registration" onSubmit={this.submitHandler}>
                        <div className={classes.rowSpace}>
                            {this.renderInputs()}
                                <Button
                                    type="success"
                                    onClick={this.registerHandler}
                                    disabled={!this.state.isFormValid}
                                >
                                    Зарегистрироваться
                                </Button>

                            <Link to={'/'}>
                                <Button
                                    type="primary"
                                >
                                    на главную
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registration;