const fs = require("fs");

const configSource = `${__dirname}/../../config.json`; 

let data = null; 

if (data === null) {
    const file = fs.readFileSync(configSource, "utf-8");
    data = JSON.parse(file); 
    console.log(data); 
};

function getSection(section) {
    if (!data[section])
        throw `Configuration section ${section} does not exist!`;
    return data[section];
};


module.exports = {
    getSection
};

