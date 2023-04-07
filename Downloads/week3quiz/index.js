const express = require('express')
const app = express()
const port = 3000

let dbUsers = [
  {
      username: "zik",
      password: "gigi",
      email: "zik@gmail.com"
  },
      {
      username: "ziq",
      password: "gugu",
      email: "ziq@gmail.com"
  },
      {
      username: "yum",
      password: "gogo",
      email: "yum@gmail.com"
  }
]

// create a GET route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Post request')
})

//create a POST route for the user to login
app.post('/login', (req, res) => {

  //get the usernames and passwords from the request body
  const {username, password} = req.body;

  //find the user in the database
  const user = dbUsers.find(user => user.username === username && user.password === password);

  //if user is found, return the user object
  if (user) {
    res.send(user);
  } else {

    //if user is not found, return an error
    res.send({ error: "User not found"});
  }
})

app.get('/bye', (req, res) => {
    res.send('Bye Bye World!')
})

// start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Eenable json body parsing
app.use(express.json());

app.post('/', (req, res) => {
  let data = req.body
  res.send('Post request'
    +JSON.stringify(data))
});
