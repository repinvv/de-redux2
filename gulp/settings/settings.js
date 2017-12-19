const buildPath = './build';

const src = 'src';
const testSrc = 'testSrc';
const settings = {
  srcPath: `./${src}`,
  testPath: `./${testSrc}`,
  buildPath,
  srcBuildPath: `${buildPath}/${src}`,
  testBuildPath: `${buildPath}/${testSrc}`
}

module.exports = settings;
