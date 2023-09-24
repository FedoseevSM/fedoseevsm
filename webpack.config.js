const path = require('path');

module.exports = {
    // watch: true,
    mode: 'development',
    entry: './src/main.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
		minimize: false
	},
    resolve: {
        alias: {
          '@app': path.resolve(__dirname, 'src/app/index.js'),
          '@features': path.resolve(__dirname, 'src/features/index.js'),
          '@pages': path.resolve(__dirname, 'src/pages/index.js'),
          '@widgets': path.resolve(__dirname, 'src/widgets/index.js'),
          '@widgets': path.resolve(__dirname, 'src/widgets/index.js'),
          '@widgets/body': path.resolve(__dirname, 'src/widgets/body/index.js'),
          '@widgets/header': path.resolve(__dirname, 'src/widgets/header/index.js'),
          '@entities/screen': path.resolve(__dirname, 'src/entities/screen/index.js'),
          '@shared/ui': path.resolve(__dirname, 'src/shared/ui/index.js'),
          '@shared/lib/hooks': path.resolve(__dirname, 'src/shared/lib/hooks/index.js'),
          '@shared/config': path.resolve(__dirname, 'src/shared/config/index.js'),
          'react-router-dom': path.resolve(__dirname, 'lib/@remix-run/react-router-dom/react-router-dom.production.min.js'),
          'react-router': path.resolve(__dirname, 'lib/@remix-run/react-router/react-router.production.min.js'),
          '@remix-run/router': path.resolve(__dirname, 'lib/@remix-run/router/remix-run.router.min.js'),
          'splitting': path.resolve(__dirname, 'lib/splitting/splitting.min.js'),
          'react': path.resolve(__dirname, 'lib/react/react.production.min.js'),
          'react-dom': path.resolve(__dirname, 'lib/react/react-dom.production.min.js'),
          'antd': path.resolve(__dirname, 'lib/antd/antd.min.js'),
          'dayjs': path.resolve(__dirname, 'lib/dayjs/dayjs.min.js'),
          '@ant-design/icons': path.resolve(__dirname, 'lib/@ant-design/icons/index.umd.min.js'),
        },
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
};