export default (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, loading: false, todos: action.payload };
    case "ADD_TODO":
      return { ...state };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case "UPDATE_TODO":
      return { ...state };
    case "TODO_ERROR":
      return { ...state };

    default:
      break;
  }
};
