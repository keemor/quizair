const actions = store => ({
    async addTodo(state, text) {
        try {
            const response = await fetch(`/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text
                })
            });
            const resJson = await response.json();

            return {
                ...state,
                message: `${text} saved!`,
                todos: [resJson, ...state.todos]
            };
        } catch (error) {
            console.error(error);
        }
    },

    async getTodos() {
        try {
            let res = await fetch('/todos');
            const data = await res.json();
            return { todos: data.todos };
        } catch (error) {
            console.error(error);
        }
    },
    async removeTodo(state, _id2remove) {
        const id = _id2remove;

        try {
            const response = await fetch(`/todo/${id}`, {
                method: 'DELETE'
            });
            const resJson = await response.json();
            const text = resJson.text;
            return {
                ...state,
                message: `${text} removed!`,
                todos: state.todos.filter(t => t._id !== id)
            };
        } catch (error) {
            console.error(error);
        }
    },

    async toggleTodo(state, e) {
        const id = e.target.id;

        try {
            const todo = state.todos.filter(t => t._id === id);
            const completed = !todo[0].completed;

            const response = await fetch(`/todo/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed
                })
            });
            const resJson = await response.json();

            const todos = state.todos.map(t => {
                if (t._id !== id) {
                    return t;
                }
                t.completed = completed;
                return t;
            });

            const text = resJson.text;
            return {
                ...state,
                message: `${text} ${completed ? 'done' : 'not done'}!`,
                todos: todos
            };
        } catch (error) {
            console.error(error);
        }
    }
});
export default actions;
