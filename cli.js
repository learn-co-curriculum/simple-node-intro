const User = require("./User.js")
const prompt = require('prompt');

prompt.start();
 
prompt.get('name', function (err, result) {
  const user = new User(result.name)
  user.greeting()
});
