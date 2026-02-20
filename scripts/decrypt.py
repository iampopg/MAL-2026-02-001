#!/usr/bin/env python3
"""
DES Asset Decryption Tool
Key: bgbhrktylgmwwauu
Case: MAL-2026-02-7A3F9B
"""
from Crypto.Cipher import DES
from Crypto.Util.Padding import unpad
import sys

KEY = b"bgbhrktylgmwwauu"[:8]

def decrypt_asset(input_file, output_file):
    with open(input_file, 'rb') as f:
        encrypted_data = f.read()
    
    cipher = DES.new(KEY, DES.MODE_ECB)
    decrypted_data = cipher.decrypt(encrypted_data)
    
    try:
        decrypted_data = unpad(decrypted_data, DES.block_size)
    except:
        pass
    
    with open(output_file, 'wb') as f:
        f.write(decrypted_data)
    
    print(f"[+] Decrypted: {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 decrypt.py <input> <output>")
        sys.exit(1)
    decrypt_asset(sys.argv[1], sys.argv[2])
