var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    scsslint = require('gulp-scss-lint');
var configPath = require('../config-path');
var browser = require("browser-sync");

function taskScsslint(pathSrc) {
    return gulp.src(pathSrc)
        .pipe(plumber())
        .pipe(scsslint({'config': './gulp/scss-lint.yml'}))
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(browser.reload({stream: true}));
}

gulp.task('scsslint-pc', function () {
    taskScsslint(
        [
            configPath.pc.style.src,
            configPath.pc.style.lintExcluding
        ]
    );
});

gulp.task('scsslint-sp', function () {
    taskScsslint(
        [
            configPath.sp.style.src,
            configPath.sp.style.lintExcluding
        ]
    );
});