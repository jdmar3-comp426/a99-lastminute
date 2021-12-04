# Testing Setup

Below, I'll take you through the steps required to test the app.

### Start Backend

1. Open a command line (VS Code Terminal, Terminal, iTerm, whatever) and `cd` into our project's root directory.
2. `cd` into the `backend` directory
3. Run `npm start` to start the express server located at http://localhost:3001

#### Start Frontend

1. Open another command line and `cd` into the `frontend` directory.
2. Run `npm start` to start the React web app located at http://localhost:3000

You should be good to go.

## Iteration

To iterate on the backend, you'll need to press `Control+C` in your Terminal and run `node server.js` after each change.

For normal changes to the frontend, the web app should automatically update after you save the file. If that doesn't work, press `Control+C` and run `npm start` again.