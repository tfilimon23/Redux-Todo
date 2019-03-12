import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../actions';

import './TodoList.css'

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState ({ newTodo: '' });
    };

    toggleTodo = id =>{
    this.props.toggleTodo(id);
    };

    render() {
        return (
        <>
        <div>
        {this.props.todos.map(todo => (
            <h3 
            className = {`todo${todo.completed ? ' completed' : ''}`}
            key={todo.id} 
            onClick={()=> this.toggleTodo(todo.id)}>
            {todo.todo}
            </h3>
        ))}
        </div>
        <input 
        type='text'
        name='newTodo'
        value= {this.state.newTodo}
        onChange={this.handleChanges}
        placeholder = "ToDo..."
        />
        <button onClick={this.addTodo}>Add ToDo</button>
        </>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
    mapStateToProps,
    { addTodo, toggleTodo }
)(TodoList);