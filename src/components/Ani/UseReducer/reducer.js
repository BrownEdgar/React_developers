// export const initialState = 0;

// export default function reducer(state, action){
//     switch (action.type){
//         case 'plus': return state + 1;
//         case 'add-five': return state + action.payload ;
         
//        default: return state;
//     }
// }


// export const initialState = {
//     users:[
//         {
//             id: 1,
//             name: "Carlos"
//         },
//         {
//             id: 2,
//             name: "Zidan"
//         }
//     ],
//     actionCount: 0,
//     lastModified: null
// };

// export default function reducer(state, action){
//     switch (action.type){
        
//         case 'add-user':
//             // return {actionCount: state.actionCount +1, lastModified: new Date(), 
//             //     users: [...state.users, action.payload.user]};
//             return addUser(state, action)

//         case 'add-count':
//             state.actionCount += 1;
//             return {...state};
         
//        default: return state;
//     }
// }

// function addUser(state, action){
//     // const newUsers = [...state.users];
//     // newUsers.push(action.payload.user)
//      return {actionCount: state.actionCount +1, lastModified: new Date(), 
//         users: [...state.users, action.payload.user]
//         // newUsers 
//     };
// }



export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
  }

export default function reducer(state, action){
    switch (action.type){
        
        case 'add-posts':
            return {...state, posts: action.payload};

        case 'add-developer':
            return {...state,  developers: action.payload};
        
        case 'sort':
				return { ...state, arr: state.arr.toSorted((a, b) => a - b) };

        case 'change-id':
            const newPost = state.posts.map((post,index) =>{
                return{
                    ...post,
                    id: arr[index]
                }
            } )
            return {...state,  posts: newPost };

            case 'delete':
                return {...state,  posts: action.payload};

       default: return state;
    }
}