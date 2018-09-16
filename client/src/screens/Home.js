import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    state = {}

    setValue(e) {   
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        let authToken = window.localStorage.token;
        let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
        axios.get(`/todos/${payload.id}`).then((res) => {
            this.setState({
                owner: payload.id,
                todos: res.data
            })
        })
    }

    save() {
        axios.post('/todos', this.state).then(() => {
            window.location.reload()
        })
    }

    edit(td) {
        let newTodo = window.prompt(`Update Todo: ${td.description}`);
        this.setState({newTodo: newTodo}, () => {
            axios.put(`/todos/${td._id}`, this.state).then(() => {
                window.location.reload();
            })
        })
    }

    delete(td) {
        axios.delete(`/todos/${td._id}`).then(() => {
            window.location.reload()
        })
    }

    render() {
        return (
            <div>
                <h1>Create Todo</h1>
                <input placeholder="description" name="description" onChange={(e) => this.setValue(e)} />
                <input placeholder="status" name="status" onChange={(e) => this.setValue(e)} />
                <button onClick={() => this.save()}>Save</button>

                <h1>My Todos</h1>
                <ul>
                    {(this.state.todos) ? this.state.todos.map((todo, index) => (
                        <li key={index}>
                            {todo.description} <button onClick={() => this.edit(todo)}>edit</button> <button onClick={() => this.delete(todo)}>delete</button>
                        </li>
                    )) : null}
                </ul>
            </div>
        )
    }
}

export default Home;