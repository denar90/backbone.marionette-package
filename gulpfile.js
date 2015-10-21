var gulp = require('gulp');
var webserver = require('gulp-webserver');
var requirejsOptimize = require('gulp-requirejs-optimize');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var map = require('map-stream');

var exitOnJshintError = map(function(file, cb) {
	if (!file.jshint.success) {
		console.error('jshint failed');
		process.exit(1);
	}
});

gulp.task('lint', function(callback) {
	return gulp.src('app/**/*.js', callback)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(exitOnJshintError);
});

gulp.task("scripts", function() {
	return gulp.src("app/main.js")
		.pipe(requirejsOptimize({
			optimize: 'none',
			mainConfigFile: 'app/config.js'
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('server', function() {
	gulp.watch('app/**/*.js', ['build']);
	return gulp.src('')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: '/index.html'
		}));
});

gulp.task('build', function(callback) {
	runSequence('lint', 'scripts', callback);
});
