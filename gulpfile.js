/**
 * Created by AllenFeng on 2016/7/25.
 */
var gulp=require('gulp'),
    watch=require('gulp-watch'),
    webpackStream=require('webpack-stream'),
    webpack=require('webpack'),
    webpackDevServer=require('webpack-dev-server'),
    config=require('./webpack.config'),
    configPublish=require('./webpack.publish.config');

gulp.task('default',function () {
   gulp.run('webpack-dev-server','watch');
});

gulp.task('watch',function () {
    gulp.watch('src/**/*.**',['webpack']);
});

gulp.task('webpack',function () {
    return gulp.src('src/app/main.js')
        .pipe(webpackStream(config))
        .pipe(gulp.dest('public/'))
});

gulp.task('webpack-publish',function () {
    return gulp.src('src/app/main.js')
        .pipe(webpackStream(configPublish))
        .pipe(gulp.dest('assets/'));
})

gulp.task('webpack-dev-server',function () {
    new webpackDevServer(webpack(config),{
        publicPath:config.output.publicPath,
        historyApiFallback:true,
        inline:true,
        contentBase:'src/'
    }).listen(8000,'127.0.0.1',function (err,result) {
        if(err){
            console.log(err);
        }
        console.log('Listening at localhost:8000')
    })
});