export const createTodo = () => {
  return {
    type: "CREATE_TODO"
  }
}

export const completedTodo = () => {
  return {
    type: "COMPLETED_TODO"
  }
}

export const deleteTodo = () => {
  return {
    type: "DELETE_TODO"
  }
}