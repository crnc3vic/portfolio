const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = require(packageJsonPath);
const homepage = packageJson.homepage;

if (homepage) {
  const parsedUrl = new URL(homepage);
  const domain = parsedUrl.hostname;
  
  const buildDir = path.resolve(__dirname, '../build');
  
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }
  
  fs.writeFileSync(path.join(buildDir, 'CNAME'), domain);
} else {
  console.error('Homepage is not defined in package.json!');
}
