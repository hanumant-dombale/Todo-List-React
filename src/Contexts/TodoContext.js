import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todomge",
            checked: false,
        },
    ],
    update: (id, todo) => {},
    add: (todo) => {},
    deleted: (id) => {},
    toggle: (id) => {}
});

export const useTodos = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
