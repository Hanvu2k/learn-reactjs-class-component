import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginAPI } from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPW: false,
            errorMessage: '',
        }
    }

    handleOnChangeUserName = (e) => {
        this.setState({
            username: e.target.value,
        })
        console.log(e.target.value)
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(e.target.value)
    }

    handleLogin = async () => {
        this.setState({
            errorMessage: ''
        })
        try {
            let data = await handleLoginAPI(this.state.username, this.state.password)
            if (data && data.error !== 0) {
                this.setState({
                    errorMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch (err) {
            if (err.response) {
                if (err.response.data) {
                    this.setState({
                        errorMessage: err.response.data.message,
                    })
                }
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPW: !this.state.isShowPW
        })
    }

    render() {
        return (
            <>
                <div className="login-background">
                    <div className="login-container">
                        <div className="login-content">
                            <div className="text-login">
                                Login
                            </div>
                            <div className="col-12 form-group login-input">
                                <label htmlFor="">
                                    Username:
                                </label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Enter your Username"
                                    value={this.state.username}
                                    onChange={(event) => this.handleOnChangeUserName(event)} />
                            </div>
                            <div className="col-12 form-group login-input">
                                <label htmlFor="">
                                    Password:
                                </label>
                                <div className="custom-input-password">
                                    <input type={this.state.isShowPW ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Enter your Password"
                                        value={this.state.password}
                                        onChange={(event) => this.handleOnChangePassword(event)}
                                    />
                                    <span onClick={() => this.handleShowHidePassword()}>
                                        <i className={this.state.isShowPW ? "far fa-eye-slash" : "far fa-eye"}></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-12">
                                {this.state.errorMessage}
                            </div>
                            <div className="col-12">
                                <button className="btn-login"
                                    onClick={() => this.handleLogin()}>
                                    Login
                                </button>
                            </div>
                            <div className="col-12">
                                <span className="forgot-pw">
                                    Forgot your password?
                                </span>
                            </div>
                            <div className="col-12 text-center">
                                <span className="text-other-login">Or Login with:</span>
                            </div>
                            <div className="col-12 social-login">
                                <i className="fab fa-google-plus-g google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
