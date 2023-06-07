 export default function fetchProducts(url) {
	return fetch(url)
	.then(res => res.json())
	.then(json => json)

	
}
