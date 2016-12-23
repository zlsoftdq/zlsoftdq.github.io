/**
 * gulp的主文件，用于注册任务
 * @Author: zlsoftdq
 * @Date:   2016-12-20 17:07:26
 * @Last Modified by:   zlsoftdq
 * @Last Modified time: 2016-12-23 17:56:34
 */

'use strict';

// 此处代码都是由NODE执行
// 载入Gulp模块
var gulp = require('gulp');
var uglify= require('gulp-uglify');
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
  gulp.watch('src/*.css', ['compress_css']);
  gulp.watch('src/*.js', ['compress_js']);
});

var cssnano = require('gulp-cssnano');

gulp.task('compress_css', function() {
  gulp.src('src/*.css')
    //.pipe(less()) // 该环节过后就是CSS
    .pipe(cssnano())
    .pipe(gulp.dest('css/'));
});
gulp.task('compress_js', function() {
  gulp.src('src/*.js')
    //.pipe(less()) // 该环节过后就是CSS
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('start', [ 'compress_css', 'compress_js' ,'dist', 'serve' ]);
