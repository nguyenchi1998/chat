import React, { Component } from 'react';
import '../../assets/client/bootstrap.min.css'
import '../../assets/client/perfect-scrollbar.min.css'
import '../../assets/client/themify-icons.css'
import '../../assets/client/emoji.css'
import './LoginPage.css'
import '../../assets/client/responsive.css'

import logo from './../../assets/client/logo2.png';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      email: '',
      password: '',
      errors: {},
      isLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <main>
        <div className='layout'>
          <div className='sign-bg'>
            <div className='start'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4 col-md-6'>
                    <div className='register-content'>
                      <div className='login-header'>
                        <div className='logo'>
                          <img src={logo} alt=''/>
                        </div>
                        <h1>
                          <i className='ti-key'/>
                          Sign in
                        </h1>
                      </div>
                      <form className='login-up' onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                          <input
                            type='text'
                            id='inputEmail'
                            className='form-control'
                            placeholder='Email Address'
                            autoComplete='off'
                            tabIndex='1'
                            onBlur={this.handleChange}
                          />
                          <button className='btn icon'>
                            <i className='ti-email'/>
                          </button>
                        </div>
                        <div className='form-group'>
                          <input
                            type='password'
                            id='inputPassword'
                            className='form-control'
                            placeholder='Password'
                            autoComplete='off'
                            tabIndex='2'
                            onBlur={this.handleChange}
                          />
                          <button className='btn icon'>
                            <i className='ti-lock'/>
                          </button>
                        </div>
                        <button type='submit' className='btn button'>
                          Sign In
                        </button>
                        <div className='callout'>
                          <span>Sign in with</span>
                          <ul>
                            <li>
                              <a href='/#' title='' className='facebook'>
                                <i className='ti-facebook'/>
                              </a>
                            </li>
                            <li>
                              <a href='/#' title='' className='twitter'>
                                <i className='ti-twitter'/>
                              </a>
                            </li>
                            <li>
                              <a href='/#' title='' className='google'>
                                <i className='ti-google'/>
                              </a>
                            </li>
                          </ul>
                          <span>
                            Don't have account? <a href='/#'>Create Account</a>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='col-lg-8 col-md-6'>
                    <div className='page-meta'>
                      <h2>
                        Talkshak is a simplest and friendly interface Messagner
                        or plateform.
                      </h2>
                      <span>login now and enjoy!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default LoginPage;
