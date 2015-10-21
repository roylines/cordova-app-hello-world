var gulp = require('gulp');
var path = require('path');
var phonegapBuild = require('gulp-phonegap-build');

var appId = process.env.PHONEGAP_CORDOVA_HELLO_WORLD_APP_ID;
var email = process.env.PHONEGAP_EMAIL;
var password = process.env.PHONEGAP_PASSWORD;
var artifacts = process.env.CIRCLE_ARTIFACTS || '.';

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
        // ios: path.join(artifacts, 'ios.ipa')
        android: path.join(artifacts, 'android.apk')
      }
    }));
});

