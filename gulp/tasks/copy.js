var gulp = require('gulp'),
    ejs = require("gulp-ejs"),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");
var configPath = require('../config-path');
var browser = require("browser-sync");

function copyLib(pathSrc,pathDest) {
    return gulp.src(pathSrc)
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

gulp.task('copy-pc', function () {
    copyLib(
        configPath.pc.lib.src,
        configPath.pc.lib.dest
    );
});

gulp.task('copy-sp', function () {
    copyLib(
        configPath.sp.html.src,
        configPath.sp.html.dest
    );
});