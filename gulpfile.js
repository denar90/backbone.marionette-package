var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

var requirejsOptimize = require('gulp-requirejs-optimize');

var bower = require('gulp-bower');
 
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task("scripts", function () {
  var path = '../vendor/';

  return gulp.src("app/**/*.js")
    // Traces all modules and outputs them in the correct order.
    .pipe(requirejsOptimize({
		paths : {
			underscore : path + 'underscore/underscore',
			backbone   : path + 'backbone/backbone',
			marionette : path + 'backbone.marionette/lib/backbone.marionette',
			jquery     : path + 'jquery/dist/jquery',
			handlebars : path + 'handlebars/dist/handlebars',
			text       : path + 'requirejs-text/text'
		},
		shim : {
			underscore: {
				exports : '_'
			},
			backbone: {
				exports: 'Backbone',
				deps: ['jquery','underscore']
			},
			marionette: {
				exports : 'Backbone.Marionette',
				deps : ['backbone']
			}
		},
		deps : ['jquery','underscore']
    }))
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist"));

});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: false
    }));
});