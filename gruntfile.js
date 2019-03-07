'use strict';
var _ = require('lodash'),
    config = require('config'),
    fileName = 'oobee';
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            mkdir: 'mkdir -p .tmp/.jscrambler && mkdir -p .tmp/.clone',
            clone: `for i in {1..95}; do cp .tmp/.jscrambler/${fileName}.js ".tmp/.clone/${fileName}.obfuscated-$i.js"; done`,
            jscrambler: 'node ./.bin/jscrambler.js'
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.option('force', true);
    grunt.registerTask('init', ['shell:mkdir']);
    grunt.registerTask('jscrambler', ['init', 'shell:clone', 'shell:jscrambler']);
};