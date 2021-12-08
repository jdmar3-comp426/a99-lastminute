# Tech Stack

Currently, our web app as a [React.js](https://reactjs.org) frontend connected to an [Express.js](https://expressjs.com) backend. 

## Backend

Our project's root directory has a `server.js` file which describes the server where our backend and API runs.

#### API

Our API's functionality is described in the `backend` folder, with a router file for each portion of our API. You can think about these as mini/sub-API's of our backend. `server.js` aggregates all of these routers, filling out the functionality of our entire backend.

##### Database

We'll probably use a very similar database set up as a04 but with multiple databases: users, leaderboard, game saves, etc.

## Frontend

Our project's front end is served as a React app. Our project directory has a child directory called `frontend` which is a separate Node Package. The frontend Node package forwards API requests to the express server, and everything works out pretty well.