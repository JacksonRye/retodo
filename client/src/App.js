import React from "react";

import "./scss/App.css";
import TodoCategoryGrid from "./components/todo/TodoCategoryGrid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./components/todo/TodoList";

import NewTodo from "./components/todo/NewTodo";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <TodoCategoryGrid />
          </Route>
          <Route path={`/category/:category`} component={TodoList} />
          <Route path="/add" component={NewTodo} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
