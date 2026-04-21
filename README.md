# Turbo CPS Tester

Desktop CPS tester for macOS built with Electron.

## Features

- 1s, 5s, and 10s click tests
- High-CPS-friendly counting with batched UI updates
- Live burst CPS graph
- Local score history and best scores
- Rank popup with animal tiers

## Run

```bash
npm install
npm start
```

## Build installers

```bash
npm run dist:mac
```

```bash
npm run dist:win
```

## GitHub Actions

The repository includes a workflow at `.github/workflows/build-installers.yml`.

- Run it manually with `workflow_dispatch`, or
- create a tag like `v1.0.1` and push it to trigger macOS and Windows installer builds

The workflow uploads build artifacts for both platforms.
