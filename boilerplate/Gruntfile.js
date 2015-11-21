module.exports = function(grunt) {

    grunt.initConfig({

        webpack: {
            app: {
                entry: "./app/App.js",
                output: {
                    path: '.',
                    filename: "public/app.js"
                },
                devtool: 'source-map',
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            loader: "babel-loader",
                            exclude: /node_modules/
                        }
                    ]
                },

                watch: true, // use webpacks watcher
                // You need to keep the grunt process alive

                keepalive: true, // don't finish the grunt task
                // Use this in combination with the watch option

                inline: true,

                failOnError: false
            }
        },

        compass: {
            dist: {
                options: {
                    watch: true,
                    basePath: '.',
                    config: 'sass/config.rb'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['webpack']);
    grunt.registerTask('sass', ['compass']);
};