## Create widget using React App

Demo link : https://zwdrive.com/c6aF7R

### Step 1

Created a react project using the following command

      $ npx create-react-app react-app
 
### Step 2

Add your business logic

### Step 3

Add the following line in the package.json file, just inside paranthesis.
  
      "homepage": "./",

### Step 4

Run the following command in react project.
  
      $ npm run build
  
Now copy all the files and folder inside the build folder.

### Step 5

Create a new widget project using the following command.

      $ zet init
  
### Step 6

Now goto the widget folder -> app, delete the widget.html folder and paste all the files copied before.

### Step 7

Now zip the project using the following command.

      $ zet pack
  
### Step 8

Create new widget from UI and select ZOHO as hosting and select the zip file thus created in previous step from the widget folder -> dist.

### Step 9

Associate the widget wherever you want 

Enjoy...!

  
note : Not included the node_modules in the repository
