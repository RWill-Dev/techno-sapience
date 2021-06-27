import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import './signin.css'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = (e) => {
       this.setState({
        [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        this.props.history.push('/create');
    }
    render() {
        // console.log(this.props) 
        const { authError } = this.props;
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form-group">
                    <h1 className="grey-text textdarken-3">Sign In</h1>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} className="form-control"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} className="form-control"/>
                    </div>
                    <div className="input-field">
                        <button className="btn btn-primary">SIGN IN</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
