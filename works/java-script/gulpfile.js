// 'use strict';

var gulp = require('gulp'),
  del = require('del'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  cleanCSS = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  cache = require('gulp-cache'),
  uglify = require('gulp-uglify'),
  rigger = require('gulp-rigger'),
  wait = require('gulp-wait'),
  pug = require('gulp-pug'),
  exec = require('child_process').exec,
  concat = require('gulp-concat');

var path = {

  src: { //get files from 
    html: 'src/*.html',
    pug: 'src/pug/*.pug',
    sass: 'src/sass/main.scss',
    img: [
      'src/img/**/*.*',
      '!src/img/icon/*.*'
    ],
    fonts: 'src/fonts/*.*',
    js: 'src/js/main.js'
  },

  build: { //put files to
    html: 'build/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/',
    js: 'build/js/'
  },

  watch: {
    html: [
      'src/*.html',
      'src/template/*.html'
    ],
    pug: 'src/pug/*.pug',
    sass: 'src/sass/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/*.*',
    js: 'src/js/**/*.js'
  }
};

var config = {
  server: {
    baseDir: "build"
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "Frontend_Devil",
  // notify: false // Отключаем уведомления
};

gulp.task('html', function() {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('pug', function() {
  var config = require('./src/node/bundle.json');
  gulp.src(path.src.pug)
    // .pipe(data( function(file) {
    //  return JSON.parse(
    //    fs.readFileSync('./src/jade/data/the-big-data.json')
    //  );
    // } ))
    .pipe(pug({
      pretty: true,
      locals: config
    }))
    .pipe(gulp.dest(path.build.html));
});

gulp.task('sass', function() {
  gulp.src(path.src.sass)
    .pipe(wait())
    .pipe(sass(
      // {
      //  outputStyle: 'nested'
      // }
    ))
    .pipe(cleanCSS({
      format: 'beautify',
      level: '2'
    }))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('img', function() {
  gulp.src(path.src.img)
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    })))
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function() {
  gulp.src(path.src.js)
    .pipe(rigger())
    // .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('webserver', function() {
  browserSync(config);
});

gulp.task('watch', function() {
  gulp.watch(path.watch.html, ['html']);
  gulp.watch(path.watch.sass, ['sass']);
  gulp.watch(path.watch.img, ['img']);
  gulp.watch(path.watch.fonts, ['fonts']);
  gulp.watch(path.watch.js, ['js']);
});

gulp.task('clean', function() {
  del.sync('build');
});

gulp.task('clear', function() {
  cache.clearAll();
});

gulp.task('build', [
  'html',
  'sass',
  'img',
  // 'fonts',
  'js'
]);

gulp.task('default', [
  'build',
  'watch',
  'webserver'
]);