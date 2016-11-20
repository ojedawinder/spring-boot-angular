// include the required packages. 
var gulp = require('gulp');
var stylus = require('gulp-stylus');
 // include, if you want to work with sourcemaps 
var sourcemaps = require('gulp-sourcemaps');
 // include plug-ins
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var size = require('gulp-size');

// Get one .styl file and render 
gulp.task('stylus-to-css', function () {
  return gulp.src('./app/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/app/css/'));
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
 
// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './app/images/**/*',
      imgDst = '/dist/app/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './app/*.html',
      htmlDst = '/dist/app/build';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

gulp.task('scripts', function() {
  return gulp.src('./app/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/app/scripts/'));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src('dist/app/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/app/css/'));
});


// Default gulp task to run 
gulp.task('default', ['stylus-to-css', 'compress', 'imagemin', 'htmlpage','styles', 'scripts']);
 