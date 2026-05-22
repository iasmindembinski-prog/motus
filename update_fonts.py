import os
import glob

files = glob.glob(r'c:\Users\joaoz\Desktop\motus-project\src\components\**\*.tsx', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'font-sans' in content:
        content = content.replace('font-sans', 'font-serif')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
