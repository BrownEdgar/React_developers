import {createStore} from 'redux'

const initialState = {
    count: 11,
    name: 'Anna',
    data: [ 'assignment', 'architecture', 'art' ],
    result: null,
    lastAction: null,
    lastModified: null
}

function rootReducer(state, action) {
    // const count = state.count

    // function checkNumber(count) {
    //     for (let i = 2; i < count.length; i++) {
    //         if (count % i === 0) {
    //             return {...state, result: false}
    //         } else {
    //             return {...state, result: true}
    //         }         
    //     } 
    // }

    const palindName = state.name;

    function checkName() {
        for (let i = 0; i < palindName.length; i++) {
            if( palindName[i] = palindName.charAt(palindName.length) - 1 ) {
                return {...state, result: true}
            } else {
                return {...state, result: false}
            }
            
        }
    }

    function arrCheck(){
       const answer = state.data.every(elem => {
        const letter = elem[0]
        elem[0] = letter
       })
       console.log(answer);
    }

    switch (action.type) {

        // case 'checkNumber': return checkNumber(state.count)
        
        // case 'checkPalindrome' : return checkName()

        case 'checkData' : return arrCheck()
        
        default: return state
    }

    return state;
}




const store = createStore(rootReducer, initialState)

export default store