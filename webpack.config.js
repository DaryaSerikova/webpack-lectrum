const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//the path(s) that should be cleaned
const pathsToClean = [ 'dist' ];

//the clean options to use
const cleanOptions = {
    verbose: true,
};


module.exports = (env) => {
    
    console.log('testtext', env);
    return {
        mode: 'none',
        devtool: false,
        plugins: [
            //Каждый плагин - это конструктор
            new HtmlWebpackPlugin({
                template:'static/template.html',
                title: 'Изучаем вебпак',
                favicon: './static/favicon.ico',
            }), 
            new CleanWebpackPlugin(pathsToClean, cleanOptions),

        ],
    };
};