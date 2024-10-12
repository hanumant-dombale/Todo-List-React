import React, { useState } from "react";
import { useTodos } from "../Contexts";

function TodoItem({ todo }) {
    const [isEditable, setIsEditable] = useState(false);
    const [mge, setMge] = useState(todo.todo);
    const { update, deleted, toggle } = useTodos();

    const editTodo = () => {
        update(todo.id, { ...todo, todo: mge });
        setIsEditable(false);
    };
    const toggled = () => {
        toggle(todo.id);
    };
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checked ? "bg-[#9dcdc0]" : "bg-[#f4ef88]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checked}
                onChange={toggled}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.checked ? "line-through" : ""}`}
                value={mge}
                onChange={(e) => setMge(e.target.value)}
                readOnly={!isEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.checked) return;

                    if (isEditable) {
                        editTodo();
                    } else setIsEditable((prev) => !prev);
                }}
                disabled={todo.checked}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleted(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
