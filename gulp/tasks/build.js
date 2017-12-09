var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    })
});

gulp.task('deleteDistFolder', function(){
    return del("./docs");
});


gulp.task('optimizeImages',['deleteDistFolder', 'styles', 'scripts'], function() {
    return gulp.src(["./app/assets/images/**/*"])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder'], function(){
    return gulp.src(["./app/index.html", "./app/CNAME", "./app/googlef608da580e59c8b6.html"])
    .pipe(usemin({
        css: [function(){return rev()}, function(){return cssnano()}],
        js: [function(){return rev()}, function(){return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);