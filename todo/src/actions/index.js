export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = todo => {
    console.log(todo);
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};