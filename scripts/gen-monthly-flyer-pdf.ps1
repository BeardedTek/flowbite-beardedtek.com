# Regenerate static/pdf/monthly-contracts-flyer.pdf from the Hugo flyer page.
# Uses Chrome headless with --no-pdf-header-footer so the PDF has no date/title/URL margins.
param(
  [switch]$SkipHugo
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

node (Join-Path $root "scripts\gen-flyer-qr.js")
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$htmlPath = Join-Path $root ".build\monthly-contracts\flyer\index.html"

if (-not $SkipHugo) {
  hugo --gc --minify -d .build | Out-Host
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

if (-not (Test-Path $htmlPath)) {
  Write-Error "Missing $htmlPath - run Hugo build first or omit -SkipHugo."
}

$chrome = @(
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $chrome) {
  Write-Error "Google Chrome not found. Install Chrome or set `$chrome to your Chromium path."
}

$outPdf = Join-Path $root "static\pdf\monthly-contracts-flyer.pdf"
$uri = "file:///" + ($htmlPath -replace "\\", "/")

& $chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$outPdf" $uri
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Wrote $outPdf"
