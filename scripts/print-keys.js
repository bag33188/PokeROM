const yaml = require('js-yaml');
const fs = require('fs');

/**
 * @class
 * @name PrintKeys
 */
class PrintKeys {
  /**
   * @method
   * @static
   * @name readFile
   * @summary Read File
   * @description Read keys file.
   * @returns {string} Keys text.
   */
  static readFile() {
    let file = null;
    try {
      file = fs.readFileSync('../.keys.yml', 'utf8');
    } catch (e) {
      file = fs.readFileSync('./.keys.yml', 'utf8');
    }
    return yaml.safeLoad(file);
  }

  /**
   * @method
   * @static
   * @name personalAccessTokens
   * @summary Personal Access Tokens
   * @description Get personal access tokens.
   * @param {boolean} showHeader Print out keys heading.
   * @returns {string} Personal access token.
   */
  static personalAccessTokens(showHeader = true) {
    const doc = PrintKeys.readFile();
    const parts = ['Keys', 'Personal Access Tokens'];
    let personalAccessTokensStr = '';
    const { personalAccessTokens } = doc.keys;
    personalAccessTokens.forEach((personalAccessToken, index) => {
      const key = Object.keys(personalAccessToken)[0];
      personalAccessTokensStr += `${(index + 1).toString()}. ${key}: ${
        personalAccessToken[key]
      }\n`;
    });
    const header = `${parts[0]}\n${'='.repeat(parts[0].length)}\n\n`;
    return `${showHeader ? header : ''}${parts[1]}\n${'-'.repeat(
      parts[1].length
    )}\n${personalAccessTokensStr}\n`;
  }

  /**
   * @method
   * @static
   * @name deployKeys
   * @summary Deploy Keys
   * @description Get deploy keys.
   * @param {boolean} showHeader Print out keys heading.
   * @returns {string} Deploy keys.
   */
  static deployKeys(showHeader = true) {
    const doc = PrintKeys.readFile();
    const parts = ['Keys', 'Deploy Keys'];
    let deployKeysStr = '';
    const { deployKeys } = doc.keys;
    deployKeys.forEach((deployKey, index) => {
      const key = Object.keys(deployKey)[0];
      deployKeysStr += `${(index + 1).toString()}. ${key}:\nPublic:\n${
        deployKey[key].public
      }\nPrivate:\n${deployKey[key].private}\n`;
    });
    const header = `${parts[0]}\n${'='.repeat(parts[0].length)}\n\n`;
    return `${showHeader ? header : ''}${parts[1]}\n${'-'.repeat(
      parts[1].length
    )}\n${deployKeysStr}\n`;
  }

  /**
   * @method
   * @static
   * @name all
   * @summary All Keys
   * @description Get all keys.
   * @returns {string} All keys.
   */
  static all() {
    const personalAccessTokens = PrintKeys.personalAccessTokens(true);
    const deployKeys = PrintKeys.deployKeys(false);
    return personalAccessTokens + deployKeys;
  }
}

/**
 * @function
 * @name init
 * @summary Initiate functionality.
 * @description Initiation function.
 * @returns {void} Nothing.
 */
function init() {
  const keys = PrintKeys.all();
  console.log(keys);
}

init();
