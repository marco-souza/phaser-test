/* global __dirname */
const
    config  = require("common-config"),
    gulp    = require("gulp"),
    pug     = require("gulp-pug"),
    connect = require("gulp-connect")

/** Connect to a Web Serer */
gulp.task("connect", () => {
    const serverOpts = {
        root: config.src.dist,
        livereload: true
    }
    connect.server(serverOpts);
})

/** pug reload */
gulp.task('pug', () => {
    console.log(config);
    return gulp.src(config.src.pug.path)
        .pipe(pug(config.src.pug.opts))
        .pipe(gulp.dest( config.src.dist ))
        .pipe(connect.reload());
});

/** Watch */
gulp.task('watch', () => {
    gulp.watch([config.src.pug.path], ['pug']); // Pug Watcher
});

/** Watch */
gulp.task('default', ['connect', 'watch']);