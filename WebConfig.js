const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.export={
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules:[
            {
                text: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel;-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                      },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
      ],
resolve:{
        extensions:['.js', '.jsx'],
    },
};