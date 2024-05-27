export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: index,
});

export const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST,
});

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
});

export const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: error,
});

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        fetch('https://mockapi.io/endpoint/todos') // Замените на ваш реальный URL
            .then(response => response.json())
            .then(data => dispatch(fetchTodosSuccess(data)))
            .catch(error => dispatch(fetchTodosFailure(error.message)));
    };
};
