const yaml = require('js-yaml');
const fs = require('fs');

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
  personalAccessTokens.forEach((pat, i) => {
    personalAccessTokensStr += `${(i + 1).toString()}. ${
      Object.keys(pat)[0]
    }: ${pat[Object.keys(pat)[0]]}\n`;
  });
  deployKeys.forEach((deployKey, i) => {
    deployKeysStr += `${(i + 1).toString()}. ${
      Object.keys(deployKey)[0]
    }:\nPublic:\n${deployKey[Object.keys(deployKey)[0]].public}\nPrivate:\n${
      deployKey[Object.keys(deployKey)[0]].private
    }\n`;
  });
  const keys = `${parts[0]}\n${'='.repeat(parts[0].length)}\n\n${
    parts[1]
  }\n${'-'.repeat(parts[1].length)}\n${personalAccessTokensStr}\n\n${
    parts[2]
  }\n${'-'.repeat(parts[2].length)}\n${deployKeysStr}\n`;
  console.log(keys);
  return keys;
}

printKeys();
