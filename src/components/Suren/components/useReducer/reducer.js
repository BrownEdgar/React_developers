export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
  };
  export default function reducer (state =  initialState, action){
    switch (action.type) {
        case 'FETCH_POSTS':
          return {
            ...state,
            actions: state.actions + 1,
            posts: action.payload,
          };
    
        case 'ADD_DEVELOPER':
          return {
            ...state,
            actions: state.actions + 1,
            developers: [...state.developers, action.payload],
          };
    
        case 'SORT_ARRAY':
          const sortedArr = [...state.arr].sort((a, b) => a - b);
    
          return {
            ...state,
            actions: state.actions + 1,
            arr: sortedArr,
          };
    
        case 'DELETE_POST':
          const updatedPosts = [...state.posts];
          updatedPosts.splice(action.payload, 1);
    
          return {
            ...state,
            actions: state.actions + 1,
            posts: updatedPosts,
          };
    
        default:
          return state;
      }
  }