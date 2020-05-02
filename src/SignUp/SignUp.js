import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class SignUp extends Component {

    constructor() {
        super();
        this.gender = '';
        this.username = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.gender = e.target.value;
    }

    signup(e) {
        e.preventDefault();

        var data = {
            "username": this.username.current.value,
            "password": this.password.current.value,
            "email": this.email.current.value,
            "gender": this.gender
        };

        fetch('http://todoapp.ahmedrohym.com/api.php?apicall=signup', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            this.props.history.push("/login");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        return(
            <form className="container my-5" onSubmit={this.signup}>
                <div className="form-group">
                    <label htmlFor="exampleInputText1">Username</label>
                    <input ref={this.username} type="text" className="form-control" id="exampleInputText1" placeholder="Enter Username" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input ref={this.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input ref={this.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                <div className="form-check">
                    <label className="form-check-label" htmlFor="exampleRadios1">
                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="gender" id="exampleRadios1" value="male" />
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label" htmlFor="exampleRadios2">
                    <input onChange={this.handleChange} className="form-check-input" type="radio" name="gender" id="exampleRadios2" value="female" />
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Sign Up</button>
            </form>
        );
    }
}

export default withRouter(SignUp);