import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"


class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: Date.now(),
                title: " Setup sevelopment environment",
                completed: true
            },
            {
                id: Date.now() + 1,
                title: " Develop website and add content",
                completed: false
            },
            {
                id: Date.now() + 2,
                title: " Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addTodoItem = title => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo 
                    addTodoProps={this.addTodoItem}
                />
                <TodosList 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo}
                />
            </div>
        )
    }
}
export default TodoContainer
