/**
 * gulp的主文件，用于注册任务
 * @Author: iceStone
 * @Date:   2016-01-26 17:07:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-26 17:56:34
 */

'use strict';

// 此处代码都是由NODE执行
// 载入Gulp模块
var gulp = require('gulp');
//var less = require('gulp-less');

// 注册一个任务
/*
gulp.task('copy', function() {
  // 当gulp执行这个say任务时会自动执行该函数
  // console.log('hello world');
  // 合并 压缩之类的操作
  // 复制文件
  // gulo.src取一个文件
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/')); // 将此处需要的操作传递进去
});*/


gulp.task('dist', function() {
  // src/index.html
  //gulp.watch('src/index.html', ['copy']);
  gulp.watch('src/*.css', ['style']);
});

var cssnano = require('gulp-cssnano');

gulp.task('style', function() {
  gulp.src('src/*.css')
    //.pipe(less()) // 该环节过后就是CSS
    .pipe(cssnano())
    .pipe(gulp.dest('css/'));
});
/*
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});*/
