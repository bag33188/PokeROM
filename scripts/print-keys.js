const yaml = require('js-yaml');
const fs = require('fs');

/**
 * @function
 * @name printKeys
 * @summary Print Keys
 * @description Prints the server's keys.
 * @returns {string}
 */
function printKeys() {
  let file = null;
  try {
    file = fs.readFileSync('./.keys.yml', 'utf8');
  } catch (e) {
    file = fs.readFileSync('../.keys.yml', 'utf8');
  }
  const doc = yaml.safeLoad(file);
  const parts = ['Keys', 'Personal Access Tokens', 'Deploy Keys'];
  let personalAccessTokensStr = '';
  let deployKeysStr = '';
  const { personalAccessTokens, deployKeys } = doc.keys;
  personalAccessTokens.forEach((personalAccessToken, i) => {
    const key = Object.keys(personalAccessToken)[0];
    personalAccessTokensStr += `${(i + 1).toString()}. ${key}: ${
      personalAccessToken[key]
    }\n`;
  });
  deployKeys.forEach((deployKey, i) => {
    const key = Object.keys(deployKey)[0];
    deployKeysStr += `${(i + 1).toString()}. ${key}:\nPublic:\n${
      deployKey[key].public
    }\nPrivate:\n${deployKey[key].private}\n`;
  });
  const keysStr = `${parts[0]}\n${'='.repeat(parts[0].length)}\n\n${
    parts[1]
  }\n${'-'.repeat(parts[1].length)}\n${personalAccessTokensStr}\n\n${
    parts[2]
  }\n${'-'.repeat(parts[2].length)}\n${deployKeysStr}\n`;
  console.log(keysStr);
  return keysStr;
}

printKeys();
