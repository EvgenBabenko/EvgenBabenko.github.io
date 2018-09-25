// 'use strict';
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');
// const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');
const wait = require('gulp-wait');

const path = {
  // put files to
  build: {
    html: 'build/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/',
    js: 'build/js/'
  },

  // get files from
  src: {
    html: 'src/*.html',
    sass: 'src/style/main.+(scss|sass)',
    img: ['src/img/**/*.*', '!src/img/icon/*.*'],
    fonts: 'src/fonts/*.*',
    js: 'src/js/*.js'
  },

  watch: {
    html: ['src/*.html', 'src/template/*.html'],
    sass: 'src/style/**/*.+(scss|sass)',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/*.*',
    js: 'src/js/**/*.js'
  }
};

const config = {
  server: {
    baseDir: 'build/'
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: 'Frontend_Devil'
  // notify: false // Отключаем уведомления
};

gulp.task('html', () => {
  gulp
    .src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', () => {
  gulp
    .src(path.src.sass)
    .pipe(wait())
    .pipe(
      sass({
        // outputStyle: 'nested'
      })
    )
    .pipe(
      cleanCSS({
        format: 'beautify',
        level: '2'
      })
    )
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('img', () => {
  gulp
    .src(path.src.img)
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant()]
        })
      )
    )
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', () => {
  gulp
    .src(path.src.js)
    // .pipe(rigger())
    // .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('webserver', () => {
  browserSync(config);
});

gulp.task('watch', () => {
  gulp.watch(path.watch.html, ['html']);
  gulp.watch(path.watch.sass, ['sass']);
  gulp.watch(path.watch.img, ['img']);
  gulp.watch(path.watch.fonts, ['fonts']);
  gulp.watch(path.watch.js, ['js']);
});

gulp.task('clean', () => {
  del.sync('build');
});

gulp.task('clear', () => {
  cache.clearAll();
});

gulp.task('build', [
  'html',
  'sass',
  'img',
  // 'fonts',
  'js'
]);

gulp.task('default', ['build', 'watch', 'webserver']);
