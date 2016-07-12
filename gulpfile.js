const gulp = require('gulp')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const notifier     = require('node-notifier')
const gulpNotifier = require('gulp-notify')
const eslint = require('gulp-eslint')
var uglify = require('gulp-uglify')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

var jsfiles = ['app.js', 'component/**/*.js', 'config/**/*.js', 'controller/**/*.js', 'data/**/*.js', 'service/**/*.js', 'comment/**/*.js', 'button/**/*.js', 'adresseIPSopra/**/*.js', 'numPosteDA/**/*.js', 'user/**/*.js']
var htmlfiles = ['index.html', 'component/**/*.html']

gulp.task('scripts', function () {
  return gulp.src(jsfiles)
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
    .on('error', function (err) {
      notifier.notify({ 'title': 'Error', 'message': 'js build failed' })
      console.error(err)
      this.emit('end')
    })
    .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'))
    .pipe(gulpNotifier({ 'title': 'Success', 'message': 'js builded' }))
    .pipe(reload({stream: true}))
})

gulp.task('reload', function () {
  return reload({stream: false})
})

gulp.task('prod', function () {
  return gulp.src(jsfiles)
    .pipe(sourcemaps.init())
    .pipe(concat('all.min.js'))
    .on('error', function (err) {
      notifier.notify({ 'title': 'Error', 'message': 'min.js build failed' })
      console.error(err)
      this.emit('end')
    })
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'))
    .pipe(gulpNotifier({ 'title': 'Success', 'message': 'js.min builded' }))
})

gulp.task('js-watch', ['scripts'], browserSync.reload)

gulp.task('serve', ['scripts'], function () {
  browserSync.init({
    server: './'
  })

  gulp.watch(htmlfiles, ['reload'])
  gulp.watch(jsfiles, ['scripts'])
})

gulp.task('lint', function () {
  return gulp.src(jsfiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})

gulp.task('watch', function () {
  gulp.watch(jsfiles, ['scripts'])
})
