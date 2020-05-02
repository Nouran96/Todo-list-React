import React, { Component } from 'react';
import '../App.css';

class ToDoItem extends Component {

    constructor() {
        super();

        this.state = {
            done: false,
            task: {}
        }

        this.markDone = this.markDone.bind(this);
    }

    componentDidMount() {
        this.setState({ task: this.props.task })
    }

    markDone() {
        this.setState({ done: true });
    }

    render() {
        return (
            <li className="list-group-item p-3 d-flex justify-content-between">
                <span className={this.state.done ? "done" : ""}>{this.state.task.title}</span>
                <div>
                    <button className="btn btn-success text-white mr-2" onClick={this.markDone}>&#10003;</button>
                    <button className="btn btn-danger text-white" onClick={() => {
                        this.props.deleteTask(this)
                    }}>&#10007;</button>
                </div>
            </li>
        );
    }
}

export default ToDoItem;