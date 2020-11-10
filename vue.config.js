module.exports = {
    configureWebpack: {
        resolve: {
            extensions:[],  //后缀名可以不写了。
            alias: {
                 // '@': 'src', 内部已经配过.store和router不用额外配置，只在main中引入一次
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network':'@/network'
            }
        }
    }
}