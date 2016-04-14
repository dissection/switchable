var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    return gulp.src("./jQuery.switchable.js")
        .pipe(rename({basename: "switchable",suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});
