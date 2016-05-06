'use strict';
var gulp = require('gulp')
var connect = require('gulp-connect');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');

var config = {
	js: 'app/components/*.js',
	html: 'app/*.html',
	css: 'app/*.css',
	indexPath: 'app/index.html',
	buildPath: 'dist'
};

gulp.task('serve', function(){
	connect.server({
		root: 'app',
		livereload: true	
	});
});

gulp.task('minify', ['useref'], function(){
	return gulp.src(['dist/app/app.js', 'dist/app/vendor.js'])
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest(config.buildPath + '/app'));
});

gulp.task('useref', ['copy-html'], function(){
	return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
	del(config.buildPath);	
});

gulp.task('copy-html', function(){
	return gulp.src(config.html)
		.pipe(gulp.dest(config.buildPath));
});

gulp.task('build', ['minify']);