class AndroidInfo {
    static deviceName() {
        return 'emulator-5554'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '11.0'; // pass the platform version
    }

    static appName() {
        return 'app-debug.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;
