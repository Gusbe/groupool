const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Group = require('./group');

const rankingSchema = new Schema({

  user: { type: Schema.Types.ObjectId, ref: 'User' },
  group: { type: Schema.Types.ObjectId, ref: 'Group' },
  score: { type: Number, default: 0 }

});

const Ranking = mongoose.model('Ranking', rankingSchema);

module.exports = Ranking;
