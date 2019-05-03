# Groupool


## Description

Make football pools with yours friends.



## User 

- Login .
- Log out .
- Sing up.
- Create a group .
- Join a group.
- See a group ranking .
- Make a bet .
- See his own bets. 
- See results.
- See ranking round.
- 

## Backlog

List of other features outside of the MVPs scope

Services details:

- Api development.

- Edit user settings.

- Invite a user to a group by mail. 

- Ranking graph. 

- Choose european league. 

- Log in with passport.

- Profile picture from Gmail. 

- Improve Design. 

  

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

- POST /services/create

  - redirects to / if user is anonymous

  - body:

    - group name

    - group pin

      

    

- GET /group/:id

  - next to 404 if services:id is not valid or doesnt'exist.

  - renders the group  page.

    

  

- GET /round/:id

  - if the round has results then render the round results page. 

  - if there isn't results and the user doesn't have a bet then render the bet page.

  - if there isn't results and the user has a bet then render the see bet page.

    

- POST /round/:id

  - validate that all the matchs have a bet and save the settings of the bet. 

    

- GET /logout/:id

  - close the session.

  - redirects to login page. 

    

## Models

User model

```
username: String, required
password: String, required 

```

Groups

```
name: String
users: [Array user_id]
pin: String
```

 Matchs

```
round: String 
local_team: String
visitor_team: String 
goals_local: Number
goals_visitors: Number
```



 Bets

```
user_id: Number 
match_id: Number
result: Enum{1,x,2} * 

```



 Raking 

```
user_id: Number
score: Number

```



 



## Links

### Trello

[Link to your trello board](<https://trello.com/b/JLvNM127/modulo2>) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Repository Link](<https://github.com/damianrgues/M2-Project>)

[Deploy Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/186eToj1yVpao763ZHkkzjG-qDM3fbzf2VmzJVm122ms/edit?usp=sharing)
