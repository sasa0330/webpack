//ここから追加
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
//ここまで追加

module.exports = {
    entry: {
        'bundle': './src/js/index.js',
        'bundle': './src/css/style.css',
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    mode: 'development',
    mode: 'production',
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`, 　ここを追加することでjsのminifyの設定を維持しつつcssをminifyできる（スプレッド演算子のイメージ）。
            new CssMinimizerPlugin(),
        ],
    },
    //ここから追加
    plugins: [
        new MiniCssExtractPlugin()
    ]
    //ここまで追加
    , module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        //ここから変更（style-loaderから変更）
                        loader: MiniCssExtractPlugin.loader,
                        //ここまで変更
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
}