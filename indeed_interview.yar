rule Android_IndeedInterview_Trojan
{
    meta:
        description = "Detects Indeed Interview Android Trojan from smart-interview.org"
        author = "@iampopg, @feranmi_idowu"
        date = "2024-02-20"
        threat_level = "critical"
        case_id = "MAL-2026-02-7A3F9B"
        malware_family = "Android Banking Trojan"
        reference = "https://github.com/iampopg/MAL-2026-02-001"
      
    strings:
        $pkg = "com.nawonisosu.keyboard"
        $key1 = "bgbhrktylgmwwauu"
        $key2 = "DPT_CHUNK_KEY_V1"
        $pattern = /[a-z]19ynhckzn[0-9a-f]{20,}/
        $native = "ceuyym6ap424x9ape.ts"
        $method1 = "attachBaseContext"
        $method2 = "encryptOrDecrypt"
        $service = "Update Service"
        $dir1 = "fbojkilpwr0v05wtoc88yt"
        $dir2 = "xstsodq1zyt8i4b6cg17hnkugnj"
      
    condition:
        $pkg or 
        ($key1 and $key2) or 
        (2 of ($method*)) or 
        $native or 
        $service or
        (2 of ($dir*))
}
