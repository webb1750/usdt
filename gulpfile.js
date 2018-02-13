// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
    gulp.src('scss/usdt.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
      .pipe(gulp.dest('css'));
   });
gulp.task('default', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass'], ['minify-css']);
});
