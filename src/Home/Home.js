import React, {Component} from 'react';

import ToDoList from '../ToDoList/ToDoList';
import ToDoForm from '../ToDoForm/ToDoForm';

class Home extends Component {

    constructor() {
        super();
    
        this.state = {
          items: [
            {
              id: 1,
              title: 'Attend Lec 2'
            },
            {
              id: 2,
              title: 'Complete Lab 2'
            },
            {
              id: 3,
              title: 'Complete Bonus'
            },
          ],
    
          count: 0
    
        }
    
        this.addItem = this.addItem.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    
    componentDidMount() {
        this.setState({count: this.state.items.length + 1})
    }

    addItem(title) {
        let itemsCopy = [...this.state.items]; // copy the array
        let task  = {id: this.state.count, title: title};
        itemsCopy.push(task);
        this.setState({items: itemsCopy, count: this.state.count + 1});
    }

    deleteTask(task) {
        let itemsCopy = this.state.items.filter(item => item.id !== task.props.task.id);
        this.setState({items: itemsCopy});
    }

    render() {
        return (
            <div className="container mt-5 main">
                <h3 className="text-center pt-5">Your Todo List</h3>
                <ToDoList tasks={this.state.items} deleteTask={this.deleteTask}/>
                <hr />
                <h3 className="text-center pt-5">Add a new Todo</h3>
                <ToDoForm addTask={this.addItem} />
            </div>
        );
    }
}

export default Home;