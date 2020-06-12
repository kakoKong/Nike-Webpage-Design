const fs = require('fs');
fs.readFile('./red.txt', function(nani, datta){
    if (nani){console.log("error na ka"); return;};
    console.log(datta);
    console.log(datta.toString());
})
console.log("Yep")