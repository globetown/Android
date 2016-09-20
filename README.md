# Android

## First error

When installing Android Studio the env variable `$ANDROID_HOME` was not set up.
This caused `react-native run-android` to fail with this error:
```
java.lang.RuntimeException: SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.
```

In my case the Android SDK was installed in `/Users/besartshyti/Library/Android/sdk`.
This means we have to set it manually:
```
export ANDROID_HOME=/Users/besartshyti/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

## Second error
After setting up the ANDROID_HOME env variable. Got another error:
```
failed to find target with hash string 'android-23' in: /Users/besartshyti/Library/Android/sdk
```

By checking inside the sdk:
```
$ ls $ANDROID_HOME/platforms
android-24
```
we can see that only `android-24` is installed. Run Android Studio and in `Configure` select `SDK Manager` and tick the box `Android 6 (Marshmallow)`. Press ok, wait to install it, close and run again `react-native run-android`.


## Third error

In order to run react-native android, the

```
* What went wrong:
Execution failed for task ':app:installDebug'.
> com.android.builder.testing.api.DeviceException: No connected devices!

# it means we need to run an emulator


```

```
android create avd -t "android-23" -n <your-device-name> -b default/x86_64
emulator -avd <your-device-name>
```

- what does emulator do? `emulator -help` and check list of AVDs `emulator -list-avds`.

http://stackoverflow.com/questions/4974568/how-do-i-launch-the-android-emulator-from-the-command-line

## Cannot launch emulator

```
Android > emulator -avd foo
WARNING:./android/base/files/IniFile.cpp:155:Failed to process .ini file /Users/izaaksofer/.android/avd/react.avd/config.ini for reading.
Segmentation fault: 11
```

http://stackoverflow.com/questions/35378889/suddenly-cant-start-the-android-emulator-anymore

This happened to Izaak cause he didn't have memory and so the creation of an AVD failed and was corrupted.

## Release to Google Play

http://blog.tylerbuchea.com/react-native-publishing-an-android-app/

## Setting up release pipeline

Created and downloaded an `account private key`. In the `Download` folder.

## Version error

```
Google Api Error: apkUpgradeVersionConflict: APK specifies a version code that has already been used.
```

Change the version number in `android/app/build.gradle`, which seems enough.
What's the difference with `android/app/src/main/AndroidManifest.xml`?

TODO:

- navigation experimental
- fastlane implement screenshot and asset preparation
- android push notification

## Android push notifications

> The Ads Manager implementation is not generic enough - it's tied with FB infra and pretty specific to Ads Manager itself.

> The reason why this is a significantly harder problem on Android than on iOS is because Android gives you much more flexibility in dealing with push notifications. On iOS, when the server sends a push notification, no application code is invoked in the app, instead a notification is shown based on the payload and the app is invoked if/when the user taps on it.

> On Android, the push notification actually triggers a [BroadcastReceiver](https://developer.android.com/reference/android/content/BroadcastReceiver.html) that is then responsible for reading the payload and deciding what to do with it. It can show a notification based strictly on the payload content or start a [Service](https://developer.android.com/reference/android/app/Service.html) to make a network request to pull more info before showing one. Or, it can decide to ignore the push. Basically, you can run any code on a push.

> This makes it hard because we want to have the business logic of handling a push in JS. This means running JS in a Service without a UI (so no ReactRootView...), ideally with a minimal / different / smaller bundle than the main app, for performance reasons (this is run while the device is awake just to process push notifs, doing any extra work will result in your app using too much battery power).

> In Ads Manager, the business logic is in Java, simply because we know what the payload is, how to create a UI notif from it and what Intent to launch when the user taps on it.

> Furthermore, while iOS is (I think) tied to APNS for push delivery [that seems correct from [firebase website](https://firebase.google.com/docs/cloud-messaging/ios/certs)], on Android there are alternatives, e.g. Amazon Device Messaging. Ideally our APIs would be extensible enough to allow plugging alternative delivery methods.

Form https://github.com/facebook/react-native/issues/3423

### Remote server (Android users Firebase)

Google has moved from [GCM to FCM](https://developers.google.com/cloud-messaging/faq). To implement FCB check the [official guide](https://firebase.google.com/docs/cloud-messaging/).
At the moment there are two libraries: [react-native-push-notification](https://github.com/zo0r/react-native-push-notification) which uses GCM and [react-native-fcm](https://github.com/evollu/react-native-fcm).

Remember to link dependencies `react-native link react-native-fcm` which will produce this [master 4586e11](https://github.com/globetown/Android/commit/4586e1173dfde3023b57594d833104c9627504cc).

## Questions

- What is Gradle? [stackoverflow](http://stackoverflow.com/questions/16754643/what-is-gradle-in-android-studio)


## Reference

- Android Virtual Device (AVD)
- Application Binary Interface (ABI)
- Android Debug Bridge (ADB)
- Android Application Package (APK)

## Shortcuts

- open menu `cmd+d #ios` and `cmd+m #android`
