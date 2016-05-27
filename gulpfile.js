'use strict';
var browserify = require('browserify'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    minhtml = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if');

var buildsrc, builddest, jsSources;

buildsrc = 'builds/dev/';
builddest = 'builds/production/';

jsSources = [
  buildsrc + 'js/app.js'
]

gulp.task('html', function(){
  gulp.src(buildsrc + '*.html')
    .pipe(minhtml())
    .pipe(gulp.dest(builddest));
});


gulp.task('js', function(){
  gulp.src(jsSources)
    .pipe(concat('app.js'))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest(builddest +'js'));
});


gulp.task('watch', function() {
  gulp.watch(buildsrc + '**/*.js', ['js']);
  gulp.watch(buildsrc + '**/*.css', ['css']);
  gulp.watch(buildsrc + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(buildsrc)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['webserver','watch']);