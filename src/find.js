const { map, mapValues, filter, reduce, includes, forEach, omitBy, compact } = require('lodash')
const effectiveAgainst = require('./type-chart')
const { pokemons, getPokemon } = require('./pokemons')

let typeEffectivePokemon = mapValues(effectiveAgainst, (_, type) =>
  map(filter(pokemons, pokemon => includes(pokemon.effectiveAgainst, type)), 'name')
)

const findBestPokemon = _typeEffectivePokemon => {
  const mentioned = {}

  forEach(_typeEffectivePokemon, _pokemons => {
    forEach(_pokemons, pokemon => {
      mentioned[pokemon] = mentioned[pokemon] ? mentioned[pokemon] + 1 : 1
    })
  })

  return reduce(Object.keys(mentioned), (best, name) => {
    const count = mentioned[name]
    if (count > best.count) {
      return { name, count }
    } else if (count === best.count) {
      const firstPokemon = getPokemon(name)
      const secondPokemon = getPokemon(best.name)
      return firstPokemon.strength > secondPokemon.strength ? { name: firstPokemon.name, count } : best
    }
    return best
  }, { name: '', count: 0 }).name
}

const removeBestPokemon = (_typeEffectivePokemon, best) =>
  omitBy(_typeEffectivePokemon, pokemons =>
    includes(pokemons, best)
  )

const bestPokemon = []

for (var i = 0; i < 6; i++) {
  const best = findBestPokemon(typeEffectivePokemon)
  typeEffectivePokemon = removeBestPokemon(typeEffectivePokemon, best)
  bestPokemon[i] = best
}

module.exports = compact(bestPokemon)
