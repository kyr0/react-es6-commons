var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var path = require('path');

var srcPath = 'lib/**/*.js';

// transpiling ES6+ to ES5
gulp.task('babel', function () {

    return gulp.src(srcPath)
        .pipe(sourcemaps.init({
            inline: true
        }))
        .pipe(babel({
            sourceMaps: 'inline'
        }))
        .pipe(sourcemaps.write('.', {
            sourceRoot: path.join(__dirname, 'src')
        }))
        .pipe(gulp.dest('gen'));
});

gulp.task('watch', function() {
    gulp.watch(srcPath, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
