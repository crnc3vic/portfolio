
const fs = require('fs');
const url = require('url');

const packageJson = require('../package.json');
const homepage = packageJson.homepage;

if (homepage) {
  const parsedUrl = new URL(homepage);
  const domain = parsedUrl.hostname;
  
  if (!fs.existsSync('../build')) {
    fs.mkdirSync('../build');
  }
  
  fs.writeFileSync('../build/CNAME', domain);
} else {
  console.error('Homepage is not defined in package.json!');
}
