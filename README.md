# MAL-2026-02-001

## Indeed Interview Android Malware Analysis

⚠️ **CRITICAL WARNING:** This repository contains analysis of dangerous Android banking trojan malware. The actual malware sample is **NOT** included in this repository for safety and legal compliance.

---

## 📄 **[READ THE FULL TECHNICAL REPORT HERE →](PUBLIC_MALWARE_REPORT.md)**

**Complete malware analysis including:**
- Static & dynamic analysis
- Decompiled code examination  
- Native library reverse engineering
- Domain infrastructure & SSL certificates
- Threat actor capability assessment
- IOCs, YARA rules, removal procedures

---

## 🔍 Executive Summary

**Malware Name:** Indeed Interview (Fake Job Application)  
**Threat Type:** Android Banking Trojan  
**Distribution:** smart-interview.org (TAKEN DOWN - February 17, 2026)  
**Package Name:** `com.nawonisosu.keyboard`  
**Case ID:** MAL-2026-02-001  

**Status:** ✅ Domain successfully taken down by NameSilo registrar

---

## 📊 Malware Information

| Property | Value |
|----------|-------|
| **SHA256** | `3728c15264d7cf07f037201631a26e01e3c89be3046e04d2dcaedb6f7431e78c` |
| **MD5** | `a5e8ccfac21857b51903081aaf4cac94` (classes.dex) |
| **Package** | `com.nawonisosu.keyboard` |
| **App Name** | Indeed Interview |
| **Target Platform** | Android 5.0+ (API 21+) |
| **Distribution Domain** | smart-interview.org (SUSPENDED) |
| **First Seen** | June 13, 2025 |
| **Takedown Date** | February 17, 2026 |

---

## 🎯 Capabilities

- ✅ Full device control via Accessibility Service
- ✅ SMS interception (2FA/OTP theft)
- ✅ Screen overlay attacks (credential theft)
- ✅ Keylogging capabilities
- ✅ Camera and microphone access
- ✅ Contact and call log exfiltration
- ✅ Remote app installation
- ✅ Banking trojan functionality
- ✅ Encrypted payload delivery (DES encryption)
- ✅ Native code hooking (x86 architecture)

---

## 📁 Repository Contents

```
MAL-2026-02-001/
├── README.md                          # This file
├── PUBLIC_MALWARE_REPORT.md           # Full technical analysis
├── indeed_interview.yar               # YARA detection rule
├── images/                            # Analysis screenshots
│   ├── accessibility_prompt.jpg
│   ├── install_unknown_apps.jpg
│   ├── permission_request.jpg
│   ├── permissions_manager.jpg
│   └── reddit_post.jpg
└── scripts/                           # Analysis tools
    ├── decrypt.py                     # DES decryption script
    └── frida_hook.js                  # Frida hooking script
```

---

## 🔗 Malware Sample Access

**For security researchers and incident responders:**

The malware sample is **NOT** hosted in this repository. Access it through:

- **MalwareBazaar:** [Download Sample](https://bazaar.abuse.ch/sample/3728c15264d7cf07f037201631a26e01e3c89be3046e04d2dcaedb6f7431e78c/)
- **VirusTotal:** [View Analysis](https://www.virustotal.com/gui/file/3728c15264d7cf07f037201631a26e01e3c89be3046e04d2dcaedb6f7431e78c)
- **SHA256 Hash:** `3728c15264d7cf07f037201631a26e01e3c89be3046e04d2dcaedb6f7431e78c`

⚠️ **Handle with extreme caution in isolated environments only**

---

## 🛡️ Detection

### YARA Rule

Use the included `indeed_interview.yar` rule to scan for this malware:

```bash
yara indeed_interview.yar /path/to/scan/
```

### Indicators of Compromise (IOCs)

**Network:**
- Domain: `smart-interview.org` (TAKEN DOWN)
- Nameservers: `alexa.ns.cloudflare.com`, `reese.ns.cloudflare.com`

**File Hashes:**
- APK SHA256: `3728c15264d7cf07f037201631a26e01e3c89be3046e04d2dcaedb6f7431e78c`
- classes.dex MD5: `a5e8ccfac21857b51903081aaf4cac94`
- classes2.dex MD5: `f50531ede4c1d709e7ec322e50127bbe`

**Identifiers:**
- Package: `com.nawonisosu.keyboard`
- Service: "Update Service"
- Encryption Key: `bgbhrktylgmwwauu`

---

## 🚨 For Victims

If you installed "Indeed Interview" from smart-interview.org:

1. **Immediately disconnect from internet**
2. **Boot into Safe Mode**
3. **Revoke Accessibility permissions**
4. **Perform factory reset** (recommended)
5. **Change ALL passwords** after reset
6. **Monitor bank accounts** for unauthorized transactions
7. **Contact your bank** if financial data was accessed

**Detailed removal instructions:** See `PUBLIC_MALWARE_REPORT.md` Section 7.3

---

## 📖 Full Analysis

Read the complete technical analysis in [`PUBLIC_MALWARE_REPORT.md`](PUBLIC_MALWARE_REPORT.md)

**Report includes:**
- Detailed static and dynamic analysis
- Decompiled code examination
- Native library reverse engineering
- Domain infrastructure analysis
- SSL certificate timeline
- Threat actor capability assessment
- Complete IOC list
- Removal procedures

---

## 🔧 Analysis Tools

### Decryption Script

Decrypt malware assets encrypted with DES:

```bash
python3 scripts/decrypt.py <encrypted_file> <output_file>
```

### Frida Hook Script

Monitor malware behavior in real-time:

```bash
frida -U -f com.nawonisosu.keyboard -l scripts/frida_hook.js
```

---

## 📞 Contact & Attribution

**Analysts:**
- GitHub: [@iampopg](https://github.com/iampopg)
- GitHub: [@feranmi_idowu](https://github.com/feranmiidowu)

**Case ID:** MAL-2026-02-7A3F9B

**For Law Enforcement:**  
Additional technical artifacts, memory dumps, and IOCs available upon request.

**For Threat Intelligence Sharing:**  
STIX/TAXII feeds available. Contact via GitHub.

---

## ⚖️ Legal & Ethical Notice

This repository is provided for:
- ✅ Educational purposes
- ✅ Defensive security research
- ✅ Incident response
- ✅ Threat intelligence

**Prohibited uses:**
- ❌ Malware distribution
- ❌ Unauthorized system access
- ❌ Malicious activities

The actual malware sample is intentionally excluded from this repository to prevent misuse and comply with GitHub's Terms of Service.

---

## 📜 License

This analysis and associated tools are released for public use. Attribution appreciated.

**Report Classification:** PUBLIC  
**Distribution:** Unrestricted - Please share widely  
**Last Updated:** February 20, 2026  
**Version:** 2.0

---

## 🔗 References

- [Android Security Documentation](https://source.android.com/security)
- [OWASP Mobile Security Testing Guide](https://owasp.org/www-project-mobile-security-testing-guide/)
- [Frida Documentation](https://frida.re/docs/)

---

**⚠️ Stay Safe:** Never download APKs from untrusted sources. Always verify app authenticity through official app stores.
