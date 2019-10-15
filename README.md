# ICJ Bootstrap Template

This template goes along with the [Bootstrap lessons](https://github.com/utdata/icj-class#bootstrap) for Intro to Coding for Journalists.

## How to set up your project

- Create a new folder in your `icj/` folder called `yourname-bootstrap`.
- In VS Code, open a new window and open your new folder.
- Open the Integrated Terminal.
- Run `$ degit utdata/icj-bootstrap-template` to download the files.
- Run `$ npm install` to install the node packages.
- Run `$ git init` to intilize git.
- Run `$ git add .` to add the files.
- Run `$ git commit -m "first commit"` to commit the files.
- Go to Github and create a repository of the same name.
- Use the `git add` command provided there to sync the repos.
- Run `$ git push origin master` to push the code to Github.

## How to run the project

- Run `$ gulp dev` to compile all the code and start a server.
- If you just want to compile code without running a server, run `gulp` by itself.

## Edit in the src folder

All edits to HTML, SCSS or images should be done in the `src` folder. DO NOT edit files in the `docs` folder, or you will lose the changes when gulp tasks run.
