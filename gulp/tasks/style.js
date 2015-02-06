var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    sass = require("gulp-sass"),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    frontnote = require("gulp-frontnote"),
    gulpif = require('gulp-if'),
    cache = require('gulp-cached');
var configPath = require('../config-path');
var browser = require("browser-sync");
var argv = require('yargs').argv;

var min = !!(argv.min);

function taskStyle(pathSrc,pathDest,guidePath) {
    return gulp.src(pathSrc)
        .pipe(cache('style'))
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(frontnote({
            overview: './README.md',
            out: './style-guide' + guidePath,
            css: '../../app' + guidePath +'/public/css/style.css',
            script: [
                '../../app' + guidePath +'/public/js/lib/modernizer/modernizer.js',
                '../../app' + guidePath +'/public/js/app.js',
                '../../app' + guidePath +'/public/js/library.js'
            ],
            clean: true
        }))
        .pipe(sass({
            style:'nested',
            compass : true,
            "sourcemap=none": true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpif(min,minifyCSS()))
        .pipe(gulp.dest(pathDest))
        .pipe(browser.reload({stream: true}));
}

gulp.task('style-pc', function () {
    taskStyle(
        configPath.pc.style.src,
        configPath.pc.style.dest,
        '/pc'
    );
});

gulp.task('style-sp', function () {
    taskStyle(
        configPath.sp.style.src,
        configPath.sp.style.dest,
        '/sp'
    );
});