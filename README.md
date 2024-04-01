# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).






-------------------------------------------------------------


This project seems pretty similar to other ones we've done. Or is it that a lot of coding is updating the DOM with edits you make to a database?

-CHECKLIST-

NPM INSTALL (node_modules), Make sure dependicies are in package.json (axios, express, pg, react, etc)

npm run client - react | npm run server - express server | postgress server: running

[x] Make sql database file with test data to prove databse works
[x] Database tables should have "id", "description", "complete indicator" (more detail?)
[x] Create GET route on server to pull test data from database (test in Postman)
[x] Create GET route on component to display on DOM (figure out how you want sections displayed)
[x] Create html sections on DOM with inputs for task descriptions
[x] Create POST route for inputs to server
[x] Add server-side POST request to upload to database, make sure posted items appear on DOM
[x] Server-side PUT request to update task to complete (false => true)
[x] Add button on client-side to initiate PUT request
[x] Show task as "complete" on DOM with button press, clear button out after
[x] Add Button that links to a client-side DELTE request for specific task
[x] Add server-side code for DELETE request
[] Change css styling of completed task
[] CSS Styling to make page fancy
[] Increase textbox side of Input
[] Create a way to prioritize tasks with button(?)

//if false? toggle
{!country.visited && <div>Haven't been there</div>}