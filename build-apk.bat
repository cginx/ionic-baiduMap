@echo off

DEL .\app.apk

DEL .\complete.apk

call ionic cordova build android --release

xcopy  /a /Y .\platforms\android\app\build\outputs\apk\release\"*.apk" .\"app.apk"

::��һ����Ҫ����ǩ��
::keytool -genkey -v -keystore cginx.keystore -alias cginx.keystore -keyalg RSA -validity 20000

jarsigner -verbose -keystore cginx.keystore -signedjar complete.apk app.apk cginx.keystore