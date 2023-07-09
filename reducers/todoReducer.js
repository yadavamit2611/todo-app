const initialState = {
    todos: [],
    notificationSettings: {
      smsEnabled: false,
      pushEnabled: false,
      emailEnabled: false,
    },
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            ),
        };        
        case 'SET_NOTIFICATION_SETTING':
          return {
            ...state,
            notificationSettings: {
              ...state.notificationSettings,
              [action.payload.setting]: action.payload.value,
            },
          };        
      default:
        return state;
    }
  };
  
  export default todoReducer;
  