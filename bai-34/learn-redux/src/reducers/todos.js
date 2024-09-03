const init = [
  {
    id: 1,
    content: "Công việc 1",
    completed: true
  },
  {
    id: 2,
    content: "Công việc 2",
    completed: false
  },
  {
    id: 3,
    content: "Công việc 3",
    completed: false
  }
]

export const todosReducer = (state = init, action) => {
  console.log(state, action);
  return state;
}