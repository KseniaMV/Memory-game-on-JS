const
  gulp          = require('gulp'),
  browserSync   = require("browser-sync").create(),
  imagemin      = require('gulp-imagemin'),
  autoprefixer  = require('gulp-autoprefixer'),
  cssnano       = require("cssnano"),
  uglify        = require("gulp-uglify"),
  babel         = require("gulp-babel"),
  htmlmin       = require("gulp-htmlmin");


const paths = {
  styles: {
    src: "src/css/main.css",
    dest: "dist/src/css"
  },
  js:{
      src: "src/js/*.js",
      dest: "dist/src/js"
  },
  html: {
    src: "./*.html"
  }
};


function style(){
  return(
    gulp
    .src(paths.styles.src)
    .pipe(autoprefixer(['last 2 versions'], {cascade: true}), cssnano())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())
  );

};



function javaScriptBuild(){
    return(
    gulp
    .src(paths.js.src)
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest)) 
    )
    
  };

function watch(){
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000,
    notify: false
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src).on("change", reload);
  gulp.watch('js/*.js', browserSync.reload);
};

function htmlBuild(){
    return(
    gulp
    .src("index.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("dist"))
   )
}

function reload() {
  browserSync.reload();
};

function image() {
    return gulp
      .src("src/images/**/*.png")
      .pipe(
        imagemin()
      )
      .pipe(gulp.dest("dist/src/images"));
  }



const watchFiles = gulp.parallel(image, watch, javaScriptBuild, htmlBuild);


exports.watchFiles = watchFiles;
exports.style = style;
exports.image = image;
exports.watch = watch;
exports.javaScriptBuild = javaScriptBuild;
exports.htmlBuild = htmlBuild;
