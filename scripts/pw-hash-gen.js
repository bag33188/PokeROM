const bcrypt = require('bcryptjs');
const readline = require('readline');

// create readline interface
const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask user for password
rlInterface.question('Enter password: ', pw => {
  // generate salt using bcrypt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) console.log(err);
    // generate password hash using generated salt
    bcrypt.hash(pw, salt, (err, hash) => {
      if (err) console.log(err);
      // output hashed password
      console.log(`Hashed password: ${hash}`);
    });
  });
  // close readline interface
  rlInterface.close();
});
