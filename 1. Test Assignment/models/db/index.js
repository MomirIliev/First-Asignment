const mongoose = require("mongoose"); 

const config = require("../config"); 

const { username, password } = config.getSection("developement");

const uri = `mongodb+srv://${username}:${password}@mydatabase.r09zmpx.mongodb.net/sixthHomeworkDB?retryWrites=true&w=majority`;

(async function connect() {
    try {
        await mongoose.connect(uri); 
    } catch (error) {
        console.log(error); 
    }
})();

