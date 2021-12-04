# Docs For All Endpoints

## User Endpoints
All users endpoints go through "/app/users" and are found in [this file](/backend/Users/UsersRouter.js).

### **Request**
GET /app/users/
> Gets all users in the database.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/:id
> Gets userinfo for a specific user id. 

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getbal/:username
> Gets user's total balance. 

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getcpp/:username
> Gets user's cost per pizza.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getspending/:username
> Gets user's total spending.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getrevenue/:username
> Gets user's total revenue. 

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getpepperoni/:username
> Gets user's pepperoni count.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getmushroom/:username
> Gets user's mushroom count.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getpepper/:username
> Gets user's pepper count.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getsausage/:username
> Gets user's sausage count.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/users/getcheese/:username
> Gets user's cheese count.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
POST /app/users/create
> Creates a new user.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
POST /app/users/login
> Allows user to login.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
PATCH /app/users/updateuser/:id
> Updates user's info for a specific id.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| id | integer | User's ID |
| balance | integer | User balance |
| cpp | integer | User cost per pizza |
| spending | integer | User spending |
| revenue | integer | User revenue |
| pepperoni | integer | User has pepperonis or not |
| mushroom | integer | User has mushrooms or not |
| pepper | integer | User has peppers or not |
| sausage | integer | User has sausages or not |
| olive | integer | User has olives or not |
| cheese | integer | User has extra cheese or not |

--- 
### **Request**
PATCH /app/users/setgamestate/:username
> Updates the user games state and data. 

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| username | string | User's username |
| balance | integer | User balance |
| cpp | integer | User cost per pizza |
| spending | integer | User spending |
| revenue | integer | User revenue |
| pepperoni | integer | User has pepperonis or not |
| mushroom | integer | User has mushrooms or not |
| pepper | integer | User has peppers or not |
| sausage | integer | User has sausages or not |
| olive | integer | User has olives or not |
| cheese | integer | User has extra cheese or not |


--- 
### **Request**
DELETE /app/users/delete/:id
> Delete user's info for a specific id.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| id | integer | ID of the account to be deleted |
<br/>


## History Endpoints
All history endpoints go through "/app/history" and are found in [this file](/backend/History/HistoryRouter).

### **Request**
GET /app/history/
> Gets all information in the "./HistoryDatabase.js" database.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
GET /app/history/:id
> Gets information for a specific id.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
POST /app/history/create
> Post an interaction.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

--- 
### **Request**
DELETE /app/history/delete/:id
> Deletes history info for a specific id.

### **Parameters**
| Name | Type | Description |
| --- | --- | --- |
| x | y | z |

## Unhandled Endpoints
If we get a request on an endpoint not already handled, resolve ?? .