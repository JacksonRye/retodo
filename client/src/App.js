import React from "react";

import "./scss/App.css";
import TodoCategoryGrid from "./components/todo/TodoCategoryGrid";
import { BrowserRouter as Router,  Route } from "react-router-dom";

import TodoList from "./components/todo/TodoList";

import NewTodo from "./components/todo/NewTodo";
import { GlobalProvider } from "./context/GlobalState";

const routes = [
  { path: "/", name: "TodoCategoryGrid", Component: TodoCategoryGrid },
  { path: "/category/:category", name: "TodoList", Component: TodoList },
  { path: "/add", name: "NewTodo", Component: NewTodo },
];
function App() {
  return (
    <GlobalProvider>
      <Router>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Router>
    </GlobalProvider>
  );
}

export default App;
