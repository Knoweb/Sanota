const fs = require('fs');
const path = require('path');

const directories = [
  'd:/Knoweb/SANOTA/frontend/src/components',
  'd:/Knoweb/SANOTA/frontend/src/app'
];

function updateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all opaque or semi-transparent dark backgrounds with either transparent or very light glassmorphism
  // Let's target the specific colors
  let newContent = content
    // Replace section backgrounds with transparent
    .replace(/bg-\[#(050B14|0B1220|131C2E)\](?!\/)/g, 'bg-transparent')
    // Reduce opacity of already semi-transparent backgrounds to make them more see-through
    .replace(/bg-\[#0B1220\]\/[0-9]+/g, 'bg-[#0B1220]/20')
    .replace(/bg-\[#131C2E\]\/[0-9]+/g, 'bg-[#131C2E]/20')
    .replace(/bg-\[#050B14\]\/[0-9]+/g, 'bg-[#050B14]/20');
    
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      updateFile(fullPath);
    }
  }
}

directories.forEach(walkDir);
console.log('Done');
