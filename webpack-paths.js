const path = require('path');

module.exports = {
    appSrc: path.resolve(__dirname,'./src') + '/index.js',
    appDev: path.resolve(__dirname,'app/js'),
    appProd: path.resolve(__dirname, 'app/js')
};