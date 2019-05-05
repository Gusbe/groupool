const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({

  round: { type: Number, required: true },
  team_local: { type: String, required: true },
  team_visitor: { type: String, required: true },
  goals_local: { type: Number },
  goals_visitor: { type: Number },
  date: { type: Date, required: true }

});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;