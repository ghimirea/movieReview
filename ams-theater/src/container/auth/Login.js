// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Input from './UI/input';
// import { Route, Link, Switch, Redirect } from 'react-router-dom';
// import '../auth/auth.css';
// import { login } from '../../Store/actions/auth'
// import Axios from 'axios';

// // import * as actions from '../../Store/actions/auth'

// class Login extends Component {
//   async componentDidMount() {
//     console.log('componentDidMount');
//     const { email, password } = this.state.LoginForm;
//     const user = { email, password };
//     const response = await Axios.get('/register');
//     console.log(response.body);
//   }

//   state = {
//     LoginForm: {
//       email: {
//         // label: 'Email',
//         elementType: 'input',
//         value: '',
//         elementConfig: {
//           placeholder: 'Enter Email',
//           type: 'email',
//         },
//         validation: {
//           required: 'true',
//         },
//         valid: true,
//       },
//       password: {
//         // label: 'Password',
//         elementType: 'input',
//         value: '',
//         elementConfig: {
//           placeholder: 'Enter Password',
//           type: 'password',
//           minLength: '6',
//         },
//         validation: {
//           required: 'true',
//         },
//         valid: true,
//       },
//     },
//   };
//   isValid = (value, rules) => {
//     let valid = false;
//     if (rules.required && rules.minLength) {
//       valid = value.trim() !== '';
//     }

//     return valid;
//   };

//   onChangeEventHandler = (event, inputId) => {
//     const newLoginForm = { ...this.state.LoginForm };
//     const newLoginFormKey = { ...newLoginForm[inputId] };
//     newLoginFormKey.value = event.target.value;
//     newLoginFormKey.valid = this.isValid(
//       event.target.value,
//       newLoginFormKey.validation
//     );
//     newLoginForm[inputId] = newLoginFormKey;
//     this.setState({ LoginForm: newLoginForm });
//   };

//   isLoggedIn = 'true';

//   formSubmitEventHandler = (event) => {
//     event.preventDefault();
//     //this.props.onAuth(this.state.LoginForm.username, this.state.LoginForm.password)

//     const { email, password } = this.state.LoginForm;

//     const loginData = {};
//     let isFormValid = true;
//     for (let key in this.state.LoginForm) {
//       loginData[key] = this.state.LoginForm[key].value;
//       isFormValid = isFormValid && this.state.LoginForm[key].valid;
//     }

//     console.log('Validity', isFormValid);
//     if (isFormValid === true) {
//       if (
//         this.state.LoginForm.email.value === 'user@gmail.com' &&
//         this.state.LoginForm.password.value === '123456'
//       ) {
//         // this.props.adminfunc()
//         alert('Login Successful...');
//         return this.props.history.push('/');
//       }
//     } else {
//       alert('There is some error, correct it');
//     }
//   };
//   render() {
//     // console.log('STATE--->', this.state.LoginForm)
//     const LoginFormArray = [];
//     for (let key in this.state.LoginForm) {
//       LoginFormArray.push({
//         id: key,
//         config: this.state.LoginForm[key],
//       });
//     }
//     //console.log(LoginFormArray)

//     let form = (
//       <form
//         onSubmit={(event) => {
//           this.formSubmitEventHandler(event);
//         }}
//       >
//         {LoginFormArray.map((item) => {
//           //console.log('map-->', item)
//           return (
//             <Input
//               key={item.id}
//               label={item.config.label}
//               elementType={item.config.elementType}
//               value={item.config.value}
//               elementConfig={item.config.elementConfig}
//               inputChanged={(event) => {
//                 this.onChangeEventHandler(event, item.id);
//               }}
//             />
//           );
//         })}
//         <button>Login</button>
//         <p class='my-1'>
//           Don't have an account? <Link to='/register'>Sign Up</Link>
//         </p>
//       </form>
//     );
//     return <div className='Auth'>{form}</div>;
//   }
// }

// // const mapDispatchToProps = dispatch => {
// //     return {
// //         onAuth: (username, password) => dispatch(actions.auth)
// //     }
// // }

// Login.propTypes = {
//     login: PropTypes.func.isRequired,
// }


// export default connect(null, { login })(Login);
