var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task('default', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));
});