const yaml = require('js-yaml');
const fs = require('fs');

class PrintKeys {
  static readFile() {
    let file = null;
    try {
      file = fs.readFileSync('../.keys.yml', 'utf8');
    } catch (e) {
      file = fs.readFileSync('./.keys.yml', 'utf8');
    }
    return yaml.safeLoad(file);
  }

  static personalAccessTokens(showHeader = true) {
    const doc = PrintKeys.readFile();
    const parts = ['Keys', 'Personal Access Tokens'];
    let personalAccessTokensStr = '';
    const { personalAccessTokens } = doc.keys;
    personalAccessTokens.forEach((personalAccessToken, i) => {
      const key = Object.keys(personalAccessToken)[0];
      personalAccessTokensStr += `${(i + 1).toString()}. ${key}: ${
        personalAccessToken[key]
      }\n`;
    });
    const header = `${parts[0]}\n${'='.repeat(parts[0].length)}\n\n`;
    return `${showHeader ? header : ''}${parts[1]}\n${'-'.repeat(
      parts[1].length
    )}\n${personalAccessTokensStr}\n`;
  }

  static deployKeys(showHeader = true) {
    const doc = PrintKeys.readFile();
    const parts = ['Keys', 'Deploy Keys'];
    let deployKeysStr = '';
    const { deployKeys } = doc.keys;
    deployKeys.forEach((deployKey, i) => {
      const key = Object.keys(deployKey)[0];
      deployKeysStr += `${(i + 1).toString()}. ${key}:\nPublic:\n${
        deployKey[key].public
      }\nPrivate:\n${deployKey[key].private}\n`;
    });
    const header = `${parts[0]}\n${'='.repeat(parts[0].length)}\n\n`;
    return `${showHeader ? header : ''}${parts[1]}\n${'-'.repeat(
      parts[1].length
    )}\n${deployKeysStr}\n`;
  }

  static all() {
    const personalAccessTokens = PrintKeys.personalAccessTokens(true);
    const deployKeys = PrintKeys.deployKeys(false);
    return personalAccessTokens + deployKeys;
  }
}

function init() {
  const keys = PrintKeys.all();
  console.log(keys);
}

init();
