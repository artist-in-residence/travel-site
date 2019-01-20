var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    },
    notify: false

  });

  watch('./app/index.html', function(){
      browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
      browserSync.reload();
      
      gulp.start('styles');
  });

});
