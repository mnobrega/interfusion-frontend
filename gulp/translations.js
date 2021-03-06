'use strict';

var gulp = require('gulp');
var gettext = require('gulp-angular-gettext');

var paths = gulp.paths;

gulp.task('pot', function () {
    return gulp.src([ paths.src + '/{app,components}/**/*.html'])
        .pipe(gettext.extract('template.pot', {
            // options to pass to angular-gettext-tools...
        }))
        .pipe(gulp.dest('assets/i18n/'));
});

gulp.task('translations', function () {
    return gulp.src(paths.src+'/assets/i18n/*.po')
        .pipe(gettext.compile({
            // options to pass to angular-gettext-tools...
            format: 'json'
        }))
        .pipe(gulp.dest(paths.tmp+'/serve/assets/i18n/'));
});