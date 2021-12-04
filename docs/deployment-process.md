# Deployment Information
Our app is hosted on Heroku (a service that allows us to host our app in the cloud).

## Deployment Process
Below are the current steps to deploy our app to heroku. We're still waiting on approval for Heroku to be able to access our GitHub repository. So, in the meantime, Sam has forked our repo (basically made a copy on his own GitHub account), from which we deploy our app.

1. Make changes to our codebase on a separate branch (other than `main`).
2. Once you feel good about your changes, push to the remote repository and create a Pull Request.
3. Assign reviewers to the pull request, and once they've checked over your code and approved it, merge your branch into `main`.
4. Continue this cycle until we're ready to make a new deployment (we shouldn't do this frequently because it'll wipe our databases).
4. When we're ready to deploy, reach out to Sam and let him know.

Then, Sam will do the following:

1. Merge main into the `deploy` branch. The `deploy` branch will represent the current state of our deployed version of the game.
2. In his forked repo (`samrshi/a99-lastminute`), accept the changes made to `jdmar3-comp426/a99-lastminute`.

This will automatically trigger a new deployment on Heroku (pretty cool, right?) and the new version will be deployed in a couple minutes.

Eventually, when/if we get approval for Heroku to monitor our shared repo, we will only have to merge main into `deploy` and it'll automatically trigger a deployment.