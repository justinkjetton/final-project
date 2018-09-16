import React from 'react';
import axios from 'axios';

class Register extends React.Component {

    state = {}

    setValue(e) {   
        this.setState({[e.target.name]: e.target.value})
    }

    register() {
        axios.post('/users/signup', this.state).then((res) => {
            localStorage.setItem('token', res.data.token) 
            window.location.pathname = '/home';
        })
    }

    render() {
        return (
            <span>
                <h1>Register</h1>
                <input type="text" name="email" placeholder="email" onChange={(e) => this.setValue(e)} />
                <input  type="text" name="password" placeholder="password" onChange={(e) => this.setValue(e)} />
                <button onClick={() => this.register()}>submit</button>
                <div>
                    <a href="/login">Login</a>
                </div>
            </span>
        )
    }
}

export default Register;