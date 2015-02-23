var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    sass = require("gulp-sass"),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    frontnote = require("gulp-frontnote"),
    gulpif = require('gulp-if'),
    changed  = require('gulp-changed');
var configPath = require('../config-path');
var browser = require("browser-sync");
var argv = require('yargs').argv;

var min = !!(argv.min);

function taskStyle(pathSrc,pathDest,pathExcluding,guidePath) {
    return gulp.src(pathSrc)
        .pipe(changed(pathExcluding))
        .pipe(plumber())
        .pipe(notify("Found file: <%= file.relative %>!"))
        .pipe(frontnote({
            overview: './README.md',
            out: './style-guide' + guidePath,
            css: '../../app' + guidePath +'/public/css/style.css',
            script: [
                '../../app' + guidePath +'/public/lib/modernizer/modernizr.js',
                '../../app' + guidePath +'/public/js/library.js',
                '../../app' + guidePath +'/public/js/app.js'
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
        configPath.pc.style.lintExcluding[0],
        '/pc'
    );
});

gulp.task('style-sp', function () {
    taskStyle(
        configPath.sp.style.src,
        configPath.sp.style.dest,
        configPath.sp.style.lintExcluding,
        '/sp'
    );
});