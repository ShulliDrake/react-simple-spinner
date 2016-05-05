var gulp = require('gulp');

var eslint = require('gulp-eslint');
var glob = require('glob');
var gutil = require('gulp-util');
var babelify = require('babelify');
var browserify = require('browserify');
var rename = require('gulp-rename');
var watchify = require('watchify');

var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

//start watchify task
var getWatchifyStream = function(entry) {
  gutil.log('watching', entry);
  return watchify(browserify({
    entries: [entry],
    extensions: ['.jsx'],
    debug: true,
    //watchify options
    cache: {},
    packageCache: {}
  })).transform(babelify, {presets: ['es2015', 'react']});
}

gulp.task('bundle:watch', function() {
  var entry = 'js/app.js';
  var watcher = getWatchifyStream(entry);
  function bundle() {
    return watcher
      .bundle()
      .pipe(source(entry))
      .pipe(buffer())
      .pipe(rename({
        basename: 'bundle',
        dirname: 'js',
        extname: '.js'
      }))
      .pipe(gulp.dest('./build'));
  }

  watcher.on('update', bundle);
  watcher.on('log', gutil.log);

  return bundle();
});

gulp.task('bundle', function(done) {
  return browserify({
    entries: 'js/app.js',
    extensions: ['.jsx'],
    debug: true,
  })
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('eslint', function () {
  return gulp.src([
    'js/**/*.js',
    'js/**/*.jsx',
    '!node_modeuls/**'
  ])
    .pipe(eslint())
    .pipe(eslint.format());
});
