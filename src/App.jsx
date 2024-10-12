import { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./Components";
import { TodoProvider } from "./Contexts";

function App() {
    const [todos, setTodos] = useState([]);

    const add = (todo) => {
        setTodos((prev) => [{ ...todo }, ...prev]);
    };

    const update = (id, todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => {
                if (prevTodo.id === id) {
                    return todo;
                } else {
                    return prevTodo;
                }
            })
        );
    };

    const toggle = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id
                    ? { ...prevTodo, checked: !prevTodo.checked }
                    : prevTodo
            )
        );
    };

    const deleted = (id) => {
        setTodos((perv) => perv.filter((pervTodo) => pervTodo.id !== id));
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));

        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider value={{ todos, add, update, toggle, deleted }}>
            <div className="bg-[#d9f4c7] min-h-screen py-8">
                <div className="bg-[#f8fa90] w-[80%] mx-auto shadow-2xl rounded-lg px-4 py-3 text-[#ac9969]">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Create your own to do list
                    </h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
