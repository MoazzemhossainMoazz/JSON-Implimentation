const data = require("./friends_data.json");
//Data Access
//console.log(data);

//console.log(data.friends[0]);
//console.log(data.friends[0].name);

//data.friends[0].name = "Zem";
//console.log(data.friends[0].name);




//Data Modify
delete data.friends[0].name;
console.log(data);