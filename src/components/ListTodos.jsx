import React, {useEffect, useState} from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
    const baseUrl = "https://pern-todo-client-p1ww.onrender.com";

    const [todos, setTodos] = useState([]);

    const getTodos = async() => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();

            setTodos(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(baseUrl+'/'+id, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id !== id))
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    },[]);

    return (
        <>
            <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo}/></td>
                        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default ListTodos;
