const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { BUILD_DIRECTORY, PROJECT_ROOT } = require('./constants');

//the clean options to use
const cleanOptions = {
    verbose: true,
    root: PROJECT_ROOT,
    cleanOnceBeforeBuildPatterns: BUILD_DIRECTORY,
};


module.exports = (env) => {
    
    console.log('testtext', env);
    return {
        mode: 'none',
        devtool: false,
        output: {
            path: __dirname,
            filename:  '../../dist'
        },
        plugins: [
            //Каждый плагин - это конструктор
            new HtmlWebpackPlugin({
                template:'static/template.html',
                title: 'Изучаем вебпак',
                favicon: './static/favicon.ico',
            }), 
            new CleanWebpackPlugin(cleanOptions), //[BUILD_DIRECTORY], cleanOptions
        ],
    };
};