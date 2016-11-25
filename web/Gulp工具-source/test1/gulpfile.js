var gulp = require('gulp');

//添加一个任务
gulp.task('hello', function () {
    console.log('test');
});

//创建一个默认得任务，第二个参数是一个数组
gulp.task('default', ['hello'], function () {
    console.log('default');
});