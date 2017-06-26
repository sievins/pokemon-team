const types = require('./types')

module.exports = {
  [types.NORMAL]:   [],
  [types.FIRE]:     [types.GRASS, types.ICE, types.BUG, types.STEEL],
  [types.WATER]:    [types.FIRE, types.GROUND, types.ROCK],
  [types.ELECTRIC]: [types.WATER, types.FLYING],
  [types.GRASS]:    [types.WATER, types.GROUND, types.ROCK],
  [types.ICE]:      [types.GRASS, types.GROUND, types.FLYING, types.DRAGON],
  [types.FIGHTING]: [types.NORMAL, types.ICE, types.ROCK, types.DARK, types.STEEL],
  [types.POISON]:   [types.GRASS, types.FAIRY],
  [types.GROUND]:   [types.FIRE, types.ELECTRIC, types.POISON, types.ROCK, types.STEEL],
  [types.FLYING]:   [types.GRASS, types.FIGHTING, types.BUG],
  [types.PSYCHIC]:  [types.FIGHTING, types.POISON],
  [types.BUG]:      [types.GRASS, types.PSYCHIC, types.DARK],
  [types.ROCK]:     [types.FIRE, types.ICE, types.FLYING, types.BUG],
  [types.GHOST]:    [types.PSYCHIC, types.GHOST],
  [types.DRAGON]:   [types.DRAGON],
  [types.DARK]:     [types.PSYCHIC, types.GHOST],
  [types.STEEL]:    [types.ICE, types.ROCK, types.FAIRY],
  [types.FAIRY]:    [types.FIGHTING, types.GHOST, types.DARK],
}
