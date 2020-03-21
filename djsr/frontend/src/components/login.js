import React, { Component } from "react";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        alert('A username and password was submitted: ' + this.state.username + " " + this.state.password);
        event.preventDefault();
    }

    render() {
        return(
        <div>
            <h2>Login Pages</h2>
        </div>
        )
    }
}
export default Login;