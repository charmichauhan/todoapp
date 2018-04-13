import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

let id = 1;

const defaultTodo = {
    text: '',
    date: '',
};

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {...defaultTodo},
            data: [
                { id: id++, text: 'Todo 1', completed: false },
                { id: id++, text: 'Todo 2', completed: true },
            ],
            filter: 'All',
        };
    }

    findTodoIndexById(id) {
        const { data } = this.state;
        return data.findIndex(x => x.id === id);
    }

    todoChanges(key, value) {
        const { todo } = this.state;
        todo[key] = value;
        this.setState({ todo: {...todo} });
    }

    saveTodo() {
        const { todo, data } = this.state;
        if (todo.id) {
            //edit
            const { data } = this.state;
            const findTodoIndex = this.findTodoIndexById(todo.id);
            data[findTodoIndex] = todo;
        } 
        else {
            //add
            todo.completed = false;
            todo.id = ++id;
            data.push(todo);
        }
        this.setState({ data: [...data], todo: {...defaultTodo} });
    }

    toggleTodo(id) {
        const { data } = this.state;
        const findTodoIndex = this.findTodoIndexById(id);
        data[findTodoIndex].completed = !data[findTodoIndex].completed;
        this.setState({ data: [...data] });
    }

    editTodo(id) {
        const { data } = this.state;
        const findTodoIndex = this.findTodoIndexById(id);
        this.setState({ todo: {...data[findTodoIndex]} });
    }

    removeTodo(id) {
        const { data } = this.state;
        const findTodoIndex = this.findTodoIndexById(id);
        data.splice(findTodoIndex, 1);
        this.setState({ data: [...data] });
    }

    getFilterTodos() {
        const { data, filter } = this.state;
        switch(filter) {
            case 'Completed':
                return data.filter(x => x.completed);
            case 'Pending':
                return data.filter(x => !x.completed);
            default:
                return data;
        }
    }

    render() {
        const { todo } = this.state;
        return (
            <div className="todo-app">
                <h1 style={{color: 'darkblue'}}> Todo Application </h1>
                <TodoForm
                    data={todo}
                    onChange={(key, value) => this.todoChanges(key, value)}
                    onSave={() => this.saveTodo()}
                />
                <TodoFilter
                    onFilter={(filter) => this.setState({ filter })}
                />
                <TodoList
                    onEditTodo={(id) => this.editTodo(id)}
                    onRemoveTodo={(id) => this.removeTodo(id)}
                    onToggleTodo={(id) => this.toggleTodo(id)}
                    data={this.getFilterTodos()}
                />
            </div>
        );
    }
}

export default TodoApp;