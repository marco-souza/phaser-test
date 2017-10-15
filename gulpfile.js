const
    gulp = require("gulp"),
    connect = require("gulp-connect")

/** Connect to a Web Serer */
gulp.task("connect", () => {
    const serverOpts = {
        root: 'dist',
        livereload: true
    }
    connect.server(serverOpts);
})

/** html reload */
gulp.task('html', () => {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
});

/** Watch */
gulp.task('watch', function () {
    gulp.watch(['./dist/*.html'], ['html']);
});

/** Default */
gulp.task('default', ['connect', 'watch']);