// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('scss/usdt.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
});
gulp.task('default', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
})