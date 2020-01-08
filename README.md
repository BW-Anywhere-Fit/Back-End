# Anywhere Fitness API Info - https://bw-anywhere-fitness1.herokuapp.com/

## Client Register/Login Endpoints

# Register - (Post Request)
- https://bw-anywhere-fitness1.herokuapp.com/clients/register
- This endpoint needs username, password, and instructor set to false.
It will look like this:

{

	"username": "client2",

	"password": "pass123",

	"instructor": false

}

# Login - (Post Request)
- https://bw-anywhere-fitness1.herokuapp.com/clients/login
- This endpoint needs username and password. It will look like this:

{

	"username": "client2",

	"password": "pass123"

}

This endpoint will give you an ID as well as your token that you need for authorization.




## Instructor Register/Login Endpoints 

# Register - (Post Request)
- https://bw-anywhere-fitness1.herokuapp.com/auth/register
- This endpoint needs username, password, and instructor set to true.
It will look like this:

{

	"username": "staff1",

	"password": "pass123",

	"instructor": true

}

# Login - (Post Request)
- https://bw-anywhere-fitness1.herokuapp.com/auth/login
- This endpoint needs username and password. It will look like this:

{

	"username": "staff1",

	"password": "pass123"

}

This endpoint will give you an ID as well as your token that you need for authorization.




## Endpoints for the Classes

# Get all classes - (Get Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/
- This endpoint allows you to get all of the classes offered.

# Get class by ID - (Get Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/:id
- Replace :id with whatever the class ID is to get class by ID.

# Get class by Instructor - (Get Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/instructor/:id
- This allows you to get all classes by a specific instructor

# Get Users in a Specific Class - (Get Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/:id/list
- This will give you all of the users signed up for that specific class

# Get All Classes by Specific Client - (Get Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/client/:id
- This gives you all the classes by specific client (id 1 doesn't work, it belongs to a instructor, 
start with id 2 on this, so like, https://bw-anywhere-fitness1.herokuapp.com/classes/client/2 )

# Add a User to a class - (Post Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/add/:id
- This allows you to add a client to a specific class

# Remove a User from a class - (Delete Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/remove/:id
- This allows you to remove a client from a class

# Add a new class by an instructor - (Post Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes
- This allows you to add a new class as an instructor, this will take name, schedule, location, and instructor_id. It will look like this, 

{

  "name": "CrossFitttttt",
  
  "schedule": "Thursday & Saturday 11:00 AM",

  "location": "123 Main Street",

  "instructor_id": 1

}

# Remove a class by an instructor - (Delete Request)
- https://bw-anywhere-fitness1.herokuapp.com/classes/:id
- This allows you to remove a class as an instructor

