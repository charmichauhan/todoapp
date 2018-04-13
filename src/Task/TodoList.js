import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const { data, onToggleTodo, onEditTodo, onRemoveTodo } = this.props;
        return (
            <div className="todo-list">
                <div className="todoListMain">            
                    <ul className="theList">
                    {
                        data.map((todo) => (
                            <li
                                key={todo.id}
                                className={todo.completed ? "animated" :""}  
                                // style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            >
                                <span onClick={() => onToggleTodo(todo.id)}>
                                    {todo.text}
                                    ({todo.date})
                                </span>
                                <button onClick={() => onRemoveTodo(todo.id)}> X </button>
                                <button onClick={() => onEditTodo(todo.id)}> Edit </button>                                
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;