const fs = require('fs');
const path = require('path');

const componentsDir = 'd:/Knoweb/SANOTA/frontend/src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { search: /text-3xl sm:text-5xl/g, replace: 'text-3xl sm:text-4xl' },
  { search: /text-4xl sm:text-6xl/g, replace: 'text-3xl sm:text-5xl' },
  { search: /text-3xl sm:text-4xl/g, replace: 'text-2xl sm:text-3xl' },
  { search: /text-\[17px\]/g, replace: 'text-[15.5px]' },
  { search: /text-\[15px\]/g, replace: 'text-[14px]' },
  { search: /text-\[14\.5px\]/g, replace: 'text-[13.5px]' },
  { search: /text-\[19px\]/g, replace: 'text-[17px]' },
  { search: /text-xl/g, replace: 'text-lg' }
];

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  
  replacements.forEach(({ search, replace }) => {
    newContent = newContent.replace(search, replace);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
