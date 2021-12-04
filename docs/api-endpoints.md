# Docs For All Endpoints

## User Endpoints
All users endpoints go through "/app/users" and are found in [this file](/backend/Users/UsersRouter.js).

GET /app/users/
> Gets all users in the database.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/:id
> Gets userinfo for a specific user id. 

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getbal/:username
> Gets user's total balance. 

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getcpp/:username
> Gets user's cost per pizza.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getspending/:username
> Gets user's total spending.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getrevenue/:username
> Gets user's total revenue. 

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getpepperoni/:username
> Gets user's pepperoni count.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getmushroom/:username
> Gets user's mushroom count.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getpepper/:username
> Gets user's pepper count.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getsausage/:username
> Gets user's sausage count.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/users/getcheese/:username
> Gets user's cheese count.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

POST /app/users/create
> Creates a new user.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

POST /app/users/login
> Allows user to login.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

PATCH /app/users/updateuser/:id
> Updates user's info for a specific id.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

PATCH /app/users/setgamestate/:username
> Updates the user games state and data. 

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

DELETE /app/users/delete/:id
> Delete user's info for a specific id.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

## History Endpoints
All history endpoints go through "/app/history" and are found in [this file](/backend/History/HistoryRouter).

GET /app/history/
> Gets all information in the "./HistoryDatabase.js" database.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

GET /app/history/:id
> Gets information for a specific id.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

POST /app/history/create
> Post an interaction.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

DELETE /app/history/delete/:id
> Deletes history info for a specific id.

| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

## Unhandled Endpoints
If we get a request on an endpoint not already handled, resolve ?? .