module.exports = function(grunt) {
// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// Configure Grunt
grunt.initConfig({

// Grunt express - our webserver
express: {
    all: {
        options: {
            //bases: ['C:\Users\whuey\Desktop\bootstrap-3.2.0-dist'],
            bases: [__dirname],
            port: 9000,
            hostname: "0.0.0.0",
            livereload: true
        }
    }
},

// grunt-watch will monitor the projects files
// https://github.com/gruntjs/grunt-contrib-watch
watch: {
    all: {
            files: 'index.html',
            options: {
                livereload: true
        }
    }
},

// grunt-open will open your browser at the project's URL
// https://www.npmjs.org/package/grunt-open
open: {
    all: {
        path: 'http://localhost:<%= express.all.options.port%>'
    }
}
});

// Creates the `server` task
grunt.registerTask('server', [
    'express',
    'open',
    'watch'
    ]);
};