import React, { Component } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoList extends Component {

    render() {
        return (
            <ul className="list-group m-3 p-5">
                {this.props.tasks.map((task) => 
                    <ToDoItem task={task} deleteTask={this.props.deleteTask} key={task.id}/>
                )}
            </ul>
        );
    }
}

export default ToDoList;