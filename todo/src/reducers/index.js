import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        { todo: 'Buy milk', id:1234, completed: false }
    ]
};

function reducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        const newTodo = {
            todo: action.payload,
            id: Date.now(),
            completed: false
        };
        return {
            ...state, 
            todos: [...state.todos, newTodo]
        };

        case TOGGLE_TODO:
        return {
            ...state,
            todos: state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return{
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        };
        default:
        return state;
    }
}

export default reducer;