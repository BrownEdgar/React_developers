export  const initialState = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];

   export default function reducer  (state, action) {
    switch (action.type) {
      case 'toggleTodo':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      case 'allDone':
        return state.map(todo => ({ ...todo, completed: true }));
      case 'removeById':
        return state.filter(todo => todo.id !== action.id);
      case 'addTodo':
        return [...state, action.todo];
      default:
        return state;
    }
  };