'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


var stylesheets = {};
stylesheets.input = [ './src/scss/*.scss' ];
stylesheets.concat = [ './vendor/**/*.css' ];
stylesheets.watch = [ './src/scss/**/*.scss' ];
stylesheets.output = './dist/css';
stylesheets.options = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  includePaths: ['node_modules']
};

// Compile sass into CSS
gulp.task('sass', function() {

  // var vendorFiles = gulp.src(stylesheets.concat);

  // var localFiles = gulp.src('./src/scss/main.scss')
  //   .pipe(sass(stylesheets.options).on('error', sass.logError))
  //   .pipe(autoprefixer(autoprefixerOptions));

  // return es.concat(vendorFiles, localFiles)
  //   .pipe(concat('main.css'))
  //   .pipe(sourcemaps.write())
  //   .pipe(gulp.dest(stylesheets.output));

  return gulp.src(stylesheets.input)
    .pipe(sass(stylesheets.options).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(stylesheets.output));
});

gulp.task('default', function() {
  return gulp.src('.', { allowEmpty: true });
})
