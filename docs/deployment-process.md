# Deployment Information
Our app is hosted on Heroku (a service that allows us to host our app in the cloud).

## Deployment Process
Below are the current steps to deploy our app to heroku. We're still waiting on approval for Heroku to be able to access our GitHub repository. So, in the meantime, Sam has forked our repo (basically made a copy on his own GitHub account), from which we deploy our app.

1. Make changes to our codebase on a separate branch (other than `main`).
2. Once you feel good about your changes, push to the remote repository and create a Pull Request.
3. Assign reviewers to the pull request, and once they've checked over your code and approved it, merge your branch into `main`.
4. Continue this cycle until we're ready to make a new deployment (we shouldn't do this frequently because it'll wipe our databases).
5. Then, merge main into the `deploy` branch, and reach out to Sam (or Sam can do this, he knows how).

Then, Sam will do the following: