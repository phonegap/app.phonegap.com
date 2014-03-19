var gulp = require('gulp')
  , path = require('path')
  , http = require('http')
  , connect = require('connect')
  , livereload = require('gulp-livereload')

gulp.task('watch', function() {
    var server = livereload()
    gulp.watch(['index.html', 'css/**.*']).on('change', function(file) {
        server.changed(file.path)
    })
})

gulp.task('serve', function() {
    var port = 3000
      , hostname = null
      , base = path.resolve('.')
      , directory = path.resolve('.')
      , app = connect()
    app.use(connect.static(base)).use(connect.directory(directory))
    http.createServer(app).listen(port, hostname)
})

gulp.task('default', function() {
    gulp.run('serve', 'watch')
})
