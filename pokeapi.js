let pokemonName
const pokemonNameInput = document.getElementById('name')
const pokemonContainer = document.querySelector('.pokemon')

pokemonNameInput.addEventListener('change', (event) => {
	pokemonName = event.target.value
})

function changeTitle () {
	const title = document.getElementById('title')
	title.innerHTML = "Title changed!"
	console.log(title)
}

function getRandomNumber () {
	const number = Math.floor(Math.random() * 200)
	console.log(number)
	getPokemon(number)
}

function getPokemon (number) {
	let pokemon
	if (number) {
		pokemon = number
	} else {
		pokemon = pokemonName
	}
	if(pokemon) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then(response => response.json())
			.then(result => {
				console.log('result', result)
				if (result) {
					const types = result.types.map(type => type.type.name)
					pokemonContainer.innerHTML = `
					<img src=${result.sprites.front_default}>
					<p>${result.name}</p>
					<p>${types}</p>
					`
				} else {
					pokemonContainer.innerHTML = `
					<p>Error when fetching the Pokemon</p>
					`
				}
			})
			.catch(error => {
				pokemonContainer.innerHTML = `
				<p>Error when fetching the Pokemon</p>
				`
			})
	}
}