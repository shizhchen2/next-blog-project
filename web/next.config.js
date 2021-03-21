const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withImages = require('next-images')
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {}
}
 
module.exports = withLess(withCss(withImages({
    webpack(config, options) {
        return config
    }
})))
