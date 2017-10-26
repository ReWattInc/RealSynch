'use strict';
const RequireDir = require('require-dir');


global.inProduction = process.env.NODE_ENV === 'production';

RequireDir('./gulp');

// var gulp = require('gulp'); 
// var mocha = require('gulp-mocha');

// gulp.task('default', function () {
//     return gulp.src('test.js')
//         .pipe(mocha())
//         .once('error', function () {
//             process.exit(1);
//         })
//         .once('end', function () {
//             process.exit();
//         });
// });
