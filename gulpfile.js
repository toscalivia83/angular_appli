const gulp = require('gulp')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const notifier = require('node-notifier')
const gulpNotifier = require('gulp-notify')
const eslint = require('gulp-eslint')

const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const minifyCSS = require('gulp-clean-css')

var uglify = require('gulp-uglify')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

var jsfiles = ['app.js', 'component/**/*.js', 'config/**/*.js', 'controller/**/*.js', 'data/**/*.js', 'service/**/*.js', 'filter/**/*.js']
var htmlfiles = ['index.html', 'component/**/*.html', 'view/**/*.html']
var scssfiles = ['global_scss/*.scss', 'component/**/*.scss']

/* ========================================================================================*/
/* ====================================== SASS BUILD ======================================*/
/* ========================================================================================*/
gulp.task('build-scss', function () {
  gulp.src('global_scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', function (err) {
      notifier.notify({ 'title': 'Error', 'message': 'scss build failed' })
      console.error(err)
      this.emit('end')
    })
    .pipe(prefix('last 1 version'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(gulpNotifier({ 'title': 'Success', 'message': 'scss builded' }))
    .pipe(reload({stream: true}))
})

/* ========================================================================================*/
/* ====================================== JS BUILD ======================================*/
/* ========================================================================================*/
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

gulp.task('js-watch', ['scripts', 'build-scss'], browserSync.reload)

gulp.task('serve', ['scripts', 'build-scss'], function () {
  browserSync.init({
    server: './'
  })

  gulp.watch(htmlfiles, ['reload'])
  gulp.watch(jsfiles, ['scripts'])
  gulp.watch(scssfiles, ['build-scss'])
})

gulp.task('lint', function () {
  return gulp.src(jsfiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
})

gulp.task('watch', function () {
  gulp.watch(scssfiles, ['build-scss'])
  gulp.watch(jsfiles, ['scripts'])
})
