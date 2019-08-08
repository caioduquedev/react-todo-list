import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleCompleted,
  editTodo
}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <div>
      <ListItem style={{height: "64px"}}>
        {isEditing ? (
          <EditTodoForm id={id} task={task} toggleEdit={toggle} editTodo={editTodo}/>
        ) : (
          <>
            <Checkbox
              onClick={() => toggleCompleted(id)}
              tabIndex={-1}
              checked={completed}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => toggle()} aria-label="Edit">
                <Edit />
              </IconButton>
              <IconButton onClick={e => removeTodo(id)} aria-label="Delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}
