import React from 'react'
import classes from './Registration.css'
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {Link} from "react-router-dom";
import is from "is_js";
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';
import {connect} from "react-redux";
import {registration} from "../../store/actions/registration";

class Registration extends React.Component {

    state = {
        isFormValid: false,
        formControls: {
            name: {
                value: '',
                type: 'text',
                id: 'name',
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
                id: 'email',
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
                id: 'password',
                label: 'Password',
                errorMessage: 'Минимальная длина пароля 6 символов',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            birthday: {
                value: '',
                type: 'text',
                id: 'birthday',
                label: 'Birthday',
                errorMessage: 'Введите дату рождения',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            },
            phone: {
                value: '',
                type: 'text',
                label: 'Phone',
                id: "phone",
                errorMessage: 'Введите телефон +7',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }
        }
    }


    componentDidMount() {
        $(`#${this.state.formControls.phone.id}`).mask('+7 (999) 99-99-999', {
            placeholder: '+7 (999) 99-99-999'
        })
        $(`#${this.state.formControls.birthday.id}`).mask("99/99/9999", {
            placeholder: 'mm/dd/yyyy'
        });
    }

    registerHandler = () => {
        this.props.registration(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            this.state.formControls.name.value,
            this.state.formControls.birthday.value,
            this.state.formControls.phone.value
        )
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
                    id={control.id}
                    name={control.label}
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



function mapDispatchToProps(dispatch) {
    return {
        registration: (email, password, name, birthday, phone) => dispatch(registration(email, password, name,birthday, phone)),
    }
}


export default connect(null, mapDispatchToProps)(Registration);