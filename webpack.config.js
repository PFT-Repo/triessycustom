const path = require('path');
const HtmlWenpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: '/src/index.js',
        output: {
            path: path.join(__dirname,'/dist'),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx?)$/,
                    exclude: /node_modules/,
                    use:    {
                        loader: 'babel-loader',
                        options:    {
                            presets: ['@babel/preset-react']
                        }
                    }
                }
            ]
        },
        plugins:[
            new HtmlWenpackPlugin({
                template: './src/index.html'
            })
        ]
}