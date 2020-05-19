# How to use this Repo
This repository has 4 branches:
1. master
2. prerefactor
3. refactoring
4. postNewPaper
5. middleware

**master**: contains the final version of the repo

**prerefactor**: has express code that works, but doesn't have any sort of pakcage structure

**refactoring**: functionally equivalent to *prerefactor* but has "proper folder structure"

**postNewPaper**: added the ability to make post requests (thanks to body-parser) to /paper in order to add new paper records to DB

**middleware**: added logging middleware and overly-simplified login functionality with express-sessions

To see the evolution of the project, look at the different branches. First, clone the project:
> git clone "url-of-repo.git"

Then create a branch locally to corresponsd to the branch you wanna pull from remote, for example:
> git checkout -b middleware

Then pull the branch from remote:
> git pull origin middleware

Repeat for all the other branches. You can swtich between branches using:
> git branch "branch-name"

## Project setup
If you would like to play around with this project on a local database:
1. clone the project
> git clone https://gitlab.com/2005-javareact/trainingrepos/1w-abcmartv3.0

2. download node modules:
> npm install

3. run the SQL script (data.sql) in your local database

4. Start the express server using:
> npm run dev

or
> npm start