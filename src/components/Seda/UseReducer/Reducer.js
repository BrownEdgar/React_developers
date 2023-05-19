// `state` ունենալ  այս տեսքով

import { func } from "prop-types"

export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
    status: 'idle'
  }
  
// Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները
// - Jsonplaceholder -ից կստանա 10 հատ post և կպահի `posts` զանգվածի մեջ ,զուգահեռ նաև կնկարի Էջում
// - Էջում պետք է ունենալ 1 input և այտեղ գրված անունը պետք է ավելացնել `developers` զանգվածի մեջ
// - սորտաովրել arr զանգվածը։
// - առաջին գործողությունով ստացած 10 հատ post-ի id-ը ջնջել և փոխարենը դնել arr զանգվածի 10 թվերը։
// - ամեն մի post-ում լինի 'x' կոճակ և այն ՛click՛ի ժամանակ պիտի ջնջի հերթական post-ը,
  
  
// - Ամեն մի գործողությունից հետո(click) `actions` թվային հատկությունը ավելացնել 1 - ով։


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'add-posts': return addPosts(state, action)
        case 'add-developer' : return addDev(state, action) 
        case 'sort-arr' : return sorter(state) 
        case 'failure' : return {...state, status:'fail'}

        default: return state
    }
}

function addPosts (state, action) {

    return {
			...state,
			actions: state.actions + 1,
			posts: action.payload,  
		}
}

function addDev (state, action) {
    return {
        ...state, 
        actions: state.actions + 1, 
        developers: [...state.developers, action.payload]
    }

}

function sorter (state) {
    const sorted = state.arr.toSorted((a,b) => a - b)
    return{
        ...state, 
        actions: state.actions + 1, 
        arr: sorted
    }
}