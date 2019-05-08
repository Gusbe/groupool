const mongoose = require('mongoose');
const Games = require('../models/game');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

/*
const usersArray = [
  {
    username: 'Uros',
    password: 'xxxxxxxxxxx'
  },
  {
    username: 'Axel',
    password: 'xxxxxxxxxxx'
  },
  {
    username: 'Jack',
    password: 'xxxxxxxxxxx'
  },
  {
    username: 'Gabriel',
    password: 'xxxxxxxxxxx'
  }
];

Users.create(usersArray, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${usersArray.length} users`);
}); */

const gamesArray = [
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Athletic Club',
    team_visitor: 'RC Celta',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Atletico de Madrid',
    team_visitor: 'Sevilla',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'FC Barcelona',
    team_visitor: 'Getafe FC',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Real Betis',
    team_visitor: 'SD Huesca',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Girona FC',
    team_visitor: 'Levante UD',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Rayo Vallecano',
    team_visitor: 'Real Valladolid',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Valencia CF',
    team_visitor: 'D. Alaves',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Villareal CF',
    team_visitor: 'SD Eibar',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'CD Leganes',
    team_visitor: 'RCD Espanyol',
    date: '2019-05-12'
  },
  {
    round: 37,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Real Sociedad',
    team_visitor: 'Real Madrid',
    date: '2019-05-12'
  }
];

Games.create(gamesArray, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${gamesArray.length} games`);
});

const gamesArrayPast = [
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Sevilla FC',
    team_visitor: 'CD Leganes',
    goals_local: 0,
    goals_visitor: 3,
    date: '2019-05-03',
    result: '2'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Levante UD',
    team_visitor: 'Rayo Vallecano',
    goals_local: 4,
    goals_visitor: 1,
    date: '2019-05-04',
    result: '1'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'RCD Espanyol',
    team_visitor: 'Atletico de Madrid',
    goals_local: 3,
    goals_visitor: 0,
    date: '2019-05-04',
    result: '1'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'D. Alaves',
    team_visitor: 'Real Sociedad',
    goals_local: 0,
    goals_visitor: 1,
    date: '2019-05-04',
    result: '2'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'RC Celta',
    team_visitor: 'FC Barcelona',
    goals_local: 2,
    goals_visitor: 0,
    date: '2019-05-04',
    result: '1'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Getafe CF',
    team_visitor: 'Girona FC',
    goals_local: 2,
    goals_visitor: 0,
    date: '2019-05-05',
    result: '1'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'SD Eibar',
    team_visitor: 'Real Betis',
    goals_local: 1,
    goals_visitor: 0,
    date: '2019-05-05',
    result: '1'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Real Madrid',
    team_visitor: 'Villareal CF',
    goals_local: 3,
    goals_visitor: 2,
    date: '2019-05-05',
    result: '1'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'Real Valladolid',
    team_visitor: 'Athletic Club',
    goals_local: 1,
    goals_visitor: 0,
    date: '2019-05-05',
    result: '1'
  },
  {
    round: 36,
    picture_local: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    picture_visitor: 'https://thumb.resfu.com/img_data/escudos/medium/369.jpg?size=60x&ext=png&lossy=1&1',
    team_local: 'SD Huesca',
    team_visitor: 'Valencia',
    goals_local: 2,
    goals_visitor: 6,
    date: '2019-05-05',
    result: '2'
  }
];

Games.create(gamesArrayPast, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${gamesArrayPast.length} games`);
});
