 Get-CimInstance Win32_Process -Filter "name = 'node.exe'" | Select-Object ProcessId, CommandLine

 20640 "C:\Program Files\Adobe\Adobe Creative Cloud Experience\libs\node.exe" "C:\Program Files\Adobe\Adobe Creative Cloud Experience\js\main.js"
 13692 "C:\Program Files\nodejs\node.exe" .\app.js