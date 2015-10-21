var gulp = require('gulp');
var phonegapBuild = require('gulp-phonegap-build');

var appId = process.env.PHONEGAP_CORDOVA_HELLO_WORLD_APP_ID;
var email = process.env.PHONEGAP_EMAIL;
var password = process.env.PHONEGAP_PASSWORD;

gulp.task('deploy', function() {
  gulp.src(['./www/**/*', 'config.xml'])
    .pipe(phonegapBuild({
      appId: appId,
      user: {
        email: email,
        password: password
      },
      platforms: [
        // 'ios',
        'android'
      ],
      download: {
        // ios: './build/ios.ipa',
        android: './android.apk'
      }
    }));
});

