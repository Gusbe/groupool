const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({

  round: { type: Number, required: true },
  picture_local: { type: String },
  picture_visitor: { type: String },
  team_local: { type: String, required: true },
  team_visitor: { type: String, required: true },
  goals_local: { type: Number },
  goals_visitor: { type: Number },
  date: { type: Date, required: true },
  result: { type: String }

});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
