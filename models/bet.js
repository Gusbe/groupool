const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Game = require('./game');

const betSchema = new Schema({

  user: { type: Schema.Types.ObjectId, ref: 'User' },
  result: { type: String, enum: ['1', 'X', '2'] },
  game: { type: Schema.Types.ObjectId, ref: 'Game' }

});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;
