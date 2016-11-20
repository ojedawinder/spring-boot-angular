// include the required packages. 
var gulp = require('gulp');
var stylus = require('gulp-stylus');
 
 
// include, if you want to work with sourcemaps 
var sourcemaps = require('gulp-sourcemaps');
 
// Get one .styl file and render 
gulp.task('one', function () {
  return gulp.src('./app/stylus/one.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/app/css/build'));
});
 
// Options 
// Options compress 
gulp.task('compress', function () {
  return gulp.src('./app/stylus/compressed.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('/dist/app/css/build'));
});
 
  
// Default gulp task to run 
gulp.task('default', ['one', 'compress']);
 