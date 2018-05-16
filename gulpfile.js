// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var livingcss = require('gulp-livingcss');

gulp.task('sass', function() {
    gulp.src('scss/usdt.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(gulp.dest('styleguide'))
});
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('styleguide', function() {
    gulp.src('styleguide/usdt.css')
    .pipe(livingcss())
    .pipe(gulp.dest('styleguide'))
});
gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
      .pipe(gulp.dest('css'));
   });
gulp.task('default', ['sass', 'styleguide', 'minify-css'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});