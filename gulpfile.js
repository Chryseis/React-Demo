/**
 * Created by AllenFeng on 2016/7/25.
 */
var gulp=require('gulp'),
    watch=require('gulp-watch'),
    webpack=require('webpack-stream'),
    config=require('./webpack.config');

gulp.task('default',function () {
    
});

gulp.task('watch',function () {
    gulp.watch('app/component/*.js',['webpack'])
})

gulp.task('webpack',function () {
    return gulp.src('app/main.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('assets/'))
})