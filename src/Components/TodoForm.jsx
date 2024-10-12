import React, { useState } from "react";
import { useTodos } from "../Contexts";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { add } = useTodos();

    const submit = (e) => {
        e.preventDefault();

        if (!todo) {
            return;
        }

        add({ id: Date.now(), todo: todo, checked: false });
        setTodo("");
    };

    return (
        <form className="flex" onSubmit={submit}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-[#917E50] hover:bg-[#766741]  text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
