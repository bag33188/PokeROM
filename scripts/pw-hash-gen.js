const readline = require('readline');
const bcrypt = require('bcryptjs');

/**
 * @class
 * @name PwHashGen
 */
class PwHashGen {
  /**
   * @constructor
   */
  constructor() {
    // create readline interface
    this.rlInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  /**
   * @method
   * @name genPw
   * @summary Password Hash Generator.
   * @description Generates a hash from input password.
   * @returns {void} Nothing.
   */
  genPw() {
    // ask user for password
    this.rlInterface.question('Enter password: ', pw => {
      // generate salt using bcrypt
      bcrypt.genSalt(10, (err, salt) => {
        // check for errors
        if (err) console.log(err);
        // generate password hash using generated salt
        bcrypt.hash(pw, salt, (err, hash) => {
          // check for errors
          if (err) console.log(err);
          // output hashed password
          console.log(`Hashed password: ${hash}`);
        });
      });
      // close readline interface
      this.rlInterface.close();
    });
  }
}

/**
 * @function
 * @name init
 * @summary Initiation
 * @description Initializes the script.
 * @returns {void} Nothing.
 */
function init() {
  // instantiate `PwHashGen` class.
  const PasswordHashGenerator = new PwHashGen();

  // invoke `genPw` method from `PwHashGen` class
  PasswordHashGenerator.genPw();
}

// call/invoke init function
init();
