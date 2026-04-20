# Muse App

Astro frontend for the Muse site.

## Local Preview

From the repository root:

```powershell
cd app
npm install
npm run dev
```

Open:

```text
http://localhost:4321/
```

## If `node` or `npm` Is Not In PATH

On this machine, Node is available through Visual Studio. Use this PowerShell setup before running npm commands:

```powershell
$env:Path='C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs;' + $env:Path
cd C:\Users\PC\Documents\repos\muse\app
& 'C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\npm.cmd' install
& 'C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\npm.cmd' run dev -- --host 127.0.0.1 --port 4321
```

Open:

```text
http://localhost:4321/
```

## Build

```powershell
cd app
npm run build
```

The static output is generated in:

```text
app/dist/
```

## Stop Local Server

If the Astro dev server is running in a terminal, press:

```text
Ctrl+C
```

If it was started in the background, stop the Node process listening on port `4321`:

```powershell
netstat -ano | Select-String ':4321'
Stop-Process -Id <PID> -Force
```

## Project Structure

```text
app/
  src/
    components/
    layouts/
    pages/
    styles/
  public/
    assets/
    script.js
  astro.config.mjs
  package.json
  nginx.conf
```

