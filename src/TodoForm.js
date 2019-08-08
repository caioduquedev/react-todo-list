import React from "react"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import useInputState from "./hooks/useInputState"

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("")
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault()
          props.addTodo(value)
          reset()
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          style={{ margin: "normal" }}
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  )
}