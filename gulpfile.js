var gulp = require('gulp');
var webserver = require('gulp-webserver');
var requirejsOptimize = require('gulp-requirejs-optimize');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var merge = require('gulp-merge');
var run = require('gulp-run');

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

gulp.task("files", function() {
	var outputPath = 'dist';
	var cssSource = 'vendor/bootstrap/dist/css/bootstrap.min.css';
	var css = gulp.src(cssSource).pipe(gulp.dest(outputPath + '/css'));
	var js = gulp.src('app/main.js')
		.pipe(requirejsOptimize({
			optimize: 'none',
			mainConfigFile: 'app/config.js'
		}))
		.pipe(gulp.dest(outputPath + '/js'));

 	return merge(css, js);
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
	runSequence('lint', 'files', callback);
});

gulp.task('test', function(done) {
    var testem = require('testem');

    var testemOptions = {
        file: 'testem.json'
    };

    var t = new testem();

    t.startCI(testemOptions, done);
});