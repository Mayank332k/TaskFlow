export const initialState = {
  tasks: [
    {
      id: 1,
      content: "Fix login bug on mobile devices",
      status: "IN_PROGRESS",
    },
    {
      id: 2,
      content: "Deploy latest build to production",
      status: "COMPLETED",
    },
    {
      id: 3,
      content: "Pay hosting bill before downtime",
      status: "URGENT",
    },
  ],
};

export function taskReducer(state, action) {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          content: action.payload.content,
          status: action.payload.status,
        },
      ],
    };
  }

  if (action.type === "SET_STATUS") {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      ),
    };
  }

  if (action.type === "MARK_COMPLETED") {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, status: "COMPLETED" } : task
      ),
    };
  }

  if (action.type === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
