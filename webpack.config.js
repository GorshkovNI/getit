const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/main.js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@view': path.resolve(__dirname, 'src/views'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@entities': path.resolve(__dirname, 'src/entities'),
        }
    },

    externals: ['.js', '.ts', '.jsx', '.tsx'],
    module: {
        rules: [
            {
                test: /\.(ts|js)x$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
            //         "css-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 postcssOptions: {
            //                     plugins: [
            //                         [
            //                             "postcss-preset-env",
            //                             {
            //                                 // Options
            //                             },
            //                         ],
            //                     ],
            //                 },
            //             },
            //         },
            //         "sass-loader",
            //     ],
            // },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ForkTsCheckerWebpackPlugin()
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        historyApiFallback: true,
    },

    devtool: 'source-map'
}