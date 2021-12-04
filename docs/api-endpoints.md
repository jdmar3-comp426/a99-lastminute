## Docs For All Endpoints

## User Endpoints
All users endpoints go through "/app/users" and are found in [this file](/backend/Users/UsersRouter.js).

GET /app/users/
    Gets all users in the database.

GET /app/users/:id
    Gets userinfo for a specific user id. 

GET /app/users/getbal/:username
    Gets user's total balance. 

GET /app/users/getcpp/:username
    Gets user's cost per pizza.

GET /app/users/getspending/:username
    Gets user's total spending.

GET /app/users/getrevenue/:username
    Gets user's total revenue. 

GET /app/users/getpepperoni/:username
    Gets user's pepperoni count.

GET /app/users/getmushroom/:username
    Gets user's mushroom count.

GET /app/users/getpepper/:username
    Gets user's pepper count.

GET /app/users/getsausage/:username
    Gets user's sausage count.

GET /app/users/getcheese/:username
    Gets user's cheese count.

POST /app/users/create
    Creates a new user.

POST /app/users/login
    Allows user to login.

PATCH /app/users/updateuser/:id
    Updates user's info for a specific id.

PATCH /app/users/setgamestate/:username
    Updates the user games state and data. 

DELETE /app/users/delete/:id
    Delete user's info for a specific id.


## History Endpoints
All history endpoints go through "/app/history" and are found in [this file](/backend/History/HistoryRouter).

GET /app/history/
    Gets all information in the "./HistoryDatabase.js" database.

GET /app/history/:id
    Gets information for a specific id.

POST /app/history/create
    Post an interaction.

DELETE /app/history/delete/:id
    Deletes history info for a specific id.

## Unhandled Endpoints
If we get a request on an endpoint not already handled, resolve ?? .