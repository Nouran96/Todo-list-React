import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            error: ''
        };
        this.username = React.createRef();
        this.password = React.createRef();
        this.signin = this.signin.bind(this);
    }

    signin(e) {
        e.preventDefault();

        var data = {
            "username": this.username.current.value,
            "password": this.password.current.value
        };

        fetch('http://todoapp.ahmedrohym.com/api.php?apicall=login', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if(data.message === 'Invalid username or password') {
                this.setState({error: data.message})
            } else {
                this.props.history.push("/home");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        return(
            <div className="container my-5">
                <form onSubmit={this.signin}>
                    <div className="form-group">
                        <label htmlFor="exampleInputText1">Username</label>
                        <input ref={this.username} type="text" className="form-control" id="exampleInputText1" placeholder="Enter Username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input ref={this.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Login</button>
                </form>
                <p className="text-danger mt-2">{this.state.error ? this.state.error : ''}</p>
            </div>
        );
    }
}

export default withRouter(SignIn);