var gulp = require('gulp');
var requireDir = require('require-dir');
var configPath = require('./gulp/config-path');

requireDir('./gulp/tasks', { recursive: true });

//watch pc
gulp.task('default',['ejs-pc','scsslint-pc','style-pc','script-pc','image-pc','server-pc'], function() {
    gulp.watch(configPath.pc.html.src,['ejs-pc']);
    gulp.watch(configPath.pc.style.src,['scsslint-pc']);
    gulp.watch(configPath.pc.style.src,['style-pc']);
    gulp.watch(configPath.pc.script.src,['script-pc']);
    gulp.watch(configPath.pc.image.src,['image-pc']);
});

//watch sp
gulp.task('sp',['ejs-sp','scsslint-sp','style-sp','script-sp','image-sp','server-sp'], function() {
    gulp.watch(configPath.sp.html.src,['ejs-sp']);
    gulp.watch(configPath.sp.style.src,['scsslint-sp']);
    gulp.watch(configPath.sp.style.src,['style-sp']);
    gulp.watch(configPath.sp.script.src,['script-sp']);
    gulp.watch(configPath.sp.image.src,['image-sp']);
});