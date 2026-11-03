# Taeglicher Lauf des Session-Boards (Aufgabenplanung "jele.at Session-Board").
# Holt den aktuellen Stand, laesst Claude Code nach prompt.md arbeiten und schreibt ein Log.
# Continue statt Stop: git und claude schreiben Fortschritt auf stderr, das ist kein Fehler.
$ErrorActionPreference = 'Continue'
$repo = Resolve-Path (Join-Path $PSScriptRoot '..\..')
$logDir = Join-Path $env:LOCALAPPDATA 'jele-board'
New-Item -ItemType Directory -Force $logDir | Out-Null
$log = Join-Path $logDir ("{0:yyyy-MM-dd}.log" -f (Get-Date))
function Log($text) { $text | Out-File $log -Append -Encoding utf8 }

# Gleiches Claude-Profil wie die Sessions in agent-deck (Login, Einstellungen)
$env:CLAUDE_CONFIG_DIR = 'C:\Users\jelec\AppData\Roaming\agent-deck\profiles\94f381d9-2372-4e71-8d56-3fd0b912b7b5'

Set-Location $repo
Log "=== $(Get-Date -Format s) Start"

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne 'main') { Log "Nicht auf main ($branch), Lauf uebersprungen"; exit 0 }

# Liegt schon eine uncommittete Aenderung am Board (z. B. aus einer offenen Session), nichts anfassen
if (git status --porcelain -- src/data/now.ts) { Log 'now.ts hat offene Aenderungen, Lauf uebersprungen'; exit 0 }

cmd /c "git pull --ff-only origin main >> `"$log`" 2>&1"
if ($LASTEXITCODE -ne 0) { Log "git pull fehlgeschlagen (Exit $LASTEXITCODE), Abbruch"; exit 1 }

$prompt = Get-Content (Join-Path $PSScriptRoot 'prompt.md') -Raw -Encoding utf8
# Schreibrechte nur fuer das Board; git -C dient zum Lesen der Projekt-Repos (Regel in prompt.md)
$tools = @(
  'Read', 'Edit(src/data/now.ts)',
  'Bash(git log:*)', 'Bash(git -C:*)', 'Bash(git status:*)', 'Bash(git diff:*)',
  'Bash(git add src/data/now.ts)', 'Bash(git commit -m:*)', 'Bash(git push origin main)',
  'Bash(git pull --rebase origin main)', 'Bash(git checkout -- src/data/now.ts)',
  'Bash(gh release list:*)', 'Bash(npm run build)'
) -join ','
$prompt | claude -p --model sonnet --allowedTools $tools 2>&1 | Out-File $log -Append -Encoding utf8
Log "=== $(Get-Date -Format s) Ende (Exit $LASTEXITCODE)"
