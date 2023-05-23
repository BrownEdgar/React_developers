
export const initialState = [
	{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
	 {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]

// մեջը արդեն ունենալ հետևյալ ֆունկցիաները

// `toggletodo` - որը ՝todo՝ զանգվածում

// `alldone` - որը ՝todo՝ զանգվածում բոլորի `completed` հատկությունը կսարգի true 
// `removeById` - որը կստանա `id` և կջնջի համապատասխան `todo`-ն
// `addTodo` - որը ՝todo՝ զանգվածում կավելացնի նոր ՝todo՝
// `tojson` - որը ՝todo՝ զանգվաը կսարգի `json` և կվերադարձնի մեզ
// ինչպես նաև այդ ՝todo՝-ը նկարել էջում -->


export default function reducer(state = initialState, action) {
	switch (action.type) {
		case allDone: return allDone(state, action)
		// case FAILURE: return { ...state, status: "fail" }

		default: return state
	}

}


export function allDone(state, action){
    return {
        completed: true
    }
}