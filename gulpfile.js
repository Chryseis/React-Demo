/**
 * Created by AllenFeng on 2016/7/25.
 */
var gulp=require('gulp'),
    watch=require('gulp-watch'),
    webpackStream=require('webpack-stream'),
    webpack=require('webpack'),
    webpackDevServer=require('webpack-dev-server'),
    config=require('./webpack.config');

gulp.task('default',function () {
        gulp.run('webpack-dev-server','watch');
});

gulp.task('watch',function () {
    gulp.watch('app/component/*.js',['webpack'])
});

gulp.task('webpack',function () {
    return gulp.src('app/main.js')
        .pipe(webpackStream(config))
        .pipe(gulp.dest('assets/'))
});

gulp.task('webpack-dev-server',function () {
    new webpackDevServer(webpack(config),{
        publicPath:config.output.path,
        historyApiFallback:true,
        inline:true
    }).listen(8000,'127.0.0.1',function (err,result) {
        if(err){
            console.log(err);
        }
        console.log('Listening at localhost:8000')
    })
});