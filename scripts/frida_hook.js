/*
 * Frida Hook Script for Indeed Interview Malware
 * Case: MAL-2026-02-7A3F9B
 */
Java.perform(function() {
    console.log("[*] Hooking Indeed Interview malware...");
    
    // Hook URL connections
    var URL = Java.use("java.net.URL");
    URL.$init.overload('java.lang.String').implementation = function(url) {
        console.log("[URL] " + url);
        return this.$init(url);
    };
    
    // Hook Socket connections
    var Socket = Java.use("java.net.Socket");
    Socket.$init.overload('java.lang.String', 'int').implementation = function(host, port) {
        console.log("[SOCKET] " + host + ":" + port);
        return this.$init(host, port);
    };
    
    // Hook encryption
    var SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
    SecretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function(key, alg) {
        console.log("[KEY] " + alg + ": " + bytesToHex(key));
        return this.$init(key, alg);
    };
    
    function bytesToHex(bytes) {
        var hex = "";
        for (var i = 0; i < bytes.length; i++) {
            hex += ("0" + (bytes[i] & 0xFF).toString(16)).slice(-2);
        }
        return hex;
    }
    
    console.log("[*] Hooks installed successfully");
});
