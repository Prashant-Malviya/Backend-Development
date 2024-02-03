// step1: create a folder
// step2: move into that folder
// step3: npm init -y
// step4: open folder using VSCode
// step5: npm i express
// step6: create server.js

const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("server started at port no. 3000")
});

