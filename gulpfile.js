var gulp = require('gulp');
var path = require('path');
var phonegapBuild = require('gulp-phonegap-build');

var appId = process.env.PHONEGAP_CORDOVA_HELLO_WORLD_APP_ID;
var email = process.env.PHONEGAP_EMAIL;
var password = process.env.PHONEGAP_PASSWORD;
var iosKeyPassword = process.env.PHONEGAP_IOS_KEY_PASSWORD;
var artifacts = process.env.CIRCLE_ARTIFACTS || '.';

gulp.task('build', function() {
  gulp.src(['./www/**/*', 'config.xml'])
    .pipe(phonegapBuild({
      appId: appId,
      user: {
        email: email,
        password: password
      },
      keys: {
        ios: {
          password: iosKeyPassword
        }
      },
      platforms: [
        'ios',
        'android'
      ],
      download: {
        ios: path.join(artifacts, 'ios.ipa'),
        android: path.join(artifacts, 'android.apk')
      }
    }));
});

gulp.task('test', function() {
  console.log('testing goes here');
});
