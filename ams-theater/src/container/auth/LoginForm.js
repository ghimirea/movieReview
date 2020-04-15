import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../Store/actions/auth'; //login action
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../auth/auth.css';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("LOGIN----->", props)
    props.login(email, password);
    
    //Redirect if Logged In
    if(props.isAuthenticated ){
      console.log("Inside Redirect")
      return <Redirect to='/' />

    }
  };
  return (
    <div className='Auth'>
      <h1>Login</h1>
      <p>Login To Your Account</p>
      <form class='form' onSubmit={(event) => onSubmit(event)}>
        <div class='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(event) => onChange(event)}
            value={email}
          />
        </div>
        <div class='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(event) => onChange(event)}
            minLength='6'
          />
        </div>

        <input type='submit' class='btn btn-primary' value='Login' />
      </form>
      <p class='my-1'>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
