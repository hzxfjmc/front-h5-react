const CracoLessPlugin = require('craco-less');
 
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    style: {
        postcss: {
            mode: 'extends',
            loaderOptions: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        [
                            'postcss-pxtorem',
                            {
                                rootValue: 750/10, // 根元素字体大小
                                // propList: ['width', 'height']
                                propList: ['*']
                            },
                        ],
                    ],
                },
            },
        },
    },
};