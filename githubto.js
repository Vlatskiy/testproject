const pug = require('pug');
const fs  = require('fs');
const path = require('path');

fs.readdir('./views/pages/', (err, files) => {
  files.forEach(file => {
    let fn = pug.compileFile(`./views/pages/${file}`);
    let data = fs.readFileSync(`./views/pages/${file}`);
    let html = fn(data);
    fs.writeFileSync(`./public/${path.basename(file, '.pug')}.html`, html);
  });
});


