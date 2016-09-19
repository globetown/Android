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
android create avd -t "android-23" -n bes -b default/x86_64
emulator -avd bes
```
http://stackoverflow.com/questions/4974568/how-do-i-launch-the-android-emulator-from-the-command-line

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

## Reference

- Android Virtual Device (AVD)
- Application Binary Interface (ABI)
- Android Debug Bridge (ADB)
- Android Application Package (APK)
