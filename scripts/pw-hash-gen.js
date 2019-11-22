const readline = require('readline');
const bcrypt = require('bcryptjs');

const createReadlineInterface = Symbol('createReadlineInterface');
const genHash = Symbol('genHash');

/**
 * @class
 * @name PwHashGen
 */
class PwHashGen {
  /**
   * @constructor
   */
  constructor() {
    // initiate readline interface
    this[createReadlineInterface]();
  }

  /**
   * @method
   * @name createReadlineInterface
   * @summary Ask Input
   * @description Ask user for password.
   * @returns {void} Nothing.
   */
  [createReadlineInterface]() {
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
      // generate password hash
      this[genHash](pw);
      // close readline interface
      this.rlInterface.close();
    });
  }

  /**
   * @method
   * @name genHash
   * @summary Generate Hash
   * @description Generate Password Hash.
   * @param {string} pw Password to be entered.
   * @returns {void} Nothing.
   */
  [genHash](pw) {
    // generate salt using bcrypt
    bcrypt
      .genSalt(10)
      .then(salt => {
        // generate password hash using generated salt
        bcrypt.hash(pw, salt, (err, hash) => {
          // check for errors
          if (err) console.log(err);
          // output hashed password
          console.log(`Hashed password: ${hash}`);
        });
      })
      .catch(err => console.log(err));
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
