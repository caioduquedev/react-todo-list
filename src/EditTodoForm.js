import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

export default function EditTodoForm({ task, id, editTodo, toggleEdit }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEdit();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        onKeyDown={e => {
          if (e.keyCode === 27) {
            toggleEdit();
          }
        }}
        autoFocus
        fullWidth
        margin="normal"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
