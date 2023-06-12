

export default function addCountFetchAPI() {
	return  fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
		.then(response => response.json())
		.then(json => json)
}
