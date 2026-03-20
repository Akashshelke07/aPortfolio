const fs = require('fs');
const path = require('path');

const srcDir = 'd:/Portfolio/src';
const assetsDir = path.join(srcDir, 'assets');
const srcFile = path.join(srcDir, 'transparent_gitgif.gif');
const targetFile = path.join(assetsDir, 'hero-animation.gif');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
  console.log('Created assets directory');
}

if (fs.existsSync(srcFile)) {
  fs.renameSync(srcFile, targetFile);
  console.log('Moved and renamed GIF to assets/hero-animation.gif');
} else {
  console.log('Source GIF not found at ' + srcFile);
}
