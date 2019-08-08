import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList({
  todos,
  toggleCompleted,
  removeTodo,
  editTodo
}) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <React.Fragment key={todo.id}>
              <Todo
                {...todo}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
              {index < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}
