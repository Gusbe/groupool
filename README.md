# Groupool


## Description

Make football pools with yours friends.


## User 

- Login
- Log out
- Sing up
- Create a group
- Join a group
- See a group ranking
- Make a bet
- See his own bets
- See results
- See ranking round


## Backlog

- Api development
- Edit user settings
- Invite a user to a group by mail.
- Ranking graph
- Choose european league
- Log in with passport
- Profile picture from Gmail
- Improve Design


## ROUTES:

- GET /
  - renders the log in page.
  - redirects to  /groups if user is logged. 

- POST  /
  - Check if the user and passport is correct and starts the session.

- GET /signup
  - redirects to  /groups if user is logged. 
  - renders the signup page.

- POST /signup
  - redirects to  /groups if user is logged. 
  - validate unique email and required content.
  - body:
    - username
    - password

- GET /groups
  - renders the groups page.

- GET  /groups/create
  - renders the create group form. 
  - body:
    - Group name 

- POST /groups/create
  - validate that the field is correct. 
  - render the group information page.

- GET /groups/join
  - renders the join group form.

- POST /groups/join
  - validate the fields are corrects. 
  - redirect to the group page.

- GET /group/:id
  - next to 404 if services:id is not valid or doesnt'exist.
  - renders the group  page.

- GET /round/:id
  - if the round has results then render the round results page. 
  - if there isn't results and the user doesn't have a bet then render the bet page.
  - if there isn't results and the user has a bet then render the see bet page.

- POST /round/:id
  - validate that all the games have a bet and save the settings of the bet.  

- GET /logout/:id
  - close the session.
  - redirects to login page. 

    
## Models


User model

```
username: String, required
password: String, required 

```

Group model

```
name: String
pin: String
users: [ Users ]

```

Game model

```
round: Number, required
team_local: String, required
team_visitor: String, required
goals_local: Number
goals_visitor: Number
date: Date, required
```

Bet model

```
user: User 
game: Game
result: Enum['1','X','2'], required

```

Raking model 

```
user: User
group: Group
score: Number, default: 0

```


## Links


### Trello

[Trello board](<https://trello.com/b/JLvNM127/modulo2>)


### Git

Repository link:

[Repository Link](<https://github.com/gusbe/groupool>)


### Slides

[Slides Link](<https://docs.google.com/presentation/d/186eToj1yVpao763ZHkkzjG-qDM3fbzf2VmzJVm122ms/edit#slide=id.g59e26f77a5_0_40>)


### App

[App Link](<http://ironhack-groupool.herokuapp.com>)
