import React, { Component } from 'react';

class ToDoForm extends Component {

    constructor() {
        super();
        this.state = {
            newItem: ''
        }

        this.changeItem = this.changeItem.bind(this);
    }

    changeItem(e) {
        this.setState({ newItem: e.target.value });
    }

    render() {
        return (
            <form className="form-inline p-5" onSubmit={(e) => {
                e.preventDefault();
                this.props.addTask(this.state.newItem)
            }}>
                <div className="row mx-auto">
                    <div className="form-group">
                        <label htmlFor="taskName" className="mr-4">Task</label>
                        <input type="text" value={this.state.newItem} onChange={this.changeItem} className="form-control mr-4" id="taskName" placeholder="Task Name" />
                    </div>
                    <button type="button" onClick={() => this.props.addTask(this.state.newItem)} className="btn btn-primary">Add</button>
                </div>
            </form>
        );
    }
}

export default ToDoForm;