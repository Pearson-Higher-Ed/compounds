const exec = require('./exec');
const readline = require('readline');
const path = require('path');

const deployPath = path.join(process.cwd(), 'www');
const currentBranch = exec('git rev-parse --abbrev-ref HEAD', true);

const stdin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

stdin.question(`Branch name (${currentBranch}): `, (branchName) => {
  branchName = branchName || currentBranch || '';
  branchName = branchName.toLowerCase();

  const domain = `pearson-compounds-${branchName}.surge.sh`;

  console.log(`Deploying ${deployPath} to ${domain}`);

  exec('npm run build-docs');
  exec(`surge -p ${deployPath} -d ${domain}`);

  stdin.close();
});
