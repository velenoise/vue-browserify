/* vue.config.js */
let config = {};

if (process.env.NODE_ENV === 'production') {
    config = {
        customCompilers: {
            scss: function (content, cb, compiler, filePath) {
                cb(null, content);
            }
        }
    }
}

module.exports = config;