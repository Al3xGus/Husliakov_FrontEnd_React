import {
    ADD_TODO,
    TOGGLE_TODO,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
} from './actions';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload,
            };
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, completed: false }],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        default:
            return state;
    }
};

export default todoReducer;
