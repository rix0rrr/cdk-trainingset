const cdk_from_cfn = require('cdk-from-cfn');
const fs = require('fs');
const path = require('path');

try {
  const template = fs.readFileSync(process.argv[2], { encoding: 'utf-8' });
  console.log(cdk_from_cfn.transmute(template, 'typescript', process.argv[3]));
} catch (e) {
  console.error(path.basename(process.argv[2]), ':', e.message);
  process.exitCode = 1;
}