//http://gulpjs.com/plugins/

//需要进行一些编译行为扩展，我们需要安装插件
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
//test1:编译sass
//-step1：#npm install gulp-sass --save-dev
//-step2: 在项目中使用gulpSass
gulp.task('buildSass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('dist/css'));
});

//test2:使用less
//-step1:#npm install gulp-less --save-dev
//-step2:
const gulpLess = require('gulp-less');
gulp.task('buildLess', function() {
    return gulp.src('./less/**/*.less')
        .pipe(gulpSass())
        .pipe(gulp.dest('./dist/css/'));
});


//test3:创建一个web服务器
//step1:#npm install gulp-connect --save-dev
const gulpConnect = require('gulp-connect');

gulp.task('connect', function() {
    gulpConnect.server({
        root: 'dist',
        livereload: true
    })
});
//step2：热加载
gulp.task('cp', function() {
    return gulp.src("./src/**/*.html").pipe(gulp.dest('./dist/')).pipe(gulpConnect.reload());
});
gulp.task('build-a-sass', function() {
    return gulp.src('./src/css/**/*.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('dist/css'))
        .pipe(gulpConnect.reload());
});
gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['cp', 'build-a-sass']);
});
gulp.task('reload-connect', function() {
    gulpConnect.server({
        root: 'dist',
        livereload: true
    })
});

gulp.task('default', ['reload-connect', 'watch'], function() {
});