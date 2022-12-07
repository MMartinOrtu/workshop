# Javascript workshop
1. Why is JS important?
2. Website technologies (HTML, CSS and JS)
3. Building a website with pokepmon API ([pokemon API]("https://pokeapi.co/"))

### HTML

```
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<div class="pokemon"></div>
	</body>
</html>
```

### JS

```
function getPokemon () {
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

function getRandomNumber () {
	const number = Math.floor(Math.random() * 200)
	console.log(number)
	getPokemon(number)
}
```
