var webpack=require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
      // path:__dirname+'/dist',//打开后webpack-dev-server处理后入口HTML找不到bundle文件
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react' ,'stage-0']
          }
        },
        { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, 
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'url-loader?limit=50000&name=imgs/[name].[ext]',
        }
      ]
    },
    devServer:{
      historyApiFallback: true,
      // inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
    plugins:[
      // new webpack.HotModuleReplacementPlugin()
      // new htmlWebpackPlugin({
      //   template: './index.html',
      // })
   ]
  }