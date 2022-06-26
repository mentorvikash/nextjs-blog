// let oneDim = ['raj', 'vikash', 'rajat', 'shobah', 'divya']
// let twoDim = [['raj', 'vikash'], ['rajat', 'shobah'], ['divya', 'moti']]
// let mulDim =[['raj', [ 'male', '26', 'cricket']],['vikash',[ 'male', '24', 'badminton']],
// ['rajat', [ 'male', '35', 'running']],['shobah', [ 'female', '35', 'planting']],
// ['divya', [ 'female', '12', 'ludo']],['moti', [ 'female', '45', 'kho-kho']]]

// Javascript JOIN SYNTEX: array.join(separator)

// let oneDim = ['raj', 'vikash', 'rajat', 'shobah', 'divya']
// console.log(oneDim);
// // Output - [ 'raj', 'vikash', 'rajat', 'shobah', 'divya' ]

// let newJoin = oneDim.join()
// console.log(newJoin);
// // Output - raj,vikash,rajat,shobah,divya
// newJoin = oneDim.join('')
// console.log(newJoin);
// // Output - rajvikashrajatshobahdivya
// newJoin = oneDim.join('-')
// console.log(newJoin);
// // Output - raj-vikash-rajat-shobah-divya
// console.log(oneDim[0]);


// Here are getting no of argument and apply the join method to them
// function f(a, b, c) {
//     const s = Array.prototype.join.call(arguments);
//     console.log(s); // '1,a,true'
// }
// f(1, 'join', 'thisisme', 'hellow')

// The process.cwd() method is an inbuilt application programming interface of the process module which is used to get the current working directory of the node.js process. Syntax:
// This method does not accept any parameters.
// eturns a string specifying the current working directory of the node.js process

// Include process module
// const process = require('process');

// Include path module
// const path = require('path');
// const util = require('util');
// const postsDirectory = path.join(process.cwd(), 'posts');


// Printing current directory
// console.log(`Current working directory: ,
//     ${process.cwd()},  and our path is: ${util.inspect(path)}`);
// console.log(`postsDirectory: ${postsDirectory}`);
// console.log(`pathDir: ${path.join}`);

// fs.readdirSync() method
// synchronously read the contents of a given directory
// returns an array with all the file names or objects in the directory
// SYNTEX: fs.readdirSync( path, options )
// path could be String, Buffer or URL.

// Import the filesystem module
// const fs = require('fs');
// const path = require('path');

// filenames = fs.readdirSync(__dirname);

// console.log("\nCurrent directory filenames:", filenames);
// filenames.forEach(file => {
//     console.log(file);
// });

// fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });
  
// console.log("\nCurrent directory files:");
// fileObjs.forEach(file => {
//   console.log(file);
// });

// // This example uses fs.readdirSync() method to return only the filenames with the “.js” extension.
// files = fs.readdirSync(__dirname);

// console.log("\Filenames with the .js extension:");
// files.forEach(file => {
//   if (path.extname(file) == ".js")
//     console.log(file);
// })

