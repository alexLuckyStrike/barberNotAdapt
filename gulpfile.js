const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const server = require('browser-sync').create();
const prefixer = require('gulp-autoprefixer');
const {series} = require('gulp');
const rename = require('gulp-rename');

function Sass(){
    return gulp.src(['scss/style.scss'],{base:'scss'})
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(rename("style.css"))
        .pipe(gulp.dest('css'))
        .pipe(server.stream())
}

function Server(){
    server.init({server:"./",browser:'chrome'});
    gulp.watch('scss/style.scss',gulp.series(Sass))
}


exports.build = series(Sass);
exports.start = series(Sass,Server);



