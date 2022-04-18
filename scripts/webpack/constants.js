//Core
const { resolve } = require('path');


exports.PROJECT_ROOT = resolve(__dirname, '../..'); 

//the path(s) that should be cleaned
// export const pathsToClean = [ 'dist' ];
exports.BUILD_DIRECTORY = resolve(__dirname, '../../dist'); //a variable that point to our dist