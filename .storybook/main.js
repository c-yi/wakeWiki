const path = require("path");
module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        '@storybook/addon-storysource',
    ],

    webpackFinal: async (config, {configType}) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.less$/,
            loaders: [
                'style-loader',
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                        },
                    },
                },
            ],
            include: [path.resolve(__dirname, '../src'), /[\\/]node_modules[\\/].*antd/],
        });

       /* config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [require.resolve('babel-preset-react-app')],
                    },
                },
            ],
        }); */
        // Return the altered config
        return config;
    },
    "framework": "@storybook/react"
}