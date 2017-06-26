const { find, map, reduce, uniq } = require('lodash')
const types = require('./types')
const effectiveAgainst = require('./type-chart')

const poks = [
  {
    name: 'Reshiram',
    strength: 680,
    types: [types.DRAGON, types.FIRE],
  },
  {
    name: 'Zekrom',
    strength: 680,
    types: [types.DRAGON, types.ELECTRIC],
  },
  {
    name: 'Kyurem',
    strength: 660,
    types: [types.DRAGON, types.ICE],
  },
  {
    name: 'Meloetta',
    strength: 600,
    types: [types.NORMAL, types.PSYCHIC],
  },
  {
    name: 'Victini',
    strength: 600,
    types: [types.PSYCHIC, types.FIRE],
  },
  {
    name: 'Hydreigon',
    strength: 600,
    types: [types.DARK, types.DRAGON],
  },
  {
    name: 'Landorus',
    strength: 600,
    types: [types.GROUND, types.FLYING],
  },
  {
    name: 'Genesect',
    strength: 600,
    types: [types.BUG, types.STEEL],
  },
  {
    name: 'Tornadus',
    strength: 580,
    types: [types.FLYING],
  },
  {
    name: 'Keldeo',
    strength: 580,
    types: [types.WATER, types.FIGHTING],
  },
  {
    name: 'Thundurus',
    strength: 580,
    types: [types.ELECTRIC, types.FLYING],
  },
  {
    name: 'Virizion',
    strength: 580,
    types: [types.GRASS, types.FIGHTING],
  },
  {
    name: 'Terrakion',
    strength: 580,
    types: [types.ROCK, types.FIGHTING],
  },
  {
    name: 'Cobalion',
    strength: 580,
    types: [types.STEEL, types.FIGHTING],
  },
]

const pokemons = map(poks, ({ name, strength, types }) => ({
  name,
  strength,
  effectiveAgainst: uniq(reduce(types, (acc, type) => (
    acc.concat(effectiveAgainst[type])
  ), [])),
}))

const getPokemon = name => find(pokemons, pokemon => pokemon.name === name)

module.exports = {
  pokemons,
  getPokemon,
}
