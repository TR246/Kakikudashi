"use strict";

const fs = require("fs");

fs.readdir(".", (err, files) => {
    if(err) throw err;
    files
        .filter(file => fs.statSync(file).isFile() && /.*\.svg/.test(file))
        .forEach(file => fs.writeFile(file, fs.readFileSync(file, "UTF-8").replace(/#616161/g, "#000000")));
});