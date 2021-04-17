# Color Picker

A Webapp having NodeJS backend and ReactJS based frontend to analyse an image and show its most dominant color and border color. 

# Setting Up the Project for development

Before you clone this project, you must have `NodeJS` and `npm` installed on your computer. Once that is set up, clone this repository to you machine. After that, open the 
command terminal ad navigate to the directory where you have cloned the project. 

Hop into the <b>client</b> folder, by running the command `cd colorpicker/client`. Install all the required node modules by running the `npm i` command.

Then, come out of the client folder by running the `cd ..` command, and the hop into the <b>server</b> folder, using the `cd server` command. Again, install all the required node modules by running 
the `npm i` command.

After that, run the `npm start` command to start the Express server. 

Open another command terminal, navigate to the <b>colorpicker/client</b> folder and then run the `npm start` command here as well, to start the React Server. The server will 
start up on the port number 3000, and a new tab will open in your browser whose URL will be `http://localhost:3000/`.

# Working

Enter the URL of the image you want to analyse in the textarea displayed in the `Color Picker` window of your browser and press the <b>Submit</b> button to get the Dominant Color 
and Border Color of that Image.
