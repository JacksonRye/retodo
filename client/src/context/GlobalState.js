import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  todos: [],
  error: null,
  loading: true,
  categories: [
    {
      category: "All",
      id: 1,
      icon: "far fa-clipboard",
    },
    {
      category: "Life",
      id: 2,
      icon: "far fa-user",
    },
    {
      category: "Work",
      id: 3,
      icon: "fas fa-briefcase",
    },
    {
      category: "Travel",
      id: 4,
      icon: "fas fa-plane",
    },
    {
      category: "Love",
      id: 5,
      icon: "far fa-heart",
    },
    {
      category: "Others",
      id: 6,
      icon: "fas fa-list",
    },
  ],
};

const apiUrl = "/api/v1/todos";

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTodos(category) {
    try {
      let payload;
      const res = await axios.get(`${apiUrl}`);

      const data = res.data.data;

      if (category.toLowerCase() !== "all") {
        payload = data.filter(
          (todo) => todo.category.toLowerCase() === category.toLowerCase()
        );
      } else {
        payload = data;
      }

      dispatch({
        type: "GET_TODOS",
        payload,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: "error",
      });
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`${apiUrl}/${id}`);

      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: "error",
      });
    }
  }

  async function addTodo(todo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${apiUrl}`, todo, config);

      dispatch({
        type: "ADD_TODO",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: "error",
      });
    }
  }

  async function updateTodo(todo) {
    try {
      const res = await axios.put(`${apiUrl}/${todo._id}`, {
        ...todo,
        isCompleted: !todo.isCompleted,
      });

      dispatch({
        type: "UPDATE_TODO",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: "error",
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        categories: state.categories,
        getTodos,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
