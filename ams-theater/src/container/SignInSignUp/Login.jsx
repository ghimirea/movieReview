import React, { Component } from 'react';
import {connect} from 'react-redux'

import Input from './UI/input';
import { Route, Link, Switch, Redirect } from "react-router-dom"
import '../SignInSignUp/SignInSignUp.css';
import * as actions from '../../Store/actions/auth'


class Login extends Component {

    state = {
        LoginForm: {
            username: {
                // label: 'Email',
                elementType: 'input',
                value: '',
                elementConfig: {
                    placeholder: 'Enter Username'
                },
                validation: {
                    required: 'true'
                },
                valid: true
            },
            password: {
                // label: 'Password',
                elementType: 'input',
                value: '',
                elementConfig: {
                    placeholder: 'Enter Password',
                    type: 'password'
                },
                validation: {
                    required: 'true'
                },
                valid: true
            }
        }
    }
    isValid = (value, rules) => {
        let valid = false;
        if (rules.required) {
            valid = value.trim() !== '';
        }
        console.log()
        return valid;
    }

    onChangeEventHandler = (event, inputId) => {
        const newLoginForm = { ...this.state.LoginForm };
        const newLoginFormKey = { ...newLoginForm[inputId] };
        newLoginFormKey.value = event.target.value;
        newLoginFormKey.valid = this.isValid(event.target.value, newLoginFormKey.validation)
        newLoginForm[inputId] = newLoginFormKey
        this.setState({ LoginForm: newLoginForm })

    }

    isLoggedIn="true";

    formSubmitEventHandler = (event) => {
        event.preventDefault();
        //this.props.onAuth(this.state.LoginForm.username, this.state.LoginForm.password)
        const loginData = {};
        let isFormValid = true;
        let isLoggedIn = true;
        for (let key in this.state.LoginForm) {
            loginData[key] = this.state.LoginForm[key].value
            isFormValid = isFormValid && this.state.LoginForm[key].valid
        }

        console.log(isFormValid)
        if (isFormValid === true && isLoggedIn === true) {
            if (this.state.LoginForm.username.value === "user" && this.state.LoginForm.password.value === "pass") {
                // this.props.adminfunc()
                alert("Login Successful...")
                return (
                    this.props.history.push('/')
                    
                )
            }

        } else {
            alert("There is some error, correct it")

        }



    }
    render() {
        // console.log('STATE--->', this.state.LoginForm)
        const LoginFormArray = [];
        for (let key in this.state.LoginForm) {
            LoginFormArray.push({
                id: key,
                config: this.state.LoginForm[key]
            })
        }
        //console.log(LoginFormArray)

        let form = (
            <form onSubmit={(event) => { this.formSubmitEventHandler(event) }}>
                {
                    LoginFormArray.map(item => {
                        //console.log('map-->', item)
                        return <Input
                            key={item.id}
                            label={item.config.label}
                            elementType={item.config.elementType}
                            value={item.config.value}
                            elementConfig={item.config.elementConfig}
                            inputChanged={(event) => { this.onChangeEventHandler(event, item.id) }}
                        />
                    })
                }
                <button>Login</button>

            </form>
        )
        return (
            <div className='Auth'>
                {form}
            </div>

        );

    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (username, password) => dispatch(actions.auth)
    }
}



export default Login;
//export default connect(null, mapDispatchToProps)(Login);